import React from "react";
import { Link } from "react-router-dom";
import './product.scss'

const Product = () => {
  return(
    <div className="product">
      <div className="product__box">
        <div className="product__box--img">
          <img src={require('../../assets/img/phone.png')} alt="" />
        </div>
        <div className="product__box--title">
          <div className="link">
            <Link to='/' className="title">Смартфон Samsung G..</Link>
          </div>
          <span className="price">7 300 000 сум </span>
          <div className="product__purchase">
            <span className="sum">от 2 435 000 сум</span>
            <span>x24</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Product