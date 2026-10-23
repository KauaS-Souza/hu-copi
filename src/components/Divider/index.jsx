import React from "react";
import './style.css';

export default function Divider({ text }) {
    return (
        <div className="divider" role="separator">
            {text && <span>{text}</span>}
        </div>
    );
}