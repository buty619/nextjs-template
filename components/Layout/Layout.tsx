import * as React from 'react';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';

//Styles
import styles from './Layout.module.scss';

const name = 'Next Js Template';
export const siteTitle = 'Next.js Sample Website';

interface Props {
  children?: JSX.Element[];
  home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/images/inHouse.png"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img
                src="/images/inHouse.png"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
