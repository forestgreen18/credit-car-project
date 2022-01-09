import React from 'react'

import css from './style.module.css'
import cn from 'classnames/bind'
import Bank from './bank'
const cx = cn.bind(css)


const banksInfo = [
	{
		imgUrl: '../assets/tinkoff.png',
		alt: 'tinkoffbank'
	},
	{
		imgUrl: '../assets/vtb_bank.png',
		alt: 'vtb_bank'

	},
	{
		imgUrl: '../assets/lokobank.png',
		alt: 'lokobank'

	},
	{
		imgUrl: '../assets/otpbank.png',
		alt: 'otpbank'
	},
	{
		imgUrl: '../assets/setelem.png',
		alt: 'setelem'
	},
	{
		imgUrl: '../assets/expobank.png',
		alt: 'expobank'
	},
	{
		imgUrl: '../assets/absolute_bank.png',
		alt: 'absolute_bank'
	},
	{
		imgUrl: '../assets/bank_soyuz.png',
		alt: 'bank_soyuz'
	},
	{
		imgUrl: '../assets/rosbank.png',
		alt: 'rosbank'
	},
	{
		imgUrl: '../assets/sovcombank.png',
		alt: 'sovcombank'
	},
	{
		imgUrl: '../assets/kvanmobile_bank.png',
		alt: 'kvanmobile_bank'
	},
	{
		imgUrl: '../assets/zenitbank.png',
		alt: 'zenitbank'
	},
	{
		imgUrl: '../assets/primsocbank.png',
		alt: 'primsocbank'
	},
	{
		imgUrl: '../assets/rgcbank.png',
		alt: 'rgcbank'
	},
	{
		imgUrl: '../assets/renessance_credit.png',
		alt: 'renessance_credit'
	}
]

const Banks = () => {
	return (
		<section className={cx("bank-section")}>
			<div className={cx("bank-heading")}>

				<p className={cx("section-heading")}>
					Crystal motors - <br /> партнёр 15 банков
				</p>
				<span className={cx("desc-paragraph")}>
					Оказываем услуги по автокредитованию. Это позволяет <br />
					оперативно получать лучшие предложение по кредитам.
				</span>
			</div>
			<div className={cx("banks-list")}>
				{
					banksInfo.map(bank => {

						return (
							<Bank imgUrl={bank.imgUrl} alt={bank.alt}/>
						)
					})
				}
			</div>
		</section>
	)
}

export default Banks
