import styles from "./Header.module.css";
import DateImg from "./date.png";

export default function Header() {
 return (
  <div className={styles.header}>
        <span>전대한</span>
        <span><img src={DateImg} className={styles.dateImg} alt="0903" /></span>
        <span> 박지영</span>
  </div>
 );
}