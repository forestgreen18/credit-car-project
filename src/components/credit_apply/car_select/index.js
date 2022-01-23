import cn from 'classnames/bind';
import css from './style.module.css';
import CarCard from './car_card';

const cx = cn.bind(css);

function formatHeading(amountOfCars) {
	if (amountOfCars > 1 && amountOfCars < 5) {
		return `Найдено ${amountOfCars} автомобиля`;
	}
	if (amountOfCars >= 5) {
		return `Найдено ${amountOfCars} автомобилей`;
	}
	if (amountOfCars === 1) {
		return `Найдено 1 автомобиль`;
	}
	return 'Автомобилей не найдено';
}

function CarSelect({ carList = [], formName }) {
	const amountOfCarsHeading = formatHeading(carList.length);

	return (
		<div>
			<h4 className={cx('car-select-heading')}>{amountOfCarsHeading}</h4>
			<div className={cx('select-car')}>
				{carList.map((auto) => {
					return <CarCard formName={formName} key={auto.id} autoInfo={auto} />;
				})}
			</div>
		</div>
	);
}

export default CarSelect;
