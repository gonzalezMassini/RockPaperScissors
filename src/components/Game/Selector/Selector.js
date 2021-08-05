import React from 'react';
import styles from './Selector.module.css';
import { ReactComponent as Rock } from '../../../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../../../assets/images/icon-scissors.svg';
import { ReactComponent as Paper } from '../../../assets/images/icon-paper.svg';

const Selector = ({ playResult }) => {
  return (
    <div className={styles.container}>
      <Rock className={styles.rock} onClick={() => playResult('rock')} />
      <Scissors
        className={styles.scissors}
        onClick={() => playResult('scissors')}
      />
      <Paper className={styles.paper} onClick={() => playResult('paper')} />
    </div>
  );
};
export default Selector;
