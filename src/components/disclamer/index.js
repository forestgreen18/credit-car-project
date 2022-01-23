import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function Disclaming() {
	return (
		<section className={cx('disclaming-section')}>
			<p className={cx('disclaming-paragraph')}>
				Вся информация на сайте носит справочный характер и не является
				публичной офертой
			</p>
		</section>
	);
}

export default Disclaming;
