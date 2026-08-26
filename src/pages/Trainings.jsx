import React from 'react';
import { ExternalLink } from 'lucide-react';
import SEO from '../components/common/SEO';

// Vendor Data
const vendorData = [
    { name: "Microsoft", url: "https://learn.microsoft.com/", image: "/partners/microsoft.png", alt: "Microsoft Certified Professional Training - Glidez Solutions" },
    { name: "Cisco", url: "https://www.cisco.com/c/en/us/training-events/training-certifications.html", image: "/partners/cisco.png", alt: "Cisco Networking & Security Certification Training" },
    { name: "AWS", url: "https://aws.amazon.com/training/", image: "/partners/aws.png", alt: "AWS Cloud Practitioner & Solutions Architect Certification" },
    { name: "VMware", url: "https://www.vmware.com/learning.html", image: "/partners/vmware.webp", alt: "VMware Virtualization and Cloud Training" },
    { name: "Oracle", url: "https://education.oracle.com/", image: "/partners/oracle.jpg", alt: "Oracle Database and Cloud Infrastructure Certifications" },
    { name: "PeopleCert", url: "https://www.peoplecert.org/", image: "/partners/peoplecert.png", alt: "PeopleCert ITIL & Project Management Certifications" },
    { name: "ISACA", url: "https://www.isaca.org/training-and-events", image: "/partners/isaca.png", alt: "ISACA CISA, CISM, CRISC Cybersecurity Certification Training" },
    { name: "CompTIA", url: "https://www.comptia.org/en-em/certifications/", image: "/partners/comptia.png", alt: "CompTIA Security+, Network+, A+ Certification Courses" },
    { name: "SAP", url: "https://learning.sap.com/certifications", image: "/partners/sap.png", alt: "SAP ERP and Cloud Certification Training" },
    { name: "ISC2", url: "https://www.isc2.org/", image: "/partners/isc2.png", alt: "ISC2 CISSP, CCSP Cybersecurity Professional Certifications" },
    { name: "EC-Council", url: "https://www.eccouncil.org/", image: "/partners/eccouncil.webp", alt: "EC-Council Certified Ethical Hacker CEH & CND Training" },
    { name: "PMI", url: "https://www.pmi.org/", image: "/partners/pmi.png", alt: "PMI Project Management Professional PMP Certifications" },
    { name: "Check Point", url: "https://www.checkpoint.com/training/", image: "/partners/checkpoint.svg", alt: "Check Point Certified Security Administrator CCSA Training" },
    { name: "Red Hat", url: "https://www.redhat.com/en/services/training-and-certification", image: "/partners/redhat.png", alt: "Red Hat Enterprise Linux RHCSA & RHCE Certifications" },
    { name: "ISTQB", url: "https://istqb.org/certifications/", image: "/partners/istqb.jpg", alt: "ISTQB Software Testing Certification Training" },
    { name: "The Open Group", url: "https://www.opengroup.org/certifications", image: "/partners/theopengroup.webp", alt: "The Open Group TOGAF Enterprise Architecture Certifications" },
    { name: "BCS", url: "https://www.bcs.org/qualifications-and-certifications/", image: "/partners/bcs.png", alt: "BCS Chartered Institute for IT Qualifications" },
    { name: "ServiceNow", url: "https://www.servicenow.com/services/training-and-certification.html", image: "/partners/servicenow.png", alt: "ServiceNow Administrator and Developer Training" },
    { name: "BSI", url: "https://www.bsigroup.com/en-GB/products-and-services/training-courses-and-qualifications/", image: "/partners/bsi.png", alt: "BSI ISO Lead Auditor and Implementation Qualifications" },
    { name: "EXIN", url: "https://www.exin.com/all-certifications/", image: "/partners/exin.png", alt: "EXIN IT Service Management & Privacy Certifications" },
    { name: "GAQM", url: "https://gaqm.org/", image: "/partners/gaqm.png", alt: "GAQM Global Association for Quality Management Certifications" },
    { name: "ISO", url: "https://www.iso.org/certification.html", image: "/partners/iso.svg", alt: "ISO 27001, ISO 9001 International Standards Certification" }
];

const Trainings = () => {
    const trainingsSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "Glidez Solutions IT Trainings & Certifications",
        "description": "Advance your career with globally recognized IT training and certifications from Microsoft, AWS, Cisco, EC-Council, ISACA, CompTIA, and more.",
        "provider": {
            "@type": "Organization",
            "name": "Glidez Solutions",
            "url": "https://glidez.org/"
        },
        "programType": "IT & Cybersecurity Certifications",
        "educationalCredentialAwarded": "Globally Recognized IT Certifications",
        "offers": {
            "@type": "Offer",
            "category": "Corporate & Individual IT Training"
        }
    };

    return (
        <div className="trainings-page">
            <SEO 
                title="IT Trainings & Certifications"
                description="Advance your career with globally recognized IT training and certifications from Microsoft, AWS, Cisco, ISACA, EC-Council, and CompTIA."
                canonical="/trainings"
                keywords="IT Certifications, CEH, CISSP, AWS Training, Microsoft Certifications, Cisco CCNA, CompTIA Security+, ISACA CISA, Cybersecurity Training Bangalore, Glidez Solutions"
                schema={trainingsSchema}
            />
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Trainings & <span className="text-red">Certifications</span></h1>
                    <p>Globally recognized certifications to advance your career.</p>
                </div>
            </section>

            <div className="container section-padding">

                {/* Vendor Links Section */}
                <div className="mb-5">
                    <h2 className="text-center" style={{ marginBottom: '5rem' }}>Trusted by the World’s Leading <span className="text-red">Technology & Certification Partners</span></h2>
                    <div className="course-grid">
                        {vendorData.map((vendor) => (
                            <a
                                key={vendor.name}
                                href={vendor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vendor-card"
                                aria-label={`Learn more about ${vendor.name} certifications`}
                            >
                                <img src={vendor.image} alt={vendor.alt} className="vendor-logo" loading="lazy" />
                                <div className="vendor-hover-overlay">
                                    <span className="visit-btn"><ExternalLink size={24} /></span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <div className="corporate-training bg-gray p-5 mt-5 rounded text-center">
                <h2>Corporate Training</h2>
                <p>We also provide customized corporate training programs based on industry needs and corporate IT governance standards.</p>
            </div>
            <br />
        </div>
    );
};

export default Trainings;
