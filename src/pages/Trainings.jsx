import React, { useState } from 'react';
import { Award, X } from 'lucide-react';

const courseData = {
    // EC-Council
    "CEH (Certified Ethical Hacker)": {
        duration: "40 Hours",
        prerequisites: "Basic networking and operating system knowledge.",
        syllabus: [
            "Introduction to Ethical Hacking",
            "Footprinting and Reconnaissance",
            "Scanning Networks",
            "Enumeration",
            "Vulnerability Analysis",
            "System Hacking",
            "Malware Threats",
            "Sniffing",
            "Social Engineering",
            "Denial-of-Service"
        ]
    },
    "CHFI (Computer Hacking Forensic Investigator)": {
        duration: "40 Hours",
        prerequisites: "CEH or equivalent knowledge recommended.",
        syllabus: [
            "Computer Forensics in Today's World",
            "Computer Forensics Investigation Process",
            "Understanding Hard Disks and File Systems",
            "Data Acquisition and Duplication",
            "Defeating Anti-Forensics Techniques",
            "Operating System Forensics",
            "Network Forensics",
            "Investigating Web Attacks"
        ]
    },
    "ECIH (Certified Incident Handler)": {
        duration: "24 Hours",
        prerequisites: "Experience in IT security.",
        syllabus: [
            "Introduction to Incident Handling",
            "Incident Handling and Response Process",
            "Forensic Readiness and First Response",
            "Handling and Responding to Malware Incidents",
            "Handling and Responding to Email Security Incidents",
            "Handling and Responding to Network Security Incidents"
        ]
    },
    "CCISO (Certified Chief Information Security Officer)": {
        duration: "32 Hours",
        prerequisites: "5 years of IS management experience.",
        syllabus: [
            "Governance, Risk, Compliance",
            "Information Security Controls and Audit Management",
            "Security Program Management & Operations",
            "Information Security Core Concepts",
            "Strategic Planning, Finance, Procurement, and Vendor Management"
        ]
    },

    // ISACA
    "CISM (Certified Information Security Manager)": {
        duration: "32 Hours",
        prerequisites: "5 years of work experience in information security management.",
        syllabus: [
            "Information Security Governance",
            "Information Risk Management",
            "Information Security Program Development and Management",
            "Information Security Incident Management"
        ]
    },
    "CISA (Certified Information Systems Auditor)": {
        duration: "40 Hours",
        prerequisites: "5 years of professional IS auditing, control or security work experience.",
        syllabus: [
            "Information Systems Auditing Process",
            "Governance and Management of IT",
            "Information Systems Acquisition, Development and Implementation",
            "Information Systems Operations and Business Resilience",
            "Protection of Information Assets"
        ]
    },

    // Default fallback for others
    "default": {
        duration: "Contact us for details",
        prerequisites: "Contact us for details",
        syllabus: [
            "Comprehensive curriculum available upon request.",
            "Hands-on labs and practical exercises.",
            "Expert-led instruction."
        ]
    }
};

const Trainings = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (courseName) => {
        const data = courseData[courseName] || courseData["default"];
        setSelectedCourse({ name: courseName, ...data });
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="trainings-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Information Security <span className="text-red">Trainings</span></h1>
                    <p>Globally recognized certifications to advance your career.</p>
                </div>
            </section>

            <div className="container section-padding">

                {/* EC-Council */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> EC-Council Courses</h2>
                    <div className="course-grid">
                        {["CEH (Certified Ethical Hacker)", "CHFI (Computer Hacking Forensic Investigator)", "ECIH (Certified Incident Handler)", "CCISO (Certified Chief Information Security Officer)"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ISACA */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISACA Courses</h2>
                    <div className="course-grid">
                        {["CISM (Certified Information Security Manager)", "CISA (Certified Information Systems Auditor)", "CRISC (Risk and Information Systems Control)", "CGEIT (Governance of Enterprise IT)", "AAIA (Advanced Audit & Information Assurance)"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ISC2 */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISC² Courses</h2>
                    <div className="course-grid">
                        {["CISSP (Certified Information Systems Security Professional)", "CCSP (Certified Cloud Security Professional)", "CC (Certified in Cybersecurity)"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CompTIA */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> CompTIA Certifications</h2>
                    <div className="course-grid">
                        {["CompTIA Security+", "CompTIA Network+", "CompTIA CySA+", "CompTIA PenTest+", "CompTIA CASP+"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ITIL */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ITIL Certifications</h2>
                    <div className="course-grid">
                        {["ITIL Foundation", "ITIL Practitioner", "ITIL Intermediate & Expert Levels"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ISO */}
                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISO & Other Trainings</h2>
                    <div className="course-grid">
                        {["ISO 27001 Lead Auditor / Lead Implementer", "ISO 22301 Business Continuity", "ISO 31000 Risk Management"].map(course => (
                            <div key={course} className="course-card" onClick={() => handleCourseClick(course)}>
                                {course}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="corporate-training bg-gray p-5 mt-5 rounded text-center">
                    <h3>Corporate Training</h3>
                    <p>We also provide customized corporate training programs based on industry needs.</p>
                </div>

            </div>

            {/* Modal */}
            {selectedCourse && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}><X size={24} /></button>

                        <h2 className="text-red mb-4">{selectedCourse.name}</h2>

                        <div className="modal-section">
                            <h4>Duration</h4>
                            <p>{selectedCourse.duration}</p>
                        </div>

                        <div className="modal-section">
                            <h4>Prerequisites</h4>
                            <p>{selectedCourse.prerequisites}</p>
                        </div>

                        <div className="modal-section">
                            <h4>Syllabus</h4>
                            <ul>
                                {selectedCourse.syllabus.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="/contact" className="btn btn-primary">Enroll Now</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trainings;
