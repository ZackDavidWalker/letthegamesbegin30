// pages/Rules.js

import styles from '../styles/rules.module.css'; // Import the CSS module

const Rules = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anleitung</h1>
      <div className={styles.horizontalSeparator}></div>
      <div className={styles.rulesContent}>
        <div className={styles.lineSpacing}>
            Euch wird sicherlich bereits aufgefallen sein, dass ihr noch gar nicht wisst, wo die Feierlichkeiten heute Abend stattfinden. Das ist natürlich kein Versehen.
            Eure Aufgabe heute besteht nämlich darin, genau das herauszufinden. Aber wie ihr euch bestimmt vorstellen könnt, wird das nicht trivial sein.
            Ich habe für euch verschiedene Rätsel und Aufgaben vorbereitet, die ihr dafür in euren zugewiesenen Gruppen lösen müsst. Nach jeder abgeschlossenen Station
            erhaltet ihr von mir einen Hinweis, welcher zur Event-Location führt.
            Diese Webseite bildet den zentralen Knotenpunkt dieses Odyssees: hier befinden sich sämtliche Informationen, die ihr benötigt, um die Rallye durchzuführen. <br /> <br />
        
            Um 18 Uhr öffnen die Türen der Event-Location für heute Abend. Bis dahin habt ihr nun Zeit, diese ausfindig zu machen.
            Das erste Team, das an der Event-Location ankommt, erhält die Punkte für dieses Spiel. Vergesst euer Mitbringsel nicht!

        </div>
        
        <h2 className={styles.header}>Ziel des Spiels</h2>

        <div className={styles.lineSpacing}>
            Das Ziel der Gamemaster's Odyssee ist es, so schnell wie möglich die Event-Location ausfindig zu machen. Das macht ihr, indem ihr die drei Aufgaben “Das verschwundene Bild”, “Acrosport-Affen” und “Das Chiffrekonglomerat” erledigt.
            Nach jeder Aufgabe sendet ihr dem Gamemaster (Zack) die Lösung. Ist er zufrieden, gibt er euch einen Hinweis auf die Event-Location. Was genau ihr dafür als Lösung senden müsst, ist von Aufgabe zu Aufgabe verschieden, steht aber jeweils bei der Aufgabe dabei.

            Das erste Team, das die Event-Location findet und dort erscheint, erhält die Punkte für den ersten Platz. Alle weiteren Teams erhalten je nach ihrer Platzierung eine geringere Punktzahl.
        </div>

        <h2 className={styles.header}>Die Regeln</h2>

        <ol className={styles.lineSpacing}>
            <li className={styles.marginedLi}>
                Im Sinne des Wettbewerbs ist es verboten, Informationen über das Spiel oder Lösungen mit anderen Gruppen zu teilen. Nur eine Gruppe kann als Sieger hervorgehen, so bringt dies euch auch nichts. Das Ziel soll sein, gegeneinander anzutreten.
            </li>
            <li className={styles.marginedLi}>
                Es ist ziemlich unmöglich manche Rätsel zu lösen, ohne zusätzliche Online-Ressourcen zu verwenden. Hierbei gibt es keinerlei Einschränkungen. Ihr dürft und <i>sollt</i> alles benutzen, was das Internet hergibt. 
                Herauszufinden, welche Online-Hilfestellungen für das Lösen der Rätsel am geeignetsten sind, kann durchaus als Teil der Herausforderung betrachtet werden.
            </li>
            <li className={styles.marginedLi}>
                Für Hinweise und Hilfe steht euer Gamemaster euch stets zur Verfügung. Wenn ihr irgendwo nicht weiterkommt, könnt ihr ihn um Hilfe bitten. Das erfolgt jedoch nicht ohne Kosten: für jeden gegebenen Hinweis werden Punkte abgezogen.
                Sollte es jedoch ein nicht-behebbares technisches Problem geben, oder ein Rätsel sonst nicht lösbar sein (aus Gründen, die nicht in eurer Kontrolle sind), gibt es selbstverständlich einen Hinweis ohne Punktabzug.
            </li>
            <li className={styles.marginedLi}>
                Bei Fragen oder Unklarheiten zum Ablauf oder zu den Regeln könnt ihr natürlich jederzeit euren Gamemaster kontaktieren. Hierfür gibt es keinen Punktabzug.
            </li>
            <li className={styles.marginedLi}>
                Sobald das erste Team die Event-Location findet, beginnt ein Countdown. Wenn dieser Countdown abgelaufen ist, wird die Event-Location öffentlich mitgeteilt. Ab diesem Zeitpunkt werden nur noch Punkte anhand des Spielfortschritts der jeweiligen Teams vergeben.
                Beispiel: Team X findet die Event-Location, der Countdown läuft ab, Team Y hat nur 2 von 3 Aufgaben erledigt und erhält dementsprechend nur zwei Drittel der möglichen Punkte.
            </li>
            <li className={styles.marginedLi}>
                Die Eventlocation öffnet um 18 Uhr. Falls ihr davor schon alle Rätsel gelöst habt, müsst ihr bis 18 Uhr irgendwie die Zeit totschlagen.
            </li>
            <li className={styles.marginedLi}>
                Sobald ihr denkt, die Event-Location gefunden zu haben, teilt es zur Sicherheit dem Gamemaster zur Verifikation mit.
            </li>
            <li className={styles.marginedLi}>
                Sobald die Eventlocation öffentlich verkündet wurde, muss das Spiel abgebrochen werden. Weitere Punkte können nicht gesammelt werden.
            </li>
            <li className={styles.marginedLi}>
                Ausschlaggebend für den Sieg ist der Ankunftszeitpunkt der ersten Person einer Gruppe an der Event-Location. Für den Sieg müssen also nicht alle Gruppenmitglieder gleichzeitig ankommen.
                Wichtig ist jedoch, dass diese Gruppe zusätzlich alle Aufgaben der Odyssee bereits erledigt hat.  
            </li>
        </ol>

      </div>
    </div>
  );
};

export default Rules;
