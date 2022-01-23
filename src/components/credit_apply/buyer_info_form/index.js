import cn from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import css from './style.module.css';
import Input from './input_itm';

import Subheading from '../../shared/headings/subheading';
import DropdownMenuCredit from '../../dropdown menu/dropdown_credit';
import Button from '../../shared/button';
import InputTel from './tel_input_itm';

const cx = cn.bind(css);

function BuyerInfoForm() {
	const { control } = useFormContext();

	const confidants = [
		{ value: 'relative', label: 'Родственник' },
		{ value: 'wife/husband', label: 'Муж/Жена' },
	];

	return (
		<div className={cx('choosecar')}>
			<div className={cx('buyer-info')}>
				<div className={cx('append-heading-block')}>
					<Subheading>Информация о заёмщике</Subheading>
				</div>
				<div className={cx('buyer-inputs')}>
					<div className={cx('name-and-phone')}>
						<Input
							control={control}
							formName='buyerNameInfo'
							value='Болтовский Сергей Николаевич'
							subheading='Полное ФИО'
						/>

						<InputTel
							formName='buyerPhoneNumber'
							control={control}
							value='8-913-107-07-25'
							type='tel'
							subheading='Мобильный телефон'
						/>

						<InputTel
							placeholder='Рабочий телефон'
							type='tel'
							control={control}
							formName='workingPhone'
						/>
					</div>
					<div>
						<Input
							formName='buyerAddress'
							control={control}
							value='Томская обл., п.Светлый, д. 15 кв 57'
							subheading='Адрес фактического проживания '
						/>
					</div>
				</div>
			</div>
			<div className={cx('сonfidants')}>
				<Subheading>Доверенные лица</Subheading>

				<div className={cx('confidants-inputs')}>
					<div className={cx('confidant-info')}>
						<Input
							value='Игорь Николевич '
							subheading='ФИО'
							formName='confidantName'
							control={control}
						/>

						<InputTel
							value='8 913-104-39-89'
							type='tel'
							subheading='Мобильный телефон'
							formName='confidantPhone'
							control={control}
						/>

						<DropdownMenuCredit
							formName='confidantType'
							control={control}
							options={confidants}
							subheading='Кем приходится'
						/>
					</div>
				</div>
			</div>
			<div className={cx('confirmation')}>
				<p>
					Отправляя заявку вы соглашатесь с условями обработки{' '}
					<span>персональных данных</span>
				</p>
				<Button
					type='submit'
					color='blue'
					title='Отправить заявку'
					customClass={cx('confirmation-btn')}
				/>
			</div>
		</div>
	);
}

export default BuyerInfoForm;
