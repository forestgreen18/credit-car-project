import React from "react";
import {
  useController,
  Controller,
  useWatch,
  useFormContext,
} from "react-hook-form";
import cssStyles from "./style.module.css";
import { ErrorMessage } from "@hookform/error-message";

import cn from "classnames/bind";
import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

const cx = cn.bind(cssStyles);

const StyledSpan = styled.span`
  position: absolute;

  font-size: 12px;
  color: #8d8d8d;

  top: 11px;
  left: 22px;
  z-index: 2;
`;

function PhoneInput(props) {
  const { onChange, value, placeholder, customClass } = props;

  return (
    <InputMask
      mask="9-999-999-99-99"
      onChange={onChange}
      value={value}
      type="tel"
      placeholder={placeholder}
      className={cx(customClass)}
    />
  );
}

const InputTel = (props) => {
  const { subheading = "", placeholder, formName } = props;

  const { formState, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={formName}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <div className={cx("input-itm")}>
          <ErrorMessage
            errors={formState.errors}
            name="buyerNameInfo"
            render={({ message }) => (
              <span className={cx("error-block")}>
                это поле является обязательным
              </span>
            )}
          />
          <StyledSpan>{subheading}</StyledSpan>
          <PhoneInput
            placeholder={placeholder}
            customClass={subheading ? "phone-input" : "phone-input-single"}
            innerRef={ref}
            name={name}
            onChange={onChange}
          />
        </div>
      )}
    />
  );
};

export default InputTel;
