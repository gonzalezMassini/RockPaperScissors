import React from 'react';
import styles from './Selector.module.css';
import { ReactComponent as Rock } from '../../../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../../../assets/images/icon-scissors.svg';
import { ReactComponent as Paper } from '../../../assets/images/icon-paper.svg';
import { ReactComponent as Triangle } from '../../../assets/images/bg-triangle.svg';
const Selector = () => {
  return (
    <div className={styles.container}>
      <Triangle />
      <Rock className={styles.rock} />
      <Scissors className={styles.scissors} />
      <Paper className={styles.paper} />
    </div>
  );
};
export default Selector;
