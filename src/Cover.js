import styles from "./Cover.module.css";
import SampleImg from "./sample.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import Calendar from "./Calendar";


export default function Cover() {
  return (
    <div>
      <img src={SampleImg} alt="sample" className={styles.img} />
    </div>
  );
}