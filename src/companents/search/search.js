import React from "react";
import './search.scss'

const Search = () => {
  return(
    <div className="search">
      <form className="form" >
        <div className="search__form">
          <input type="text" placeholder="Поиск по названию товара" />
          <div className="search__icon">
            <img src={require('../../assets/img/icons/Search.png')} alt="" />
          </div>
        </div>    
      </form>
    </div>
  )
}
export default Search