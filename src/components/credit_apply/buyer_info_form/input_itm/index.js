import React from 'react';
import cn from 'classnames/bind';
import styled, { css } from 'styled-components';
import { ErrorMessage } from '@hookform/error-message';

import {
	useController,
	Controller,
	useWatch,
	useFormContext,
} from 'react-hook-form';
import cssStyles from './style.module.css';

const cx = cn.bind(cssStyles);

const StyledInput = styled.input`
	width: 100%;
	padding: ${(props) =>
		props.single ? '20px 0 21px 22px' : '30px 0 11px 22px'};
	border: 1px solid var(--dark-color);
	border-radius: 10px;
	position: relative;
	font-size: 16px;
	color: ${(props) => (props.single ? '#8d8d8d' : 'var(--text-black)')};
	box-sizing: border-box;
`;

const StyledSpan = styled.span`
	position: absolute;

	font-size: 12px;
	color: #8d8d8d;

	top: 11px;
	left: 22px;
	z-index: 2;
`;

function Input(props) {
	const { subheading = '', type, value, placeholder, formName } = props;

	const [inputValue, setValue] = React.useState(value);

	const { formState, control } = useFormContext();

	return (
		<div className={cx('input-itm')}>
			<ErrorMessage
				errors={formState.errors}
				name={formName}
				render={({ message }) => (
					<span className={cx('error-block')}>{message}</span>
				)}
			/>
			<StyledSpan>{subheading}</StyledSpan>

			<Controller
				control={control}
				name={formName}
				render={({
					field: { onChange, onBlur, value, name, ref },
					fieldState: { invalid, isTouched, isDirty, error },
				}) => (
					<div className={cx('input-itm')}>
						<StyledInput
							value={value}
							type={type}
							single={!subheading}
							placeholder={placeholder}
							innerRef={ref}
							name={name}
							onChange={onChange}
						/>
					</div>
				)}
			/>
		</div>
	);
}

export default Input;
