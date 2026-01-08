import React from 'react';
import { ExternalLink } from 'lucide-react';



// Vendor Data
const vendorData = [
    { name: "Microsoft", url: "https://www.microsoft.com/en-us/learning", image: "/partners/microsoft.png" },
    { name: "Cisco", url: "https://www.cisco.com/c/en/us/training-events/training-certifications.html", image: "/partners/cisco.png" },
    { name: "AWS", url: "https://aws.amazon.com/training/", image: "/partners/aws.png" },
    { name: "VMware", url: "https://www.vmware.com/learning.html", image: "/partners/vmware.webp" },
    { name: "Oracle", url: "https://education.oracle.com/", image: "/partners/oracle.jpg" },
    { name: "PeopleCert", url: "https://www.peoplecert.org/", image: "/partners/peoplecert.png" },
    { name: "ISACA", url: "https://www.isaca.org/training-and-events", image: "/partners/isaca.png" },
    { name: "CompTIA", url: "https://www.comptia.org/en-em/certifications/", image: "/partners/comptia.png" },
    { name: "SAP", url: "https://learning.sap.com/certifications", image: "/partners/sap.png" },
    { name: "ISC2", url: "https://www.isc2.org/", image: "/partners/isc2.png" },
    { name: "EC-Council", url: "https://www.eccouncil.org/", image: "/partners/eccouncil.webp" },
    { name: "PMI", url: "https://www.pmi.org/", image: "/partners/pmi.png" },
    { name: "Check Point", url: "https://www.checkpoint.com/training/", image: "/partners/checkpoint.svg" },
    { name: "Red Hat", url: "https://www.redhat.com/en/services/training-and-certification", image: "/partners/redhat.png" },
    { name: "ISTQB", url: "https://istqb.org/certifications/", image: "/partners/istqb.jpg" },
    { name: "The Open Group", url: "https://www.opengroup.org/certifications", image: "/partners/theopengroup.webp" },
    { name: "BCS", url: "https://www.bcs.org/qualifications-and-certifications/", image: "/partners/bcs.png" },
    { name: "ServiceNow", url: "https://www.servicenow.com/services/training-and-certification.html", image: "/partners/servicenow.png" },
    { name: "BSI", url: "https://www.bsigroup.com/en-GB/products-and-services/training-courses-and-qualifications/", image: "/partners/bsi.png" },
    { name: "EXIN", url: "https://www.exin.com/all-certifications/", image: "/partners/exin.png" },
    { name: "GAQM", url: "https://gaqm.org/", image: "/partners/gaqm.png" },
    { name: "ISO", url: "https://www.iso.org/certification.html", image: "/partners/iso.svg" }
];

const Trainings = () => {
    return (
        <div className="trainings-page">
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
                            >
                                <img src={vendor.image} alt={vendor.name} className="vendor-logo" />
                                <div className="vendor-hover-overlay">
                                    <span className="visit-btn"><ExternalLink size={24} /></span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <div className="corporate-training bg-gray p-5 mt-5 rounded text-center">
                <h3>Corporate Training</h3>
                <p>We also provide customized corporate training programs based on industry needs.</p>
            </div>
            <br></br>
        </div>
    );
};

export default Trainings;
