import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function CustomBackground({ children, customClass = {} }) {
	return <div className={cx('background', customClass)}>{children}</div>;
}

export default CustomBackground;
