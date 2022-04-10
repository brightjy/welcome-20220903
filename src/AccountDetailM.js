import styles from "./AccountDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function AccountDetailM(props) {
  const { onClose } = props;
  return (
    <div 
      className={styles.wrap}
    >
      <table>
        <tr>
          <td>신랑(부)</td>
          <td className={styles.account}>신한은행(예금주: 전상준) 1234-567-89123</td>              
        </tr>
      </table>
      <hr></hr>
      <table>
      <tr>
          <td>신랑(모)</td>
          <td className={styles.account}>우리은행(예금주: 김순옥) 1234-567-89123</td>                
        </tr>
      </table>
      <hr></hr>
      <table>
      <tr>
          <td>신랑</td>
          <td className={styles.account}>우리은행(예금주: 전대한) 1234-567-89123</td>                
        </tr>
      </table>
      <div className={styles.closeWrap} onClick={() => { onClose(false); }}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className={styles.close}/>
    </div>
    </div>
  )
}