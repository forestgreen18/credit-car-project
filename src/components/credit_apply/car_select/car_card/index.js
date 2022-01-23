import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';
import CarCheckbox from './car_checkbox';
import shieldIcon from './assets/shield_icon.svg';

const cx = cn.bind(css);

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function CarCard({ autoInfo, formName }) {
	let {
		titlePhotoLink,
		model,
		mark,
		year,
		name,
		price,
		gearbox,
		safePrice,
		credit,
		id,
	} = autoInfo;

	price = `${numberWithCommas(price)} ₴`;

	return (
		<div className={cx('car-card')}>
			<img alt={name} src={titlePhotoLink} className={cx('info-img-title')} />
			<div className={cx('info-block')}>
				<span className={cx('car-year')}>
					{year} год / {gearbox}
				</span>
				<span className={cx('car-name')}>
					{mark} {model} {year} года
				</span>
				<div className={cx('price-block')}>
					<div className={cx('standard-price')}>
						<span>{price} </span>
						<span>от 15 000 ₴ / мес.</span>
					</div>
					<div className={cx('credit-price')}>
						<span>
							{price} <img src={shieldIcon} alt='shield icon' />
						</span>
						<span>от 15 000 ₴ / мес.</span>
					</div>
				</div>
				<div className={cx('checkbox-block')}>
					<CarCheckbox formName='selectedCar' text='Выбрано это авто' id={id} />
				</div>
			</div>
		</div>
	);
}

export default CarCard;
