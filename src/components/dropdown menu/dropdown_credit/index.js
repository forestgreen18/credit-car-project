import React, { Fragment } from "react";
import { useController, Controller, useWatch } from "react-hook-form";

import Select, { components, IndicatorsContainerProps } from "react-select";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: (provided) => {
    return {
      ...provided,
      border: "1px solid #464646",
      borderRadius: "10px",
      height: "60px",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "flex-start",
    };
  },
  singleValue: (provided, state) => {
    return {
      ...provided,
      color: "var(--text-black)",
    };
  },
  valueContainer: (provided) => {
    return {
      ...provided,
      paddingLeft: "22px",
    };
  },
  indicatorSeparator: (provided) => {
    return {
      ...provided,
      display: "none",
    };
  },
  indicatorsContainer: (provided) => {
    return {
      ...provided,
      marginTop: "-20px",
      marginRight: "20px",
    };
  },
  input: (provided) => {
    return {
      ...provided,
    };
  },
  dropdownIndicator: () => {},
  menu: (provided) => {
    return {
      ...provided,
    };
  },
  menuList: (provided) => {
    return {
      ...provided,
    };
  },
};

const Menu = (props) => {
  return (
    <div className={css["dropdown-container"]}>
      <div className={css["container-arrow"]}></div>
      <components.Menu {...props}>{props.children}</components.Menu>
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {/* <img
        src={dropdownTheme === "blue" ? arrowIcon : blackArrow}
        alt="arrow down"
      /> */}
    </components.DropdownIndicator>
  );
};

const Control = ({ children, ...props }) => {
  const style = { cursor: "pointer", display: "flex", width: "100%" };

  return (
    <components.Control {...props}>
      <span className={cx("subheading-dropdown")}>
        {props.selectProps.subheading}
      </span>
      <div style={style}>{children}</div>
    </components.Control>
  );
};

const DropdownMenuCredit = (props) => {
  const { options, subheading, formName, control, disabled = false } = props;

  return (
    <Controller
      control={control}
      name={formName}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <Select
          isDisabled={disabled}
          value={options.find((c) => c.value === value)}
          onChange={(val) => onChange(val.value)}
          name={name}
          subheading={subheading}
          styles={customStyles}
          defaultValue={options[0]}
          options={options}
          components={{ Menu, DropdownIndicator, Control }}
          innerRef={ref}
        />
      )}
    />
  );
};

export default DropdownMenuCredit;
