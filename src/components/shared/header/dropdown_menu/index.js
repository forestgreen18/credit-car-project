import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

const menuOptions = [{ label: 'opt1' }, { label: 'opt2' }, { label: 'opt3' }];

const Dropdown = () => {
	const [active, setActive] = React.useState(false);

	function toggle() {
		setActive(!active);
	}

	return (
		<div className={cx('menu-container')} onClick={toggle}>
			<div className={cx('burgerMenu')}>
				<div />
				<div />
				<div />
			</div>

			<div className={cx('menu-block', active ? 'active' : null)}>
				<ul>
					{menuOptions.map((option) => {
						return (
							<li>
								<a href='#'>{option.label}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
