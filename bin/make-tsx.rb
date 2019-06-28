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

EMOJI_TABLE = {
  ':tada:' => '&#x1f389;'
}

$is = false
$li = false

def convert(line)
  return if line.size.zero?
  # markdown 解析
  l = line.gsub(/[&<>"'{} ]/, ESCAPE_TABLE)
  l.gsub!(/:tada:/, EMOJI_TABLE)
  l.gsub!(/!\[([^\]]*)\]\(([^\)]*)\)/, '<img src="\2" alt="\1" />')
  l.gsub!(/\[([^\]]*)\]\(([^\)]*)\)/, '<a href={"\2"} target="_blank">\1</a>')
  l.gsub!(/\*\*([^\*]+)\*\*/, '<b>\1</b>')
  l.gsub!(/`([^`]+)`/, '<span className="inline-code">\1</span>')

  if $li
    if (l =~ /\*&nbsp;/)
      return "<li>#{l.gsub(/\*&nbsp;/, '')}</li>"
    else
      l = "</ul>#{l}"
      $li = false
    end
  else
    if (l =~ /\*&nbsp;/)
      $li = true
      return "<ul><li>#{l.gsub(/\*&nbsp;/, '')}</li>"
    end
  end

  l = "#{l}<br />"

  return "<h4>#{l.gsub(/^####&nbsp;/, '')}</h4>" if (l =~ /^####/)
  return "<h3>#{l.gsub(/^###&nbsp;/, '')}</h3>" if (l =~ /^###/)
  return "<h2>#{l.gsub(/^##&nbsp;/, '')}</h2>" if (l =~ /^##/)
  return "<h1>#{l.gsub(/^#&nbsp;/, '')}</h1>" if (l =~ /^#/)

  if (l =~ /^```/)
    if $is
      $is = false
      return '</code></p>'
    else
      $is = true
      return '<p className="code"><code>'
    end
  end


  l
end

def content(date_no_hyphen, lines)
  template =<<EOS
import React from 'react';
import { Link } from 'react-router-dom';
import 'components/diary.scss';

const Diary<%= date_no_hyphen %>: React.FC = () => {
  return (
    <div>
<%- lines.each do |line| -%>
<%= convert line %>
<%- end -%>
<%- if $li -%>
</ul>
<%- end -%>
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
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from 'components/index';
<%- dates_no_hyphen.each do |date| -%>
import Diary<%= date %> from 'components/diary/diary<%= date %>'
<%- end -%>

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path ='/' component={Index} />
      <%- dates_with_hyphen.each_with_index do |date, index| -%>
      <Route path='/<%= date %>' component={Diary<%= dates_no_hyphen[index] %>} />
      <%- end -%>
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

