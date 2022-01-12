import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Divider = () => {
  return <div className={cx("divider")}></div>;
};

export default Divider;
