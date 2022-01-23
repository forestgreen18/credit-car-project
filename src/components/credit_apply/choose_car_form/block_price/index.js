import React from 'react';
import cn from 'classnames/bind';
import { useFormContext, useWatch, Controller } from 'react-hook-form';
import css from './style.module.css';
import PriceItm from '../price_item';

const cx = cn.bind(css);

function calculateCarSum(termOfCredit, initialLoan, carPrice) {
	const creditSum = Math.trunc(
		carPrice - (carPrice / 100) * Number(initialLoan)
	);

	const percentRate = 17;

	// annuity payment formula
	const percent = percentRate / 100 / 12;

	const annuityPayment =
		Math.trunc(
			creditSum * (percent + percent / ((1 + percent) ** termOfCredit - 1))
		) || 0;

	return {
		creditSum,
		annuityPayment,
	};
}

function BlockPrice({ carPrice = 0 }) {
	const { control, register, setValue } = useFormContext();

	const termOfCredit =
		useWatch({
			control,
			name: 'termOfCredit',
		}) || 0;

	const initialLoan =
		useWatch({
			control,
			name: 'initialLoan',
		}) || 0;

	// const { creditSum, annuityPayment } = calculateCarSum(
	//   termOfCredit,
	//   initialLoan,
	//   carPrice
	// );

	const { creditSum = 0, annuityPayment = 0 } = React.useMemo(() => {
		const result = calculateCarSum(termOfCredit, initialLoan, carPrice);
		setValue('creditSum', result.creditSum);
		setValue('annuityPayment', result.annuityPayment);

		return result;
	}, [termOfCredit, carPrice, initialLoan]);

	return (
		<div className={cx('price-block')}>
			<PriceItm
				title='Стоимость авто'
				price={`${creditSum} ₴`}
				formName='sumOfCar'
				control={control}
			/>

			<PriceItm
				title='Ежемесячный платёж'
				price={`${annuityPayment} ₴`}
				formName='monthPayment'
				control={control}
			/>
		</div>
	);
}

export default BlockPrice;
