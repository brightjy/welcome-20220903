import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  const { onClose } = props;
  return (
    <div 
      className={styles.wrap}
    >
      <table>
        <tr>
          <td>신랑(부)</td>
          <td>전상준</td>
          <td><a href='tel:010-5091-0108'><FontAwesomeIcon icon={faPhone} className={styles.phone} /></a></td>         
        </tr>
        <tr>
          <td>신랑(모)</td>
          <td>김순옥</td>
          <td><a href='tel:010-5091-0108'><FontAwesomeIcon icon={faPhone} className={styles.phone}/></a></td>         
        </tr>
      </table>
      <hr></hr>
      <table>
        <tr>
          <td>신부(부)</td>
          <td>박상철</td>
          <td><a href='tel:010-5091-0108'><FontAwesomeIcon icon={faPhone} className={styles.phone}/></a></td>         
        </tr>
        <tr>
          <td>신부(모)</td>
          <td>이지연</td>
          <td><a href='tel:010-5091-0108'><FontAwesomeIcon icon={faPhone} className={styles.phone}/></a></td>         
        </tr>
      </table>
      <div className={styles.closeWrap} onClick={() => { onClose(false); }}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className={styles.close}/> 접기
    </div>
    </div>
  )
}