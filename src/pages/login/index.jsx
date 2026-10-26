import React, { useState } from "react";
import './style.css';
import WebsiteInformation from "../../components/web-site-information";
import imageBackground from "../../assets/images/HuariEducationalLibrary.jpg";
import Button from "../../components/button";
import InputText from "../../components/input-text";

import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidDoorOpen } from "react-icons/bi";
import { IoPersonAddSharp } from "react-icons/io5";

import { 
  RiUserAddFill, 
  RiMailLine, 
  RiLockLine, 
  RiEyeLine, 
  RiEyeOffLine 
} from "react-icons/ri";

import { AppleIcon, GoogleIcon } from "../../components/icons";

export default function login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState("entrar");

    return (
        <div className="login-container">
            
            <div className="container-left">
                <WebsiteInformation backgroundImage={imageBackground} />
            </div>

            
            <div className="container-right">
                
                
                <section className="login-tabs-navigation">
                    <Button
                        title="Entrar na Conta"
                        icon={<BiSolidDoorOpen size={16}/>}
                        iconPosition="left"
                        identifier="btn-radius-40"
                        active={abaAtiva === "entrar"}
                        onClick={() => setAbaAtiva("entrar")}
                    />

                    <Button
                        title="Criar Conta"
                        icon={<IoPersonAddSharp size={16} />}
                        iconPosition="left"
                        identifier="btn-radius-40 "
                        active={abaAtiva === "criar"}
                        onClick={() => setAbaAtiva("criar")}
                    />
                </section>

                
                <form className="login-form">
                    <h2 className="text-h2-bold ">Entrar na Conta</h2>

                    <InputText
                        identifier="input-default"
                        label="Email" 
                        type="email"
                        placeholder="seuemail@exemplo.com "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        iconLeft={<RiMailLine />} 
                    />

                    
                    <InputText 
                        identifier="input-default"
                        label="Senha de acesso"
                        labelAction={<a>Esqueci minha senha</a>}
                        type={mostrarSenha ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        iconLeft={<RiLockLine />} 
                        iconRight={
                            <button 
                                type="button" 
                                onClick={() => setMostrarSenha(!mostrarSenha)} 
                                className="btn-toggle-eye"
                            >
                            {mostrarSenha ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
                        </button>
                        }
                    />

                    <Button
                        title="Acessar Plataforma Huari"
                        identifier="btn-primary btn-radius-40"
                        type="submit"
                        icon={<FaArrowRightLong />}
                        iconPosition="right"
                    />

                    <Button
                        title="Visitante"
                        identifier="btn-secondary btn-radius-40"
                        type="button"
                        icon={<FaArrowRightLong />}
                        iconPosition="right"
                    />

                    <div className="login-divider">
                        <hr className="login-divider-line" />
                        <p className="text-p-regular">OU</p>
                        <hr className="login-divider-line" />
                    </div>

                    <Button
                        title="Entrar com o Google"
                        identifier="btn-google btn-radius-10"
                        type="button"
                        icon={<GoogleIcon />}
                        iconPosition="left"
                    />

                    <Button
                        title="Entrar com a Apple"
                        identifier="btn-apple btn-radius-10"
                        type="button"
                        icon={<AppleIcon />}
                        iconPosition="left"
                    />
                </form>

                <div className="login-footer">
                    <p className="login-register-text text-p-regular">
                        Ainda não tem uma conta?{" "}
                        <a href="/cadastro">Cadastre-se.</a>
                    </p>

                    <nav className="login-footer-links" aria-label="Links institucionais">
                        <a href="/privacidade" className="login-footer-link text-p-regular">
                            <span className="login-footer-bullet" aria-hidden="true"></span>
                            Privacidade
                        </a>

                        <a href="/termos-de-uso" className="login-footer-link text-p-regular">
                            <span className="login-footer-bullet" aria-hidden="true"></span>
                            Termos de Uso
                        </a>

                        <a href="/metodologia-aberta" className="login-footer-link text-p-regular">
                            <span className="login-footer-bullet" aria-hidden="true"></span>
                            Metodologia Aberta
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
