import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setMessageStatus(null);

        const formData = new FormData(e.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            // Using FormSubmit.co - Free, no sign-up required
            const response = await fetch("https://formsubmit.co/ajax/sathish@glidez.org", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result);
                setMessageStatus('success');
                e.target.reset();
            } else {
                console.log(response);
                setMessageStatus('error');
            }
        } catch (error) {
            console.error(error);
            setMessageStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Contact <span className="text-red">Us</span></h1>
                    <p>Get in touch for services, training inquiries, or support.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-wrapper">

                        {/* Contact Info */}
                        <div className="contact-details">
                            <h2>Get In Touch</h2>
                            <p className="mb-4">We are here to answer any questions you may have about our experiences.</p>

                            <div className="contact-item">
                                <div className="icon"><Mail /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>sathish@glidez.org</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon"><Phone /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 90438 67290</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon"><MapPin /></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Bengaluru / Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Send a Message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                {/* Anti-spam honeypot (optional but good practice) */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />

                                {/* Disable Captcha (optional) - defaults to true */}
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>

                                {messageStatus === 'success' && <p style={{ color: 'green', marginBottom: '1rem' }}>Message sent successfully!</p>}
                                {messageStatus === 'error' && <p style={{ color: 'red', marginBottom: '1rem' }}>Failed to send message. Please try again.</p>}

                                <button type="submit" className="btn btn-primary" disabled={isSending}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                    {!isSending && <Send size={16} className="ml-2" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Contact;
