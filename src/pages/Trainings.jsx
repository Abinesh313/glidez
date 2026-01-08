import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Trainings = () => {
    return (
        <div className="trainings-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Information Security <span className="text-red">Trainings</span></h1>
                    <p>Globally recognized certifications to advance your career.</p>
                </div>
            </section>

            <div className="container section-padding">

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> EC-Council Courses</h2>
                    <div className="course-grid">
                        <div className="course-card">CEH (Certified Ethical Hacker)</div>
                        <div className="course-card">CHFI (Computer Hacking Forensic Investigator)</div>
                        <div className="course-card">ECIH (Certified Incident Handler)</div>
                        <div className="course-card">CCISO (Certified Chief Information Security Officer)</div>
                    </div>
                </div>

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISACA Courses</h2>
                    <div className="course-grid">
                        <div className="course-card">CISM (Certified Information Security Manager)</div>
                        <div className="course-card">CISA (Certified Information Systems Auditor)</div>
                        <div className="course-card">CRISC (Risk and Information Systems Control)</div>
                        <div className="course-card">CGEIT (Governance of Enterprise IT)</div>
                        <div className="course-card">AAIA (Advanced Audit & Information Assurance)</div>
                    </div>
                </div>

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISC² Courses</h2>
                    <div className="course-grid">
                        <div className="course-card">CISSP (Certified Information Systems Security Professional)</div>
                        <div className="course-card">CCSP (Certified Cloud Security Professional)</div>
                        <div className="course-card">CC (Certified in Cybersecurity)</div>
                    </div>
                </div>

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> CompTIA Certifications</h2>
                    <div className="course-grid">
                        <div className="course-card">CompTIA Security+</div>
                        <div className="course-card">CompTIA Network+</div>
                        <div className="course-card">CompTIA CySA+</div>
                        <div className="course-card">CompTIA PenTest+</div>
                        <div className="course-card">CompTIA CASP+</div>
                    </div>
                </div>

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ITIL Certifications</h2>
                    <div className="course-grid">
                        <div className="course-card">ITIL Foundation</div>
                        <div className="course-card">ITIL Practitioner</div>
                        <div className="course-card">ITIL Intermediate & Expert Levels</div>
                    </div>
                </div>

                <div className="training-category">
                    <h2 className="category-title"><Award className="mr-2" /> ISO & Other Trainings</h2>
                    <div className="course-grid">
                        <div className="course-card">ISO 27001 Lead Auditor / Lead Implementer</div>
                        <div className="course-card">ISO 22301 Business Continuity</div>
                        <div className="course-card">ISO 31000 Risk Management</div>
                    </div>
                </div>

                <div className="corporate-training bg-gray p-5 mt-5 rounded text-center">
                    <h3>Corporate Training</h3>
                    <p>We also provide customized corporate training programs based on industry needs.</p>
                </div>

            </div>
        </div>
    );
};

export default Trainings;
