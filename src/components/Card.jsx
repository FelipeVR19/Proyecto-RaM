import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;
  
  return (
    <div className={styles.divCard}>
      
      
      <ul className= {styles.unorderedList}>
      <button className={styles.boton} onClick={onClose}>X</button>
      <h2 className={styles.title}>{name}</h2>
      <li className={styles.listItem}>{status}</li>
      <li className={styles.listItem}>{species}</li>
      <li className={styles.listItem}>{gender}</li>
      <li className={styles.listItem}>{origin.name}</li>
      <img src={image} alt={name} />
      </ul>
    </div>
  );
}
