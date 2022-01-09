import React from 'react'

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

function CreditCondition() {
	return (
		<section >
			<p className={cx("section-heading", 'subheading-credit-car')}>
				Подбор автомобиля под <br /> условия кредита
			</p>
			<p className={cx("desc-paragraph", 'sub-heading')}>
				Выберите автомобиль под свои возможности из <br />
				 нашего автопарка на выгодных для Вас условиях
			</p>
		</section>
	)
}

export default CreditCondition
