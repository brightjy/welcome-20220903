import Poet from "./Poet";
import Map from "./Map";
import Cover from "./Cover";
import styles from "./Body.module.css";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Greeting from "./Greeting";

export default function Body() {
  const { sth } = useParams();
  console.log({sth});
  return (  
  <div className={styles.wrap}>
    <BrowserRouter>
      <Cover />
      <Poet />
      <Routes>
        <Route path="/welcome-20220903/p" element={ <Greeting /> } />
      </Routes>
      <Map />
    </BrowserRouter>
</div>
  )
}