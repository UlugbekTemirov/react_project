import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import '@splidejs/react-splide/css';

import Header from "../header";
import Home from "../../home";

import './app.scss'
import Catigory from "../catigory";

const App = ()=>{
  return(
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catigory" element={<Catigory/>}/>
          </Routes>
        </Router>
    </div>
  )
}
export default App