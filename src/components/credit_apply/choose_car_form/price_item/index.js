import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import {
  useController,
  Controller,
  useWatch,
  useFormContext,
} from "react-hook-form";

const cx = cn.bind(css);

const PriceItm = ({ title, price, formName, control }) => {
  return (
    <div className={cx("price-item")}>
      <span>{title}</span>
      <h5>{price}</h5>
    </div>
  );
};

export default PriceItm;
