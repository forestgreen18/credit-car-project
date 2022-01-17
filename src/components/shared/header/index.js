import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import DropdownMenu from "../../dropdown menu/dropdown_header";
import { cities } from "./mock";
import logo from "./assets/logo.png";
import blueLogo from "./assets/blue_logo.svg";

import phoneIcon from "./assets/phone_icon.png";
import bluePhoneIcon from "./assets/blue_phone_icon.svg";

const cx = cn.bind(css);

const Header = ({ type = "blue" }) => {
  const options = {
    class: "",
    img: logo,
    phoneIcon: phoneIcon,
    theme: "blue",
  };
  let img = logo;
  if (type === "light") {
    options.class = "header-light";
    options.img = blueLogo;
    options.phoneIcon = bluePhoneIcon;
    options.theme = "light";
  }

  return (
    <header className={cx("header", `${options.class}`)}>
      <img src={options.img} alt="logo" />
      <nav>
        <ul className={cx("header-menu-list", `${options.class}`)}>
          <li>
            <a href="#">Купить </a>
          </li>
          <li>
            <a href="#">Продать </a>
          </li>
          <li>
            <a href="#"> Автокредит</a>
          </li>
          <li>
            <a href="#">Контакты </a>
          </li>
        </ul>
      </nav>
      <span className={cx("dropdown-block", `${options.class}`)}>
        <DropdownMenu options={cities} theme={options.theme} />
      </span>
      <span>
        <a
          href="tel:7-994-664-36-27"
          className={cx("phoneLink", `${options.class}`)}
        >
          <img src={options.phoneIcon} alt="arrow down" />
          +7 994-664-36-27
        </a>
      </span>
      <div className={cx("burgerMenu", `${options.class}`)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
