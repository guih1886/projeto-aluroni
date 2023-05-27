import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Cardapio from 'pages/Cardapio/Cardapio';
import NotFound from 'pages/NotFound/NotFound';
import Menu from 'Components/Menu/Menu';
import Header from 'Components/Header/Header';
import Sobre from 'pages/Sobre/Sobre';
import Footer from 'Components/Footer/Footer';
import Prato from 'pages/Prato/Prato';


export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Header />} >
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                        <Route path='projeto-aluroni' element={<Inicio />} />
                    </Route>
                    <Route path='prato/:id' element={<Prato />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
