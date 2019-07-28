require_relative '../../../lib/sub_domain/support_domain/syntax_highlight'

RSpec.describe SubDomain::SupportDomain::SyntaxHighlight do
  describe '#insert_tag(value)' do
    subject { described_class.insert_tag(value) }

    shared_examples '(\b)(trigger)(\b)' do |trigger, klass|
      context 'ぴったり一致する場合' do
        let(:value) { "#{trigger}" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq "<span className=\"syntax--#{klass}\">#{trigger}</span>"
        end
      end

      context '2回出てくる場合' do
        let(:value) { "#{trigger}&nbsp;#{trigger}" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq "<span className=\"syntax--#{klass}\">#{trigger}</span>&nbsp;<span className=\"syntax--#{klass}\">#{trigger}</span>"
        end
      end

      context '前に許容できる文字がきた場合' do
        let(:value) { ";#{trigger}" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq ";<span className=\"syntax--#{klass}\">#{trigger}</span>"
        end
      end

      context '後ろに許容できる文字がきた場合' do
        let(:value) { "#{trigger};" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq "<span className=\"syntax--#{klass}\">#{trigger}</span>;"
        end
      end

      context '前に許容できない文字がきた場合' do
        let(:value) { "a#{trigger}" }

        it '変換されない' do
          is_expected.to eq "a#{trigger}"
        end
      end

      context '後ろに許容できない文字がきた場合' do
        let(:value) { "#{trigger}a" }

        it '変換されない' do
          is_expected.to eq "#{trigger}a"
        end
      end
    end

    shared_examples '(trigger)' do |trigger, klass|
      context 'ぴったり一致する場合' do
        let(:value) { "#{trigger}" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq "<span className=\"syntax--#{klass}\">#{trigger}</span>"
        end
      end

      context '2回出てくる場合' do
        let(:value) { "#{trigger}#{trigger}" }

        it '意図した通りに span タグが挿入される' do
          is_expected.to eq "<span className=\"syntax--#{klass}\">#{trigger}</span><span className=\"syntax--#{klass}\">#{trigger}</span>"
        end
      end
    end

    context 'bool' do
      it_behaves_like '(\b)(trigger)(\b)', 'bool', 'bool'
    end

    context 'const' do
      it_behaves_like '(\b)(trigger)(\b)', 'const', 'const'
    end

    context 'class' do
      it_behaves_like '(\b)(trigger)(\b)', 'class', 'class'
    end

    context 'do' do
      it_behaves_like '(\b)(trigger)(\b)', 'do', 'do'
    end

    context 'for' do
      it_behaves_like '(\b)(trigger)(\b)', 'for', 'for'
    end

    context 'function' do
      it_behaves_like '(\b)(trigger)(\b)', 'function', 'function'
    end

    context 'import' do
      it_behaves_like '(\b)(trigger)(\b)', 'import', 'import'
    end

    context 'int' do
      it_behaves_like '(\b)(trigger)(\b)', 'int', 'int'
    end

    context 'interfece' do
      it_behaves_like '(\b)(trigger)(\b)', 'interface', 'interface'
    end

    context 'if' do
      it_behaves_like '(\b)(trigger)(\b)', 'if', 'if'
    end

    context 'private' do
      it_behaves_like '(\b)(trigger)(\b)', 'private', 'private'
    end

    context 'public' do
      it_behaves_like '(\b)(trigger)(\b)', 'public', 'public'
    end

    context 'return' do
      it_behaves_like '(\b)(trigger)(\b)', 'return', 'return'
    end

    context 'string' do
      it_behaves_like '(\b)(trigger)(\b)', 'string', 'string'
    end

    context 'var' do
      it_behaves_like '(\b)(trigger)(\b)', 'var', 'var'
    end

    context '{' do
      it_behaves_like '(trigger)', '&#123;', 'braces'
    end

    context '}' do
      it_behaves_like '(trigger)', '&#125;', 'braces'
    end

    context '[' do
      it_behaves_like '(trigger)', '[', 'brackets'
    end

    context ']' do
      it_behaves_like '(trigger)', ']', 'brackets'
    end

    context 'def' do
      it_behaves_like '(\b)(trigger)(\b)', 'def', 'def'
    end

    context 'self' do
      it_behaves_like '(\b)(trigger)(\b)', 'self', 'self'
    end

    context 'end' do
      it_behaves_like '(\b)(trigger)(\b)', 'end', 'end'
    end

    context 'let' do
      it_behaves_like '(\b)(trigger)(\b)', 'let', 'let'
    end

    context 'document' do
      it_behaves_like '(\b)(trigger)(\b)', 'document', 'document'
    end

    context 'default' do
      it_behaves_like '(\b)(trigger)(\b)', 'default', 'default'
    end

    context 'export' do
      it_behaves_like '(\b)(trigger)(\b)', 'export', 'export'
    end

    context 'undefined' do
      it_behaves_like '(\b)(trigger)(\b)', 'undefined', 'undefined'
    end

    context '@media' do
      it_behaves_like '(trigger)', '@media', 'media'
    end
  end
end
