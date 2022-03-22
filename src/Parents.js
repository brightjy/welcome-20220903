import styles from "./Parents.module.css";
// import Calendar from "./Calendar.js";
import Contact from "./Contact";
import { useState } from "react";

export default function Parents(props) {
  const {} = props;
  const [popup, handlePopup] = useState(false);
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>- 초대합니다 - </p>
      <div className={styles.message}>
        <p>사랑하는 두 사람이</p>
        <p>인생에 오직 하나뿐인</p>
        <p>영원한 친구가 되려합니다.</p>
        <p>귀한 걸음으로 축복하여 주시면</p>
        <p>더없는 기쁨이 되겠습니다.</p>
      </div>
      <div className={styles.parents}>
        <p><span>전상준 김순옥</span>의 장남 <span>대한</span></p>
        <p><span>박상철 이지연</span>의 차녀 <span>지영</span></p>
      </div>
      <div>
        <a className={styles.contact} 
           onClick={() => {
             handlePopup(true);
          }}
        >
          혼주에게 연락하기
        </a>
        {popup && <Contact onClose={handlePopup} />}
      </div>
      {/* <Calendar /> */}
    </div>
  )
}