import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const CarItem = ({ name, amount }) => {
  const [nameClass, setNameClass] = React.useState("");
  const [amountClass, setAmountClass] = React.useState("");

  function setHoverClasses() {
    setNameClass("car-name-hover");
    setAmountClass("car-amount-hover");
  }

  function deleteHoverClasses() {
    setNameClass("");
    setAmountClass("");
  }

  return (
    <div
      className={cx("info-block")}
      onMouseEnter={setHoverClasses}
      onMouseLeave={deleteHoverClasses}
    >
      <span className={cx("car-name", nameClass)}>{name}</span>
      <div className={cx("amount-box", "car-amount", amountClass)}>
        {amount}
      </div>
    </div>
  );
};

export default CarItem;
