import React, { Fragment } from 'react';
import Select, { components, IndicatorsContainerProps } from 'react-select';
import css from './style.module.css';

import arrow from './assets/arrow_down.png';
import blackArrow from './assets/black_arrow.svg';

import locaction from './assets/location_icon.png';
import locationBlue from './assets/location_icon_blue.svg';

let arrowIcon = arrow;
let locationIcon = locaction;

let dropdownTheme = 'blue';

const customStylesLightTheme = {
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#07B1FD' : '#5C5C5C',
		backgroundColor: 'inherit',
		padding: '7.5px 0 7.5px 30px',
		fontWeight: 700,
	}),
	control: () => {
		return {
			color: '#fff',
			width: '162px',
			display: 'flex',
		};
	},
	singleValue: (provided, state) => {
		return {
			color: 'var(--text-black)',
			width: 'auto',
		};
	},
	indicatorSeparator: () => {
		return {
			display: 'none',
		};
	},
	input: () => {
		return {
			display: 'none',
		};
	},
	dropdownIndicator: () => {},
	menu: (provided) => {
		return {
			...provided,
			width: '214px',
			padding: '22px 0',
			backgroundColor: 'white',
			borderRadius: '10px',
			position: 'absolute',
			top: '28px',
			marginTop: 0,
			boxShadow: 'none',
		};
	},
	menuList: () => {
		return {
			backgroundColor: 'transparent',
		};
	},
};

const customStylesBlueTheme = {
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? '#07B1FD' : '#5C5C5C',
		backgroundColor: 'inherit',
		padding: '7.5px 0 7.5px 30px',
		fontWeight: 700,
	}),
	control: () => {
		return {
			color: '#fff',
			width: '162px',
			display: 'flex',
		};
	},
	singleValue: () => {
		return {
			color: '#fff',
			width: 'auto',
		};
	},
	indicatorSeparator: () => {
		return {
			display: 'none',
		};
	},
	input: () => {
		return {
			display: 'none',
		};
	},
	dropdownIndicator: () => {
		return {
			marginLeft: '0px',
		};
	},
	menu: (provided) => {
		return {
			...provided,
			width: '214px',
			padding: '22px 0',
			backgroundColor: 'white',
			borderRadius: '10px',
			position: 'absolute',
			top: '28px',
			marginTop: 0,
			boxShadow: 'none',
		};
	},
	menuList: () => {
		return {
			backgroundColor: 'transparent',
		};
	},
};

function Menu(props) {
	return (
		<div className={css['dropdown-container']}>
			<div className={css['container-arrow']} />
			<components.Menu {...props}>{props.children}</components.Menu>
		</div>
	);
}

function DropdownIndicator(props) {
	return (
		<components.DropdownIndicator {...props}>
			<img
				src={dropdownTheme === 'blue' ? arrowIcon : blackArrow}
				alt='arrow down'
			/>
		</components.DropdownIndicator>
	);
}

function Control({ children, ...props }) {
	const style = { cursor: 'pointer' };

	return (
		<components.Control {...props}>
			<span style={style}>
				<img
					src={dropdownTheme === 'blue' ? locationIcon : locationBlue}
					alt='location-icon'
				/>
			</span>
			{children}
		</components.Control>
	);
}

function DropdownMenu(props) {
	const { options, theme } = props;

	if (theme === 'light') {
		dropdownTheme = 'light';
		arrowIcon = blackArrow;
		locationIcon = locationBlue;
	} else {
		dropdownTheme = 'blue';
		arrowIcon = arrow;
		locationIcon = locaction;
	}

	return (
		<Select
			styles={
				theme === 'light' ? customStylesLightTheme : customStylesBlueTheme
			}
			defaultValue={options[0]}
			options={options}
			components={{ Menu, DropdownIndicator, Control }}
		/>
	);
}

export default DropdownMenu;
