import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import './css/bootstrap.css'
import './css/fontello-31a8a3e5/css/fontello.css'
import './css/fontello-31a8a3e5/css/animation.css'
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
