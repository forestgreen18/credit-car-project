import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Subheading = ({ children, customClass = {} }) => {
  return <span className={cx("subheading", customClass)}>{children}</span>;
};

export default Subheading;
