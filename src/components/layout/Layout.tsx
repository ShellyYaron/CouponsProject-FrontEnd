import React from 'react'
import CouponContainer from '../coupon-container/CouponContainer';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import './Layout.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginModal from "../modals/LoginModal";


function Layout() {
    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CouponContainer/>}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;
  