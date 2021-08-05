import React, { useState } from 'react';
import Selector from './Selector/Selector';
import Results from './Results/Reuslts';
import styles from './Game.module.css';

const Game = ({ setScore }) => {
  const [isPlay, setIsPlay] = useState(false);
  // const [playerSelection, setIsPlayerSelection] = useState('');
  const cpuSelection = ['scissors', 'paper', 'rock'];
  const [result, setResult] = useState('itsworking');

  const playResult = (playerSelection) => {
    let housePick = cpuSelection[Math.floor(Math.random() * 3)];
    if (isPlay === true) {
      return setIsPlay((prev) => !prev);
    }
    if (playerSelection === housePick) {
      setResult('draw');
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'rock' && housePick === 'scissors') {
      setResult('you win');
      setScore((prev) => prev + 1);
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'rock' && housePick === 'paper') {
      setResult('you lose');
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'scissors' && housePick === 'rock') {
      setResult('you lose');
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'scissors' && housePick === 'paper') {
      setResult('you win');
      setScore((prev) => prev + 1);
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'paper' && housePick === 'rock') {
      setResult('you win');
      setScore((prev) => prev + 1);
      setIsPlay((prev) => !prev);
    } else if (playerSelection === 'paper' && housePick === 'scissors') {
      setResult('you lose');
      setIsPlay((prev) => !prev);
    }
  };

  return (
    <div className={styles.container}>
      {isPlay ? (
        <Results result={result} playResult={playResult} />
      ) : (
        <Selector playResult={playResult} />
      )}
    </div>
  );
};

export default Game;
