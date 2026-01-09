import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Code, Globe, Shield, X, CheckCircle, Briefcase } from 'lucide-react';

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

const otherServices = [
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: <BarChart size={40} />,
        description: "Boost your brand visibility with our tailored digital marketing strategies.",
        details: [
            "Social Media Marketing (SMM)",
            "Search Engine Marketing (SEM)",
            "Content Marketing & Copywriting",
            "Email Campaigns & Automation",
            "Analytics & Performance Tracking"
        ],
        outcome: "Increased brand awareness, lead generation, and measurable ROI."
    },
    {
        id: "website-development",
        title: "Website Development",
        icon: <Code size={40} />,
        description: "We build modern, scalable, and secure websites.",
        details: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "Corporate Websites & Portals",
            "Responsive & Mobile-Friendly Designs",
            "Maintenance & Support"
        ],
        outcome: "A high-performance, secure, and user-centric digital presence."
    },
    {
        id: "seo-services",
        title: "SEO Services",
        icon: <Globe size={40} />,
        description: "Rank higher, attract more traffic, and grow your business.",
        details: [
            "On-Page & Off-Page SEO",
            "Technical SEO Audits",
            "Keyword Research & Strategy",
            "Local SEO Optimization",
            "Continuous Monitoring & Reporting"
        ],
        outcome: "Improved search rankings, organic traffic, and online visibility."
    },
    {
        id: "internships",
        title: "Internships",
        icon: <Briefcase size={40} />,
        description: "Gain practical, hands-on experience in the latest technologies.",
        details: [
            "Java Full Stack Development",
            "Python Full Stack Development",
            "Data Science & AI/ML",
            "Cybersecurity & Ethical Hacking",
            "Web Development (MERN Stack and Etc...)"
        ],
        outcome: "Real-world project experience and industry readiness."
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
                <div id="information-security" className="service-detail-row" style={{ display: 'block' }}>
                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Information Security <span className="text-red">Services</span></h2>
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
                    <h2 className="text-center mb-5 mt-5" style={{ fontSize: '2rem', marginTop: '20px' }}>Other <span className="text-red">Services</span></h2>
                </div>
                <hr className="divider" />

                <div className="services-grid">
                    {otherServices.map((service, index) => (
                        <div key={index} id={service.id} className="service-card" onClick={() => setSelectedService(service)} style={{ cursor: 'pointer', border: '1px solid #eee' }}>
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
                            {selectedService.id === 'internships' ? (
                                <Link to="/contact?interest=Internship Inquiry" className="btn btn-primary">Apply Now</Link>
                            ) : (
                                <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
