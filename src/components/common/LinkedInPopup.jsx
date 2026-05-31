import React, { useState, useEffect } from 'react';
import { Linkedin, X } from 'lucide-react';

const LinkedInPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds on first load/reload
        const timer = setTimeout(() => {
            const hasBeenShown = sessionStorage.getItem('linkedin_popup_dismissed');
            if (!hasBeenShown) {
                setIsVisible(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsVisible(false);
        setIsClosed(true);
        sessionStorage.setItem('linkedin_popup_dismissed', 'true');
    };

    if (isClosed) return null;

    return (
        <div className={`linkedin-popup ${isVisible ? 'visible' : ''}`}>
            <a 
                href="https://www.linkedin.com/company/glidez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-popup-content"
            >
                <div className="linkedin-popup-icon">
                    <Linkedin size={24} />
                </div>
                <div className="linkedin-popup-text">
                    <span className="linkedin-popup-title">Glidez Solutions</span>
                    <span className="linkedin-popup-subtitle">Follow us on LinkedIn</span>
                </div>
                <button 
                    onClick={handleClose} 
                    className="linkedin-popup-close" 
                    aria-label="Close popup"
                >
                    <X size={16} />
                </button>
            </a>
        </div>
    );
};

export default LinkedInPopup;
