import React, { useState } from "react";
import './style.css';
import WebsiteInformation from "../../components/WebsiteInformation";
import imageBackground from "../../assets/images/HuariEducationalLibrary.jpg";
import Button from "../../components/Button";
import InputText from "../../components/InputText";


import { 
  RiUserAddFill, 
  RiDoorOpenLine, 
  RiMailLine, 
  RiLockLine, 
  RiEyeLine, 
  RiEyeOffLine 
} from "react-icons/ri";

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div className="login-container">
            
            <div className="container-left">
                <WebsiteInformation backgroundImage={imageBackground} />
            </div>

            
            <div className="container-right">
                
                
                <section className="login-tabs-navigation">
                
                    <Button title="Entrar na Conta" icon={<RiDoorOpenLine />} identifier="btn-tab-active" />
                    <Button title="Criar Conta" icon={<RiUserAddFill />} identifier="btn-tab-inactive" />
                </section>

                
                <form className="login-form">
                    <h2>Entrar na Conta</h2>

                    <InputText 
                        label="Email" 
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        iconLeft={<RiMailLine />} 
                    />

                    
                    <InputText 
                        label="Senha de acesso" 
                        type={mostrarSenha ? "text" : "password"} 
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        labelAction={<a href="/recuperar-senha">Esqueci minha senha</a>} 
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

                    <Button title="Acessar Plataforma Huari" identifier="btn-login-submit" type="submit" />
                </form>
            </div>
        </div>
    );
}
