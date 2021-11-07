import React from "react";
import "./IconPlus.scss";

const IconPlus = ({size = 30, highlight = false, onClick} : IconProps) => {
    return (
        <div
            className={`IconPlus ${highlight ? "highlight" : ""}`}
            onClick={onClick}
            style={{height: `${size}px`, width: `${size}px`}}
        />
    )
};

export default IconPlus;
