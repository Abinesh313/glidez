import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                                    <p>+91-XXXXXXXXXX</p>
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
                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="Your Message"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary">Send Message <Send size={16} className="ml-2" /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
