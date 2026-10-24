import './style.css';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import logoHuari from '../../assets/images/logoHuari.svg';

export default function WebsiteInformation({ backgroundImage }) {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                    ),
                    url(${backgroundImage})
                `,
            }}
        >
            <header className="hero-header">
                <div className="brand">
                    <img src={logoHuari} alt="Huari" />

                    <div className="brand-info">
                        <h2 className="text-h2-bold">Huari</h2>
                        <p className="text-p-regular">
                            Inteligência cívica
                        </p>
                    </div>
                </div>

                <div className="trust-indicators">
                    <div className="trust-indicator">
                        <span
                            className="status-indicator"
                            aria-hidden="true"
                        />
                        <p className="text-p-small-regular">
                            Dados oficiais
                        </p>
                    </div>

                    <div className="trust-indicator">
                        <span
                            className="status-indicator"
                            aria-hidden="true"
                        />
                        <p className="text-p-small-regular">
                            Dados oficiais
                        </p>
                    </div>
                </div>
            </header>

            <main className="hero-content">
                <div className="hero-badge">
                    <RiShieldKeyholeLine
                        aria-hidden="true"
                        size={16}
                    />

                    <p className="text-p-small-bold">
                        Democracia em código aberto
                    </p>
                </div>

                <h1 className="text-h1-bold">
                    Transparência política, fiscalização e cidadania ativa.
                </h1>

                <p className="text-p-regular">
                    Acompanhe gastos públicos em tempo real, audite contratos
                    parlamentares e compreenda decisões governamentais com
                    dados abertos e acessíveis.
                </p>
            </main>

            <footer
                className="hero-footer"
                aria-label="Indicadores da plataforma"
            >
                <div className="stat-item">
                    <h2 className="text-h2-bold">R$ 4,2 bi</h2>
                    <p className="text-p-small-regular">
                        Gastos monitorados
                    </p>
                </div>

                <div className="stat-item stat-item--featured">
                    <h2 className="text-h2-bold">510</h2>
                    <p className="text-p-small-regular">
                        Parlamentares monitorados
                    </p>
                </div>

                <div className="stat-item">
                    <h2 className="text-h2-bold">SP</h2>
                    <p className="text-p-small-regular">
                        Município monitorado
                    </p>
                </div>
            </footer>
        </section>
    );
}
