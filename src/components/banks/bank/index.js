import React from 'react'

import css from './style.module.css'
import cn from 'classnames/bind'
const cx = cn.bind(css)

const Bank = ({imgUrl, alt}) => {
	return (
		<div className={cx("bank-item")}>
			<img alt={alt} src={require("../assets/tinkoff.png")}/>
		</div>
	)
}

export default Bank
