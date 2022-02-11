import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {
    BrowserRouter as Router,

} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
