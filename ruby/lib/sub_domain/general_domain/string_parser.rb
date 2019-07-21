# frozen_string_literal: true

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 汎用ドメイン：中身が別のサービスや機能に差し変わっても問題ないドメインで
  #
  module GeneralDomain
    # 文字列をパースするツール
    #
    class StringParser
      ESCAPE_TABLE = {
        '&' => '&amp;',
        '<' => '&lt;',
        '>' => '&gt;',
        '"' => '&quot;',
        "'" => '&#39;',
        '{' => '&#123;',
        '}' => '&#125;',
        ' ' => '&nbsp;'
      }.freeze

      # see: http://guppy.eng.kagawa-u.ac.jp/~kagawa/OpenCampus/unicode.html
      EMOJI_TABLE = {
        ':tada:'    => '&#x1f389;',
        ':bow:'     => '&#x1f647;',
        ':scream:'  => '&#x1f631;',
        ':pray:'    => '&#x1f64f;',
        ':ok_hand:' => '&#x1f44c;',
        ':\+1:'     => '&#x1f44d;',
        ':+1:'      => '&#x1f44d;'
      }.freeze

      AVOID_STACK_LEVEL_TOO_DEEP = 10

      attr_reader :value, :option

      def initialize(value = '', option = {})
        @value = value
        @option = option

        @inline_code = []
        @a_tag = []
        @img_tag = []
      end

      def self.parse(value, option = {})
        new(value, option).parse_along_flow
        value
      end

      def parse_along_flow
        escape_about_html
        br_tag_if_blank
        return if option[:code_block]

        escape_about_emoji
        replace_beginning_tag
        mask_ignore_inner_tag
        replace_simple_tag
        replace_mask_tag
      end

      private

      def br_tag_if_blank
        @value = @value.replace('<br />') if @value.size.zero?
      end

      def escape_about_html
        @value.gsub!(/[#{ESCAPE_TABLE.keys}]/, ESCAPE_TABLE)
      end

      def escape_about_emoji
        @value.gsub!(/(#{EMOJI_TABLE.keys.join('|')})/, EMOJI_TABLE)
      end

      def mask_ignore_inner_tag
        mask_inline_code
        mask_img_tag
        mask_a_tag
      end

      def mask_inline_code
        return if @inline_code.size > AVOID_STACK_LEVEL_TOO_DEEP

        matcher = /`([^`]+)`/.match(value)
        return unless matcher

        @inline_code.push(matcher[1])
        @value.gsub!(matcher[0], "{CODE#{@inline_code.size - 1}}")
        mask_inline_code
      end

      def mask_img_tag
        mask_include_alt_img_tag
        mask_exclude_alt_img_tag
      end

      def mask_include_alt_img_tag
        return if @img_tag.size > AVOID_STACK_LEVEL_TOO_DEEP

        matcher = /!\[([^\]][^\(]*)\]\(([^\)]*)\)/.match(value)
        return unless matcher

        @img_tag.push({ src: matcher[2], alt: matcher[1] })
        @value.gsub!(matcher[0], "{IMG#{@img_tag.size - 1}}")
        mask_include_alt_img_tag
      end

      def mask_exclude_alt_img_tag
        return if @img_tag.size > AVOID_STACK_LEVEL_TOO_DEEP

        matcher = /!\[\]\(([^\)]*)\)/.match(value)
        return unless matcher

        @img_tag.push({ src: matcher[1], alt: '' })
        @value.gsub!(matcher[0], "{IMG#{@img_tag.size - 1}}")
        mask_exclude_alt_img_tag
      end

      def mask_a_tag
        mask_include_text_a_tag
        mask_exclude_text_a_tag
      end

      def mask_include_text_a_tag
        return if @a_tag.size > AVOID_STACK_LEVEL_TOO_DEEP

        matcher = /\[([^\]][^\(]*)\]\(([^\)]*)\)/.match(value)
        return unless matcher

        @a_tag.push({ href: matcher[2], text: matcher[1] })
        @value.gsub!(matcher[0], "{A#{@a_tag.size - 1}}")
        mask_include_text_a_tag
      end

      def mask_exclude_text_a_tag
        return if @a_tag.size > AVOID_STACK_LEVEL_TOO_DEEP

        matcher = /\[\]\(([^\)]*)\)/.match(value)
        return unless matcher

        @a_tag.push({ href: matcher[1], text: matcher[1] })
        @value.gsub!(matcher[0], "{A#{@a_tag.size - 1}}")
        mask_exclude_text_a_tag
      end

      def replace_beginning_tag
        replace_h_tag
        replace_q_tag
      end

      def replace_h_tag
        @value.gsub!(/^####&nbsp;(.+)/, '<h4>\1</h4>') if @value =~ /^####/
        @value.gsub!(/^###&nbsp;(.+)/, '<h3>\1</h3>') if @value =~ /^###/
        @value.gsub!(/^##&nbsp;(.+)/, '<h2>\1</h2>') if @value =~ /^##/
        @value.gsub!(/^#&nbsp;(.+)/, '<h1>\1</h1>') if @value =~ /^#/
      end

      def replace_q_tag
        @value.gsub!(/^&gt;&nbsp;(.+)/, '<q>\1</q>')
      end

      def replace_simple_tag
        replace_b_tag
        replace_i_tag
        replace_s_tag
      end

      def replace_b_tag
        @value.gsub!(/\*\*([^\*][^\*]+)\*\*/, '<b>\1</b>')
        @value.gsub!(/\*([^\*]+)\*/, '<b>\1</b>')
      end

      def replace_i_tag
        @value.gsub!(/__([^_][^_]+)__/, '<i>\1</i>')
        @value.gsub!(/_([^_]+)_/, '<i>\1</i>')
      end

      def replace_s_tag
        @value.gsub!(/\~\~([^\~][^\~]+)\~\~/, '<s>\1</s>')
        @value.gsub!(/\~([^\~]+)\~/, '<s>\1</s>')
      end

      def replace_mask_tag
        replace_inline_code
        replace_img_tag
        replace_a_tag
      end

      def replace_inline_code
        @inline_code.each_with_index do |code, index|
          @value.gsub!(/{CODE#{index}}/, "<span className=\"inline-code\">#{code}</span>")
        end
      end

      def replace_img_tag
        @img_tag.each_with_index do |img, index|
          @value.gsub!(/{IMG#{index}}/, "<img src=\"#{img[:src]}\" alt=\"#{img[:alt]}\" />")
        end
      end

      def replace_a_tag
        @a_tag.each_with_index do |a, index|
          @value.gsub!(/{A#{index}}/, "<a href=\"#{a[:href]}\">#{a[:text]}</a>")
        end
      end
    end
  end
end
