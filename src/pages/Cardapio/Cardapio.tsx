import { useState } from 'react';
import Buscador from './Buscador/Buscador';
import style from './Cardapio.module.scss';
import styleTema from 'styles/Tema.module.scss';
import Filtros from './Filtros/Filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './Itens/Itens';

export default function Cardapio() {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
        <section className={style.cardapio}>
            <h3 className={styleTema.titulo}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={style.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
    );
}
