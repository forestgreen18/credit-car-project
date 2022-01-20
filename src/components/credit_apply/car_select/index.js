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

function formatHeading(amountOfCars) {
  if (amountOfCars > 1 && amountOfCars < 5) {
    return `Найдено ${amountOfCars} автомобиля`;
  } else if (amountOfCars >= 5) {
    return `Найдено ${amountOfCars} автомобилей`;
  } else if (amountOfCars === 1) {
    return `Найдено 1 автомобиль`;
  } else {
    return "Автомобилей не найдено";
  }
}

const CarSelect = ({ carList = [] }) => {
  const amountOfCarsHeading = formatHeading(carList.length);

  return (
    <div>
      <h4 className={cx("car-select-heading")}>{amountOfCarsHeading}</h4>
      <div className={cx("select-car")}>
        {carList.map((auto) => {
          return <CarCard key={auto.id} autoInfo={auto} />;
        })}
      </div>
    </div>
  );
};

export default CarSelect;
