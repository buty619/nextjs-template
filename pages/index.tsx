import React from 'react';

// Components
import Head from 'next/head';
import Layout from '../components/Layout';
import { siteTitle } from '../components/Layout/Layout';
import Link from 'next/link';
import fetch from 'node-fetch';

// Types
import { GetStaticProps } from 'next';
import { PreLoadData } from '../global';

// Styles
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps: GetStaticProps<{
  preLoadData: PreLoadData;
}> = async () => {
  const preLoadData = await fetch(
    'https://pokeapi.co/api/v2/pokemon-form/25',
  ).then((res) => res.json());
  return { props: { preLoadData } };
};

interface Props {
  preLoadData: PreLoadData;
}

const Home: React.FC<Props> = ({ preLoadData }) => (
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
        <li>eslint for TypeScript</li>
        <li>
          example of how to manage dinamic routes
          <ul>
            <li>
              <Link href="/dinamic-route/bulbasaur">
                <a>Go to bulbasaur (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
            <li>
              <Link href="/dinamic-route/ivysaur">
                <a>Go to ivysaur (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
            <li>
              <Link href="/dinamic-route/venusaur">
                <a>Go to bulbasaur (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
            <li>
              <Link href="/dinamic-route/charmander">
                <a>Go to charmander (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
            <li>
              <Link href="/dinamic-route/charmeleon">
                <a>Go to charmeleon (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
            <li>
              <Link href="/dinamic-route/charizard">
                <a>Go to charizard (pages/dinamic-route/pokeCard)</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <h3>
        <Link href="/posts/first-post">
          <a>Go to example</a>
        </Link>
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
