import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';
import Button from '../shared/button';
import SectionHeading from '../shared/headings/section_heading';

const cx = cn.bind(css);

function CreditApplication() {
	return (
		<section className={cx('credit-application-section')}>
			<SectionHeading customClass={cx('heading', 'credit-heading')}>
				Оформи заявку онлайн <br />
				и получи решение <br />
				через 10 минут
			</SectionHeading>

			<Button
				title='Подать заявку'
				color='red'
				customClass={cx('credit-application-section-btn')}
			/>
		</section>
	);
}

export default CreditApplication;
