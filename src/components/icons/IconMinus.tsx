import React from "react";
import "./IconMinus.scss";

const IconMinus = (props : IconProps) => {
    return (
        <div
            className={`IconMinus ${props.highlight ? "highlight" : ""}`}
            onClick={props.onClick}
            style={{height: `${props.size}px`, width: `${props.size}px`}}
        />
    )
};

export default IconMinus;
