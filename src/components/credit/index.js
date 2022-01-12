import React from "react";
import CreditItem from "./credit-item";
import css from "./style.module.css";
import cn from "classnames/bind";
import percent_icon from './assets/percent_icon.png'
import creditcard_icon from './assets/creditcard-icon.png'

const cx = cn.bind(css);

const config = [
  {
    title: "Автокредит без первого взноса",
    desc: "Помогаем заполнить заявки на кредит правильно для получения положительных решений от банков.",
    imgUrl: percent_icon,
  },
  {
    title: "Автокредит с первым взносом",
    desc: "Заявка с первоначальным взносом для одобрения и получения кредита на выгодных для Вас условиях.",
    imgUrl: creditcard_icon,
  },
];

const Credit = () => {
  return (
    <section className={cx("credit-section")}>
      <div className={cx("heading-box")}>
        <p className={cx("section-heading", "credit-heading")}>
          Кредит под любые условия <br />
          со ставкой <span>от 7,4%</span>
        </p>
        <p className={cx("desc-paragraph")}>
          Наш опытный специалист по подбору авто и <br />
          автокредитов обезопасит от любых «сюрпризов»
        </p>
      </div>
	  <div className={cx("credit-options-block")}>
		  {config.map((item) => {
				return (
					<CreditItem title={item.title} desc={item.desc} imgUrl={item.imgUrl} />
				)
			}
			)}
		
	  </div>
    </section>
  );
};

export default Credit;
