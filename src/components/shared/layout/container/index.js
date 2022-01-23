import React from 'react';
import css from './style.module.css';

function Container({ children }) {
	return <div className={css.container}>{children}</div>;
}

export default Container;
