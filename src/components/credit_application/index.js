import React from 'react'
import css from './style.module.css'
import cn from 'classnames/bind'
import Button from '../shared/button'
const cx = cn.bind(css)

const CreditApplication = () => {
	return (
		<section className={cx("credit-application-section")}>
			<p className={cx("heading", 'credit-heading')}>
				Оформи заявку онлайн <br />
				и получи решение <br /> 
				через 10 минут
			</p>
			<Button title={"Подать заявку"} color={"red"}/>
		</section>
	)
}

export default CreditApplication
