import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function DisclamerBackground({ children }) {
	return <div className={cx('disclaming-background')}>{children}</div>;
}

export default DisclamerBackground;
