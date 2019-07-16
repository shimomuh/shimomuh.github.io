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
      }

      # see: http://guppy.eng.kagawa-u.ac.jp/~kagawa/OpenCampus/unicode.html
      EMOJI_TABLE = {
        ':tada:'    => '&#x1f389;',
        ':bow:'     => '&#x1f647;',
        ':scream:'  => '&#x1f631;',
        ':pray:'    => '&#x1f64f;',
        ':\+1:'      => '&#x1f44d;',
        ':+1:'      => '&#x1f44d;'
      }

      attr_reader :value, :option

      def initialize(value = '', option = {})
        @value = value
        @option = option
        parse_along_flow
      end

      def self.parse(value, option = {})
        new(value, option).value
      end

      def parse_along_flow
        escape_about_html unless option[:escape_about_html]
        escape_about_emoji unless option[:escape_about_emoji]
        return if option[:ignore_tag]
        replace_inline_code
        replace_h_tag
        return if @ignore_tag
        replace_img_tag
        replace_a_tag
        replace_b_tag
        replace_i_tag
        replace_s_tag
        replace_br_tag
        replace_q_tag
      end

      def escape_about_html
        @value.gsub!(/[#{ESCAPE_TABLE.keys}]/, ESCAPE_TABLE)
      end

      def escape_about_emoji
        @value.gsub!(/(#{EMOJI_TABLE.keys.join('|')})/, EMOJI_TABLE)
      end

      def replace_inline_code
        @ignore_tag = true if @value =~ /`([^`]+)`/
        @value.gsub!(/`([^`]+)`/, '<span className="inline-code">\1</span>')
      end

      def replace_img_tag
        @value.gsub!(/!\[([^\]][^\(]*)\]\(([^\)]*)\)/, '<img src="\2" alt="\1" />')
        @value.gsub!(/!\[\]\(([^\)]*)\)/, '<img src="\1" />')
      end

      def replace_a_tag
        @value.gsub!(/\[([^\]][^\(]*)\]\(([^\)]*)\)/, '<a href={"\2"}>\1</a>')
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

      def replace_br_tag
        @value = @value.replace('<br />') if @value.size.zero?
      end

      def replace_q_tag
        @value.gsub!(/^&gt;&nbsp;(.+)/, '<q>\1</q>')
      end

      def replace_h_tag
        @value.gsub!(/^####&nbsp;(.+)/, '<h4>\1</h4>') if @value =~ /^####/
        @value.gsub!(/^###&nbsp;(.+)/, '<h3>\1</h3>') if @value =~ /^###/
        @value.gsub!(/^##&nbsp;(.+)/, '<h2>\1</h2>') if @value =~ /^##/
        @value.gsub!(/^#&nbsp;(.+)/, '<h1>\1</h1>') if @value =~ /^#/
      end
    end
  end
end
