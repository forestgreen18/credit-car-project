import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import Header from "../shared/header";
const cx = cn.bind(css);

const CreditApply = () => {
  return (
    <section>
      <div className={cx("credit-header")}>
        <Header type={"light"} />
        <h2 className={cx("heading")}>
          Оформление заявки <br />
          на автокредит
        </h2>
      </div>
    </section>
  );
};

export default CreditApply;
