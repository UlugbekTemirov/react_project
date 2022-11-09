import React from "react";
import Breadcrumbs from "../../breadcrumbs";
import Pogination from "../../pogination/pogination";
import Products from "../../products";
import Search from "../../search/search";
import './homepage.scss'

const Homepage = () => {
  return(
    <div className="pages">
      <Breadcrumbs/>
       <div className="pages__title">
         Оформить заказ
       </div>
         <Search/>
        <div className="pages__number">
          <span>
            Все товары (121)
          </span>
        </div>
          <Products/>
          <Products/>
          <Pogination/>
    </div>
  )
}
export default Homepage