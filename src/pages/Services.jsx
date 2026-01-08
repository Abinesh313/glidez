import React from 'react';
import { BarChart, Code, Globe, Shield } from 'lucide-react';

const Services = () => {
    return (
        <div className="services-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Our <span className="text-red">Services</span></h1>
                    <p>Comprehensive IT Solutions for Your Business</p>
                </div>
            </section>

            <div className="container section-padding">

                {/* Digital Marketing */}
                <div className="service-detail-row">
                    <div className="service-icon"><BarChart size={48} /></div>
                    <div className="service-content">
                        <h2>1. Digital Marketing</h2>
                        <p>Boost your brand visibility with our tailored digital marketing strategies.</p>
                        <ul>
                            <li>Social Media Marketing (SMM)</li>
                            <li>Search Engine Marketing (SEM)</li>
                            <li>Content Marketing & Copywriting</li>
                            <li>Email Campaigns & Automation</li>
                            <li>Analytics & Performance Tracking</li>
                        </ul>
                    </div>
                </div>
                <hr className="divider" />

                {/* Website Development */}
                <div className="service-detail-row">
                    <div className="service-icon"><Code size={48} /></div>
                    <div className="service-content">
                        <h2>2. Website Development</h2>
                        <p>We build modern, scalable, and secure websites.</p>
                        <ul>
                            <li>Custom Web Applications</li>
                            <li>E-commerce Solutions</li>
                            <li>Corporate Websites & Portals</li>
                            <li>Responsive & Mobile-Friendly Designs</li>
                            <li>Maintenance & Support</li>
                        </ul>
                    </div>
                </div>
                <hr className="divider" />

                {/* SEO */}
                <div className="service-detail-row">
                    <div className="service-icon"><Globe size={48} /></div>
                    <div className="service-content">
                        <h2>3. SEO Services</h2>
                        <p>Rank higher, attract more traffic, and grow your business.</p>
                        <ul>
                            <li>On-Page & Off-Page SEO</li>
                            <li>Technical SEO Audits</li>
                            <li>Keyword Research & Strategy</li>
                            <li>Local SEO Optimization</li>
                            <li>Continuous Monitoring & Reporting</li>
                        </ul>
                    </div>
                </div>
                <hr className="divider" />

                {/* Cybersecurity */}
                <div className="service-detail-row">
                    <div className="service-icon"><Shield size={48} /></div>
                    <div className="service-content">
                        <h2>4. Cybersecurity Services</h2>
                        <p>Protect your business with advanced security solutions.</p>
                        <ul>
                            <li>Vulnerability Assessment (VA)</li>
                            <li>Penetration Testing (PT)</li>
                            <li>Security Audits & Compliance</li>
                            <li>Incident Response Planning</li>
                            <li>Cloud & Network Security</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
