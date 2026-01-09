import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/logo.png" alt="Glidez Solutions" style={{ height: '50px' }} />
                        <span>Glidez <span className="text-red">Solutions</span></span>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                    <NavLink to="/trainings" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} onClick={() => setIsMenuOpen(false)}>Trainings</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link btn btn-primary ${isActive ? '' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
                </nav>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
