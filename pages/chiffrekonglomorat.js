// pages/page3.js

import styles from '../styles/chiffre.module.css'; // Import the CSS module

const Chiffrekonglomorat = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Das Chiffrekonglomerat</h1>

        <div className={styles.horizontalSeparator}></div>

        <div className={styles.lineSpacing}>Arthur Scherbius war ein genialer Ingenieur, Erfinder und Kryptograf, dessen Arbeit maßgeblich zur Entwicklung moderner Verschlüsselungstechniken beigetragen hat. <br/>
          Nach seinem Vorbild habe ich das Chiffrekonglomerat entwickelt - die Königsdisziplin des Rallyes mit einer sehr hohen Schwierigkeit und ein Rätsel, das ihr nun in Angriff nehmen müsst. <br /> 
          Eure Aufgabe ist simpel: Dekodiert die Chiffres, löst das Rätsel des Zahlencodes, schickt mir das von Arthur Scherbius versteckte Codewort und erweist euch somit würdig des letzten Hinweises auf die Event-Location. <br/><br/>
          Viel Erfolg!<br/> <br/></div>

          <div>
          Nutzt den Inhalt eures Pakets in Verbindung mit den drei Hinweisen auf dieser Seite um an die Lösung zu gelangen.
          </div>

          <div className={styles.horizontalSeparator}></div>

          <div className={styles.equations}>
          A + A + A = 12 <br/>
          B + A + B + D = 26<br/>
          A + B + C = 11<br/>
          A + B + C + D = 21<br/>
          B + E + F = 30<br/>
          A + C + F = 14<br/>
          </div>

          <div className={styles.horizontalSeparator}></div>

          <img src="tastatur.png" className={styles.smallImage} />

          <div className={styles.horizontalSeparator}></div>

          <img src="gates.png" className={styles.smallImage} />


      </div>
    );
  };
  
  export default Chiffrekonglomorat;
  