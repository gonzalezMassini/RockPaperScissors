import Rules from './components/Rules/Rules';
import ScoreHeader from './components/ScoreHeader/ScoreHeader';
import Game from './components/Game/Game';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [rules, setRules] = useState(false);
  const rulesToggle = () => {
    setRules((prev) => !prev);
  };
  return (
    <div className={styles.app}>
      <ScoreHeader />

      {rules ? <Rules /> : <Game />}
      <div className={styles.rulesBtn} onClick={() => rulesToggle()}>
        Rules
      </div>
    </div>
  );
}

export default App;
