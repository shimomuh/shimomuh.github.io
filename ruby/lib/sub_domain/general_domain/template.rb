# frozen_string_literal: true

require 'erb'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 汎用ドメイン：中身が別のサービスや機能に差し変わっても問題ないドメインで
  #
  module GeneralDomain
    # テンプレートを扱うツール
    #
    class Template
      attr_reader :value, :output_path, :input_path

      def initialize(value, output_path, input_path = nil)
        @value = value
        @output_path = output_path
        @input_path = input_path || "templates/#{output_path}.erb"
      end

      def render
        content = File.read(File.expand_path(input_path))
        erb = ERB.new(content, trim_mode: '-')

        File.open(output_path, 'w') do |f|
          f.write erb.result(binding)
        end
      end
    end
  end
end
