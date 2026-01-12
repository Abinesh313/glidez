import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer bg-black">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><h3>Glidez <span className="text-red">Solutions</span></h3></Link>
                    <p>Empowering businesses with cutting-edge digital solutions and nurturing the next generation of IT professionals.</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/trainings">Trainings</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/disclaimer">Disclaimer</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li><Mail size={16} /> <span>sathish@glidez.org</span></li>
                        <li><Phone size={16} /> <span>+91 90438 67290</span></li>
                        <li><MapPin size={16} /> <span>Bengaluru / Tamil Nadu, India</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2025–2026 Glidez Solutions. All Rights Reserved. Empowering IT Excellence through Services & Training.</p>
            </div>
        </footer>
    );
};

export default Footer;
