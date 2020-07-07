// Components
import Head from 'next/head';
import Layout from '../components/Layout';
import { siteTitle } from '../components/Layout/Layout';
import Link from 'next/link';
import fetch from 'node-fetch';

// Styles
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps = async () => {
  const preLoadData = await fetch(
    'https://pokeapi.co/api/v2/pokemon-form/25',
  ).then((res) => res.json());
  return { props: { preLoadData } };
};

const Home = ({ preLoadData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <h2>Template for make Next js app</h2>
      <p>with:</p>
      <ul>
        <li>TypeScript</li>
        <li>type Check</li>
        <li>Global Types definition</li>
        <li>Sass</li>
        <li>classnames</li>
        <li>set global css</li>
        <li>set global utils css</li>
        <li>use of getStaticProps</li>
        <li>fetch to api</li>
        <li>husky for git flow</li>
        <li>prettier</li>
      </ul>
      <h3>
        <Link href="/posts/first-post">Go to example</Link>
      </h3>
      <section>
        <h1 className={utilStyles.heading2Xl}>
          Example of pre load Data from fetch API
        </h1>
        <p>{preLoadData.name}</p>
        <img src={preLoadData.sprites.front_default} alt={preLoadData.name} />
      </section>
    </section>
  </Layout>
);

export default Home;
