import Poet from "./Poet";
import Map from "./Map";
import Cover from "./Cover";
import Parents from "./Parents";
import styles from "./Body.module.css";

export default function Body() {
  return (
  <div className={styles.wrap}>
    <Cover />
    <Poet />
    <Parents />
    <Map />
</div>
  )
}