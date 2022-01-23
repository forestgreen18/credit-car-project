import React from 'react';

import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function QuestionBackground({ children }) {
	return (
		<div className={cx('question-background')}>
			{children}
			<img
				className={cx('question-img')}
				alt='woman'
				src={require('../assets/question.png')}
			/>
		</div>
	);
}

export default QuestionBackground;
