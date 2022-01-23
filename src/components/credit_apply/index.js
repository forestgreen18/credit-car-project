import React from 'react';
import cn from 'classnames/bind';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MainHeading from '../shared/headings/main_heading';
import Header from '../shared/header';
import css from './style.module.css';

import ChooseCarForm from './choose_car_form';
import BuyerInfoForm from './buyer_info_form';

const cx = cn.bind(css);

function CreditApply() {
	const schema = yup
		.object({
			buyerNameInfo: yup.string().required('Поле является обязательным'),
			buyerPhoneNumber: yup
				.string()
				.length(15)
				.required('Поле является обязательным'),
			workingPhone: yup
				.string()
				.length(15)
				.required('Поле является обязательным'),
			buyerAddress: yup.string().required('Поле  является обязательным'),
			confidantName: yup.string().required('Поле является обязательным'),
			confidantPhone: yup
				.string()
				.length(15)
				.required('Поле является обязательным'),
			confidantType: yup.string().required('Поле является обязательным'),
			car_mark: yup.string().required('Поле является обязательным'),
			car_model: yup.string().required('Поле является обязательным'),
		})
		.required();

	const methods = useForm({
		defaultValues: {
			termOfCredit: 1,
		},

		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<section>
			<div className={cx('credit-header')}>
				<Header type='light' />
				<MainHeading customClass={cx('creditapply-heading')}>
					Оформление заявки <br />
					на автокредит
				</MainHeading>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<ChooseCarForm />

						<BuyerInfoForm />
					</form>
				</FormProvider>
			</div>
		</section>
	);
}

export default CreditApply;
