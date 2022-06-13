import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings';

const reducer = combineReducers({
    greetings: greetingsReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
