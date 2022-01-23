import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';
import SectionHeading from '../shared/headings/section_heading';
import Button from '../shared/button';
import Input from '../shared/input';
import Checkbox from '../shared/checkbox';

const cx = cn.bind(css);

function Questions() {
	return (
		<section className={cx('question-section')}>
			<SectionHeading customClass={cx('white-heading', 'question-heading')}>
				Остались вопросы? <br /> Напишите нам
			</SectionHeading>

			<p className={cx('question-subheading')}>
				Оставьте заявку и наши менеджеры свяжуться с Вами, чтобы обсудить все
				вопросы
			</p>

			<div className={cx('input-box')}>
				<Input
					text='Ваш телефон'
					customStyles={cx('input')}
					type='tel'
					pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
				/>
				<span className={cx('divider')} />
				<Input text='Ваше имя' customStyles={cx('input')} />
				<div className={cx('input-btn')}>
					<Button color='red' title='Оставить заявку' />
				</div>
			</div>

			<div className={cx('checkbox-block')}>
				<Checkbox
					text='Я согласен с политикой обработки '
					spanText=' персональных данных'
				/>
			</div>
		</section>
	);
}

export default Questions;
