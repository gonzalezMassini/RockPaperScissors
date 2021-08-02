import React from 'react';
import styles from './Rules.module.css';
import { ReactComponent as RulesImage } from '../../assets/images/image-rules.svg';

const Rules = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>RULES</div>
      <RulesImage />
    </div>
  );
};

export default Rules;
