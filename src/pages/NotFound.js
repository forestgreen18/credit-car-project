import React from 'react';
import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function NotFound() {
	return (
		<div className={cx('notfound-page')}>
			<p>Ошибка 404</p>
			<p>Страница не найдена</p>
		</div>
	);
}

export default NotFound;
