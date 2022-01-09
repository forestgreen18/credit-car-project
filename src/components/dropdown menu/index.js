import React, { Fragment } from "react";
import Select, { components, IndicatorsContainerProps } from 'react-select';
import css from './style.module.css'


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#07B1FD' :  '#5C5C5C',
    backgroundColor: 'inherit',
    padding: 7.5,
    fontWeight: 700,
  }),
  control: () => {

    return {
      color: '#fff',
      width: '162px',
      display: 'flex'
    } 
  },
  singleValue: (provided, state) => {
    console.log(provided)
    console.log(state)
    return {
      color: 'white',
      width: 'auto'
    }
  },
  indicatorSeparator: () => {
    return {
      display: 'none',
    }
  },
  input: () => {
    return {
      display: 'none',
    }
  },
  dropdownIndicator: () => {
      
  },
  menu:(provided) => {
      return {
    ...provided,
    backgroundColor: 'white',
        borderRadius: '10px',
      }
  }, 
  menuList: () => {
      return {
    backgroundColor: 'transparent',
      }
  },

}

const Menu = (props) => {

  return (
      <div className={css['dropdown-container']}>
        <div className={css['container-arrow']} ></div>
        <components.Menu {...props}>{props.children}</components.Menu>
      </div>
  );
};


const DropdownIndicator = (props) => {

  return (
        
        <components.DropdownIndicator {...props}>
          <img src={require("./assets/arrow_down.png")} alt="arrow down" />
        </components.DropdownIndicator>
  );
};


const Control = ({ children, ...props }) => {

  const style = { cursor: 'pointer' };

  return (
    <components.Control {...props}>
      <span  style={style}>
        <img src={require("./assets/location_icon.png")} alt="location-icon" />
      </span>
      {children}
    </components.Control>
  );
};



const DropdownMenu = (props) => {

  const {options} = props

  return (
    <Select
            styles={customStyles}
            defaultValue={options[0]}
            options={options}
            components={{ Menu, DropdownIndicator, Control }}
          />
  )
};

export default DropdownMenu