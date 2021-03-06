import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function CarItem({ name, amount }) {
	const [nameClass, setNameClass] = React.useState('');
	const [amountClass, setAmountClass] = React.useState('');

	function setHoverClasses() {
		setNameClass('car-name-hover');
		setAmountClass('car-amount-hover');
	}

	function deleteHoverClasses() {
		setNameClass('');
		setAmountClass('');
	}

	return (
		<div
			className={cx('info-block')}
			onMouseEnter={setHoverClasses}
			onMouseLeave={deleteHoverClasses}>
			<span className={cx('car-name', nameClass)}>{name}</span>
			<div className={cx('amount-box', 'car-amount', amountClass)}>
				{amount}
			</div>
		</div>
	);
}

export default CarItem;
