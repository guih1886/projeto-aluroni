import React from 'react';
import style from './Menu.module.scss';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu() {
    const rotas = [{
        label: 'Início',
        to: '/projeto-aluroni'
    },
    {
        label: 'Cardápio',
        to: 'projeto-aluroni/cardapio'
    },
    {
        label: 'Sobre',
        to: 'projeto-aluroni/sobre'
    }];
    return (
        <nav className={style.menu}>
            <img src={logo} alt="Logo do Aluroni" />
            <ul className={style.menu__list}>
                {rotas.map((rota, index) => (
                    <li className={style.menu__link} key={index}>
                        <Link to={rota.to}> {rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
