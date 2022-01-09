import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const CreditBackground = ({ children }) => {
  return (
    <div className={cx("credit-background")}>
      <div className={cx("content")}>{children}</div>
      <div className={cx("laptop")} />

      <div className={cx("lines")} />
    </div>
  );
};

export default CreditBackground;
