import React from 'react';
import {
	useController,
	Controller,
	useWatch,
	useFormContext,
} from 'react-hook-form';

import cn from 'classnames/bind';
import RangeSlider from '../slider';
import css from './style.module.css';

const cx = cn.bind(css);

const sliderOptions = {
	marks: {
		sumMarks: {
			0: <div> 0 </div>,
			500000: <div> 500 000 </div>,
			1000000: <div> 1 000 000 </div>,
			1500000: <div> 1 500 000 </div>,
			2000000: <div> 2 000 000 </div>,
			2500000: <div> 2 500 000 </div>,
			3000000: <div> 3 000 000 </div>,
		},
		yearMarks: {
			0: <div> 0 </div>,
			12: <div> 1 год </div>,
			24: <div> 2 года </div>,
			36: <div> 3 года </div>,
			48: <div> 4 года </div>,
			60: <div> 5 лет </div>,
		},
		yearMarksCreditPage: {
			1: <div> 1 мес </div>,
			96: <div> 96 мес </div>,
		},
		loanMarks: {
			0: <div> 0</div>,
			10: <div> 10%</div>,
			20: <div> 20% </div>,
			30: <div> 30% </div>,
			40: <div> 40% </div>,
			50: <div> 50% </div>,
		},
		loanMarksCreditPage: {
			0: <div> 0 %</div>,
			50: <div> 50% </div>,
		},
	},
	formattedFunc: {
		getFormattedLoan(loan = 0) {
			if (loan === 0) {
				return `Без первого взноса`;
			}
			return `${loan} %`;
		},
		getFormattedSum(sum = 0) {
			return `${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ₴`;
		},
		getFormattedYears(months = 0) {
			if (months === 0) {
				return '0	';
			}

			const year = Math.trunc(months / 12);
			const restMonths = months % 12;
			const isBiggerThenZero = year > 0;

			const yearPhrase = this.getYearStrings(year);
			const monthPhrase = isBiggerThenZero
				? this.getMonthStrings(restMonths)
				: this.getMonthStrings(months);

			return `${yearPhrase}  ${monthPhrase}`;
		},
		getMonthStrings(monthNum = 0) {
			let phrase = '';
			if (monthNum < 1) return phrase;
			if (monthNum === 1) {
				phrase = '1 месяц';
			} else if (monthNum > 1 && monthNum < 5) {
				phrase = `${monthNum} месяца`;
			} else {
				phrase = `${monthNum} месяцев`;
			}
			return phrase;
		},

		getYearStrings(year) {
			let phrase = '';
			if (year < 1) return phrase;
			if (year === 1) {
				phrase = `1 год`;
			} else if (year > 1 && year < 5) {
				phrase = `${year} года`;
			} else {
				phrase = `${year} лет`;
			}

			return phrase;
		},
	},
};

function CreditSlider({ formName = 'test', options }) {
	const {
		marks,
		formattedFunc,
		max,
		min = 0,
		step,
		subHeading,
		defaultValue = 0,
	} = options;
	const { control } = useFormContext();

	let formattedData = useWatch({
		control,
		name: formName,
	});

	formattedData = sliderOptions.formattedFunc[formattedFunc](formattedData);

	return (
		<div>
			<p className={cx('slider-subheading')}>{subHeading}</p>
			<h2 className={cx('subheading', 'slider-heading')}>{formattedData}</h2>

			<Controller
				control={control}
				name={formName}
				render={({
					field: { onChange, onBlur, value = 0, name, ref },
					fieldState: { invalid, isTouched, isDirty, error },
					formState,
				}) => (
					<RangeSlider
						value={value}
						setValue={onChange}
						marks={sliderOptions.marks[marks]}
						max={max}
						min={min}
						step={step}
					/>
				)}
			/>
		</div>
	);
}

export default CreditSlider;
