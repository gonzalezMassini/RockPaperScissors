import React from 'react';
import styles from './Results.module.css';
import { ReactComponent as Rock } from '../../../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../../../assets/images/icon-scissors.svg';
import { ReactComponent as Paper } from '../../../assets/images/icon-paper.svg';

const Reuslts = ({
  playResult,
  result,
  playerSelectionResult,
  cpuSelectionResult,
}) => {
  return (
    <div className={styles.title} onClick={() => playResult()}>
      {cpuSelectionResult === 'rock' ? (
        <div>
          {'the house picked'}
          <Rock className={styles.rock} onClick={() => playResult('rock')} />
        </div>
      ) : null}
      {cpuSelectionResult === 'scissors' ? (
        <div>
          {'the house picked'}
          <Scissors
            className={styles.scissors}
            onClick={() => playResult('scissors')}
          />
        </div>
      ) : null}
      {cpuSelectionResult === 'paper' ? (
        <div>
          {'the house picked'}
          <Paper className={styles.paper} onClick={() => playResult('paper')} />
        </div>
      ) : null}
      {result}
      {playerSelectionResult === 'rock' ? (
        <div>
          {'you picked'}
          <Rock className={styles.rock} onClick={() => playResult('rock')} />
        </div>
      ) : null}

      {playerSelectionResult === 'scissors' ? (
        <div>
          {'you picked'}
          <Scissors
            className={styles.scissors}
            onClick={() => playResult('scissors')}
          />
        </div>
      ) : null}
      {playerSelectionResult === 'paper' ? (
        <div>
          {'you picked'}
          <Paper className={styles.paper} onClick={() => playResult('paper')} />
        </div>
      ) : null}
    </div>
  );
};

export default Reuslts;
