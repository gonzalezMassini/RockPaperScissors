import React from 'react';
import styles from './ScoreHeader.module.css';
import { ReactComponent as Title } from '../../assets/images/logo.svg';
const ScoreHeader = ({ score }) => {
  return (
    <div className={styles.container}>
      <div className={styles.gameName}>
        <Title />
      </div>
      <div className={styles.score}>
        <p className={styles.scoreTitle}> Score</p>
        <p className={styles.scoreNumber}>{score}</p>
      </div>
    </div>
  );
};

export default ScoreHeader;
