import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducer/burgerBuilder';
import { BrowserRouter } from 'react-router-dom';
import orderReducer from './store/reducer/order';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import React from 'react';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
