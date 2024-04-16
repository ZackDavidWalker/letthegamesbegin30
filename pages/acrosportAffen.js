// pages/page2.js

import styles from '../styles/acro.module.css'; // Import the CSS module

const AcrosportAffen = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Acrosport-Affen</h1>

        <div className={styles.horizontalSeparator}></div>

        <div>
          Nun ist es Zeit euch ein wenig sportlich zu betätigen! <br/> <br/> 
          Acrosport ist eine Art des Turnens, bei dem eine Gruppe von Personen zusammenarbeitet, um verschiedene akrobatische Figuren zu machen. <br/>
          Es kombiniert Elemente aus Akrobatik, Gymnastik und Partnerarbeit, um Pyramiden, Menschen-Türme, und andere beeindruckende Formationen zu bilden. <br/>
          Es ist eine unterhaltsame und anspruchsvolle Aktivität, die Teamarbeit und Koordination fördert. <br/> <br/> 
          Bei diesem Teil der Odyssee gibt es keine Rätsel oder Puzzle, die es zu bewältigen gibt. <br/> 
          Stattdessen ist die Aufgabe ganz einfach: Geht zu den Locations in den folgenden Fotos, stellt die jeweiligen Acrosport-Figuren nach und schickt die Bilder an den Gamemaster. <br/>
          Sobald alle Bilder gemacht worden sind und der Gamemaster zufriedengestellt wurde, gibt es den nächsten Hinweis auf die Event-Location. <br/> <br/>
          Bei den Bildern muss eine Regel beachtet werden: Jedes Teammitglied muss Teil mindestens einer Figur sein. Es ist also nicht erlaubt, dass eine Person immer nur den Fotografen spielt. <br/> <br/>

          <p><b>Verletzt euch nicht! Wenn ihr ernsthafte Sorgen habt bei der Ausführung einer Figur, führt sie nur soweit aus, wie ihr es euch zutraut und teilt dies bei dem Bild dem Gamemaster mit. <br/>
          Unnötige Risiken einzugehen ist nicht der Sinn des Spiels!</b></p>

          Viel Spaß! <br/>
        </div>

        <div className={styles.horizontalSeparator}></div>

        <div className={`${styles.acsImgContainer} ${styles.flexContainer}`}>
          <img className={styles.acsImg} src='acs/acs1.png' />
          <img className={styles.acsImg} src='acs/acs2.png' />
          <img className={styles.acsImg} src='acs/acs3.png' />
          <img className={styles.acsImg} src='acs/acs4.png' />
          <img className={styles.acsImg} src='acs/acs5.png' />
        </div>

      </div>
    );
  };
  
  export default AcrosportAffen;
  