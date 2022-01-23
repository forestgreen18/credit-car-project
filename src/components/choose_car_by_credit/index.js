import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import cn from 'classnames/bind';
import SectionHeading from '../shared/headings/section_heading';
import CreditSlider from '../shared/CreditSlider';
import css from './style.module.css';
import Button from '../shared/button';

const cx = cn.bind(css);

function CreditCondition() {
	const methods = useForm();

	return (
		<section>
			<SectionHeading customStyles={cx('subheading-credit-car')}>
				Подбор автомобиля под <br /> условия кредита
			</SectionHeading>

			{/* <p className={cx("section-heading", "subheading-credit-car")}></p> */}
			<p className={cx('desc-paragraph', 'sub-heading')}>
				Выберите автомобиль под свои возможности из <br />
				нашего автопарка на выгодных для Вас условиях
			</p>

			<div className={cx('choosing-credit')}>
				<FormProvider {...methods}>
					<div className={cx('slider-box')}>
						<div>
							<CreditSlider
								formName='creditSum'
								options={{
									formattedFunc: 'getFormattedSum',
									marks: 'sumMarks',
									max: 3000000,
									step: 100000,
									subHeading: 'Желаемая сумма кредита',
								}}
							/>
						</div>
						<div>
							<CreditSlider
								formName='termOfCredit'
								options={{
									formattedFunc: 'getFormattedYears',
									marks: 'yearMarks',
									max: 60,
									step: 1,
									subHeading: 'Желаемый срок кредита',
								}}
							/>
						</div>
						<div>
							<CreditSlider
								formName='initialLoan'
								options={{
									formattedFunc: 'getFormattedLoan',
									marks: 'loanMarks',
									max: 50,
									step: 1,
									subHeading: 'Первый взнос',
								}}
							/>
						</div>
					</div>
					<div className={cx('creditBtn')}>
						<Button color='blue' title='Показать предложения' />
					</div>
				</FormProvider>
			</div>
		</section>
	);
}

export default CreditCondition;
