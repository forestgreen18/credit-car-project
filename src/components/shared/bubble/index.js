import React from 'react'

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const Bubble = ({title, subheading, fontSizePx}) => {
	const styling = {
		fontSize: `${fontSizePx}px`,
		marginBottom: '10px'
	}

	return (
		<div className={cx("blue-bubble")}
			>
				<p style={styling}>
          {title}

				</p>
		  <span>
			  {subheading}
		  </span>
        </div>
	)
}

export default Bubble
