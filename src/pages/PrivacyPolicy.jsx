import React from 'react';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page section-padding">
            <SEO 
                title="Privacy Policy"
                description="Privacy Policy for Glidez Solutions. Learn how we collect, use, protect, and safeguard your personal information."
                canonical="/privacy-policy"
                keywords="Privacy Policy, Glidez Solutions Data Protection, User Privacy"
            />
            <div className="container">
                <h1>Privacy <span className="text-red">Policy</span></h1>
                <p><strong>Effective Date:</strong> January 1, 2026</p>
                <br />

                <h2>1. Introduction</h2>
                <p>Welcome to Glidez Solutions ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://glidez.org" target="_blank" rel="noopener noreferrer"><i>glidez.org</i></a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").</p>

                <h2>2. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                </ul>

                <h2>3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul>
                    <li>Create and manage your account and training certifications.</li>
                    <li>Email you regarding your account, inquiries, or internship applications.</li>
                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                    <li>Improve the efficiency and operation of the Site.</li>
                </ul>

                <h2>4. Disclosure of Your Information</h2>
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul>
                    <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                    <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                </ul>

                <h2>5. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p><strong>Email:</strong> sathish@glidez.org</p>
                <p><strong>Phone:</strong> +91 90438 67290</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
