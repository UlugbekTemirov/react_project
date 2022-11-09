import React from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import Product from "../product/";
import './products.scss'

const Products = () => {
  return(
    <div className="products">
     <div className="container">
      <Splide options={{
          type:'loop',
          perPage:5,
          autoplay:true,
          gap:20,
          arrows:false,
        }}>
          <SplideSlide>
            <Product/>
          </SplideSlide>
      
        </Splide>
     </div>
    </div>
  )
}
export default Products