import React from 'react';
import cn from 'classnames/bind';
import styled from 'styled-components';
import { useFormContext, useWatch } from 'react-hook-form';
import arrow from './assets/arrow.svg';
import css from './style.module.css';

const cx = cn.bind(css);

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'radio' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const Icon = styled.img`
	position: absolute;
	top: 3px;
	left: 2px;
	width: 100%;
	height: 100%;
	background: url(${arrow}) no-repeat;
	appearance: none;
`;

const StyledCheckbox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: ${(props) =>
		props.checked ? 'var(--text-color-white)' : 'none'};
	border-radius: 3px;
	transition: all 150ms;

	width: 16px;
	height: 16px;
	border-radius: 50%;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}
	${Icon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}
`;

function Checkbox({ className, checked, ...props }) {
	return (
		<CheckboxContainer className={cx(className)}>
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Icon />
			</StyledCheckbox>
		</CheckboxContainer>
	);
}

function CarCheckbox({ text, id, formName }) {
	const { register } = useFormContext();

	const carID = useWatch({
		name: formName,
	});

	const checked = id === Number(carID);

	return (
		<div className={cx('car-checkbox-block')}>
			<label
				htmlFor={id}
				className={cx('car-checkbox', `${checked ? 'checked' : ''}`)}>
				<span>{text}</span>
				<input
					{...register(formName)}
					id={id}
					type='radio'
					name={formName}
					value={id}
				/>
				<div className={cx('checkmark')} />
			</label>
		</div>
	);
}

export default CarCheckbox;
