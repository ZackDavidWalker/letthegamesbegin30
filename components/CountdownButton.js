// components/CountdownButton.js

import { useState, useEffect } from 'react';
import styles from '../styles/button.module.css'; // Import the CSS module

const CountdownButton = ({ label, targetDate }) => {
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

        setCountdownText(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <button className={styles.largeWhiteButton}>
      {label}
      <br />
      <p className={styles.buttoncountdowntext}>
        {countdownText}
      </p>
    </button>
  );
};

export default CountdownButton;
