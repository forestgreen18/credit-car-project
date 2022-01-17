import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Divider = ({ customClass = {} }) => {
  return <div className={cx("divider", customClass)}></div>;
};

export default Divider;
