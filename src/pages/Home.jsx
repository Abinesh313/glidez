import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, BarChart, Globe, Lock, Briefcase, Linkedin, Instagram } from 'lucide-react';
import SEO from '../components/common/SEO';

const Home = () => {
    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Glidez Solutions",
        "url": "https://glidez.org/",
        "logo": "https://glidez.org/logo.png",
        "image": "https://glidez.org/logo.png",
        "description": "Empowering IT Excellence through top-tier Information Security Services, Digital Marketing, Website Development, SEO, and globally recognized IT training certifications.",
        "email": "sathish@glidez.org",
        "telephone": "+91 90438 67290",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka / Tamil Nadu",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.linkedin.com/company/glidez/",
            "https://www.instagram.com/glidez_solutions/"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services and Trainings",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Information Security Services",
                        "description": "Application security, Cloud security, Penetration testing, and ISO 27001 compliance."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development",
                        "description": "Modern, scalable, and responsive web development."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Marketing & SEO",
                        "description": "Search engine optimization and brand visibility strategies."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "IT Trainings & Certifications",
                        "description": "Globally recognized IT and Cybersecurity certifications (EC-Council, ISACA, CompTIA, etc.)."
                    }
                }
            ]
        }
    };

    return (
        <div className="home-page">
            <SEO 
                title="Glidez Solutions - Empowering IT Excellence"
                description="Empowering IT Excellence through top-tier Information Security Services, Digital Marketing, Website Development, SEO, and globally recognized IT training programs."
                canonical="/"
                keywords="Glidez Solutions, IT Services, Cybersecurity, Web Development, Digital Marketing, SEO, IT Certifications, Internship, Information Security, Bangalore, India"
                schema={homeSchema}
            />

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
                        <h2>Our Trusted <span className="text-red">Clients</span></h2>
                        <p>Proud to partner with industry leaders driving innovation.</p>
                    </div>

                    <div className="clients-marquee-container">
                        <div className="clients-track">
                            {[...Array(6)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <div className="client-card">
                                        <img src="/partners/viacharging.jpg" alt="Via Charging - Electric Vehicle Charging Infrastructure Client" className="client-logo" loading="lazy" />
                                        <h3>Via Charging</h3>
                                        <p className="text-sm text-gray-600">Revolutionizing electric vehicle infrastructure with smart, scalable charging solutions.</p>
                                    </div>
                                    <div className="client-card">
                                        <img src="/partners/ellorahotels.jpg" alt="Ellora Hotels - Luxury Hospitality Client" className="client-logo" loading="lazy" />
                                        <h3>Ellora Hotels</h3>
                                        <p className="text-sm text-gray-600">Redefining luxury hospitality with seamless digital guest experiences and premium services.</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Callout Section */}
            <section className="section-padding bg-gray social-callout">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: 0 }}>
                        <h2>Connect With <span className="text-red">Us</span></h2>
                        <p>Stay updated with our latest tech tips, student success stories, and cybersecurity alerts on our social channels.</p>
                        <div className="social-callout-btns" style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.linkedin.com/company/glidez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                aria-label="Follow Glidez Solutions on LinkedIn"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                            >
                                <Linkedin size={20} /> Follow on LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/glidez_solutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                aria-label="Follow Glidez Solutions on Instagram"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                            >
                                <Instagram size={20} /> Follow on Instagram
                            </a>
                        </div>
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
