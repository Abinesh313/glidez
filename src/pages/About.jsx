import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>About <span className="text-red">Us</span></h1>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="about-content">
                        <h2 className="mb-4">Welcome to Glidez Solutions</h2>
                        <p>Founded in 2025, <strong>Glidez Solutions</strong> is a forward-thinking IT company dedicated to delivering quality services and world-class IT trainings. Our mission is to empower businesses with cutting-edge digital solutions while nurturing the next generation of IT professionals through globally recognized certifications.</p>
                        <br />
                        <p>We specialize in Digital Marketing, Website Development, SEO, Cybersecurity Services, and Information Security Trainings. With a strong commitment to excellence, we ensure every client and student receives personalized, results-driven support.</p>

                        <br />
                        <h3>Our Mission</h3>
                        <p>To empower businesses with innovative technology and secure solutions, and to bridge the skills gap in the IT industry by providing top-tier training and mentorship.</p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gray">
                <div className="container">
                    <h2 className="text-center mb-5">Why We Are <span className="text-red">Different</span></h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Innovation & Security</h3>
                            <p>We combine the latest tech with robust security practices.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Student-Centric Training</h3>
                            <p>We don't just teach; we mentor. Real-world labs and case studies.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Global Standards</h3>
                            <p>Our curriculum aligns with international standards like ISO, NIST, and more.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
