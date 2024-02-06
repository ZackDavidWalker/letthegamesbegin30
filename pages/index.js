// pages/index.js

import { useState, useEffect } from 'react';
import Content from '../components/Content'; // Import the Content component
import styles from '../styles/styles.module.css'; // Import the CSS module

const Home = () => {
  const targetDate = new Date('2024-04-27T14:00:00'); // Set your desired end date and time
  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdownText('');
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const isFinalMinute = minutes === 0 && seconds <= 60;

        setCountdownText(`${hours}h ${minutes}m ${seconds}s`);
        document.getElementById('countdown').classList.toggle(styles.red, isFinalMinute);
      }
    }, 1000);

    const isMobile = window.innerWidth < 600;

    if (isMobile) {
      alert('Ich empfehle euch, diese Seite auf einem Laptop zu öffnen, wenn ihr Darstellungsprobleme vermeiden wollt :)');
    }

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
      {countdownText !== '' && (
        <>
        <div>
          <p className={styles.textAboveBelow}>
            Wilkommen! Schön, dass ihr es schonmal bis hierher geschafft habt.
            Das bedeutet, dass ihr das erste Rätsel schon gelöst habt. 
            Das war aber nur ein kleiner Geschmack, um euch auf die bevorstehende Reise vorzubereiten.
            Das Abenteuer beginnt in
          </p>
        </div>

        <div id="countdown" className={styles.countdown}>
          {countdownText}
        </div>

        <div>
          <p className={styles.textAboveBelow}>Viel Erfolg!</p>
        </div>
          </>
        )}

        {countdownText === '' && <Content />} {/* Render Content component when countdown expires */}
      </div>
    </div>
  );
};

export default Home;
