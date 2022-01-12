import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import DropdownMenu from "../../dropdown menu";
import { cities } from "./mock";

const cx = cn.bind(css);

const Header = () => {
  return (
    <header className={css.header}>
      <img src={require("./assets/logo.png")} alt="logo" />
      <nav>
        <ul className={css["header-menu-list"]}>
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

      <span className={css["dropdown-block"]}>
        <DropdownMenu options={cities} />
      </span>

      <span>
        <a href="tel:7-994-664-36-27" className={css.phoneLink}>
          <img src={require("./assets/phone_icon.png")} alt="arrow down" />
          +7 994-664-36-27
        </a>
      </span>

      <div className={css.burgerMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
