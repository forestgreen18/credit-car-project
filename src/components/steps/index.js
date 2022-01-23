import React from 'react';
import Step from './step';
import css from './style.module.css';

const config = [
	{
		stepNumber: '01',
		title: 'Выбери авто',
		desc: 'Из нескольких тысяч вариантов нашего автопарка',
	},
	{
		stepNumber: '02',
		title: 'Выбери условия',
		desc: 'Кредитования от наших партнёров',
	},
	{
		stepNumber: '03',
		title: 'Оставь заявку',
		desc: 'На нашем сайте и дождитесь ответа банка',
	},
	{
		stepNumber: '04',
		title: 'Приезжай за авто',
		desc: 'Вы получите Ваш новый автомобиль и все документы',
	},
];

function Steps() {
	return (
		<section className={css.steps}>
			{config.map((item, indx) => {
				const showLine = indx !== config.length - 1;

				return (
					<Step
						key={item.title}
						title={item.title}
						desc={item.desc}
						stepNumber={item.stepNumber}
						showLine={showLine}
					/>
				);
			})}
		</section>
	);
}

export default Steps;
