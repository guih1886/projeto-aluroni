import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import style from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Logo />
        </footer>
    );
}
