require_relative 'string_parser'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 汎用ドメイン：中身が別のサービスや機能に差し変わっても問題ないドメインで
  #
  module GeneralDomain
    # 文字列配列をパースするツール
    #
    class StringArrayParser
      attr_reader :values, :option

      def initialize(values)
        @values = values
        @option = {}
        parse
      end

      def self.parse(values)
        new(values)
      end

      def parse
        values.each do |value|
          @return_code = false
          flag_table_tag(value)
          replace_code_block_tag_with_ignore_tag(value)
          replace_ul_or_li_tag(value)
          replace_br_tag(value)
          next if @return_code
          ::SubDomain::GeneralDomain::StringParser.parse(value, option)
          check_h_tag(value)
          insert_code_number_tag(value)
          replace_li_tag(value)
          replace_table_tag(value)
        end
        add_last_tag
      end

      def flag_table_tag(value)
        if @table
          if value =~ /^\|---\|/
            @draw_table_body = true
            value.gsub!(/^.*$/, '')
            @return_code = true # 一旦センタリングなどは考慮しない
          elsif value !~ /^\|([^\|])+\|/
            @end_table = true
            @table = false
            @draw_table_header = false
            @draw_table_body = false
            return
          end
        else
          if value =~ /^\|([^\|])+\|/
            @end_table = false
            @table = true
            @draw_table_header = true
          end
        end
      end

      def replace_code_block_tag_with_ignore_tag(value)
        if value =~ /^```/
          if option[:ignore_tag]
            option[:ignore_tag] = false
            value.gsub!(/^```.*/, "</code></p>")
            @code_block = false
            @return_code = true
            @ignore_below_br = true
          else
            option[:ignore_tag] = true
            value.gsub!(/^```.*/, '<p className="code"><code>')
            @code_block = true
            @return_code = true
          end
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
        else
          if value =~ /^\* /
            @during_ul = true
            @first_li = true
            value.gsub!(/^\* /, '')
          else
            @during_ul = false
            @first_li = false
          end
        end
      end

      def replace_br_tag(value)
        if @ignore_below_br && !@return_code
          @return_code = true
          @ignore_below_br = false
        end
      end

      def check_h_tag(value)
        if value =~ /^<h.*/
          @ignore_below_br = true
        end
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

        if @end_ul
          @end_ul = false
          value.gsub!(/^(.*)$/, '</ul>')
        end
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
        if @table && !@end_table
          @table = false
          values[values.size - 1].gsub!(/^(.*)$/, '\1</table>')
        end
      end
    end
  end
end
