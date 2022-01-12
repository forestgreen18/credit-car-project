import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Disclaming = () => {
  return (
    <section className={cx("disclaming-section")}>
      <p className={cx("disclaming-paragraph")}>
        Вся информация на сайте носит справочный характер и не является
        публичной офертой
      </p>
    </section>
  );
};

export default Disclaming;
