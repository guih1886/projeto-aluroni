import style from './Header.module.scss';
import styleTema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa da massa
                </div>
            </header>
            <div className={styleTema.container}>
                <Outlet />
            </div>
        </>
    );
}
