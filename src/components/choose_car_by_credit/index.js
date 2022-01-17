import React from "react";
import SectionHeading from "../shared/headings/section_heading";
import CreditSlider from "./CreditSlider";

import css from "./style.module.css";
import cn from "classnames/bind";
import Button from "../shared/button";
const cx = cn.bind(css);

function CreditCondition() {
  return (
    <section>
      <SectionHeading customStyles={cx("subheading-credit-car")}>
        Подбор автомобиля под <br /> условия кредита
      </SectionHeading>

      {/* <p className={cx("section-heading", "subheading-credit-car")}></p> */}
      <p className={cx("desc-paragraph", "sub-heading")}>
        Выберите автомобиль под свои возможности из <br />
        нашего автопарка на выгодных для Вас условиях
      </p>

      <div className={cx("choosing-credit")}>
        <div className={cx("slider-box")}>
          <div>
            <CreditSlider type={"creditSum"} />
          </div>
          <div>
            <CreditSlider type={"termOfCredit"} />
          </div>
          <div>
            <CreditSlider type={"initialLoan"} />
          </div>
        </div>
        <div className={cx("creditBtn")}>
          <Button color={"blue"} title={"Показать предложения"} />
        </div>
      </div>
    </section>
  );
}

export default CreditCondition;
