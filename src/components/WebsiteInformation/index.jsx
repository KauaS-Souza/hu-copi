import React from 'react';
import './style.css';
import { RiShieldKeyholeLine } from 'react-icons/ri'; 
import logoHuari from '../../assets/images/ImgBox.jpg'

export default function WebsiteInformation({ backgroundImage }) {
    return (
        <div 
            className="website-information-container"
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        >
            <div className="overlay-darkness"></div>

            <div className="website-information-content">
                <div className="website-information-header">
                    <div className="container-logo">
                        <div className="logo-icon-placeholder">
                            <img src={logoHuari} />    
                        </div> 
                        <div className="container-logo-text">
                            <h2>Huari</h2>
                            <p>Inteligência Cívica</p>
                        </div>
                    </div>

                    <div className="badge-official-data">
                        <span className="dot-active"></span>
                        <p>Dados oficiais • TCU & Diários Oficiais</p>
                    </div>
                </div>

                <div className="website-information-main">
                    <div className="badge-democracy">
                        <RiShieldKeyholeLine size={16} />
                        <span>Democracia em código aberto</span>
                    </div>
                    <h1>Transparência política, fiscalização e cidadania ativa.</h1>
                    <p>
                        Acompanhe gastos públicos em tempo real, audite contratos parlamentares 
                        e compreenda decisões governamentais com dados abertos e acessíveis.
                    </p>
                </div>
                
                <div className="website-information-footer">
                    <div className="stat-box">
                        <h2>R$ 4.2 Bi</h2>
                        <p>Gastos Monitorados</p>
                    </div>
                    <div className="stat-box divider-left">
                        <h2>510</h2>
                        <p>Parlamentares Monitorados</p>
                    </div>
                    <div className="stat-box divider-left">
                        <h2>SP</h2>
                        <p>Município Monitorado</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
