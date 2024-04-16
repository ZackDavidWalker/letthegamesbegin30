// pages/index.js

import { useState, useEffect } from 'react';
import Content from '../components/Content'; // Import the Content component
import styles from '../styles/styles.module.css'; // Import the CSS module

const Home = () => {
  const targetDate = new Date('2024-04-27T14:00:00'); // Set your desired end date and time
  const [countdownText, setCountdownText] = useState('');

  var warningShown = false;

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

    return () => clearInterval(interval);
  }, [targetDate]);

  const countdownElement = countdownText !== '' && (
    <div id="countdown" className={`${styles.countdown} ${countdownText === '' ? '' : styles.red}`}>
      {countdownText}
    </div>
  );

  return (
    <div className={styles.container}>
      {countdownText !== '' && (
        <img src="motiv.png" className={styles.motiv} />
      )}

      <div className={styles.textContainer}>
      {countdownText !== '' && (
        <>
        <div>
          <img className={styles.hero} src='hero.png' />
          <p className={styles.textAboveBelow}>
            Liebe Teilnehmer*innen, <br/>
            wilkommen zur <b>Gamemaster's Odyssee</b>. <br/> <br/>
            Ihr habt es schonmal bis herhin geschafft - Gratulation! <br/>
            Aber das war nur ein kleiner Geschmack, um euch auf die Resie vorzubereiten. <br/> <br/>
            Macht euch bereit für das Abenteuer. Es beginnnt in
          </p>
        </div>

        {countdownElement}

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
