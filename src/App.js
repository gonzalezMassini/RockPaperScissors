import Results from './components/Results/Reuslts';
import Rules from './components/Rules/Rules';
import ScoreHeader from './components/ScoreHeader/ScoreHeader';
import Selector from './components/Selector/Selector';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <ScoreHeader />
      <Selector />
      <Results />
      <Rules />
    </div>
  );
}

export default App;
