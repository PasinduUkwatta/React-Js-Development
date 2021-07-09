import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from "react-redux";
import {createStore,applyMiddleware,combineReducers} from "redux";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {searchRobots,requestRobots} from "./containers/reducers";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";

const logger =createLogger()
const rootReducer =combineReducers({searchRobots,requestRobots})
const store =createStore(rootReducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
