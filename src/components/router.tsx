//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from 'components/index';
import 'components/root.scss';
import Diary20190625 from 'components/diary/diary20190625'
import Diary20190626 from 'components/diary/diary20190626'
import Diary20190628 from 'components/diary/diary20190628'
import Diary20190629 from 'components/diary/diary20190629'
import Diary20190627 from 'components/diary/diary20190627'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Route exact path ='/' component={Index} />
        <Route path='/2019-06-25' component={Diary20190625} />
        <Route path='/2019-06-26' component={Diary20190626} />
        <Route path='/2019-06-28' component={Diary20190628} />
        <Route path='/2019-06-29' component={Diary20190629} />
        <Route path='/2019-06-27' component={Diary20190627} />
      </div>
    </BrowserRouter>
  )
}

export default Router