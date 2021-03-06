import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';
import Button from '../shared/button';
import SectionHeading from '../shared/headings/section_heading';

const cx = cn.bind(css);

function Consulting() {
	return (
		<section>
			<div className={cx('consulting-text')}>
				<img alt='logo' src={require('./assets/logo.png')} />

				<SectionHeading customClass={cx('consulting-heading')}>
					Защити себя от расходов <br />
					на ремонт автомобиля
				</SectionHeading>

				<span className={cx('subheading')}>
					Гарантия Karso – лучшая защита авто от <br /> поломок на дорогах для
					авто с пробегом
				</span>
				<Button color='red' title='Заказать консультацию' />
			</div>
		</section>
	);
}

export default Consulting;
