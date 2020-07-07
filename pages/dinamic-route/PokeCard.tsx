import * as React from 'react';

// Components
import Head from 'next/head';
import Layout from '../../components/Layout';
import fetch from 'node-fetch';

// Styles
import utilStyles from '../../styles/utils.module.scss';
import styles from './PokeCard.module.scss';

// Types
import { pokeType } from '../../global';

const pokePaths = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
  { name: 'charmander', id: 4 },
  { name: 'charmeleon', id: 5 },
  { name: 'charizard', id: 6 },
];

export const getStaticPaths = () => {
  const paths = pokePaths.map(({ name }) => ({ params: { pokeId: name } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pokeId = pokePaths.find((pokemon) => pokemon.name === params.pokeId);
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokeId.id}`,
  ).then((res) => res.json());
  const preLoadPokeData = {
    name: pokemon.name,
    img: pokemon.sprites.front_default,
  };
  return { props: { preLoadPokeData } };
};

interface Props {
  preLoadPokeData: pokeType;
}

const firstPost: React.FC<Props> = ({ preLoadPokeData }) => {
  return (
    <Layout>
      <Head>
        <title>Pokemon: {preLoadPokeData.name}</title>
      </Head>
      <section className={styles.container}>
        <h2 className={utilStyles.heading2Xl}>{preLoadPokeData.name}</h2>
        <img
          src={preLoadPokeData.img}
          alt={preLoadPokeData.name}
          className={utilStyles.borderCircle}
        />
      </section>
    </Layout>
  );
};
export default firstPost;
