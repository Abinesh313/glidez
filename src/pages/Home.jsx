import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, BarChart, Globe, Lock } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero text-center">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Glidez Solutions <br /> <span className="text-red">Empowering IT Excellence</span></h1>
                    <p>Delivering quality services and world-class IT trainings to empower businesses and professionals.</p>
                    <div className="hero-btns">
                        <Link to="/services" className="btn btn-primary">Our Services</Link>
                        <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="section-padding about-teaser">
                <div className="container">
                    <div className="row">
                        <div className="col-half">
                            <h2>About <span className="text-red">Us</span></h2>
                            <p>Founded in 2025, Glidez Solutions is a forward-thinking IT company dedicated to delivering quality services and world-class IT trainings. Our mission is to empower businesses with cutting-edge digital solutions while nurturing the next generation of IT professionals through globally recognized certifications.</p>
                            <Link to="/about" className="learn-more-link">Learn More <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section-padding bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our <span className="text-red">Services</span></h2>
                        <p>We specialize in a wide range of IT solutions.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="icon-box"><BarChart size={32} /></div>
                            <h3>Digital Marketing</h3>
                            <p>Boost your brand visibility with customized strategies.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Code size={32} /></div>
                            <h3>Website Development</h3>
                            <p>Modern, scalable, and secure websites for your business.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Globe size={32} /></div>
                            <h3>SEO Services</h3>
                            <p>Rank higher and attract more traffic.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Cybersecurity</h3>
                            <p>Advanced security solutions to protect your assets.</p>
                        </div>
                        <div className="service-card">
                            <div className="icon-box"><Lock size={32} /></div>
                            <h3>IT Trainings</h3>
                            <p>Globally recognized certifications (EC-Council, ISACA, etc.).</p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose <span className="text-red">Glidez Solutions?</span></h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Expertise Across Domains</h3>
                            <p>From marketing to cybersecurity, we cover the full IT spectrum.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Global Certifications</h3>
                            <p>Training aligned with EC-Council, ISACA, ISC², CompTIA, and more.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Quality First</h3>
                            <p>Our focus is on delivering value-driven services and practical training.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Trusted Partner</h3>
                            <p>We combine innovation, compliance, and security to help businesses thrive.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Hands-On Learning</h3>
                            <p>Real-world labs, case studies, and mentorship for IT professionals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
