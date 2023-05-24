import React from 'react'
import style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: Props) {
    return (
        <>
            <div className={style.buscador}>
                <CgSearch size={20} color="#4C4D5E" />
                <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder='Buscar' />
            </div>

        </>
    )
}
