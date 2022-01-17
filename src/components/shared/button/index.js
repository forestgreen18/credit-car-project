import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Button = ({ title, color, customClass = {} }) => {
  return (
    <a className={cx("button", `btn-${color}`, customClass)} href="#">
      {title}
    </a>
  );
};

export default Button;
