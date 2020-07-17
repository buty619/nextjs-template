import {
  createStore,
  applyMiddleware,
  Store,
  PreloadedState,
  compose as rawCompose,
} from 'redux';

// Middleware
import thunk from 'redux-thunk';

// Reducer
import rootReducer, { State } from './reducers/root.reducer';

export type AppStore = Store<State>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof rawCompose;
  }
}

const compose =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  rawCompose;

const createAppStore = (preloadState?: PreloadedState<State>): AppStore => {
  const middleware = [thunk];
  const enhancer = compose(applyMiddleware(...middleware));
  return createStore(rootReducer, preloadState, enhancer);
};

export default createAppStore;
