import styles from "./Poet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Calendar from "./calendar.png";

export default function Poet() {
  return (
    <div className={styles.wrap}>
      <div>
        <img src={Calendar} alt="calendar image" className={styles.img} />
      </div>
      {/* <div className={styles.poet}>
        <FontAwesomeIcon icon={ faHeart } className={styles.icon}/>
        <p><br></br></p>
        <p>사랑하는 사람이기보다는</p>
        <p>진정한 친구이고 싶다.</p>
        <p>다정한 친구이기보다는</p>
        <p>진실이고 싶다.</p>
        <p><br></br></p>
        <p>순간의 지나가는 우연이기보다는</p>
        <p>영원한 친구로 남고 싶었다.</p>
        <p>언젠가는 헤어져야할 너와 나지만</p>
        <p>아름다운 추억으로 남을 수 있는</p>
        <p>친구이고 싶다.</p>
        <p><br></br></p>
        <p>비는 싫지만 소나기는 좋고</p>
        <p>인간은 싫지만 너만은 좋다.</p>
      </div> */}
    </div>
  );
}