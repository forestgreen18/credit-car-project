import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSlider = ({
  value,
  setValue,
  marks,
  min = 0,
  max = 60,
  step = 1,
}) => {
  return (
    <>
      <Slider
        min={min}
        max={max}
        step={step}
        trackStyle={{
          height: "6px",
          background: "linear-gradient(270deg, #07B1FD 0%, #BCEAFF 72.4%)",

          borderRadius: "8px",
        }}
        handleStyle={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "-1px 2px 15px rgba(0, 0, 0, 0.31)",
          border: "none",
        }}
        railStyle={{
          borderRadius: "8px",
          backgroundColor: "#969696",
        }}
        marks={marks}
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        dotStyle={{
          display: "none",
        }}
      />
    </>
  );
};

export default RangeSlider;
