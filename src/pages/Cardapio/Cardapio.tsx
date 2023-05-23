import { useState } from 'react'
import Buscador from './Buscador/Buscador'
import style from './Cardapio.module.scss'
import logo from 'assets/logo.svg'

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt="Logo do Aluroni" />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>
        </main>
    )
}
