import React, { useState } from 'react';
import { BarChart, Code, Globe, Shield, X, CheckCircle } from 'lucide-react';

const securityServices = [
    {
        title: "Application Security",
        icon: <Shield size={40} />,
        description: "We identify and mitigate security vulnerabilities in applications before they can be exploited.",
        details: [
            "Web Application Security Testing (OWASP Top 10)",
            "API Security Testing (REST & GraphQL)",
            "Mobile Application Security Testing (Android & iOS)",
            "Secure Code Review",
            "Threat Modeling & Secure Architecture Review"
        ],
        outcome: "Reduced application risk, secure design, and actionable remediation guidance."
    },
    {
        title: "Cloud Security",
        icon: <Globe size={40} />,
        description: "We help secure cloud environments by identifying misconfigurations, access risks, and security gaps.",
        details: [
            "AWS, Azure & GCP Security Assessments",
            "Cloud Configuration & Hardening Review",
            "Identity & Access Management (IAM) Review",
            "Container & Kubernetes Security",
            "Cloud Security Best Practices Implementation"
        ],
        outcome: "Secure cloud environments aligned with industry best practices."
    },
    {
        title: "Penetration Testing",
        icon: <Code size={40} />,
        description: "We simulate real-world attack scenarios to assess your organization’s security posture.",
        details: [
            "External & Internal Network Penetration Testing",
            "Infrastructure & Server Security Testing",
            "Wireless Security Assessment",
            "Phishing & Social Engineering Simulations"
        ],
        outcome: "Clear understanding of exploitable risks and prioritized remediation."
    },
    {
        title: "Compliance & Risk Management",
        icon: <Shield size={40} />,
        description: "We assist organizations in meeting regulatory, customer, and industry security requirements.",
        details: [
            "ISO 27001 Readiness & Consulting",
            "SOC 2 Type 1 & Type 2 Readiness",
            "Risk Assessment & Risk Register Creation",
            "Third-Party & Vendor Risk Assessments",
            "Information Security Policies & Documentation"
        ],
        outcome: "Compliance readiness and improved governance."
    },
    {
        title: "DevSecOps & Secure SDLC",
        icon: <Code size={40} />,
        description: "We integrate security into your development lifecycle without slowing down delivery.",
        details: [
            "CI/CD Security Integration",
            "SAST, DAST & Software Composition Analysis (SCA)",
            "Secrets Management & Secure Configurations",
            "Infrastructure as Code (IaC) Security Reviews"
        ],
        outcome: "Faster, safer software releases with built-in security."
    },
    {
        title: "Security Training & Awareness",
        icon: <BarChart size={40} />,
        description: "We help teams understand security risks and adopt secure practices.",
        details: [
            "Security Awareness Training",
            "Secure Coding Training for Developers",
            "Cloud Security Training",
            "Phishing Awareness Programs"
        ],
        outcome: "Reduced human risk and stronger security culture."
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="services-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Our <span className="text-red">Services</span></h1>
                    <p>Comprehensive IT Solutions for Your Business</p>
                </div>
            </section>

            <div className="container section-padding">

                {/* Information Security Services - MAIN */}
                <div className="service-detail-row" style={{ display: 'block' }}>
                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Information Security Services</h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600">At Glidez Solutions, we help organizations protect their applications, cloud infrastructure, and sensitive data through practical, business-focused information security services.</p>
                    </div>

                    <div className="services-grid">
                        {securityServices.map((service, index) => (
                            <div key={index} className="service-card" onClick={() => setSelectedService(service)} style={{ cursor: 'pointer', border: '1px solid #eee' }}>
                                <div className="icon-box-small mb-3 text-red">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                                <span className="text-red font-semibold text-sm">View Details →</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 pt-5">
                    <h2 className="text-center mb-5 mt-5">Other <span className="text-red">Services</span></h2>
                </div>
                <hr className="divider" />

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

            </div>

            {/* Modal */}
            {selectedService && (
                <div className="modal-overlay" onClick={() => setSelectedService(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedService(null)}><X size={24} /></button>

                        <h2 className="text-red mb-4">{selectedService.title}</h2>

                        <div className="modal-section">
                            <p className="mb-4"><strong>{selectedService.description}</strong></p>
                        </div>

                        <div className="modal-section">
                            <h4>What We Offer</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {selectedService.details.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'start', gap: '10px' }}>
                                        <CheckCircle size={18} className="text-red" style={{ flexShrink: 0, marginTop: '3px' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section bg-gray-100 p-3 rounded" style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
                            <h4 style={{ border: 'none', marginBottom: '5px' }}>Outcome</h4>
                            <p className="text-sm">{selectedService.outcome}</p>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="/contact" className="btn btn-primary">Get a Quote</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
