import * as React from 'react';

// Components
import Head from 'next/head';
import Layout from '../../components/Layout';
import fetch from 'node-fetch';

// Styles
import utilStyles from '../../styles/utils.module.scss';
import styles from './PokeCard.module.scss';

// Types
import { PokeType } from '../../global';
import { GetStaticProps } from 'next';

// Redux
import { useSelector } from 'react-redux';
import { State } from '../../reducers/root.reducer';
import { Language } from '../../global';

const pokePaths = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
  { name: 'charmander', id: 4 },
  { name: 'charmeleon', id: 5 },
  { name: 'charizard', id: 6 },
];

// TODO: handle GetStaticPaths type like: export const "getStaticPaths = (): GetStaticPaths<pokePath> => ..."
export const getStaticPaths = (): unknown => {
  const paths = pokePaths.map(({ name }) => ({
    params: { pokeId: name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  preLoadPokeData: PokeType;
}> = async ({ params }) => {
  const pokeId = pokePaths.find((pokemon) => pokemon.name === params.pokeId);
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokeId.id}`,
  ).then((res) => res.json());

  const preLoadPokeData = {
    name: pokemon.name,
    img: pokemon.sprites.front_default,
  };
  return {
    props: {
      preLoadPokeData,
    },
  };
};

interface Props {
  preLoadPokeData: PokeType;
}

const PokeId: React.FC<Props> = ({ preLoadPokeData }) => {
  const getReduxState = useSelector<State, Language>(
    (state) => state.language.data,
  );
  return (
    <Layout>
      <Head>
        <title>Pokemon: {preLoadPokeData.name}</title>
      </Head>
      <section className={styles.container}>
        <h2 className={utilStyles.heading2Xl}>{preLoadPokeData.name}</h2>
        <p>handle redux state: {getReduxState}</p>
        <img
          src={preLoadPokeData.img}
          alt={preLoadPokeData.name}
          className={utilStyles.borderCircle}
        />
      </section>
    </Layout>
  );
};
export default PokeId;
