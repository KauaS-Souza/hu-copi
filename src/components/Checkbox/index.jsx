import React, { useId } from "react";
import './style.css';

export default function Checkbox({ label, identifier, id, ...props }) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <label className={`checkbox ${identifier || ""}`} htmlFor={inputId}>
            <input id={inputId} type="checkbox" className="checkbox-input" {...props} />
            <span>{label}</span>
        </label>
    );
}
