import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function Button({ title, color, customClass = {}, type = 'button' }) {
	// return <a className={cx("button", `btn-${color}`, customClass)}>{title}</a>;
	return (
		<input
			className={cx('button', `btn-${color}`, customClass)}
			type={type}
			value={title}
		/>
	);
}

export default Button;
