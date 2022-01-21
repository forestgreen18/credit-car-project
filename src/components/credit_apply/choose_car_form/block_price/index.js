import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import { useFormContext, useWatch } from "react-hook-form";
import PriceItm from "../price_item";
const cx = cn.bind(css);

const BlockPrice = ({ carPrice = 0 }) => {
  const { control } = useFormContext();

  const termOfCredit =
    useWatch({
      control,
      name: "termOfCredit",
    }) || 0;

  const initialLoan =
    useWatch({
      control,
      name: "initialLoan",
    }) || 0;

  const creditSum = Math.trunc(
    carPrice - (carPrice / 100) * Number(initialLoan)
  );
  console.log(termOfCredit, "termof credit");
  const percent = 17 / 100 / 12;
  const annuityPayment = Math.trunc(
    creditSum * (percent + percent / (Math.pow(1 + percent, termOfCredit) - 1))
  );

  console.log(creditSum);

  return (
    <div className={cx("price-block")}>
      <PriceItm title={"Стоимость авто"} price={creditSum + " ₴"} />
      <PriceItm title={"Ежемесячный платёж"} price={annuityPayment + " ₴"} />
    </div>
  );
};

export default BlockPrice;
