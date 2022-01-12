import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Copyright = () => {
  return (
    <div className={cx("copyright-block")}>
      <p className={cx("copyright-span")}>Crystal Motors (с) 2021</p>
      <div>
        <span className={cx("developer-span")}>Разработка сайта</span>
        <img alt="developers logo" src={require("../assets/logo.png")} />
      </div>
    </div>
  );
};

export default Copyright;
