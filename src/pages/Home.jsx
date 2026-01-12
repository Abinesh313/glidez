import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, BarChart, Globe, Lock, Briefcase } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Glidez Solutions - Empowering IT Excellence</title>
                <meta name="description" content="Empowering IT Excellence through top-tier Services & Training. We offer Web Development, Digital Marketing, and certified IT training programs." />
            </Helmet>
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
                            <h1>About <span className="text-red">Us</span></h1>
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
                        <h1>Our <span className="text-red">Services</span></h1>
                        <p>We specialize in a wide range of IT solutions.</p>
                    </div>

                    <div className="services-grid">
                        <Link to="/services#information-security" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Shield size={32} /></div>
                            <h3>Information Security</h3>
                            <p>Protect your applications and cloud infrastructure.</p>
                        </Link>
                        <Link to="/services#digital-marketing" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><BarChart size={32} /></div>
                            <h3>Digital Marketing</h3>
                            <p>Boost your brand visibility with customized strategies.</p>
                        </Link>
                        <Link to="/services#website-development" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Code size={32} /></div>
                            <h3>Website Development</h3>
                            <p>Modern, scalable, and secure websites for your business.</p>
                        </Link>
                        <Link to="/services#seo-services" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Globe size={32} /></div>
                            <h3>SEO Services</h3>
                            <p>Rank higher and attract more traffic.</p>
                        </Link>
                        <Link to="/trainings" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Lock size={32} /></div>
                            <h3>IT Trainings</h3>
                            <p>Globally recognized certifications (EC-Council, ISACA, etc.).</p>
                        </Link>
                        <Link to="/services#internships" className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><Briefcase size={32} /></div>
                            <h3>Internships</h3>
                            <p>Gain real-world experience with our internship programs.</p>
                        </Link>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Our Clients */}
            <section className="section-padding bg-gray">
                <div className="container">
                    <div className="section-header text-center">
                        <h1>Our Trusted <span className="text-red">Clients</span></h1>
                        <p>Proud to partner with industry leaders driving innovation.</p>
                    </div>

                    <div className="clients-marquee-container">
                        <div className="clients-track">
                            {[...Array(6)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="client-card">
                                        <img src="/partners/viacharging.jpg" alt="Via Charging" className="client-logo" />
                                        <h3>Via Charging</h3>
                                        <p className="text-sm text-gray-600">Revolutionizing electric vehicle infrastructure with smart, scalable charging solutions.</p>
                                    </div>
                                    <div className="client-card">
                                        <img src="/partners/ellorahotels.jpg" alt="Ellora Hotels" className="client-logo" />
                                        <h3>Ellora Hotels</h3>
                                        <p className="text-sm text-gray-600">Redefining luxury hospitality with seamless digital guest experiences and premium services.</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h1>Why Choose <span className="text-red">Glidez Solutions?</span></h1>
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
