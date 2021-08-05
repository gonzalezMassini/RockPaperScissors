import React from 'react';
import styles from './Results.module.css';
import { ReactComponent as Rock } from '../../../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../../../assets/images/icon-scissors.svg';
import { ReactComponent as Paper } from '../../../assets/images/icon-paper.svg';

const Reuslts = ({ playResult, result }) => {
  return (
    <div className={styles.title} onClick={() => playResult()}>
      {result}
      <Rock className={styles.rock} onClick={() => playResult('rock')} />
      <Scissors
        className={styles.scissors}
        onClick={() => playResult('scissors')}
      />
      <Paper className={styles.paper} onClick={() => playResult('paper')} />
    </div>
  );
};

export default Reuslts;
