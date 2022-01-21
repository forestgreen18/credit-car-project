import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
import CarCard from "./car_card";

import hyundai13 from "./assets/hyundai 13.jpg";
import hyundai16 from "./assets/hyundai 16.jpg";

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

const CarSelect = ({ carList = [], formName }) => {
  const amountOfCarsHeading = formatHeading(carList.length);

  return (
    <div>
      <h4 className={cx("car-select-heading")}>{amountOfCarsHeading}</h4>
      <div className={cx("select-car")}>
        {carList.map((auto) => {
          return <CarCard formName={formName} key={auto.id} autoInfo={auto} />;
        })}
      </div>
    </div>
  );
};

export default CarSelect;
