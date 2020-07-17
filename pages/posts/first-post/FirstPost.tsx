import * as React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../actions/language.actions';
import { useSelector } from 'react-redux';
import { State } from '../../../reducers/root.reducer';
import { Language } from '../../../global';

// Components
import Head from 'next/head';
import Layout from '../../../components/Layout';
import classnames from 'classnames';

// Styles
import styles from './FirstPost.module.scss';

const FirstPost: React.FC = () => {
  const dispach = useDispatch();

  const [counter, setCounter] = React.useState<number>(0);

  const getReduxState = useSelector<State, Language>(
    (state) => state.language.data,
  );

  const handleIncrease = React.useCallback(() => {
    setCounter(counter + 1);
    if (getReduxState == 'eng') {
      dispach(setLanguage('spa'));
      return;
    }
    dispach(setLanguage('eng'));
  }, [counter, dispach, getReduxState]);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className={classnames(styles.title, styles.hover)}>
        Example post to show to handle state and classnames
      </h1>
      <p>new component state: {counter}</p>
      <p>new redux state: {getReduxState}</p>
      <button onClick={handleIncrease}>increace</button>
    </Layout>
  );
};

export default FirstPost;
