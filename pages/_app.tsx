import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import createAppStore from '../createAppStore';
import { PersistGate } from 'redux-persist/integration/react';
import { initialState } from './../reducers/root.reducer';

// Global Style
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = createAppStore(initialState);
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
