/* global kakao */
import React, {useRef, useEffect} from "react";
import styles from "./Map.module.css";

export default function Map() {
  const container = useRef(null);

  useEffect(() => {
    mapScript();  
  }, []);

  const mapScript = () => {
    const options = {
      center: new window.kakao.maps.LatLng(37.56089777825856, 126.96812240202205),
      level: 3
    };
    const map = new window.kakao.maps.Map(container.current, options);
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.56089777825856, 126.96812240202205)
    });

    marker.setMap(map) ;
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>오시는 길</p>
      <div id="map" 
          className={styles.map}
          ref={container}  
        >
      </div>
      <div className={styles.info}> 
        <p>
          <span className={styles.bold}>[주소]</span><br></br>
          서울특별시 중구 청파로 464 브라운스톤서울 3층 (중림동 355 브라운스톤서울 3층) 아벤티움 웨딩홀
        </p>
        <p>
          <span className={styles.bold}>[지하철 이용 시]</span><br></br>
          2, 5호선 충정로역 4번 출구 (도보5분)<br></br>
          1, 4호선 KTX서울역 3번출구 / 서부역광장방향 (도보10분)
        </p>
        <p>
          <span className={styles.bold}>[버스 이용 시]</span><br></br>
          - 한국경제신문사: 서대문06, 6015, 6021, 370, 603, 7011, 7013A, 7013B, 7017<br></br>
          - 서대문경찰청: 6005, 701, 704, 706, 750A, 750B, 751, 752<br></br>
        </p>
        <p>
          <span className={styles.bold}>[서울역 이용 시]</span><br></br>
          KTX서울역 3번출구 800M 직진 후 한국경제신문사 맞은편
        </p>
      </div>
    </div>
  );
}