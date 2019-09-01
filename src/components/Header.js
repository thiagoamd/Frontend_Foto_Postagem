import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import camera from '../assets/Camera.svg';


export default function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
          <Link to="/">
            <img src={logo} alt="Projeto Insta" id="logo-imagem" />
          </Link>
          <Link to="/new">
            <img src={camera} alt="Enviar Publicação" id="icone-imagem"/>
          </Link>
        </div>
    </header>
  );
}
