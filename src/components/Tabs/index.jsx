import React from "react";
import './style.css';

export default function Tabs({ tabs, activeTab, onChange, identifier }) {
    return (
        <div className={`tabs ${identifier || ""}`} role="tablist">
            {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`tabs-item ${isActive ? "tabs-item-active" : ""}`}
                        onClick={() => onChange(tab.id)}
                    >
                        {tab.icon && <span className="tabs-icon">{tab.icon}</span>}
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}