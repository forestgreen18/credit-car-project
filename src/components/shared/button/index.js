import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Button = ({ title, color, customClass = {}, type = "button" }) => {
  // return <a className={cx("button", `btn-${color}`, customClass)}>{title}</a>;
  return (
    <input
      className={cx("button", `btn-${color}`, customClass)}
      type={type}
      value={title}
    />
  );
};

export default Button;
