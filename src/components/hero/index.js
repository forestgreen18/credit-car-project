import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames/bind';
import Header from '../shared/header';

import css from './style.module.css';
import Button from '../shared/button';
import MainHeading from '../shared/headings/main_heading';

const cx = cn.bind(css);

function Hero() {
	const navigate = useNavigate();

	return (
		<section className={cx('root-hero')}>
			<Header type='blue' />
			<div className={css['text-content']}>
				{/* <div className={cx("heading")}>
          Оформи автокредит <br />
          и получи авто в день <br />
          обращения
        </div> */}

				<MainHeading customClass={cx('hero-heading')}>
					Оформи автокредит <br />
					и получи авто в день <br />
					обращения
				</MainHeading>

				<div className={css['text-subcontent']}>
					<div>
						<span>От 1500 авто</span>
						<span>В наличии в 12 городах</span>
					</div>

					<div>
						<span>До 7 лет</span>
						<span>Срок погашения</span>
					</div>

					<div>
						<span>От 7,4%</span>
						<span>Ставка по кредиту</span>
					</div>
				</div>

				<NavLink to='/credit-page' className={cx('hero-btn')}>
					<Button title='Завка на кредит' color='red' />
				</NavLink>
			</div>
		</section>
	);
}

export default Hero;
