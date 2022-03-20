import Poet from "./Poet";
import Map from "./Map";
import Cover from "./Cover";
import styles from "./Body.module.css";

export default function Body() {
  return (
  <div className={styles.wrap}>
    <Cover />
    <Poet />
    <Map />
</div>
  )
}