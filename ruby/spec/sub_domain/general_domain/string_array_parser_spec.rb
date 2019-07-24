require_relative '../../../lib/sub_domain/general_domain/string_array_parser'

RSpec.describe SubDomain::GeneralDomain::StringArrayParser do
  # 複雑すぎるので一旦 in-out だけテストする
  describe '#parse' do
    subject { described_class.parse(values) }

    let(:error) { described_class::ParserError }

    describe 'table 文法について' do
      context '想定した文法の場合' do
        let(:values) do
          [
            '|a|b|c|',
            '|---|---|---|',
            '|rowa1|rowb1|rowc1|',
            '|rowa2|rowb2|rowc2|',
            ''
          ]
        end

        it 'テーブルレイアウトが適応される' do
          is_expected.to eq [
            '<table><tr><th>a</th><th>b</th><th>c</th></tr>',
            '',
            '<tr><td>rowa1</td><td>rowb1</td><td>rowc1</td></tr>',
            '<tr><td>rowa2</td><td>rowb2</td><td>rowc2</td></tr>',
            '</table>'
          ]
        end
      end

      context '文末の場合' do
        let(:values) do
          [
            '|a|b|c|d|',
            '|---|---|---|---|',
            '|rowa1|rowb1|rowc1|rowd1|',
          ]
        end

        it '正しく閉じタグが挿入される' do
          is_expected.to eq [
            '<table><tr><th>a</th><th>b</th><th>c</th><th>d</th></tr>',
            '',
            '<tr><td>rowa1</td><td>rowb1</td><td>rowc1</td><td>rowd1</td></tr></table>',
          ]
        end
      end

      context '複数ある場合' do
        let(:values) do
          [
            '|a|b|c|',
            '|---|---|---|',
            '|rowa|rowb|rowc|',
            '',
            '|あ|い|',
            '|---|---|',
            '|rowあ1|rowい1|',
            '|rowあ2|rowい2|'
          ]
        end

        it 'それぞれテーブルレイアウトが適応される' do
          is_expected.to eq [
            '<table><tr><th>a</th><th>b</th><th>c</th></tr>',
            '',
            '<tr><td>rowa</td><td>rowb</td><td>rowc</td></tr>',
            '</table>',
            '<table><tr><th>あ</th><th>い</th></tr>',
            '',
            '<tr><td>rowあ1</td><td>rowい1</td></tr>',
            '<tr><td>rowあ2</td><td>rowい2</td></tr></table>'
          ]
        end
      end

      context '内部にタグが含まれる場合' do
        let(:values) do
          [
            '|[link](https://...)|**太字**|',
            '|---|---|',
            '|![](img)|~否定線~|'
          ]
        end

        it 'タグは適応される' do
          is_expected.to eq [
            '<table><tr><th><a href="https://...">link</a></th><th><b>太字</b></th></tr>',
            '',
            '<tr><td><img src="img" alt="" /></td><td><s>否定線</s></td></tr></table>'
          ]
        end
      end

      context '一つの場合' do
        let(:values) do
          [
            '|a|',
            '|---|',
            '|row|',
            ''
          ]
        end

        it 'テーブルレイアウトが適応される' do
          is_expected.to eq [
            '<table><tr><th>a</th></tr>',
            '',
            '<tr><td>row</td></tr>',
            '</table>'
          ]
        end
      end

      context '内容がない場合' do
        let(:values) do
          [
            '|a|b|',
            '|---|---|',
            '|||'
          ]
        end

        it 'DOM が崩れる' do
          is_expected.to eq [
            '<table><tr><th>a</th><th>b</th></tr>',
            '',
            '</table>'
          ]
        end
      end

      context 'ヘッダーがない場合' do
        let(:values) do
          [
            '|||',
            '|---|---|',
            '|row1|row2|'
          ]
        end

        it '例外を返す' do
          expect { subject }.to raise_error error
        end
      end

      context '仕切りがない場合' do
        let(:values) do
          [
            '|a|b|',
            '|rowa|rowb|'
          ]
        end

        it '例外を返す' do
          expect { subject }.to raise_error error
        end
      end

      context 'テキスト位置を変更したい場合' do
        let(:values) do
          [
            '|a|b|c|',
            '|:---|---:|:---:|',
            '|rowa|rowb|rowc|'
          ]
        end

        pending '今は対応していない' do
          is_expected.to eq [
            '<table><tr><th>a</th><th>b</th><th>c</th></tr>',
            '',
            '<tr><td>rowa</td><td>rowb</td><td>rowc</td></tr></table>',
          ]
        end
      end

      context 'エスケープした場合' do
        let(:values) do
          [
            '\|a|b|',
            '\|---|---|',
            '\|rowa|rowb|'
          ]
        end

        pending '表としては表示されないがエスケープ文字(\)は表示されない' do
          is_expected.to eq [
            '|a|b|',
            '|---|---|',
            '|rowa|rowb|'
          ]
        end
      end
    end

    describe 'code block 文法について' do
      context '想定した文法の場合' do
        let(:values) do
          [
            '```',
            'num = 1',
            'puts num',
            '```',
            ''
          ]
        end

        it 'コードタグが適応され、直下の br タグは無視される' do
          is_expected.to eq [
            '<p className="code "><code>',
            '<span className="code__with-order">num&nbsp;=&nbsp;1</span><br />',
            '<span className="code__with-order">puts&nbsp;num</span><br />',
            '</code></p>',
            ''
          ]
        end
      end

      context 'コードの指定があった場合' do
        let(:values) do
          [
            '```ruby',
            'num = 1',
            'puts num',
            '```'
          ]
        end

        it 'クラスが指定される' do
          is_expected.to eq [
            '<p className="code ruby"><code>',
            '<span className="code__with-order">num&nbsp;=&nbsp;1</span><br />',
            '<span className="code__with-order">puts&nbsp;num</span><br />',
            '</code></p>'
          ]
        end
      end

      context '複数ある場合' do
        let(:values) do
          [
            '```ruby',
            'num = 1',
            'puts num',
            '```',
            '',
            '```javascript',
            'greet = "Hello World!";',
            'console.log(greet);',
            '```'
          ]
        end

        it 'それぞれコードタグが適応され、コードタグ直下の br タグは無視される' do
          is_expected.to eq [
            '<p className="code ruby"><code>',
            '<span className="code__with-order">num&nbsp;=&nbsp;1</span><br />',
            '<span className="code__with-order">puts&nbsp;num</span><br />',
            '</code></p>',
            '',
            '<p className="code javascript"><code>',
            '<span className="code__with-order">greet&nbsp;=&nbsp;&quot;Hello&nbsp;World!&quot;;</span><br />',
            '<span className="code__with-order">console.log(greet);</span><br />',
            '</code></p>'
          ]
        end
      end

      context 'タグが含まれる場合' do
        let(:values) do
          [
            '```',
            '<html>',
            '# ヘッダー',
            '**太字**',
            '![](画像)',
            '[https://...](リンク)',
            '</html>',
            '```'
          ]
        end

        it 'すべて無視される' do
          is_expected.to eq [
            '<p className="code "><code>',
            '<span className="code__with-order">&lt;html&gt;</span><br />',
            '<span className="code__with-order">#&nbsp;ヘッダー</span><br />',
            '<span className="code__with-order">**太字**</span><br />',
            '<span className="code__with-order">![](画像)</span><br />',
            '<span className="code__with-order">[https://...](リンク)</span><br />',
            '<span className="code__with-order">&lt;/html&gt;</span><br />',
            '</code></p>'
          ]
        end
      end

      context 'コードの閉じられていない場合' do
        let(:values) do
          [
            '```ruby',
            'num = 1',
            'puts num'
          ]
        end

        it 'タグを閉じないまま出力される' do
          is_expected.to eq [
            '<p className="code ruby"><code>',
            '<span className="code__with-order">num&nbsp;=&nbsp;1</span><br />',
            '<span className="code__with-order">puts&nbsp;num</span><br />',
          ]
        end
      end

      context '中身がなかった場合' do
        let(:values) do
          [
            '```javascript',
            '```'
          ]
        end

        it '中身がないように出力される' do
          is_expected.to eq [
            '<p className="code javascript"><code>',
            '</code></p>'
          ]
        end
      end
    end

    context 'エスケープ文字があった場合' do
      let(:values) do
        [
          '\```ruby',
          'num = 1',
          'puts num',
          '\```'
        ]
      end

      pending 'コードタグ処理は行われずエスケープ文字(\)は表示されない' do
        is_expected.to eq [
          '```ruby',
          'num = 1',
          'puts num',
          '```'
        ]
      end
    end

    describe 'ul や li 文法について' do
      context '想定した文法の場合' do
        let(:values) do
          [
            '* リスト1',
            '* リスト2',
            ''
          ]
        end

        it 'リストタグが適応される' do
          is_expected.to eq [
            '<ul><li>リスト1</li>',
            '<li>リスト2</li>',
            '</ul>'
          ]
        end
      end

      context '文末の場合' do
        let(:values) do
          [
            '* リスト1',
            '* リスト2',
            '* リスト3'
          ]
        end

        it '正しく閉じタグが挿入される' do
          is_expected.to eq [
            '<ul><li>リスト1</li>',
            '<li>リスト2</li>',
            '<li>リスト3</li></ul>'
          ]
        end
      end

      context '複数ある場合' do
        let(:values) do
          [
            '* リスト1',
            '* リスト2',
            '',
            '* リスト1',
            '* リスト2',
            '* リスト3'
          ]
        end

        it 'それぞれテーブルレイアウトが適応される' do
          is_expected.to eq [
            '<ul><li>リスト1</li>',
            '<li>リスト2</li>',
            '</ul>',
            '<ul><li>リスト1</li>',
            '<li>リスト2</li>',
            '<li>リスト3</li></ul>'
          ]
        end
      end

      context '内部にタグが含まれる場合' do
        let(:values) do
          [
            '* [link](https://...)',
            '* **太字A**',
            '* *太字B*',
            '* ![](img)',
            ''
          ]
        end

        it 'タグは適応される' do
          is_expected.to eq [
            '<ul><li><a href="https://...">link</a></li>',
            '<li><b>太字A</b></li>',
            '<li><b>太字B</b></li>',
            '<li><img src="img" alt="" /></li>',
            '</ul>'
          ]
        end
      end

      context '一つの場合' do
        let(:values) do
          [
            '* ひとつ'
          ]
        end

        it 'リストタグが適応される' do
          is_expected.to eq [
            '<ul><li>ひとつ</li></ul>'
          ]
        end
      end

      context '内容がない場合' do
        let(:values) do
          [
            '* ',
            '* ',
            ''
          ]
        end

        it '中身なしでリストタグが適応される' do
          is_expected.to eq [
            '<ul><li><br /></li>',
            '<li><br /></li>',
            '</ul>'
          ]
        end
      end

      context 'スペースがない場合' do
        let(:values) do
          [
            '*スペースなし',
            '*スペースなし'
          ]
        end

        it '適応されない' do
          is_expected.to eq [
            '*スペースなし',
            '*スペースなし'
          ]
        end
      end

      context '太字を意味しそうな形式の場合' do
        let(:values) do
          [
            '* 太字？*',
            '* *太字？**',
            ''
          ]
        end

        it 'リストタグが優先される' do
          is_expected.to eq [
            '<ul><li>太字？*</li>',
            '<li><b>太字？</b>*</li>',
            '</ul>'
          ]
        end
      end

      context 'エスケープした場合' do
        let(:values) do
          [
            '\* エスケープ',
            '\* エスケープ',
            ''
          ]
        end

        pending 'リストタグの処理は行われず、エスケープ文字(\)は表示されない' do
          is_expected.to eq [
            '* エスケープ',
            '* エスケープ',
            '<br />'
          ]
        end
      end
    end
  end
end
