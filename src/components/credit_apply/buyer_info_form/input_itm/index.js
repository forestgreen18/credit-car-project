import React from "react";
import cssStyles from "./style.module.css";
import cn from "classnames/bind";
import styled, { css } from "styled-components";
const cx = cn.bind(cssStyles);

const StyledInput = styled.input`
  width: 100%;
  padding: ${(props) =>
    props.single ? "20px 0 21px 22px" : "30px 0 11px 22px"};
  border: 1px solid var(--dark-color);
  border-radius: 10px;
  position: relative;
  font-size: 16px;
  color: ${(props) => (props.single ? "#8d8d8d" : "var(--text-black)")};
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

const Input = (props) => {
  const { subheading = "", type, value } = props;

  const [inputValue, setValue] = React.useState(value);

  function changeValue(event) {
    setValue(event.target.value);
  }

  return (
    <div className={cx("input-itm")}>
      <StyledSpan>{subheading}</StyledSpan>
      <StyledInput
        value={inputValue}
        type={type}
        onChange={changeValue}
        single={!subheading ? true : false}
      />
    </div>
  );
};

export default Input;
