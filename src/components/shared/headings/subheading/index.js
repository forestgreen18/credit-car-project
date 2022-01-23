import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function Subheading({ children, customClass = {} }) {
	return <span className={cx('subheading', customClass)}>{children}</span>;
}

export default Subheading;
