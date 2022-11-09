import React, {useState} from "react";
import { Link } from "react-router-dom";

import './menu.scss'

const Menu = () => {

  const addActive = () => {
    
  }
  return(
    <div className="menu">
      <div className="menu__links ">

        <div className="menu__link" onClick={addActive}>
          <img src={require('../../assets/img/icons/home.png')} alt="" />
          <Link to='/'>Главная</Link>
        </div>

        <div className="menu__link " onClick={addActive}>
          <img src={require('../../assets/img/icons/list.png')} alt="" />
          <Link to='/'>Заказы</Link>
        </div>

        <div className="menu__link" onClick={addActive}>
          <img src={require('../../assets/img/icons/tavar.png')} alt="" />
          <Link to='/'>Товары</Link>
        </div>

        <div className="menu__link" onClick={addActive}>
          <img src={require('../../assets/img/icons/star.png')} alt="" />
          <Link to='/'>Отзывы</Link>
        </div>

        <div className="menu__link active">
          <img src={require('../../assets/img/icons/karzinka.png')} alt="" />
          <Link to='/'>Оформить заказ</Link>
        </div>

      </div>
    </div>
  )
}
export default Menu