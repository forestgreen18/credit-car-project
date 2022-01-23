import React from 'react';

import cn from 'classnames/bind';
import Button from '../../shared/button';
import SectionHeading from '../../shared/headings/section_heading';

import css from './style.module.css';

const cx = cn.bind(css);

function CreditItem({ title, desc, imgUrl }) {
	return (
		<div className={cx('credit-item')}>
			<div className={cx('heading-block')}>
				<SectionHeading className={cx('credit-itm-heading')}>
					{title}
				</SectionHeading>
				{/* <p className={cx("section-heading")}>{title}</p> */}

				{/* //! Не завантажуються фото				 */}
				<img alt='credit-icon' src={imgUrl} />
			</div>
			<p className={cx('desc-paragraph', 'desc-credit')}>{desc}</p>

			<div className={cx('buttons-block')}>
				<div>
					<Button title='Оформить кредит' color='blue' />
				</div>
				<div>
					<Button title='Подробнее' color='white' />
				</div>
			</div>
		</div>
	);
}

export default CreditItem;
