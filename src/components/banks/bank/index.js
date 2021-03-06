import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function Bank({ imgUrl, imgGrayUrl, alt }) {
	const [img, setImg] = React.useState(imgGrayUrl);

	function changeToColouredImg() {
		setImg(imgUrl);
	}

	function changeToGrayImg() {
		setImg(imgGrayUrl);
	}

	return (
		<div className={cx('bank-item')}>
			<img
				alt={alt}
				src={img}
				onMouseEnter={changeToColouredImg}
				onMouseLeave={changeToGrayImg}
			/>
		</div>
	);
}

export default Bank;
