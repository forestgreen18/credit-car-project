import React from 'react'

import Button from '../../shared/button';

import css from './style.module.css'
import cn from 'classnames/bind'
const cx = cn.bind(css)

function CreditItem({title, desc, imgUrl}) {
	return (
		<div className={cx("credit-item")}>
			<div className={cx("heading-block")}>
				<p className={cx("section-heading")}>
					{title}
				</p>

{/* //! Не завантажуються фото				 */}
				<img alt="credit-icon"  src={imgUrl}/>
			</div>
			<p className={cx("desc-paragraph", 'desc-credit')}>
				{desc}
			</p>

			<div className={cx("buttons-block")}>
				<Button title={"Оформить кредит"} color={"blue"}/>
				<Button title={"Подробнее"} color={"white"}/>
			</div>
		</div>
	)
}

export default CreditItem
