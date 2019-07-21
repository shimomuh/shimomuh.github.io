require_relative '../../lib/domain/diary_converter'

RSpec.describe Domain::DiaryConverter do
  let(:diary_path) { './tmp/diary/**/*.md' }
  let(:diary1) { nil }
  let(:diary1path) { './tmp/diary/2019-07-01/diary.md'}
  let(:diary2) { nil }
  let(:diary2path) { './tmp/diary/2019-07-02/diary.md'}
  let(:instance) { described_class.new }

  before do
    FileUtils.mkdir_p('./tmp')
    prepare_diaries
    stub_const("#{described_class}::DIARY_PATH", diary_path)
  end

  after do
    FileUtils.rm_rf('./tmp')
  end

  describe '#initialize' do
    subject { instance.diary_paths }

    it '日記がソートされて保持される' do
      is_expected.to eq [
        diary1path,
        diary2path
      ]
    end
  end

  describe '.prepare_variables' do
    before { instance.send(:prepare_variables) }

    it '日記に合わせた日付に関する変数が格納される' do
      expect(instance.instance_variable_get(:@dates_with_hyphen)).to match_array ['2019-07-01', '2019-07-02']
      expect(instance.instance_variable_get(:@dates_no_hyphen)).to match_array ['20190701', '20190702']
    end
  end

  describe '.insert_link_for_tag(contents)' do
    let(:contents) do
      [
        '<h1>タイトル</h1>',
        '',
        'タグ&nbsp;<span className="inline-code">Ruby</span>&nbsp;<span className="inline-code">Javascript</span>'
      ]
    end
    let(:expected) do
      [
        '<h1>タイトル</h1>',
        '',
        'タグ&nbsp;<Link to=\'/tag/1\'><span className=\'inline-code\'>Ruby</span></Link>&nbsp;<Link to=\'/tag/3\'><span className=\'inline-code\'>Javascript</span></Link>'
      ]
    end
    let(:tag_json_hash) do
      {
        '1': 'Ruby',
        '2': 'JavaScript',
        '3': 'Javascript'
      }
    end

    before { instance.instance_variable_set(:@tag_json_hash, tag_json_hash) }

    subject { instance.send(:insert_link_for_tag, contents) }

    it '大文字小文字は区別して置き換える' do
      expect { subject }.to change { contents }.to(expected)
    end
  end

  # 他のプライベートメソッドはほぼ SubDomain クラスのテストで動作保証済み

  def prepare_diaries
    FileUtils.mkdir_p('./tmp/diary/2019-07-01')
    FileUtils.mkdir_p('./tmp/diary/2019-07-02')
    File.open(diary1path, 'w') do |f|
      f.write diary1
    end
    File.open(diary2path, 'w') do |f|
      f.write diary2
    end
  end
end
