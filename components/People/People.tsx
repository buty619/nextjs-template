import * as React from 'react';

//Styles
import styles from './People.module.scss';

const PEOPLE_PROFILE = [
  {
    name:'Sebastian Buitrago',
    position: 'Planner & Fotógrafo',
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

const People: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.people}>
      {PEOPLE_PROFILE.map((person, i)=>(
        <div key={i}>
          <img src={person.photo} alt={person.name}/>
          <div className={styles.texts}>
            <h2>{person.name}</h2>
            <h3>{person.position}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default People;
