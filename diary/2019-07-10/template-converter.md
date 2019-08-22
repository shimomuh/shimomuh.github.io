# テンプレートから TypeScript ファイルを生成するクラス

タグ `このサイトの生い立ち` `Ruby` `設計`

## 対象者

* erb を rails の view 以外の手段として利用してみたい
* CMS っぽい感じのサイトの仕組みづくりをやりたい

そんな人

## 背景

前日の続き

せっかくなので、テンプレート部分もファイルとして書き出してファイルとして読み込む部分も汎用ドメインとして定義して利用する形にしたかった

## 結論

[→成果](https://github.com/shimomuh/shimomuh.github.io/commit/c143c49e64f943cd244107dbea252d05a400615d)

以下抜粋

```ruby
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
        @input_path = input_path ? input_path : "templates/#{output_path}.erb"
      end

      def render
        content = File.read(File.expand_path(input_path))
        erb = ERB.new(content,  nil, '-')

        File.open(output_path, 'w') do |f|
          f.write erb.result(binding)
        end
      end
    end
  end
end

::SubDomain::GeneralDomain::Template.new(value, 'src/components/router.tsx').render
dates_no_hyphen.each do |date_no_hyphen|
  ::SubDomain::GeneralDomain::Template.new(value, "src/components/diary/diary#{date_no_hyphen}.tsx", 'templates/src/components/diary/template.tsx.erb').render
end
```

基本は `templates/src/**/*.tsx.erb` => `src/**/*.tsx` のように 1:1 で出力する

1:多 で出力したい場合は第3引数に入力となるテンプレートファイルを渡して、出力先をループすることで実現できる

テンプレート内で使いたい値は value として第一引数に指定することで埋め込むことができる

 

**router.tsx.erb**

```erb
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from 'components/index';
import NotFound from 'components/notFound'
import 'components/root.scss';
<%- @value[:dates_no_hyphen].each do |date| -%>
import Diary<%= date %> from 'components/diary/diary<%= date %>'
<%- end -%>

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Switch>
          <Route exact path ='/' component={Index} />
          <%- @value[:dates_with_hyphen].each_with_index do |date, index| -%>
          <Route path='/<%= date %>' component={Diary<%= @value[:dates_no_hyphen][index] %>} />
          <%- end -%>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
```
