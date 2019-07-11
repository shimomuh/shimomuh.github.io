//
// このファイルは自動生成です。
// 変更したい場合は bin/make-tsx.rb を更新してください。
//
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from 'components/index';
import NotFound from 'components/notFound'
import 'components/root.scss';
import Diary20190625 from 'components/diary/diary20190625'
import Diary20190626 from 'components/diary/diary20190626'
import Diary20190627 from 'components/diary/diary20190627'
import Diary20190628 from 'components/diary/diary20190628'
import Diary20190629 from 'components/diary/diary20190629'
import Diary20190630 from 'components/diary/diary20190630'
import Diary20190701 from 'components/diary/diary20190701'
import Diary20190702 from 'components/diary/diary20190702'
import Diary20190703 from 'components/diary/diary20190703'
import Diary20190704 from 'components/diary/diary20190704'
import Diary20190705 from 'components/diary/diary20190705'
import Diary20190706 from 'components/diary/diary20190706'
import Diary20190707 from 'components/diary/diary20190707'
import Diary20190708 from 'components/diary/diary20190708'
import Diary20190709 from 'components/diary/diary20190709'
import Diary20190710 from 'components/diary/diary20190710'
import Diary20190711 from 'components/diary/diary20190711'
import Diary20190712 from 'components/diary/diary20190712'
import Diary20190713 from 'components/diary/diary20190713'
import Diary20190714 from 'components/diary/diary20190714'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Switch>
          <Route exact path ='/' component={Index} />
          <Route path='/diary/2019-06-25' component={Diary20190625} />
          <Route path='/diary/2019-06-26' component={Diary20190626} />
          <Route path='/diary/2019-06-27' component={Diary20190627} />
          <Route path='/diary/2019-06-28' component={Diary20190628} />
          <Route path='/diary/2019-06-29' component={Diary20190629} />
          <Route path='/diary/2019-06-30' component={Diary20190630} />
          <Route path='/diary/2019-07-01' component={Diary20190701} />
          <Route path='/diary/2019-07-02' component={Diary20190702} />
          <Route path='/diary/2019-07-03' component={Diary20190703} />
          <Route path='/diary/2019-07-04' component={Diary20190704} />
          <Route path='/diary/2019-07-05' component={Diary20190705} />
          <Route path='/diary/2019-07-06' component={Diary20190706} />
          <Route path='/diary/2019-07-07' component={Diary20190707} />
          <Route path='/diary/2019-07-08' component={Diary20190708} />
          <Route path='/diary/2019-07-09' component={Diary20190709} />
          <Route path='/diary/2019-07-10' component={Diary20190710} />
          <Route path='/diary/2019-07-11' component={Diary20190711} />
          <Route path='/diary/2019-07-12' component={Diary20190712} />
          <Route path='/diary/2019-07-13' component={Diary20190713} />
          <Route path='/diary/2019-07-14' component={Diary20190714} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
