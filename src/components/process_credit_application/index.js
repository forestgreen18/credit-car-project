import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const ProcessCreditApplication = () => {
  return (
    <section className={cx("process-credit-section")}>
      <h2 className={cx("heading")}>
        Оформление заявки <br />
        на автокредит
      </h2>
    </section>
  );
};

export default ProcessCreditApplication;
