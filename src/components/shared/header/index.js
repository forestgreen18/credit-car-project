import React from 'react';
import cn from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import css from './style.module.css';
import DropdownMenu from '../../dropdown menu/dropdown_header';
import { cities } from './mock';
import logo from './assets/logo.png';
import blueLogo from './assets/blue_logo.svg';

import phoneIcon from './assets/phone_icon.png';
import bluePhoneIcon from './assets/blue_phone_icon.svg';
import Dropdown from './dropdown_menu';

const cx = cn.bind(css);

function Header({ type = 'blue' }) {
	const options = {
		class: '',
		img: logo,
		phoneIcon: phoneIcon,
		theme: 'blue',
	};
	const img = logo;
	if (type === 'light') {
		options.class = 'header-light';
		options.img = blueLogo;
		options.phoneIcon = bluePhoneIcon;
		options.theme = 'light';
	}

	return (
		<header className={cx('header', `${options.class}`)}>
			<NavLink to='/'>
				<img src={options.img} alt='logo' />
			</NavLink>
			<nav>
				<ul className={cx('header-menu-list', `${options.class}`)}>
					<li>
						<a href='#'>Купить </a>
					</li>
					<li>
						<a href='#'>Продать </a>
					</li>
					<li>
						<a href='#'> Автокредит</a>
					</li>
					<li>
						<a href='#'>Контакты </a>
					</li>
				</ul>
			</nav>
			<span className={cx('dropdown-block', `${options.class}`)}>
				<DropdownMenu options={cities} theme={options.theme} />
			</span>
			<span className={cx('phone-block')}>
				<a
					href='tel:7-994-664-36-27'
					className={cx('phoneLink', `${options.class}`)}>
					<img src={options.phoneIcon} alt='arrow down' />
					+7 994-664-36-27
				</a>
			</span>

			<div className={cx('burgerMenu', `${options.class}`)}>
				<Dropdown />
			</div>
		</header>
	);
}

export default Header;
