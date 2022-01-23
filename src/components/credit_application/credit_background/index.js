import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function CreditBackground({ children }) {
	return (
		<div className={cx('credit-background')}>
			<div className={cx('content')}>{children}</div>
			<div className={cx('laptop')} />

			<div className={cx('lines')} />
		</div>
	);
}

export default CreditBackground;
