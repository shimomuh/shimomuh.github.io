require_relative '../sub_domain/general_domain/template'
require_relative '../sub_domain/general_domain/string_array_parser'
require 'json'

# ビジネス（ここではサイトを支える仕組み）におけるコアドメイン
#
module Domain
  # 日記のコンバーター
  #
  class DiaryConverter
    DIARY_PATH = 'diary/**/*.md'

    attr_reader :diary_paths, :title_json_hash, :tag_json_hash, :diary_tag_json_hash

    def initialize
      @diary_paths = Dir.glob(DIARY_PATH).sort
      @title_json_hash = {}
      @tag_json_hash = {}
      @diary_tag_json_hash = {}
    end

    def convert
      prepare_variables
      render_router_template
      diary_paths.each_with_index do |path, index|
        lines = []
        File.open(path, 'r') do |f|
          f.each_line do |line|
            lines.push line.chomp
          end
        end
        @title_json_hash[@dates_with_hyphen[index]] = lines[0].gsub(/^# /, '')
        prepare_tag_json(lines[2])
        prepare_diary_tag_json(lines[2], @dates_with_hyphen[index])

        render_diary(@dates_no_hyphen[index], lines)
        yield "#{@dates_with_hyphen[index]} ... done [#{index + 1}/#{@dates_with_hyphen.size}]" if block_given?
      end
      render_title_json
      render_tag_json
      render_diary_tag_json
    end

    def prepare_variables
      @dates_with_hyphen = []
      @dates_no_hyphen = []
      diary_paths.each do |path|
        with_hyphen = /\d{4}-\d{2}-\d{2}/.match(path).to_s
        @dates_with_hyphen.push with_hyphen
        @dates_no_hyphen.push with_hyphen.gsub('-', '')
      end
    end

    def prepare_tag_json(line)
      tags = line.split('`').select.with_index { |_v, i| i.odd? }
      tags.each do |tag|
        next if @tag_json_hash.values.include?(tag)
        @tag_json_hash["#{@tag_json_hash.values.size + 1}"] = tag
      end
    end

    def prepare_diary_tag_json(line, date_with_hyphen)
      tags = line.split('`').select.with_index { |_v, i| i.odd? }
      tags.each do |tag|
        @diary_tag_json_hash[:"#{tag}"] = [] unless @diary_tag_json_hash[:"#{tag}"]
        @diary_tag_json_hash[:"#{tag}"].push date_with_hyphen
      end
    end

    def render_router_template
      value = {
        dates_with_hyphen: @dates_with_hyphen,
        dates_no_hyphen: @dates_no_hyphen
      }

      ::SubDomain::GeneralDomain::Template.new(value, 'src/components/router.tsx').render
    end

    def render_diary(date_no_hyphen, lines)
      value = {
        date_no_hyphen: date_no_hyphen,
        content: ::SubDomain::GeneralDomain::StringArrayParser.parse(lines).values.join('')
      }

      ::SubDomain::GeneralDomain::Template.new(value, "src/components/diary/diary#{date_no_hyphen}.tsx", 'templates/src/components/diary/template.tsx.erb').render
    end

    def render_title_json
      File.open('src/config/diary_title.json', 'w') do |f|
        f.write JSON.pretty_generate(title_json_hash)
      end
    end

    def render_tag_json
      File.open('src/config/tag.json', 'w') do |f|
        f.write JSON.pretty_generate(tag_json_hash)
      end
    end

    def render_diary_tag_json
      File.open('src/config/diary_tag.json', 'w') do |f|
        f.write JSON.pretty_generate(diary_tag_json_hash)
      end
    end
  end
end
