import * as React from 'react';

//Styles
import styles from './Banner.module.scss';

interface Props {
  children?: JSX.Element[];
  home?: boolean;
}

const Banner: React.FC<Props> = () => (
  <section className={styles.container}>
    <img src="/images/header.jpg" className={styles.img} />
    <div className={styles.arrow}>
      <img src="/images/flecha.svg" className={styles.img} />
    </div>
  </section>
);

export default Banner;
