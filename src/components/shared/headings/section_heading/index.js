import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function SectionHeading({ children, span, customClass = {} }) {
	return (
		<h2 className={cx('section-heading', customClass)}>
			{children}
			<span className={cx('section-span')}>{span}</span>
		</h2>
	);
}

export default SectionHeading;
