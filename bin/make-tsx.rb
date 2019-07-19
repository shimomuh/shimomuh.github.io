require_relative '../ruby/lib/domain/diary_converter'

::Domain::DiaryConverter.new.convert { |progress_message| puts progress_message }
