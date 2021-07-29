import React from 'react';
import styles from './ScoreHeader.module.css';
const ScoreHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameName}>
        <p> Rock </p> <p> Paper</p> <p>Scissors</p>
      </div>
      <div className={styles.score}>
        <p className={styles.scoreTitle}> Score</p>
        <p className={styles.scoreNumber}>0</p>
      </div>
    </div>
  );
};

export default ScoreHeader;
