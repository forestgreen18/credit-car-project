import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const FooterBackground = ({ children }) => {
  return <div className={cx("footer-background")}>{children}</div>;
};

export default FooterBackground;
