import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function MainHeading({ children, customClass = {} }) {
	return <h1 className={cx('main-heading', customClass)}>{children}</h1>;
}

export default MainHeading;
