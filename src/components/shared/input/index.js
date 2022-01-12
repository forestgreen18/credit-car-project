import React from "react";
import css from "./style.module.css";

const Input = ({
  text = "",
  customStyles = {},
  type = "text",
  pattern = "",
}) => {
  return (
    <input
      type={type}
      pattern={pattern}
      className={`${css["input-item"]} ${customStyles}`}
      placeholder={text}
    />
  );
};

export default Input;
