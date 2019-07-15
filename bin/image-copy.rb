require 'fileutils'

image_file_paths = Dir.glob('diary/**/*\.{png,jpg,jpeg,gif,svg}').sort
dirs = []
files = []
Dir.glob('diary/**/*\.{png,jpg,jpeg,gif,svg}') do |f|
  files.push f
  dirs.push File.dirname(f)
end

dirs.uniq.sort.each do |dir|
  puts dir
  FileUtils.mkdir_p("public/static/#{dir}")
end

files.each do |file|
  FileUtils.cp file, "public/static/#{file}"
end
