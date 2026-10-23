import React from "react";
import './style.css';

export default function button({title, icon, iconPosition = "right", identifier, ...props}) {
    return (
        <button className={`btn text-btn-semibold ${identifier || ""}`} {...props}>
            {icon && iconPosition === "left" && <span className="btn-icon">{icon}</span>}
                    
            {title}

            {icon && iconPosition === "right" && <span className="btn-icon">{icon}</span>}
        </button>
    );    
}