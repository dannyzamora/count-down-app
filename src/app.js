import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss'

import CountDownApp from './components/CountDownApp'


ReactDom.render(<CountDownApp/>, document.getElementById('app'));
