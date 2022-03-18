import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calendar.module.css";


function Calendar() {
  const [dDay] = useState(new Date("2022/09/03"));
  return (
    <div className={styles.wrap}>
      <DatePicker wrapperClassName={styles.calendar}
        renderCustomHeader={({
          date 
        }) => (
          <div className={styles.calendarHeader}>
            2022년 9월
          </div>
        )}
        calendarClassName={styles.calendarContents}
        selected = {dDay}
        inline
        locale={ko}
        minDate={dDay}
        maxDate={dDay}
      />
    </div>
      // <DatePicker 
      //   selected={dDay}
      //   inline
      //   locale={ko}
      //   minDate={dDay}
      //   maxDate={dDay}
      // />        
  );
}

export default Calendar;