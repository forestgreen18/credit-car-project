import React from "react";

import RangeSlider from "../slider";
import css from "./style.module.css";
import cn from "classnames/bind";
const cx = cn.bind(css);

function getYearStrings(year) {
  let phrase = "";
  if (year < 1) return phrase;
  if (year === 1) {
    phrase = `1 год`;
  } else if (year > 1 && year < 5) {
    phrase = `${year} года`;
  } else {
    phrase = `${year} лет`;
  }

  return phrase;
}
function getMonthStrings(monthNum) {
  let phrase = "";
  if (monthNum < 1) return phrase;
  if (monthNum === 1) {
    phrase = "1 месяц";
  } else if (monthNum > 1 && monthNum < 5) {
    phrase = `${monthNum} месяца`;
  } else {
    phrase = `${monthNum} месяцев`;
  }
  return phrase;
}
const getFormattedYears = (months) => {
  if (months === 0) {
    return "0	";
  }

  const year = Math.trunc(months / 12);
  const restMonths = months % 12;
  const isBiggerThenZero = year > 0;

  let yearPhrase = getYearStrings(year);
  let monthPhrase = isBiggerThenZero
    ? getMonthStrings(restMonths)
    : getMonthStrings(months);

  return `${yearPhrase}  ${monthPhrase}`;
};

const getFormattedSum = (sum) => {
  // expression below adds spaces between millions and thousands
  return `${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
};

const getFormattedLoan = (loan) => {
  if (loan === 0) {
    return `Без первого взноса`;
  }
  return `${loan} %`;
};

const sumMarks = {
  0: <div> 0 </div>,
  500000: <div> 500 000 </div>,
  1000000: <div> 1 000 000 </div>,
  1500000: <div> 1 500 000 </div>,
  2000000: <div> 2 000 000 </div>,
  2500000: <div> 2 500 000 </div>,
  3000000: <div> 3 000 000 </div>,
};

const yearMarks = {
  0: <div> 0 </div>,
  12: <div> 1 год </div>,
  24: <div> 2 года </div>,
  36: <div> 3 года </div>,
  48: <div> 4 года </div>,
  60: <div> 5 лет </div>,
};

const yearMarksCreditPage = {
  0: <div> 0 </div>,
  96: <div> 96 мес </div>,
};

const loanMarks = {
  0: <div> 0</div>,
  10: <div> 10%</div>,
  20: <div> 20% </div>,
  30: <div> 30% </div>,
  40: <div> 40% </div>,
  50: <div> 50% </div>,
};

const loanMarksCreditPage = {
  0: <div> 0 %</div>,

  50: <div> 50% </div>,
};

function CreditSlider({ type, subtype }) {
  const [state, setState] = React.useState(0);
  let formattedData;
  let options;
  if (type == "creditSum") {
    formattedData = getFormattedSum(state);
    options = {
      marks: sumMarks,
      max: 3000000,
      step: 100000,
      subHeading: "Желаемая сумма кредита",
    };
  } else if (type == "termOfCredit") {
    if (subtype == "credit-page") {
      formattedData = getFormattedYears(state);
      options = {
        marks: yearMarksCreditPage,
        max: 96,
        step: 1,
        subHeading: "Желаемый срок кредита",
      };
    } else {
      formattedData = getFormattedYears(state);
      options = {
        marks: yearMarks,
        max: 60,
        step: 1,
        subHeading: "Желаемый срок кредита",
      };
    }
  } else if (type == "initialLoan") {
    if (subtype == "credit-page") {
      formattedData = getFormattedLoan(state);
      options = {
        marks: loanMarksCreditPage,
        max: 50,
        step: 1,
        subHeading: "Первый взнос",
      };
    } else {
      formattedData = getFormattedLoan(state);
      options = {
        marks: loanMarks,
        max: 50,
        step: 1,
        subHeading: "Первый взнос",
      };
    }
  }
  //   const formattedData = getFormattedYears(state);

  return (
    <div>
      <p className={cx("slider-subheading")}>{options.subHeading}</p>
      <h2 className={cx("subheading", "slider-heading")}>{formattedData}</h2>

      <RangeSlider
        value={state}
        setValue={setState}
        marks={options.marks}
        max={options.max}
        step={options.step}
      />
    </div>
  );
}

export default CreditSlider;
