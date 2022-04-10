import Poet from "./Poet";
import Map from "./Map";
import Cover from "./Cover";
import styles from "./Body.module.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Greeting from "./Greeting";
import Gallery from "./Gallery";
import Account from "./Account";

export default function Body() {
  return (  
  <div className={styles.wrap}>
    <BrowserRouter>
      <Cover />
      <Poet />
      <Greeting />
      <Gallery />
      <Map />
      <Account />
    </BrowserRouter>
</div>
  )
}