import cn from 'classnames/bind';
import css from './style.module.css';

const cx = cn.bind(css);

function PriceItm({ title, price, formName, control }) {
	return (
		<div className={cx('price-item')}>
			<span>{title}</span>
			<h5>{price}</h5>
		</div>
	);
}

export default PriceItm;
