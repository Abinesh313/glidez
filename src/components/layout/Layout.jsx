import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
