import Header from "./Header";
import Footer from "./Footer";
import { Route, Router, Routes, useParams } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
   <div>
    <Header />
    <Body />
    <Footer />
   </div>
  );
}

export default App;
