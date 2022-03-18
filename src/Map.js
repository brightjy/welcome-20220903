/* global kakao */
import React, {useRef, useEffect} from "react";
import styles from "./Map.module.css";

const options = {
  center: new window.kakao.maps.LatLng(37.56089777825856, 126.96812240202205),
  level: 3
};

export default function Map() {
  const container = useRef(null);

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options);
    return () => {};
  }, []);

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>오시는 길</p>
      <div id="map" 
          className={styles.map}
          ref={container}  
        >
      </div>
    </div>
  );
}