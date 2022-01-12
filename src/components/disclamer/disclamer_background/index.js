import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const DisclamerBackground = ({ children }) => {
  return <div className={cx("disclaming-background")}>{children}</div>;
};

export default DisclamerBackground;
