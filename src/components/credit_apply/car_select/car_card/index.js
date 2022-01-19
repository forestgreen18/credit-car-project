import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import CarCheckbox from "./car_checkbox";
import shieldIcon from "./assets/shield_icon.svg";

const cx = cn.bind(css);

const CarCard = ({ autoInfo }) => {
  const { imgURL, year, name, price, safePrice, credit } = autoInfo;
  return (
    <div className={cx("car-card")}>
      <img alt={name} src={imgURL} />
      <div className={cx("info-block")}>
        <span className={cx("car-year")}>{year}</span>
        <span className={cx("car-name")}>{name}</span>
        <div className={cx("price-block")}>
          <div className={cx("standard-price")}>
            <span>{price}</span>
            <span>{credit}</span>
          </div>
          <div className={cx("credit-price")}>
            <span>
              {safePrice} <img src={shieldIcon} alt="shield icon" />
            </span>
            <span>{credit}</span>
          </div>
        </div>
        <div className={cx("checkbox-block")}>
          <CarCheckbox text={"Выбрано это авто"} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
