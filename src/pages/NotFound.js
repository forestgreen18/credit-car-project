import React from "react";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const NotFound = () => {
  return (
    <div className={cx("notfound-page")}>
      <p>Ошибка 404</p>
      <p>Страница не найдена</p>
    </div>
  );
};

export default NotFound;
