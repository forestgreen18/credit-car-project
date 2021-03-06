import React from 'react';
import cn from 'classnames/bind';
import CarItem from './car_item';
import SectionHeading from '../shared/headings/section_heading';

import css from './style.module.css';

const cx = cn.bind(css);

const config = [
	{
		name: 'Acura',
		amount: 22,
	},
	{
		name: 'Audi',
		amount: 87,
	},
	{
		name: 'BMW',
		amount: 65,
	},
	{
		name: 'BYD',
		amount: 32,
	},
	{
		name: 'Chery',
		amount: 53,
	},
	{
		name: 'Chevrolet',
		amount: 25,
	},
	{
		name: 'Chrysler',
		amount: 31,
	},
	{
		name: 'Citroen',
		amount: 45,
	},
	{
		name: 'Daewoo',
		amount: 20,
	},
	{
		name: 'Daihatsu',
		amount: 23,
	},
	{
		name: 'Datsun',
		amount: 12,
	},
	{
		name: 'DW hover',
		amount: 5,
	},

	{
		name: 'FAW',
		amount: 13,
	},
	{
		name: 'Fiat',
		amount: 24,
	},
	{
		name: 'Ford',
		amount: 19,
	},
	{
		name: 'Foton',
		amount: 24,
	},
	{
		name: 'Geely',
		amount: 16,
	},
	{
		name: 'Great Wall',
		amount: 21,
	},
];

function ChooseCar() {
	return (
		<section className={cx('choosecar-section')}>
			<div className={cx('head-block')}>
				<SectionHeading customClass={cx('choosecar-heading')}>
					Выбери авто и поехали
				</SectionHeading>
				{/* <p className={cx("section-heading")}>Выбери авто и поехали</p> */}
				<a href='#' className={cx('showLink')}>
					{' '}
					Смотреть все марки{' '}
					<img
						src={require('./assets/right-arrow.png')}
						alt='arrow right'
					/>{' '}
				</a>
			</div>
			<div className={cx('cars-block')}>
				{config.map((item) => {
					return (
						<CarItem key={item.name} name={item.name} amount={item.amount} />
					);
				})}
			</div>
		</section>
	);
}

export default ChooseCar;
