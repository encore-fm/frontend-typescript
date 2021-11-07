import React from "react";
import "./IconPlus.scss";

const IconPlus = (props : IconProps) => {
  return (
      <div
          className={`IconPlus ${props.highlight ? "highlight" : ""}`}
          onClick={props.onClick}
          style={{height: `${props.size}px`, width: `${props.size}px`}}
      />
  )
};

export default IconPlus;
