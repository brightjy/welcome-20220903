import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Gallery.module.css";
import SampleImg from "./sample.png";
import SampleImg2 from "./sample2.JPG";



export default function Gallery() {
  const settings = {
    dots:true,
    infinite:true,
    arrows:true,
    fade:true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>- Gallery - </div>
      <Slider {...settings} className={styles.slide}>
          <div>
            <img src={SampleImg} alt="sample" className={styles.img} />
          </div>
          <div>
            <img src={SampleImg2} alt="sample" className={styles.img} />
          </div>
          <div>
            <img src={SampleImg} alt="sample" className={styles.img} />
          </div>
          <div>
            <img src={SampleImg2} alt="sample" className={styles.img} />
          </div>
          <div>
            <img src={SampleImg} alt="sample" className={styles.img} />
          </div>
      </Slider>
    </div>
  );
}