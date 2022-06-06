import styles from "./Header.module.css";
// import DateImg from "./date.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        {/* <span className={styles.heart}><FontAwesomeIcon icon={faHeart} /></span> */}
        <div className={styles.name}>
          {diffDays == 0 ? `D-day` : `D${diffDays}`}
          {/* D{ diffDays } */}
          {/* 09/03 */}
          {/* <img src={DateImg} className={styles.dateImg} alt="0903" /> */}
        </div>
        <div className={styles.name}>박지영</div>
      </div>
      {/* <div className={styles.second}>9월 3일 토요일 오전 11시 아벤티움</div> */}
  </div>
 );
}