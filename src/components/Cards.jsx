import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.divCards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  );
}
