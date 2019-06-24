import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.querySelector('[data-react-site]'));

// my-app から引用
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
