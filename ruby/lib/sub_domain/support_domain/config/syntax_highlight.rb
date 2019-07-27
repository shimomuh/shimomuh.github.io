# frozen_string_literal: true

require 'json'

# サブドメイン：コアドメインをサポートするドメインのうち
#
module SubDomain
  # 支援ドメイン：業務的には特別だがコアドメインほど重要でない
  #
  module SupportDomain
    # 設定
    #
    module Config
      COMMON = [
        {
          in: /(\b)(bool)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(const)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(class)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(do)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(for)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(function)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(import)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(int)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(interface)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(if)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(private)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(public)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(return)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(string)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(var)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(&#123;)/, # {
          out: '<span className="syntax--braces">\1</span>'
        },
        {
          in: /(&#125;)/, # }
          out: '<span className="syntax--braces">\1</span>'
        },
        {
          in: /(\[)/,
          out: '<span className="syntax--brackets">\1</span>'
        },
        {
          in: /(\])/,
          out: '<span className="syntax--brackets">\1</span>'
        }
      ].freeze

      RUBY = [
        {
          in: /(\b)(def)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(self)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(end)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        }
      ].freeze

      JS = [
        {
          in: /(\b)(let)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(document)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(default)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(export)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        },
        {
          in: /(\b)(undefined)(\b)/,
          out: '\1<span className="syntax--\2">\2</span>\3'
        }
      ].freeze

      CSS = [
        {
          in: /(@media)/,
          out: '<span className="syntax--media">\1</span>'
        }
      ].freeze

      SYNTAX_HIGHLIGHTS = COMMON + RUBY + JS + CSS
    end
  end
end
