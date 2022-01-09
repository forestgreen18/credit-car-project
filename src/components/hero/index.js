import React from "react";
import Header from "../shared/header";

import css from "./style.module.css";
import cn from "classnames/bind";
import Button from '../shared/button';

const cx = cn.bind(css);

const Hero = () => {
  return (
      <section className={cx("root-hero")}>
        <Header />
        <div className={css['text-content']}>
          <div  className={cx("heading")}>
            Оформи автокредит <br />
            и получи авто в день <br />
            обращения
          </div>

          <div className={css['text-subcontent']}>
            <div>
              <span>От 1500 авто</span>
              <span>В наличии в 12 городах</span>
            </div>

            <div>
              <span>До 7 лет</span>
              <span>Срок погашения</span>
            </div>

            <div>
              <span>От 7,4%</span>
              <span>Ставка по кредиту</span>
            </div>
          </div>

          <Button title={"Завка на кредит"} color={"red"}/>
        </div>
      </section>
  );
};

export default Hero;
