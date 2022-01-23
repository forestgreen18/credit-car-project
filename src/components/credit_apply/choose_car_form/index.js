import React from 'react';
import cn from 'classnames/bind';
import { useFormContext, useWatch } from 'react-hook-form';
import css from './style.module.css';
import {
	useCarMarks,
	useCarModels,
	useCarArticles,
} from '../../../hooks/carFormHooks/useCarSelect';
import DropdownMenuCredit from '../../dropdown menu/dropdown_credit';
import Subheading from '../../shared/headings/subheading';
import CarSelect from '../car_select';
import CreditSlider from '../../shared/CreditSlider';
import Divider from '../../shared/divider';
import PriceItm from './price_item';
import BlockPrice from './block_price';

const cx = cn.bind(css);

function ChooseCarForm() {
	const { formattedCarMarks: carList, errors, loading } = useCarMarks();

	const { register, control, resetField, setValue, formState } =
		useFormContext();

	const carMark = useWatch({
		control,
		name: 'car_mark', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
	});

	React.useEffect(() => {
		resetField('car_model');
	}, [carMark]);

	const {
		formattedCarModels: modelsList,
		errors: modelErrors,
		loading: modelLoading,
	} = useCarModels(carMark);

	const carModel = useWatch({
		control,
		name: 'car_model',
	});

	const {
		cars: carsInfo = [],
		errors: articlesErrors,
		loading: articlesLoading,
	} = useCarArticles(carMark, carModel);
	const selectedCarId = useWatch({
		control,
		name: 'selectedCar',
	});

	const selectedCar = React.useMemo(() => {
		const foundCar =
			carsInfo.find((car) => car.id === Number(selectedCarId)) || '';
		setValue('carModelTitle', foundCar.model);
		setValue('carMarkTitle', foundCar.mark);
		setValue('carLink', foundCar.initialLink);
		console.log(foundCar, ' selectedCar');

		return foundCar;
	}, [selectedCarId, JSON.stringify(carsInfo)]);

	return (
		<div className={cx('choosecar')}>
			<div className={cx('append-heading-block')}>
				<Subheading customClass={cx('credit-subheading')}>
					Выберите авто
				</Subheading>
			</div>

			<div className={cx('option-block')}>
				<DropdownMenuCredit
					options={carList}
					subheading='Марка авто'
					formName='car_mark'
					control={control}
				/>
				<DropdownMenuCredit
					options={modelsList}
					subheading='Модель'
					formName='car_model'
					control={control}
					disabled={!carMark}
				/>
			</div>
			<div className={cx('choosing-car')}>
				<CarSelect carList={carsInfo} formName='selectedCar' />
			</div>
			<div className={cx('credit-car-block')}>
				<CreditSlider
					control={control}
					formName='termOfCredit'
					options={{
						marks: 'yearMarksCreditPage',
						formattedFunc: 'getFormattedYears',
						max: 96,
						min: 1,
						step: 1,
						subHeading: 'Желаемый срок кредита',
					}}
				/>
				<CreditSlider
					control={control}
					formName='initialLoan'
					options={{
						marks: 'loanMarksCreditPage',
						formattedFunc: 'getFormattedLoan',
						max: 50,
						step: 1,
						subHeading: 'Первый взнос',
					}}
				/>
			</div>
			<Divider customClass={cx('divider')} />
			<BlockPrice carPrice={selectedCar.price} control={control} />
		</div>
	);
}

export default ChooseCarForm;
