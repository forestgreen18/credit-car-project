import React from "react";
import css from "./style.module.css";

function Checkbox({ text, spanText }) {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <input
        id="checkbox"
        className={css["checkbox"]}
        type="checkbox"
        defaultChecked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">
        {text} &nbsp; <span className={css["checkbox-span"]}>{spanText}</span>
      </label>
    </div>
  );
}

export default Checkbox;
