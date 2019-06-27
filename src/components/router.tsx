import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from 'components/index';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path ='/' component={Index} />
    </BrowserRouter>
  )
}

export default Router
