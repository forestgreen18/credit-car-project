import React from 'react';
import InputMask from 'react-input-mask';
import css from './style.module.css';

function PhoneInput(props) {
	return (
		<InputMask
			mask='9-999-999-99-99'
			onChange={props.onChange}
			value={props.value}
			placeholder={props.placeholder}
			type={props.type}
			className={`${css['input-item']} ${props.customStyles}`}
		/>
	);
}

function Input({ text = '', customStyles = {}, type = 'text', pattern = '' }) {
	return type == 'tel' ? (
		<PhoneInput type='tel' customStyles={customStyles} placeholder={text} />
	) : (
		<input
			type={type}
			pattern={pattern}
			className={`${css['input-item']} ${customStyles}`}
			placeholder={text}
		/>
	);
}

export default Input;
