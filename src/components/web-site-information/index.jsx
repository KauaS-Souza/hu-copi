import React from 'react';
import './style.css';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import logoHuari from '../../assets/images/logoHuari.svg';

export default function WebsiteInformation({ backgroundImage }) {
    return (
        <section
            className="website-information-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="overlay-darkness"
                aria-hidden="true"
            />

            <div className="website-information-content">

                <header className="website-information-header">
                    <div className="container-logo">
                        <div className="logo-icon-placeholder">
                            <img
                                src={logoHuari}
                                alt="Logo Huari"
                            />
                        </div>

                        <div className="container-logo-text">
                            <h2>Huari</h2>
                            <p>Inteligência Cívica</p>
                        </div>
                    </div>

                    <div className="badge-official-data">
                        <span
                            className="dot-active"
                            aria-hidden="true"
                        />

                        <p className="text-p-regular">
                            Dados oficiais • TCU & Diários Oficiais
                        </p>
                    </div>
                </header>

                <main className="website-information-main">
                    <div className="badge-democracy">
                        <RiShieldKeyholeLine
                            size={16}
                            aria-hidden="true"
                        />

                        <span className="text-p-regular">
                            Democracia em código aberto
                        </span>
                    </div>

                    <h1 className="text-h1-bold">
                        Transparência política, fiscalização e
                        cidadania ativa
                    </h1>

                    <p className="text-p-regular">
                        Acompanhe gastos públicos em tempo real,
                        audite contratos parlamentares e compreenda
                        decisões governamentais com dados abertos
                        e acessíveis.
                    </p>
                </main>

                <footer className="website-information-footer">
                    <div className="stat-box">
                        <h2>R$ 4.2 Bi</h2>
                        <p>Gastos Monitorados</p>
                    </div>

                    <div className="stat-box">
                        <h2>510</h2>
                        <p>Parlamentares Monitorados</p>
                    </div>

                    <div className="stat-box">
                        <h2>SP</h2>
                        <p>Município Monitorado</p>
                    </div>
                </footer>

            </div>
        </section>
    );
}
