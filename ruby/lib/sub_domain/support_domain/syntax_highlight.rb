# frozen_string_literal: true

require 'json'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 支援ドメイン：業務的には特別だがコアドメインほど重要でない
  #
  module SupportDomain
    # 配色用のタグを扱うクラス
    #
    class SyntaxHighlight
      CONFIG = 'src/config/syntax_highlight.json'

      attr_reader :value

      def initialize(value)
        @value = value
      end

      def self.insert_tag(value)
        new(value).replace
        value
      end

      def replace
        all_syntaxs.each do |syntax|
          @value.gsub!(syntax['value'], "<span className=\"syntax--#{syntax['className']}\">#{syntax['value']}</span>")
        end
      end

      private

      def config
        return @config if @config

        File.open(CONFIG, 'r') do |f|
          @config = JSON.load(f)
        end
      end

      def common_syntaxs
        config['common']
      end

      def ruby_syntaxs
        config['ruby']
      end

      def js_syntaxs
        config['js']
      end

      def css_syntaxs
        config['css']
      end

      def all_syntaxs
        common_syntaxs + ruby_syntaxs + js_syntaxs + css_syntaxs
      end
    end
  end
end
