import React from "react";
import css from "./style.module.css";

import cn from "classnames/bind";
const cx = cn.bind(css);

const SectionHeading = ({ children, span, customClass = {} }) => {
  return (
    <h2 className={cx("section-heading", customClass)}>
      {children}
      <span>{span}</span>
    </h2>
  );
};

export default SectionHeading;
