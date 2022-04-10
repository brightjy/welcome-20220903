import Poet from "./Poet";
import Map from "./Map";
import Cover from "./Cover";
import styles from "./Body.module.css";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Greeting from "./Greeting";
import Gallery from "./Gallery";

export default function Body() {
  return (  
  <div className={styles.wrap}>
    <BrowserRouter>
      <Cover />
      <Poet />
      <Routes>
        <Route path="/welcome-20220903/p" element={ <Greeting /> } />
      </Routes>
      <Gallery />
      <Map />
    </BrowserRouter>
</div>
  )
}