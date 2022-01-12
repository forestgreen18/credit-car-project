import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Button = ({ title, color }) => {
  return (
    <a className={cx("button", `btn-${color}`)} href="#">
      {title}
    </a>
  );
};

export default Button;
