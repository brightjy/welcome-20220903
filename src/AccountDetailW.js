import styles from "./AccountDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function AccountDetailW(props) {
  const { onClose } = props;
  return (
    <div 
      className={styles.wrap}
    >
      <table>
        <tr>
          <td>신부(부)</td>
          <td className={styles.account}>신한은행(예금주: 박상철) 1234-567-89123</td>              
        </tr>
      </table>
      <hr></hr>
      <table>
      <tr>
          <td>신부(모)</td>
          <td className={styles.account}>우리은행(예금주: 이지연) 1234-567-89123</td>                
        </tr>
      </table>
      <hr></hr>
      <table>
      <tr>
          <td>신부</td>
          <td className={styles.account}>우리은행(예금주: 박지영) 1234-567-89123</td>                
        </tr>
      </table>
      <div className={styles.closeWrap} onClick={() => { onClose(false); }}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className={styles.close}/> 접기
      </div>
    </div>
  )
}