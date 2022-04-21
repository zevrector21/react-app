import {applyMiddleware, compose, createStore} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from "./reducers/rootReducer";
import { promiseMiddleware, localStorageMiddleware } from '../middleware';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

//import reduxPromise from 'redux-promise-middleware';

// export const history = createHistory();

// const myRouterMiddleware = routerMiddleware(history);

// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
//   } else {
//     // Enable additional logging in non-production environments.
//     return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware)
//   }
// };

// export const store = createStore(
//   rootReducer, composeWithDevTools(getMiddleware()));

const allEnhancers = compose(
    applyMiddleware(/*reduxPromise,*/thunk)
    //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    rootReducer,
    allEnhancers
);
