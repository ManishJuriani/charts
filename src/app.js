import React from 'react';
import ReactDOM from 'react-dom';
import ChartApp from './components/ChartApp'
import ChartRouter from './routers/ChartRouter'
import 'normalize.css/normalize.css';
import './styles/styles.sass';

ReactDOM.render((<ChartApp/>),document.getElementById("app"))