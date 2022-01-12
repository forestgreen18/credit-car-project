import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
import Heading from "../shared/section_heading";
import Button from "../shared/button";
import Input from "../shared/input";
import Checkbox from "../shared/checkbox";
const cx = cn.bind(css);

const Questions = () => {
  return (
    <section className={cx("question-section")}>
      <Heading customStyles={cx("white-heading", "question-heading")}>
        Остались вопросы? <br /> Напишите нам
      </Heading>
      <p className={cx("question-subheading")}>
        Оставьте заявку и наши менеджеры свяжуться с Вами, чтобы обсудить все
        вопросы
      </p>

      <div className={cx("input-box")}>
        <Input
          text={"Ваш телефон"}
          customStyles={cx("input")}
          type={"tel"}
          pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
        />
        <span className={cx("divider")}></span>
        <Input text={"Ваше имя"} customStyles={cx("input")} />
        <div className={cx("input-btn")}>
          <Button color={"red"} title={"Оставить заявку"} />
        </div>
      </div>

      <div className={cx("checkbox-block")}>
        <Checkbox
          text={"Я согласен с политикой обработки "}
          spanText={" персональных данных"}
        />
      </div>
    </section>
  );
};

export default Questions;
