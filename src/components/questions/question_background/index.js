import React from "react";

import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

const QuestionBackground = ({ children }) => {
  return (
    <div className={cx("question-background")}>
      {children}
      <img
        className={cx("question-img")}
        alt="woman"
        src={require("../assets/question.png")}
      />
    </div>
  );
};

export default QuestionBackground;
