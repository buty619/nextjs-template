import React from 'react';
import { AppProps } from 'next/app';

// Global Style
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
