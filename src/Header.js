import styles from "./Header.module.css";
import DateImg from "./date.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
 return (
  <div className={styles.header}>
      <div className={styles.first}>
        <div className={styles.name}>전대한</div>
        {/* <span className={styles.heart}><FontAwesomeIcon icon={faHeart} /></span> */}
        <div className={styles.date}>
          <img src={DateImg} className={styles.dateImg} alt="0903" />
        </div>
        <div className={styles.name}>박지영</div>
      </div>
      {/* <div className={styles.second}>9월 3일 토요일 오전 11시 아벤티움</div> */}
  </div>
 );
}