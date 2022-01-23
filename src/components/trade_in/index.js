import React from 'react';
import cn from 'classnames/bind';
import Button from '../shared/button';
import css from './style.module.css';
import Bubble from '../shared/bubble';
import SectionHeading from '../shared/headings/section_heading';

const cx = cn.bind(css);

function TradeIn() {
	return (
		<section className={cx('tradein-section')}>
			<div className={cx('tradein-heading-block')}>
				<SectionHeading customClass={cx('tradein-heading')} span=' от 7,4%'>
					Трейд-ин с доплатой <br /> в кредит
				</SectionHeading>

				<span className={cx('desc-paragraph', 'tradein-paragraph')}>
					Проведем оценку и зачтём авто как первый взнос по кредиту.
				</span>
				<div className={cx('buttons-block', 'tradein-buttons')}>
					<div>
						<Button
							title='Оставить заявку'
							color='blue'
							customClass={cx('input-btn')}
						/>
					</div>
					<div>
						<Button title='Подробнее' color='white' />
					</div>
				</div>
			</div>
			<div className={cx('car-block')}>
				<div className={cx('blue-bubble')}>
					<Bubble title={`Оформление \n всех  документов \n в день сделки`} />
				</div>
				<div className={cx('blue-bubble')}>
					<Bubble title={`Получение авто \n в день сделки`} />
				</div>
				<div className={cx('car')}>
					<img alt='car' src={require('./assets/car.png')} />
				</div>
				<div className={cx('background-bubble')} />
			</div>
		</section>
	);
}

export default TradeIn;
