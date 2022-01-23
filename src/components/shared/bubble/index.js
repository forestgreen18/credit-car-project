import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function Bubble({ title, subheading, fontSizePx }) {
	const styling = {
		fontSize: `${fontSizePx}px`,
		marginBottom: '10px',
	};

	return (
		<div className={cx('blue-bubble')}>
			<p style={styling}>{title}</p>
			<span>{subheading}</span>
		</div>
	);
}

export default Bubble;
