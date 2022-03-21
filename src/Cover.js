import styles from "./Cover.module.css";
import SampleImg from "./sample.png";
// import Calendar from "./Calendar";


export default function Cover() {
  return (
    <div>
      <img src={SampleImg} alt="sample" className={styles.img} />
    </div>
  );
}