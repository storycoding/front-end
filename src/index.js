console.log('Green like american money - Power Brokers');

import React from 'react';
import ReactDOM from 'react-dom';
import app from './app.js';

const App = app.App;

ReactDOM.render(
  <App/ >,
  document.getElementById('app')
);

module.hot.accept();