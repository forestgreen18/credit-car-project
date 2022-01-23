import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function ProcessCreditApplication() {
	return (
		<section className={cx('process-credit-section')}>
			<h2 className={cx('heading')}>
				Оформление заявки <br />
				на автокредит
			</h2>
		</section>
	);
}

export default ProcessCreditApplication;
