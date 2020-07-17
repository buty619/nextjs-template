import {
  createStore,
  applyMiddleware,
  Store,
  compose as rawCompose,
} from 'redux';

import { persistStore } from 'redux-persist';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createAppStore = (initialState: State): any => {
  let store;

  const middleware = [thunk];

  const enhancer = compose(applyMiddleware(...middleware));

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { persistReducer } = require('redux-persist');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage,
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      enhancer,
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(rootReducer, initialState, enhancer);
  }

  return store;
};

export default createAppStore;
