import React, { useEffect } from "react";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const EmailIcon = () => (

    <FontAwesomeIcon icon={faEnvelope} />

)

const Password = () => (

    <FontAwesomeIcon icon={faLock} />

)

const CloseIcon = () => (

    <FontAwesomeIcon icon={faXmark} />

)
const UserIcon = () => (

    <FontAwesomeIcon icon={faUser} />

)


export default function Login() {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const loginLink = document.querySelector(".login-link");
        const registerLink = document.querySelector(".register-link");
        const btnPopup = document.querySelector(".btnLogin-popup");
        const btnClose = document.querySelector(".icon-close");
        

    
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });

        btnPopup.addEventListener('click', () => {
            wrapper.classList.add('active-popup');
        });

        btnClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });
    
        return () => {
            registerLink.removeEventListener('click', () => {
                wrapper.classList.add('active');
            });
    
            loginLink.removeEventListener('click', () => {
                wrapper.classList.remove('active');
            });

            btnPopup.removeEventListener('click', () => {
                wrapper.classList.add('active-popup');
            });
    
            btnClose.removeEventListener('click', () => {
                wrapper.classList.remove('active-popup');
            });
        };
    }, []); 

    return (
        <div className="App">
            <header>
                <h2 className="logo">PokéCoin</h2>
                <nav className="navigation">
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Contato</a>
                    <button className="btnLogin-popup">Entrar</button>
                </nav>
            </header>
            <div className="wrapper">
                <span className="icon-close">
                    <CloseIcon />
                </span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><EmailIcon /> </span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon password"><Password /> </span>
                            <input type="password" required></input>
                            <label>Senha</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"></input>Manter Login</label>
                            <a href="#">Esqueceu a Senha?</a>
                        </div>
                        <button type="submit" className="btn">Entrar</button>
                        <div className="login-register">
                            <p>Não tem uma conta? <a href="#" className="register-link">Cadastrar</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <h2>Cadastro</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><UserIcon /> </span>
                            <input type="text" required></input>
                            <label>Nome do Usuário</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><EmailIcon /> </span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon password"><Password /> </span>
                            <input type="password" required></input>
                            <label>Senha</label>
                        </div>                      
                        <div className="input-box">
                            <span className="icon password"><Password /> </span>
                            <input type="password" required></input>
                            <label>Confirmar Senha</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"></input>Eu concordo com os Termos de Uso</label>
                        </div>
                        <button type="submit" className="btn">Cadastrar</button>
                        <div className="login-register">
                            <p>Já tem uma conta? <a href="#" className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}




