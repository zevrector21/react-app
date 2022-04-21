import ApiManager from './service';
import {
  ASYNC_START,
  ASYNC_END,
} from './redux/actionTypes';

const promiseMiddleware = store => next => action => {
  console.log('#@$@$#@$#@@#$@#$#@$#@$0', action)
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });


    const currentView = store.getState().viewChangeCounter;
    const skipTracking = action.skipTracking; 
    action.payload.then(
      res => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        action.payload = res;
        if (res && res.errors){
          action.error = true;
        }
        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        const currentState = store.getState()
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return
        }
        action.error = true;
        if(error && error.response){
          action.payload = error.response.body;
        }
        else {
          action.payload = null
        }
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
      }
    );
    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {  
  // if (action.type === REGISTER || action.type === LOGIN) {
  //   if (!action.error ) {
  //     window.localStorage.setItem('jwt', action.payload.user.token);
  //     agent.setToken(action.payload.user.token);
  //   }
  // } else if (action.type === LOGOUT) {
  //   window.localStorage.setItem('jwt', '');
  //   agent.setToken(null);
  // }

  // next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware }
