import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
import ListItem from "./list-item";
import Copyright from "./copyright";
const cx = cn.bind(css);

const listItems = [
  {
    title: "Купить авто",
    items: [
      [
        "Купить авто",
        "Обмен авто",
        "Онлайн оценка авто",
        "Предпродажная подготовка",
        "Техническая гарантия",
      ],
    ],
  },
  {
    title: "Продать",
    items: [
      [
        "Продажа через нас",
        "Выкуп авто",
        "Trade-in/ Обмен авто",
        "Онлайн оценка авто",
      ],
    ],
  },
  {
    title: "Автокредит",
    items: [
      [
        "Кредит без вноса",
        "Кредит с первым взносом",
        "Обмен с доплатой в кредит",
        "Онлайн заявка на кредит",
      ],
    ],
  },
  {
    title: "Автосалон",
    items: [
      [
        "О компании",
        "Контакты",
        "Вакансии",
        "Новости",
        "Инвесторам",
        "Наша команда",
      ],
    ],
  },
];

const Footer = () => {
  return (
    <section>
      <div className={cx("footer-listblock")}>
        {listItems.map((footerItm) => {
          return <ListItem title={footerItm.title} items={footerItm.items} />;
        })}
      </div>
    </section>
  );
};

export default Footer;
