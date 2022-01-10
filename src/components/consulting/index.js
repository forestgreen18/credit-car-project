import React from 'react'

import css from "./style.module.css";
import cn from "classnames/bind";
import Button from '../shared/button';
const cx = cn.bind(css);

const Consulting = () => {
	return (
		<section >
			<div className={cx("consulting-text")}>
				<img alt="logo" src={require("./assets/logo.png")} />
				<p className={cx( 'credit-heading')}> 
					Защити себя от расходов <br />
					на ремонт автомобиля
				</p>
				<span className={cx("subheading")}>
					Гарантия Karso – лучшая защита авто от  <br /> поломок на дорогах для авто с пробегом
				</span>
				<Button color={"red"} title={"Заказать консультацию"} />
			</div>
		</section>
	)
}

export default Consulting
