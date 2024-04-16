// pages/page1.js

import styles from '../styles/verschwundeneBild.module.css'; // Import the CSS module

const DasVerschwundeneBild = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Das verschwundene Bild</h1>

        <div className={styles.horizontalSeparator}></div>

        <div className={styles.lineSpacing}>In dem Paket, das ihr erhalten habt befinden sich drei Bilder. 
           Naja, eigentlich sollten es vier sein... aber mir ist auf unerklärliche Weise das vierte Bild abhanden gekommen. <br />
           Aber vielleicht könnt ihr mir ja helfen und ein neues machen? Leider weiß ich auch nicht mehr, was auf diesem vierten Bild abgebildet war. <br/>
           Es war irgendein bekanntes Stuttgarter Wahrzeichen, aber ich kann mich an Genaueres nicht erinnern. 
           Tut mir doch einen Gefallen und findet es für mich heraus, begebt euch an diesen Ort und macht dort ein Gruppenselfie. <br/>
           Schickt mir dann das Bild zu und ich gebe euch einen Hinweis auf die Event-Location für heute Abend. <br/> <br/>
           Das folgende Rätsel sollte euch auf die Sprünge helfen...</div>

           <div className={styles.raetsel}>
           In einer Runde froh und heiter, <br />
           trinkt man mich oft, ein Geheimnis weiter.<br/>
           Doch in mir ruht, verborgen tief,<br/>
           ein Schatz, der den Aufmerksamen rief.<br/>
           Genieße den Trank, sei klug und leise,<br/>
           nach dem Genuss, im Schatten der Reise. <br/>
           Denn nach dem Trank, so ist's gedacht,<br/>
           verbirgt sich mehr in stiller Nacht.<br/>
           Ein Knacken, Splittern, zart und leise,<br/>
           führt dich zum Glase, gibt dir Weise.<br/>
           Das Geheimnis liegt in Scherben klar,<br/>
           zerbrich die Hülle, steh fürwahr.<br/>
           </div>
      </div>
    );
  };
  
  export default DasVerschwundeneBild;
  