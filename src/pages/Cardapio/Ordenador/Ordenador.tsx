import React, { useState } from 'react'
import style from './Ordenador.module.scss'
import opcao from './opcoes.json'
import className from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false)
    const ordenadorNome = opcao.find(opcao => opcao.value === ordenador)?.nome
    return (
        <button className={className({
            [style.ordenador]: true,
            [style["ordenador--ativo"]]: ordenador !== ""
        })} onClick={() => setAberto(!aberto)} onBlur={() => setAberto(false)}>
            <span>{ordenadorNome || "Ordernar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={30} /> : <MdKeyboardArrowDown size={30} />}
            <div className={className({
                [style.ordenador__options]: true,
                [style["ordenador__options--ativo"]]: aberto
            })}>
                {opcao.map(opcao => (
                    <div className={style.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}
