import styles from "./Greeting.module.css";
// import Calendar from "./Calendar.js";
import Contact from "./Contact";
import { useState } from "react";

export default function Gallery(props) {
  const {} = props;
  const [popup, handlePopup] = useState(false);
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>- Gallery - </p>
    </div>
  )
}