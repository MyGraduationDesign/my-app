import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './component/app/App';
import Home from './component/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('test'));
registerServiceWorker();
