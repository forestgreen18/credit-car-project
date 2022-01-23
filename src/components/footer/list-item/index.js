import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function ListItem({ title, items }) {
	return (
		<div className={cx('listItm-block')}>
			<h4 className={cx('listItem-heading')}>{title}</h4>
			<ul className={cx('list-block')}>
				{items[0].map((listItm) => {
					return (
						<li key={listItm}>
							<a href='#'>{listItm}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ListItem;
