require_relative '../../../lib/sub_domain/support_domain/syntax_highlight'

RSpec.describe SubDomain::SupportDomain::SyntaxHighlight do
  describe '#insert_tag(value)' do
    subject { described_class.insert_tag(value) }

    context '設定値に含まれる syntax 文字が含まれる場合' do
      let(:value) { 'private&nbsp;int&nbsp;a&nbsp;=&nbsp;1' }

      it '意図した通りに span タグが挿入される' do
        is_expected.to eq '<span className="syntax--private">private&nbsp;</span><span className="syntax--int">int&nbsp;</span>a&nbsp;=&nbsp;1'
      end
    end

    context '他のパターンの場合' do
      let(:value) { '&quot;dog&quot;' }

      it '意図した通りに span タグが挿入される' do
        is_expected.to eq '<span className="syntax--quote">&quot;</span>dog<span className="syntax--quote">&quot;</span>'
      end
    end

    context '設定値に含まれる className ではあるが、期待する値と違う場合' do
      let(:value) { 'public' }

      it '置換されない' do
        is_expected.to eq 'public'
      end
    end
  end
end
