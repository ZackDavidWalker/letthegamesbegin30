// components/Content.js

import CountdownButton from './CountdownButton'; // Import the CountdownButton component
import styles from '../styles/content.module.css'; // Import the CSS module
import { useRouter } from 'next/router'; // Import useRouter from next/router

const Content = () => {
  const targetDate1 = new Date('2024-02-06T04:05:00');
  const targetDate2 = new Date('2024-02-06T04:30:00');
  const targetDate3 = new Date('2024-02-06T06:00:00');
  const router = useRouter(); // Use useRouter to access the router object

  const openRules = () => {
      router.push("/regeln"); // Use router.push for navigation
  };

  return (
    <div className={styles.contentContainer}>
      {/* Image at the top */}
      <img src="hero.png" className={styles.largeImage} />

      {/* Buttons in the lower half */}
      <div className={styles.buttonContainer}>
        {/* First row with one button */}
        <div className='buttonRow'>
            <button className={styles.whiteButton} onClick={openRules}>Anleitung</button>
        </div>

        {/* Second row with three buttons */}
        <div className='buttonRow'>
            <CountdownButton label="Das verschwundene Bild" targetDate={targetDate1} linkTo="/dasVerschwundeneBild"/>
            <CountdownButton label="Acrosport-Affen" targetDate={targetDate2} linkTo="/acrosportAffen"/>
            <CountdownButton label="Das Chiffrekonglomerat" targetDate={targetDate3} linkTo="/chiffrekonglomorat"/>
        </div> 
      </div>
    </div>
  );
};

export default Content;
