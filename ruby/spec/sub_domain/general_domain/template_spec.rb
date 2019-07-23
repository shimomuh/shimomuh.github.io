require_relative '../../../lib/sub_domain/general_domain/template'

RSpec.describe SubDomain::GeneralDomain::Template do
  let(:instance) { described_class.new(value, output_path, input_path) }
  let(:value) { '埋め込み変数' }
  let(:output_path) { './tmp/test.tsx' }
  let(:input_path) { './tmp/test.tsx.erb' }
  let(:input_content) { nil }

  before do
    FileUtils.mkdir_p('./tmp')
    generate_input_erb
  end

  after do
    FileUtils.rm_rf('./tmp')
  end

  describe '.render' do
    subject { File.read(output_path) }

    before { instance.render }

    context 'テンプレートに変数がない場合' do
      let(:input_content) { 'テスト' }

      it 'input path の内容を output path のファイルに射影する' do
        is_expected.to eq input_content
      end
    end

    context 'テンプレートに変数がある場合' do
      let(:input_content) { 'テスト<%= @value[:hoge] %>' }
      let(:value) do
        { hoge: 1 }
      end

      it '変数を埋め込んで射影する' do
        is_expected.to eq 'テスト1'
      end
    end
  end

  def generate_input_erb
    File.open(input_path, 'w') do |f|
      f.write input_content
    end
  end
end
