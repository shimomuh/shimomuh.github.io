require_relative '../ruby_scripts/domain/diary_converter'

::Domain::DiaryConverter.new.convert { |progress_message| puts progress_message }
