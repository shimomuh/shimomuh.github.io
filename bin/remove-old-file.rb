require 'json'

EXCEPT_KEY = %w(index.html service-worker.js)

PATTERN = [
  # dist/css/main.[0-9abcdef].chunk.css.map も一緒に処理してくれる
  # あとそれぞれ .map も処理する
  {
    key: /^main\.css$/,
    similar: /main\.[^\.]+\.chunk\.css/
  },
  {
    key: /^main\.js$/,
    similar: /main\.[^\.]+\.chunk\.js/
  },
  {
    key: /^runtime\~main\.js$/,
    similar: /runtime\~main\.[^\.]+\.js/
  },
  {
    key: /^dist\/js\/[0-9abcdef.]+chunk\.js$/,
    similar: /dist\/js\/[0-9abcdef.]+chunk\.js/
  },
  {
    key: /precache-manifest\.[^\.]+\.js/,
    similar: /precache-manifest\.[^\.]+\.js/
  }
]

File.open('./asset-manifest.json') do |file|
  hash = JSON.load(file)
  json = hash['files'].reject { |k| EXCEPT_KEY.include?(k) }
  json.each do |(k, v)|
    PATTERN.each do |p|
      if p[:key] =~ k
        v = v.slice(1..-1) # 最初の / を削除
        if v =~ /\//
          dir = v.gsub(/(.+)\/.+$/, '\1')
          list = Dir.glob("#{dir}/*")
        else
          list = Dir.glob('*')
        end
        list.each do |f|
          next if f !~ p[:similar]
          next if f == v || f == "#{v}.map"
          puts "delete old file: #{f}"
          File.delete f # 削除
        end
      end
    end
  end
end
