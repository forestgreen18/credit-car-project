import React from "react";
import css from "./style.module.css";

import cn from "classnames/bind";
const cx = cn.bind(css);

const MainHeading = ({ children, customClass = {} }) => {
  return <h1 className={cx("main-heading", customClass)}>{children}</h1>;
};

export default MainHeading;
