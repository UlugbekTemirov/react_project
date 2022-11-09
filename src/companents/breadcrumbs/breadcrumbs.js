import React from "react";
import { Link } from "react-router-dom";
import'./breadcrumbs.scss'

const Breadcrumbs = () => {
  return(
    <div className="breadcrumbs">
      <li><Link to='/'>Заявки</Link></li>
      <li><Link to='/'>Оформить заказ</Link></li>
    </div>
  )
}
export default Breadcrumbs