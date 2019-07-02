require 'erb'

ESCAPE_TABLE = {
  '&' => '&amp;',
  '<' => '&lt;',
  '>' => '&gt;',
  '"' => '&quot;',
  "'" => '&#39;',
  '{' => '&#123;',
  '}' => '&#125;',
  ' ' => '&nbsp;'
}

# see: http://guppy.eng.kagawa-u.ac.jp/~kagawa/OpenCampus/unicode.html
EMOJI_TABLE = {
  ':tada:' => '&#x1f389;',
  ':bow:'  => '&#x1f647;',
  ':scream:' => '&#x1f631;',
  ':pray:' => '&#x1f64f;',
}

# 次の行に影響を与える系
$code = false # code タグ中は true
$li = false # ul タグ中は true

def convert(line)
  if line.size.zero?
    if $li
      $li = false
      return "</ul>"
    end
    return;
  end
  # markdown 解析
  l = line.gsub(/[&<>"'{} ]/, ESCAPE_TABLE)
  l.gsub!(/:(tada|bow|scream|pray):/, EMOJI_TABLE) unless $code
  l.gsub!(/!\[([^\]]*)\]\(([^\)]*)\)/, '<img src="\2" alt="\1" />') unless $code
  l.gsub!(/\[([^\]]*)\]\(([^\)]*)\)/, '<a href={"\2"}>\1</a>') unless $code
  l.gsub!(/\*\*([^\*]+)\*\*/, '<b>\1</b>') unless $code
  l.gsub!(/_([^_]+)_/, '<i>\1</i>') unless $code
  l.gsub!(/\~([^\~]+)\~/, '<s>\1</s>') unless $code
  l.gsub!(/`([^`]+)`/, '<span className="inline-code">\1</span>') unless $code

  if $li
    if (l =~ /^\*&nbsp;/)
      return "<li>#{l.gsub(/^\*&nbsp;/, '')}</li>"
    end
  else
    if (l =~ /^\*&nbsp;/)
      $li = true
      return "<ul><li>#{l.gsub(/^\*&nbsp;/, '')}</li>"
    end
  end

  return "<h4>#{l.gsub(/^####&nbsp;/, '')}</h4>" if l =~ /^####/ && !$code
  return "<h3>#{l.gsub!(/^###&nbsp;/, '')}</h3>" if l =~ /^###/ && !$code
  return "<h2>#{l.gsub!(/^##&nbsp;/, '')}</h2>" if l =~ /^##/ && !$code
  return "<h1>#{l.gsub!(/^#&nbsp;/, '')}</h1>" if l =~ /^#/ && !$code

  l = "#{l}<br />" unless $code

  if (l =~ /^```/)
    if $code
      $code = false
      return "</code></p>"
    else
      $code = true
      return '<p className="code"><code>'
    end
  end

  if $code
    l = "<span className='code__with-order'>#{l}</span><br />"
  end

  l
end

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
<%- lines.each do |line| -%>
<%= convert line %>
<%- end -%>
<%- if $li -%>
</ul>
<%- end -%>
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

diary_paths.each_with_index do |path, index|
  lines = []
  File.open(path, 'r') do |f|
    f.each_line do |line|
      lines.push line.chomp
    end
  end
  content dates_no_hyphen[index], lines
  puts "#{dates_with_hyphen[index]} ... done [#{index + 1}/#{dates_with_hyphen.size}]"
end

