# frozen_string_literal: true

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 支援ドメイン：業務的には特別だがコアドメインほど重要でない
  #
  module GeneralDomain
    # 配色用のタグを扱うクラス
    #
    class ColorSchemeTag
      DEFINITION_FILE = 'src/config/color_scheme_definition.json'
      def initialize(value)
        @value = value
      end

      def replace
      end

      private

      def color_scheme_definition

      end
    end
  end
end
