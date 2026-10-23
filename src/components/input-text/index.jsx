import React from "react";
import './style.css';

export default function inputText({ label, labelAction, type = "text", iconLeft, iconRight, identifier, ...props }) {
  return (
    <div className={`input-container-group ${identifier || ""}`}>
      
      {(label || labelAction) && (
        <div className="input-header-wrapper">
          {label && <label className="input-label text-h3-regular">{label}</label>}
          {labelAction && <div className="input-label-action text-p-small-regular">{labelAction}</div>}
        </div>
      )}
      
      <div className="input-wrapper-field">
        {iconLeft && <span className="input-icon-left">{iconLeft}</span>}
        
        <input 
          type={type} 
          className={`input-field ${iconLeft ? "has-icon-left" : ""} ${iconRight ? "has-icon-right" : ""}`}
          {...props} 
        />
        
        {iconRight && <span className="input-icon-right">{iconRight}</span>}
      </div>
    </div>
  );
}
