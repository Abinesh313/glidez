import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/logo.png" alt="Glidez Solutions" style={{ height: '40px' }} />
                        <span>Glidez<span className="text-red">Solutions</span></span>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/trainings" className="nav-link" onClick={() => setIsMenuOpen(false)}>Trainings</Link>
                    <Link to="/contact" className="nav-link btn btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </nav>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
