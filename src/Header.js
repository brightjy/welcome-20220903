import styles from "./Header.module.css";
import moment from "moment";

export default function Header(props) {
 const date1 = moment();
 const date2 = moment("2022-09-03");
 const diffDays = date1.diff(date2, "days");
 return (
  <div className={styles.header}>
      <div className={styles.first}>
        <div className={styles.name}>
          전대한
        </div>
        <div className={styles.name}>
          {diffDays == 0 ? `D-day` : `D${diffDays}`}
        </div>
        <div className={styles.name}>박지영</div>
      </div>
  </div>
 );
}