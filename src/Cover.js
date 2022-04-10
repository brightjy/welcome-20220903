import styles from "./Cover.module.css";
import Footer from "./Footer";
import Header from "./Header";
import SampleImg from "./sample.png";
import moment from "moment";
// import Calendar from "./Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function Cover() {
  const date1 = moment();
  const date2 = moment("2022-09-03");
  const diffDays = date2.diff(date1, "days");
  return (
    <div className={styles.wrap}>
      <div className={styles.title}> 
        <span className={styles.name}>대한이, 지영이</span>
        <span>
          {diffDays != 0 ? ` 결혼식까지` : ` 결혼식`}
        </span>
        <span className={styles.dDay}>
          {diffDays != 0 ? ` D-${diffDays}` : `D-day`}
        </span>   
      </div>
      <div>
        <img src={SampleImg} alt="sample" className={styles.img} />
      </div>
      <div className={styles.when}>
        <span>2022년 09월 03일 토요일 <br></br> 오전 11시 / 아벤티움</span>
      </div>
    </div>
  );
}