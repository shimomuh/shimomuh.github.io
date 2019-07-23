require_relative '../../../lib/sub_domain/general_domain/string_parser'

RSpec.describe SubDomain::GeneralDomain::StringParser do
  let(:instance) { described_class.new(value, option) }
  let(:option) { {} }
  let(:value) { nil }

  described_class::ESCAPE_TABLE.each do |(k, v)|
    describe '.escape_about_html' do
      subject { instance.value }

      let(:value) { "#{k}\\#{k}" }

      before { instance.send(:escape_about_html) }

      it "[ \"#{k}\" の場合] \\を含もうが、問答無用でエスケープする" do
        is_expected.to eq "#{v}\\#{v}"
      end
    end
  end

  described_class::EMOJI_TABLE.reject { |(k, v)| k.include?('\\') }.each do |(k, v)|
    describe '.escape_about_emoji' do
      subject { instance.value }

      let(:value) { ":#{k}:" }

      before { instance.send(:escape_about_emoji) }

      it "[ \"#{k}\" の場合] 登録されている絵文字を含むときはその文字の箇所だけ変換される" do
        is_expected.to eq ":#{v}:"
      end
    end
  end

  describe '.replace_inline_code' do
    subject { instance.value }

    before do
      instance.send(:mask_inline_code)
      instance.send(:replace_inline_code)
    end

    context '1行に複数のインラインコードを含む場合' do
      let(:value) { '`ここはインライン``ここもインライン`' }

      it '全て置換される' do
        is_expected.to eq '<span className="inline-code">ここはインライン</span><span className="inline-code">ここもインライン</span>'
      end
    end

    context '閉じられない`を含む場合' do
      let(:value) { '閉じられない`を含む' }

      it '置換されない' do
        is_expected.to eq '閉じられない`を含む'
      end
    end

    context '文字なしの場合' do
      let(:value) { '文字なし``' }

      it '置換されない' do
        is_expected.to eq '文字なし``'
      end
    end
  end

  describe '.replace_img_tag' do
    subject { instance.value }

    before do
      instance.send(:mask_img_tag)
      instance.send(:replace_img_tag)
    end

    context '1行に複数の画像文法を含む場合' do
      let(:value) { '![alt1](url1) ![alt2](url2)' }

      it '全て置換される' do
        is_expected.to eq '<img src="url1" alt="alt1" /> <img src="url2" alt="alt2" />'
      end
    end

    context '画像名の中に[]を含む場合' do
      let(:value) { '![[爆笑]この画像を見るべし！](url1)' }

      it '[] を正しく認識し置換する' do
        is_expected.to eq '<img src="url1" alt="[爆笑]この画像を見るべし！" />'
      end
    end

    context '閉じられていない場合' do
      let(:value) { '![alt1](url1 ![alt2' }

      it '置換されない' do
        is_expected.to eq '![alt1](url1 ![alt2'
      end
    end

    context 'alt がない場合' do
      let(:value) { '![](url1)' }
      it 'alt はなしで置換される' do
        is_expected.to eq '<img src="url1" alt="" />'
      end
    end
  end

  describe '.replace_a_tag' do
    subject { instance.value }

    before do
      instance.send(:mask_a_tag)
      instance.send(:replace_a_tag)
    end

    context '1行に複数のリンク文法を含む場合' do
      let(:value) { '[name1](url1) [name2](url2)' }

      it '全て置換される' do
        is_expected.to eq '<a href="url1">name1</a> <a href="url2">name2</a>'
      end
    end

    context 'リンク名の中に[]を含む場合' do
      let(:value) { '[[爆笑]このリンクを見るべし！](url1)' }

      it '[] を正しく認識し置換する' do
        is_expected.to eq '<a href="url1">[爆笑]このリンクを見るべし！</a>'
      end
    end

    context '閉じられていない場合' do
      let(:value) { '[name1](url1 [name2' }

      it '置換されない' do
        is_expected.to eq '[name1](url1 [name2'
      end
    end

    context 'リンク名がない場合' do
      let(:value) { '[](url1)' }
      it 'リンクをリンク名として置換される' do
        is_expected.to eq '<a href="url1">url1</a>'
      end
    end
  end

  describe '.replace_b_tag' do
    subject { instance.value }

    before { instance.send(:replace_b_tag) }

    context '1行に複数の bold 文法を含む場合' do
      let(:value) { '*あいう* **かきく** *さしす*' }

      it '全て置換される' do
        is_expected.to eq '<b>あいう</b> <b>かきく</b> <b>さしす</b>'
      end
    end

    context '閉じられていない場合' do
      let(:value) { '**あ' }

      it '置換されない' do
        is_expected.to eq '**あ'
      end
    end
  end

  describe '.replace_i_tag' do
    subject { instance.value }

    before { instance.send(:replace_i_tag) }

    context '1行に複数の italic 文法を含む場合' do
      let(:value) { '_あいう_ __かきく__ _さしす_' }

      it '全て置換される' do
        is_expected.to eq '<i>あいう</i> <i>かきく</i> <i>さしす</i>'
      end
    end

    context '閉じられていない場合' do
      let(:value) { '__あ' }

      it '置換されない' do
        is_expected.to eq '__あ'
      end
    end
  end

  describe '.replace_s_tag' do
    subject { instance.value }

    before { instance.send(:replace_s_tag) }

    context '1行に複数の strike 文法を含む場合' do
      let(:value) { '~あいう~ ~~かきく~~ ~さしす~' }

      it '全て置換される' do
        is_expected.to eq '<s>あいう</s> <s>かきく</s> <s>さしす</s>'
      end
    end

    context '閉じられていない場合' do
      let(:value) { '~~あ' }

      it '置換されない' do
        is_expected.to eq '~~あ'
      end
    end
  end

  describe '.br_tag_if_blank' do
    subject { instance.value }

    before { instance.send(:br_tag_if_blank) }

    context '空だった場合' do
      let(:value) { '' }

      it '置換される' do
        is_expected.to eq '<br />'
      end
    end

    context '半角スペースの場合' do
      let(:value) { '&nbsp;' }

      it '置換されない' do
        is_expected.to eq '&nbsp;'
      end
    end

    context 'エスケープしていない半角スペースの場合' do
      let(:value) { ' ' }

      it '置換されない' do
        is_expected.to eq ' '
      end
    end
  end

  describe '.replace_q_tag' do
    subject { instance.value }

    before { instance.send(:replace_q_tag) }

    context '行頭からエスケープされた文字で引用文法があった場合' do
      let(:value) { '&gt;&nbsp;あ' }

      it '置換される' do
        is_expected.to eq '<q>あ</q>'
      end
    end

    context '行頭以外の場合' do
      let(:value) { '&nbsp;&gt;&nbsp;あ' }

      it '置換されない' do
        is_expected.to eq '&nbsp;&gt;&nbsp;あ'
      end
    end

    context 'エスケープされていない場合' do
      let(:value) { '> あ' }

      it '置換されない' do
        is_expected.to eq '> あ'
      end
    end

    context 'スペースがない場合' do
      let(:value) { '&gt;あ' }

      it '置換されない' do
        is_expected.to eq '&gt;あ'
      end
    end

    context '引用する文字がない場合' do
      let(:value) { '&gt;&nbsp;' }

      it '置換されない' do
        is_expected.to eq '&gt;&nbsp;'
      end
    end
  end

  describe '.replace_h_tag' do
    subject { instance.value }

    before { instance.send(:replace_h_tag) }

    context '行頭からエスケープされた文字で引用文法があった場合' do
      let(:value) { '###&nbsp;あ' }

      it '正しいヘッダレベルで置換される' do
        is_expected.to eq '<h3>あ</h3>'
      end
    end

    context '行頭以外の場合' do
      let(:value) { '&nbsp;####&nbsp;あ' }

      it '置換されない' do
        is_expected.to eq '&nbsp;####&nbsp;あ'
      end
    end

    context 'エスケープされていない場合' do
      let(:value) { '# あ' }

      it '置換されない' do
        is_expected.to eq '# あ'
      end
    end

    context 'スペースがない場合' do
      let(:value) { '##あ' }

      it '置換されない' do
        is_expected.to eq '##あ'
      end
    end

    context 'ヘッダとして表示する文字がない場合' do
      let(:value) { '##&nbsp;' }

      it '置換されない' do
        is_expected.to eq '##&nbsp;'
      end
    end
  end

  describe '.parse_along_flow' do
    subject { instance.value }

    before { instance.parse_along_flow }

    context 'option[:code_block] が true の場合' do
      let(:option) { { code_block: true } }
      let(:value) { '# ` &:tada:`' }

      it 'エスケープだけしてタグ系の変換は何もしない' do
        is_expected.to eq '#&nbsp;`&nbsp;&amp;:tada:`'
      end
    end

    context 'インラインコードの場合' do
      let(:value) { '`あいう[name](url)`' }

      it 'hタグとbrタグを除くタグ文法処理をしない' do
        is_expected.to eq '<span className="inline-code">あいう[name](url)</span>'
      end
    end

    context 'hタグの場合' do
      let(:value) { '# `あいう[name](url)`' }

      it 'インラインコードとbrタグを除くタグ文法処理をしない' do
        is_expected.to eq '<h1><span className="inline-code">あいう[name](url)</span></h1>'
      end
    end
  end

  describe '.escape/.unescape' do
    subject { instance.value }

    before do
      instance.escape
      instance.parse_along_flow
      instance.unescape
    end

    context 'エスケープした場合' do
      let(:value) do
        '\> 引用 \`code` \[](link) \![]\(img) \*あ* \_あ_ \~あ~'
      end

      it 'あらゆる文字を無効化する' do
        is_expected.to eq '>&nbsp;引用&nbsp;`code`&nbsp;[](link)&nbsp;![](img)&nbsp;*あ*&nbsp;_あ_&nbsp;~あ~'
      end
    end

    # その他複合系の処理で気になるものがあれば
  end
end
