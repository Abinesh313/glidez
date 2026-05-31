import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import LinkedInPopup from '../common/LinkedInPopup';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <WhatsAppButton />
            <LinkedInPopup />
            <Footer />
        </div>
    );
};

export default Layout;
