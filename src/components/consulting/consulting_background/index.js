import React from 'react'
import Bubble from '../../shared/bubble';

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const ConsultingBackground = ({children}) => {
	return (
		<div  className={cx("consulting-background")}>
			<div className={cx("content")}>
				{children}
			</div>
			<img alt='car' src={require('../assets/car.png')} className={cx("car")}/>
			<div className={cx("bubble")}>
				<Bubble title={`Гарантия от \n 29 000 ₽`} subheading={"На 1 год"} fontSizePx={"30"}/>
			</div>
		</div>
	)
}

export default ConsultingBackground
