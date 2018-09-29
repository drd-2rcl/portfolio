import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { hot } from 'react-hot-loader'

import './theme/globalStyles';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
