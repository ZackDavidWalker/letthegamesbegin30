// components/Content.js

import CountdownButton from './CountdownButton'; // Import the CountdownButton component
import styles from '../styles/content.module.css'; // Import the CSS module

const Content = () => {
  const targetDate1 = new Date('2024-02-10T12:00:00');
  const targetDate2 = new Date('2024-02-11T15:30:00');
  const targetDate3 = new Date('2024-02-12T18:45:00');

  return (
    <div className={styles.contentContainer}>
      {/* Image at the top */}
      <img src="hero.png" className={styles.largeImage} />

      {/* Buttons in the lower half */}
      <div className={styles.buttonContainer}>
        {/* First row with one button */}
        <div className='buttonRow'>
            <button className={styles.whiteButton}>Die Regeln</button>
        </div>

        {/* Second row with three buttons */}
        <div className='buttonRow'>
            <CountdownButton label="Das verschwundene Bild" targetDate={targetDate1} />
            <CountdownButton label="Acrosport-Affen" targetDate={targetDate2} />
            <CountdownButton label="Das Chiffrekonglomorat" targetDate={targetDate3} />
        </div>
      </div>
    </div>
  );
};

export default Content;
