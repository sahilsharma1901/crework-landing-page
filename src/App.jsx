import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
        <div className={styles.backgroundCircle}>
          <div className={styles.innerCircle}/>
        </div>
        <Navbar/>
        <Hero/>
    </div>
  );
}

export default App;
