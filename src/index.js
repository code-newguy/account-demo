import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Records from './components/records';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Records />, document.getElementById('root'));
registerServiceWorker();
