import styles from "./Cover.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Calendar from "./Calendar";


export default function Cover() {
  return (
    <div className={styles.wrap}>
      <div className={styles.names}>
        <span className={styles.mediumText}>전대한 </span>
        <FontAwesomeIcon icon={ faHeart } className={styles.smallText}/>
        <span className={styles.mediumText}> 박지영</span>
      </div>
      <div className={styles.date}>
        <Calendar />
        {/* <p className={styles.largeText}>09</p>
        <p className={styles.largeText}>03</p> */}
      </div>
      <div className={styles.site}>
        <span className={styles.smallText}>9월 3일 (토) 오전 11시 아벤티움</span>
      </div>
    </div>
  );
}