import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
import Button from "../shared/button";
import SectionHeading from "../shared/headings/section_heading";
const cx = cn.bind(css);

const Consulting = () => {
  return (
    <section>
      <div className={cx("consulting-text")}>
        <img alt="logo" src={require("./assets/logo.png")} />

        <SectionHeading customClass={cx("consulting-heading")}>
          Защити себя от расходов <br />
          на ремонт автомобиля
        </SectionHeading>

        {/* <p className={cx("credit-heading")}>
          Защити себя от расходов <br />
          на ремонт автомобиля
        </p> */}
        <span className={cx("subheading")}>
          Гарантия Karso – лучшая защита авто от <br /> поломок на дорогах для
          авто с пробегом
        </span>
        <Button color={"red"} title={"Заказать консультацию"} />
      </div>
    </section>
  );
};

export default Consulting;
