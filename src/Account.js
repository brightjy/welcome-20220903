import styles from "./Account.module.css";
// import Calendar from "./Calendar.js";
import AccountDetailM from "./AccountDetailM";
import { useState } from "react";
import AccountDetailW from "./AccountDetailW";

export default function Account(props) {
  const {} = props;
  const [popup1, handlePopup1] = useState(false);
  const [popup2, handlePopup2] = useState(false);
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>- 축하의 마음전하기 - </p>
      <div className={styles.button}>
        <a className={styles.contact} 
           onClick={() => {
             handlePopup1(true);
          }}
        >
          신랑 측 계좌번호
        </a>
        {popup1 && <AccountDetailM onClose={ handlePopup1 } />}
      </div>
      <div className={styles.button}>
        <a className={styles.contact} 
           onClick={() => {
             handlePopup2(true);
          }}
        >
          신부 측 계좌번호
        </a>
        {popup2 && <AccountDetailW onClose={ handlePopup2 } />}
      </div>
    </div>
  )
}