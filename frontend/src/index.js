// fortune_docker/frontend/src/index.js
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import './styles/main.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
