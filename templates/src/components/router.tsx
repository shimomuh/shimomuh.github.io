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
