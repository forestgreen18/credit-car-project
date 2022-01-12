import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const ListItem = ({ title, items }) => {
  return (
    <div className={cx("listItm-block")}>
      <h4 className={cx("listItem-heading")}>{title}</h4>
      <ul className={cx("list-block")}>
        {items[0].map((listItm) => {
          return (
            <li>
              <a href="#">{listItm}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
