import * as React from 'react';

//Styles
import styles from './OurServices.module.scss';

const PEOPLE_PROFILE = [
  {
    name:'Sebastian Buitrago',
    position: 'Planner',
    photo: '/images/people/foto-sebas.png'
  },
  {
    name:'Sergio Gonzalez',
    position: 'Direccion de Arte',
    photo: '/images/people/foto-sergio.png'
  },
  {
    name:'Julian Borda',
    position: 'Digital Media Planner',
    photo: '/images/people/foto-juli.png'
  },
  {
    name:'Sergio Galindo',
    position: 'Community Manager',
    photo: '/images/people/foto-sergio-d.png'
  }
]

const OurServices: React.FC = () => (
  <section className={styles.container}>
    <h1>
      <span>NUESTROS</span>
      <span>SERVICIOS</span>
    </h1>
    <span className={styles.line} />
    <div className={styles.people}>
      {/* {PEOPLE_PROFILE.map((person, i)=>(
        <div key={i}>
          <img src={person.photo} alt={person.name}/>
          <div className={styles.texts}>
            <h2>{person.name}</h2>
            <h3>{person.position}</h3>
          </div>
        </div>
      ))} */}
    </div>
  </section>
);

export default OurServices;
