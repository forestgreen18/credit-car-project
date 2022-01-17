import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import CarCard from "./car_card";

import hyundai13 from "./assets/hyundai 13.jpg";
import hyundai16 from "./assets/hyundai 16.jpg";

const autoInfo = [
  {
    imgURL: hyundai13,
    year: `2013 год / автомат`,
    name: `Hyundai Solaris 2013 года`,
    price: `499 000 ₽`,
    safePrice: `459 000 ₽`,
    credit: `от 15 000 Р / мес.`,
  },
  {
    imgURL: hyundai16,
    year: `2016 год / автомат`,
    name: `Hyundai Solaris 2016`,
    price: `499 000 ₽`,
    safePrice: `459 000 ₽`,
    credit: `от 15 000 Р / мес.`,
  },
];

const cx = cn.bind(css);

const CarSelect = () => {
  return (
    <div>
      <h4 className={cx("car-select-heading")}>Найдено 2 автомобиля</h4>
      <div className={cx("select-car")}>
        {autoInfo.map((auto) => {
          return <CarCard autoInfo={auto} />;
        })}
      </div>
    </div>
  );
};

export default CarSelect;
