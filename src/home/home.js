import React from "react";
import Menu from "../companents/menu";
import Homepage from "../companents/pages/homepage/";
import './home.scss'

const Home = () => {
  return(
    <div className="wrapper">
      <Menu/>
      <Homepage/>
    </div>
  )
}
export default Home