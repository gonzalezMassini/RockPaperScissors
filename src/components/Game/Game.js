import React from 'react';
import Selector from './Selector/Selector';
import Results from './Results/Reuslts';
import styles from './Game.module.css';

const Game = () => {
  return (
    <div className={styles.container}>
      <Selector />
      {/* <Results /> */}
    </div>
  );
};

export default Game;
