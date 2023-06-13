import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from 'Components/Menu/Menu';
import Footer from 'Components/Footer/Footer';

const Cardapio = lazy(() => import('pages/Cardapio/Cardapio'));
const Header = lazy(() => import('Components/Header/Header'));
const Inicio = lazy(() => import('pages/Inicio/Inicio'));
const Sobre = lazy(() => import('pages/Sobre/Sobre'));
const Prato = lazy(() => import('pages/Prato/Prato'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Suspense fallback={<p>carregando.........</p>}>
                    <Routes>
                        <Route path='/' element={<Header />} >
                            <Route index element={<Inicio />} />
                            <Route path='projeto-aluroni/cardapio' element={<Cardapio />} />
                            <Route path='projeto-aluroni/sobre' element={<Sobre />} />
                            <Route path='projeto-aluroni' element={<Inicio />} />
                        </Route>
                        <Route path='projeto-aluroni/prato/:id' element={<Prato />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
}
