import React from "react";
import css from "./style.module.css";

const Heading = ({ children, customStyles = {} }) => {
  return (
    <h2 className={`${css["section-heading"]} ${customStyles}`}>{children}</h2>
  );
};

export default Heading;
