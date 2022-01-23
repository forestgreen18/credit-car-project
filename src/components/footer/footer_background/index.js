import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function FooterBackground({ children }) {
	return <div className={cx('footer-background')}>{children}</div>;
}

export default FooterBackground;
