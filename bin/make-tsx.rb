require 'erb'
require_relative '../ruby_scripts/sub_domain/general_domain/string_array_parser'

def content(date_no_hyphen, lines)
  template =<<EOS
//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary<%= date_no_hyphen %>: React.FC = () => {
  return (
    <div className='diary'>
      <%= SubDomain::GeneralDomain::StringArrayParser.parse(lines).values.join('') %>
      <br />
      <div>
        <Link to='/'>戻る</Link>
      </div>
    </div>
  )
}

export default Diary<%= date_no_hyphen %>
EOS
  erb = ERB.new(template, nil, '-')
  File.open("src/components/diary/diary#{date_no_hyphen}.tsx", 'w') do |f|
    f.write erb.result(binding)
  end
end

def dump_title_to_json(date, title, hash)
  hash[date] = title.gsub(/^# /, '')
end

def main
  diary_paths = Dir.glob("diary/**/*.md")
  dates_with_hyphen = []
  dates_no_hyphen = []
  diary_paths.each do |path|
    with_hyphen = /\d{4}-\d{2}-\d{2}/.match(path).to_s
    dates_with_hyphen.push with_hyphen
    dates_no_hyphen.push with_hyphen.gsub('-', '')
  end

  template_router = <<EOS
//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from 'components/index';
import NotFound from 'components/notFound'
import 'components/root.scss';
<%- dates_no_hyphen.each do |date| -%>
import Diary<%= date %> from 'components/diary/diary<%= date %>'
<%- end -%>

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Switch>
          <Route exact path ='/' component={Index} />
          <%- dates_with_hyphen.each_with_index do |date, index| -%>
          <Route path='/<%= date %>' component={Diary<%= dates_no_hyphen[index] %>} />
          <%- end -%>
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
EOS

  erb = ERB.new(template_router, nil, '-')
  File.open('src/components/router.tsx', 'w') do |f|
    f.write erb.result(binding)
  end

  title_json_hash = {}
  diary_paths.each_with_index do |path, index|
    lines = []
    File.open(path, 'r') do |f|
      f.each_line do |line|
        lines.push line.chomp
      end
    end
    $li = false
    $code = false
    dump_title_to_json(dates_with_hyphen[index], lines[0], title_json_hash)
    content dates_no_hyphen[index], lines
    puts "#{dates_with_hyphen[index]} ... done [#{index + 1}/#{dates_with_hyphen.size}]"
  end
end

main
