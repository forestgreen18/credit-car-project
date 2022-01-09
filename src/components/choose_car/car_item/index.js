import React from 'react'
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);


const CarItem = ({name, amount}) => {
	return (
		<div className={cx("info-block")}>
			<span className={cx("car-name")}>{name}</span>
			<div className={cx('amount-box', 'car-amount')}>
				{amount}
			</div>
		</div>
	)
}

export default CarItem
