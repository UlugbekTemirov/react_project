import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@splidejs/react-splide/css";

import Header from "../header";
import Home from "../../home";

import "./app.scss";
import Category from "../category";
import Menu from "../menu/index";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
