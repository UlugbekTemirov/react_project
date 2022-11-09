import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <div className="header ">
        <div className="header__logo ml-60">
          <span>Logo</span>
        </div>
        <div className="header__right">
          <div className="header__right--info">
            <img
              src={require("../../assets/img/icons/Notification.png")}
              alt=""
            />
            <span>1</span>
          </div>
          <div className="header__right--sainup">
            <p>Личный кабинет</p>
            <img src={require("../../assets/img/icons/Profile.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
