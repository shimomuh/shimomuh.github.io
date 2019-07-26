# frozen_string_literal: true

require_relative 'string_parser'
require_relative '../support_domain/syntax_highlight'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 汎用ドメイン：中身が別のサービスや機能に差し変わっても問題ないドメインで
  #
  module GeneralDomain
    # 文字列配列をパースするツール
    #
    class StringArrayParser
      class ParserError < StandardError; end

      attr_reader :values, :option

      def initialize(values)
        @values = values
        @option = {}
      end

      def self.parse(values)
        new(values).parse
        values
      end

      def parse
        values.each do |value|
          parser = ::SubDomain::GeneralDomain::StringParser.new(value)
          @return_code = false
          parser.escape unless @code_block
          flag_table_tag(value)
          replace_code_block_tag_with_ignore_tag(value)
          replace_ul_or_li_tag(value)
          flag_br_tag
          next if @return_code

          parser.parse(value, option)
          ::SubDomain::SupportDomain::SyntaxHighlight.insert_tag(value) if @code_block
          check_h_tag(value)
          insert_code_number_tag(value)
          replace_li_tag(value)
          replace_table_tag(value)
          parser.unescape unless @code_block
        end
        add_last_tag
      end

      private

      def flag_table_tag(value)
        if @table
          if value =~ /^\|---\|/
            @draw_table_body = true
            value.gsub!(/^.*$/, '')
            @return_code = true # 一旦センタリングなどは考慮しない
          elsif value !~ /^\|([^\|])+\|/
            raise ParserError unless @draw_table_body

            @end_table = true
            @table = false
            @draw_table_header = false
            @draw_table_body = false
          end
        else
          return if value !~ /^\|([^\|])+\|/

          @end_table = false
          @table = true
          @draw_table_header = true
        end
      end

      def replace_code_block_tag_with_ignore_tag(value)
        return if value !~ /^```/

        if option[:code_block]
          option[:code_block] = false
          value.gsub!(/^```.*/, '</code></p>')
          @code_block = false
          @return_code = true
          @ignore_below_br = true
        else
          option[:code_block] = true
          value.gsub!(/^```(.*)$/, '<p className="code \1"><code>')
          @code_block = true
          @return_code = true
        end
      end

      def replace_ul_or_li_tag(value)
        if @during_ul
          if value =~ /^\* /
            value.gsub!(/^\* /, '')
            @first_li = false
          elsif value.size.zero?
            @during_ul = false
            @first_li = false
            @end_ul = true
            @return = true
          end
          return
        end

        if value =~ /^\* /
          @during_ul = true
          @first_li = true
          value.gsub!(/^\* /, '')
        else
          @during_ul = false
          @first_li = false
        end
      end

      def flag_br_tag
        if @ignore_below_br && !@return_code # rubocop:disable Style/GuardClause
          @return_code = true
          @ignore_below_br = false
        end
      end

      def check_h_tag(value)
        return if value !~ /^<h.*/

        @ignore_below_br = true
      end

      def insert_code_number_tag(value)
        return unless @code_block

        value.gsub!(/^(.*)$/, '<span className="code__with-order">\1</span><br />')
      end

      def replace_li_tag(value)
        if @during_ul
          if @first_li
            value.gsub!(/^(.*)$/, '<ul><li>\1</li>')
          else
            value.gsub!(/^(.*)$/, '<li>\1</li>')
          end
        end

        return unless @end_ul

        @end_ul = false
        value.gsub!(/^(.*)$/, '</ul>')
      end

      def replace_table_tag(value)
        return if !@table && !@end_table

        if @draw_table_header && !@draw_table_body
          value.gsub!(/^\|(.*)$/, '<table><tr><th>\1').gsub!(/^(.*)\|$/, '\1</th></tr>').gsub!(/\|/, '</th><th>')
        elsif @draw_table_header && @draw_table_body
          value.gsub!(/^\|(.*)$/, '<tr><td>\1').gsub!(/^(.*)\|$/, '\1</td></tr>').gsub!(/\|/, '</td><td>')
        elsif @end_table
          value.gsub!(/^.*$/, '</table>')
          @end_table = false
        end
      end

      def add_last_tag
        if @during_ul
          @during_ul = false
          values[values.size - 1].gsub!(/^(.*)$/, '\1</ul>')
        end
        if @table && !@end_table # rubocop:disable Style/GuardClause
          raise ParserError if !@draw_table_header || !@draw_table_body

          @table = false
          values[values.size - 1].gsub!(/^(.*)$/, '\1</table>')
        end
      end
    end
  end
end
