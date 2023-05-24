import { useState } from 'react'
import Buscador from './Buscador/Buscador'
import style from './Cardapio.module.scss'
import logo from 'assets/logo.svg'
import Filtros from './Filtros/Filtros'
import Ordenador from './Ordenador/Ordenador'
import Itens from './Itens/Itens'

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt="Logo do Aluroni" />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={style.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens />
            </section>
        </main>
    )
}
