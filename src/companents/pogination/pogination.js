import React from "react";
import './pogination.scss'

const Pogination = () => {
  return(
    <div className="pogination">
      <div className="click prvious">
        <img src={require('../../assets/img/icons/left.png')} alt="" />
      </div>
      <div className="pogination__number">
        <button>1</button>
        <button className="active">2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <sapn>...</sapn>
        <button>8</button>
      </div>
      <div className="click next">
        <img src={require('../../assets/img/icons/right.png')} alt="" />
      </div>
    </div>
  )
}
export default Pogination