import styles from "./Poet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Poet() {
  return (
    <div className={styles.wrap}>
      <div className={styles.poet}>
        <p>사랑하는 이여</p>
        <p>마침내 나는 너에게 간다</p>
        <FontAwesomeIcon icon={ faHeart } className={styles.icon}/>
      </div>
      <div className={styles.parents}>
        <p><span>전상준 김순옥</span>의 장남 <span>대한</span></p>
        <p><span>박상철 이지연</span>의 차녀 <span>지영</span></p>
      </div>
    </div>
  );
}