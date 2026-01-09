import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "919043867290";
    const message = "Hello, I am interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const [imageError, setImageError] = useState(false);

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
        >
            {!imageError ? (
                <img
                    src="/partners/whatsapp.png"
                    alt="WhatsApp"
                    onError={() => setImageError(true)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ) : (
                <MessageCircle size={32} />
            )}
        </a>
    );
};

export default WhatsAppButton;
