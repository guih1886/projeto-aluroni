import React, { memo, useMemo } from 'react';
import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca }: Props) {
    const icon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);
    return (
        <>
            <div className={style.buscador}>
                {icon}
                <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder='Buscar' />
            </div>

        </>
    );
}

export default memo(Buscador);
