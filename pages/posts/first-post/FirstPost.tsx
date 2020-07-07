import * as React from 'react';

// Components
import Head from 'next/head';
import Layout from '../../../components/Layout';
import classnames from 'classnames';

// Styles
import styles from './FirstPost.module.scss';

const firstPost = () => {
  const [counter, setCounter] = React.useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className={classnames(styles.title, styles.hover)}>
        Example post to show to handle state and classnames
      </h1>
      <p>new state: {counter}</p>
      <button onClick={handleIncrease}>increace</button>
    </Layout>
  );
};
export default firstPost;
