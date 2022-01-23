import React from 'react';
import cn from 'classnames/bind';
import CreditItem from './credit-item';
import css from './style.module.css';
import percent_icon from './assets/percent_icon.png';
import creditcard_icon from './assets/creditcard-icon.png';
import SectionHeading from '../shared/headings/section_heading';

const cx = cn.bind(css);

const config = [
	{
		title: 'Автокредит без первого взноса',
		desc: 'Помогаем заполнить заявки на кредит правильно для получения положительных решений от банков.',
		imgUrl: percent_icon,
	},
	{
		title: 'Автокредит с первым взносом',
		desc: 'Заявка с первоначальным взносом для одобрения и получения кредита на выгодных для Вас условиях.',
		imgUrl: creditcard_icon,
	},
];

function Credit() {
	return (
		<section className={cx('credit-section')}>
			<div className={cx('heading-box')}>
				{/* <p className={cx("section-heading", "credit-heading")}>
          Кредит под любые условия <br />
          со ставкой <span>от 7,4%</span>
        </p> */}

				<SectionHeading
					className={cx('section-heading', 'credit-heading')}
					span=' от 7,4%'>
					Кредит под любые условия <br />
					со ставкой
				</SectionHeading>
				<p className={cx('desc-paragraph')}>
					Наш опытный специалист по подбору авто и <br />
					автокредитов обезопасит от любых «сюрпризов»
				</p>
			</div>
			<div className={cx('credit-options-block')}>
				{config.map((item) => {
					return (
						<CreditItem
							key={item.title}
							title={item.title}
							desc={item.desc}
							imgUrl={item.imgUrl}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Credit;
