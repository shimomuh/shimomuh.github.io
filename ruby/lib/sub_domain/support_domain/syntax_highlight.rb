# frozen_string_literal: true

require_relative './config/syntax_highlight'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 支援ドメイン：業務的には特別だがコアドメインほど重要でない
  #
  module SupportDomain
    # 配色用のタグを扱うクラス
    #
    class SyntaxHighlight
      attr_reader :value

      def initialize(value)
        @value = value
      end

      def self.insert_tag(value)
        new(value).replace
        value
      end

      def replace
        syntaxs.each do |syntax|
          @value.gsub!(syntax[:in], syntax[:out])
        end
      end

      private

      def syntaxs
        ::SubDomain::SupportDomain::Config::SYNTAX_HIGHLIGHTS
      end
    end
  end
end
