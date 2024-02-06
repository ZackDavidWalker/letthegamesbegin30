import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import styles from '../styles/button.module.css'; // Import the CSS module

const CountdownButton = ({ label, targetDate, linkTo }) => {
  const [countdownText, setCountdownText] = useState('');
  const [isClickable, setIsClickable] = useState(false);
  const router = useRouter(); // Use useRouter to access the router object

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdownText('freigeschaltet');
        setIsClickable(true); // Enable the link once the countdown has expired
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdownText(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleButtonClick = () => {
    if (isClickable) {
      router.push(linkTo); // Use router.push for navigation
    }
  };

  return (
    <button className={styles.largeWhiteButton} onClick={handleButtonClick} disabled={!isClickable}>
      {label}
      <br />
      <p className={styles.buttoncountdowntext}>
        {countdownText}
      </p>
    </button>
  );
};

export default CountdownButton;
