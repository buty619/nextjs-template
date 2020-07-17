import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import createAppStore from '../createAppStore';

// Global Style
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
  const store = createAppStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
