import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Track from './Track';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { Switch, BrowserRouter  } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route } from 'react-router'
import { combineReducers, createStore, applyMiddleware  } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

const history = createHistory();
const histMiddleware = routerMiddleware(history);

const compose = composeWithDevTools({});
const middleware = compose(
    applyMiddleware(
        histMiddleware,
        thunk
    )
); 


const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/> 
                <Route path="/about" component={About}/> 
                <Route path="/tracks/:id" component={Track}/> 
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
