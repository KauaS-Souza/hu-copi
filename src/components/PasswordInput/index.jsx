import React, { useState } from "react";
import './style.css';
import InputText from "../InputText";
import { RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export default function PasswordInput(props) {
    const [visible, setVisible] = useState(false);

    return (
        <InputText
            {...props}
            type={visible ? "text" : "password"}
            iconLeft={<RiLockLine size={18} />}
            iconRight={
                <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setVisible((v) => !v)}
                    aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
                >
                    {visible ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
                </button>
            }
        />
    );
}