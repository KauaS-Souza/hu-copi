import React from "react";
import './style.css';

export default function Button({title, icon, iconPosition = "right", identifier, ...props}) {
    return (
        <button className={`btn ${identifier || ""}`} {...props}>
            {icon && iconPosition === "left" && <span className="btn-icon">{icon}</span>}
                    
            {title}

            {icon && iconPosition === "right" && <span className="btn-icon">{icon}</span>}
        </button>
    );    
}