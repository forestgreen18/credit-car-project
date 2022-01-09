import React from 'react'
import css from './style.module.css'


const Background = ({children}) => {
	return (
		<div className={css['hero-background']}>
			<div className={css.content}>
				{children}
			</div>
			<div className={css['car']}/>
			<div className={css['card']}/>
			<div className={css['left-grid']}/>
			<div className={css['right-grid']}/>
		</div>
	)
}

export default Background
