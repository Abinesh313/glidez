import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);
    const location = useLocation();
    const [serviceInterest, setServiceInterest] = useState("General Inquiry");

    const formRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const interest = params.get('interest');
        if (interest) {
            setServiceInterest(interest);
        }
    }, [location]);

    const handleSubmit = () => {
        setIsSending(true);
        setMessageStatus(null);
    };

    const handleIframeLoad = () => {
        if (isSending) {
            setIsSending(false);
            setMessageStatus('success');
            if (formRef.current) {
                formRef.current.reset();
            }
            setServiceInterest("General Inquiry");
        }
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Glidez Solutions</title>
                <meta name="description" content="Get in touch with Glidez Solutions. Contact us for IT services, training inquiries, or internships. We are here to help." />
            </Helmet>
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
                            <br></br>

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
                            {/* Hidden iframe to handle FormSubmit submission without page reload or CORS errors */}
                            <iframe 
                                name="formsubmit_iframe" 
                                style={{ display: 'none' }} 
                                onLoad={handleIframeLoad}
                            ></iframe>

                            <form 
                                ref={formRef}
                                className="contact-form" 
                                action="https://formsubmit.co/sathish@glidez.org" 
                                method="POST" 
                                target="formsubmit_iframe"
                                onSubmit={handleSubmit} 
                                encType="multipart/form-data"
                            >
                                {/* CC to secondary email */}
                                <input type="hidden" name="_cc" value="gabineshpgunasekaran313@gmail.com" readOnly />

                                {/* Anti-spam honeypot (optional but good practice) */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />

                                {/* Disable Captcha (optional) - defaults to true */}
                                <input type="hidden" name="_captcha" value="false" readOnly />

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Service Interest</label>
                                    <select
                                        name="service_interest"
                                        value={serviceInterest}
                                        onChange={(e) => setServiceInterest(e.target.value)}
                                        required
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontFamily: 'inherit' }}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Internship Inquiry">Internship Application</option>
                                        <option value="Corporate Training">Corporate Training</option>
                                        <option value="Security Services">Information Security Services</option>
                                        <option value="Web Development">Website Development</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="SEO Services">SEO Services</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </div>

                                {serviceInterest === 'Internship Inquiry' && (
                                    <div className="form-group">
                                        <label>Attach Resume (PDF/Word)</label>
                                        <input
                                            type="file"
                                            name="attachment"
                                            accept=".pdf,.doc,.docx"
                                            className="form-control"
                                            style={{ padding: '10px 0' }}
                                        />
                                    </div>
                                )}
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>

                                {messageStatus === 'success' && <p style={{ color: 'green', marginBottom: '1rem' }}>Message sent successfully!</p>}
                                {messageStatus === 'error' && <p style={{ color: 'red', marginBottom: '1rem' }}>Failed to send message. Please try again.</p>}

                                <button type="submit" className="btn btn-primary" disabled={isSending} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                    {!isSending && <Send size={16} />}
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
