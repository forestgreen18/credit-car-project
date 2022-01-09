import React from 'react'
import css from './style.module.css'
import cn from 'classnames/bind'
const cx = cn.bind(css)

const Step = ({title, desc, stepNumber, showLine}) => {
	return (
		<div className={cx('step',{
			line: showLine
		})}>
			<div className={cx('stepNum', 'amount-box')}>
				<span >{stepNumber}</span>
			</div>
			<p className={cx('title')}>{title}</p>
			<span className={cx('description')}>{desc}</span>
		</div>
	)
}

export default Step
