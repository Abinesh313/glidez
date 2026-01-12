import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page section-padding">
            <Helmet>
                <title>Privacy Policy | Glidez Solutions</title>
                <meta name="description" content="Privacy Policy for Glidez Solutions. Learn how we collect, use, and protect your data." />
            </Helmet>
            <div className="container">
                <h1>Privacy <span className="text-red">Policy</span></h1>
                <p><strong>Effective Date:</strong> January 1, 2026</p>
                <br />

                <h3>1. Introduction</h3>
                <p>Welcome to Glidez Solutions ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [glidez.org], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").</p>

                <h3>2. Information We Collect</h3>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                </ul>

                <h3>3. Use of Your Information</h3>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website and services.</li>
                    <li>Improve, personalize, and expand our website.</li>
                    <li>Understand and analyze how you use our website.</li>
                    <li>Develop new products, services, features, and functionality.</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                    <li>Send you emails.</li>
                    <li>Find and prevent fraud.</li>
                </ul>

                <h3>4. Cookies and Web Beacons</h3>
                <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.</p>

                <h3>5. Third-Party Advertising</h3>
                <p>We use third-party advertising companies (such as Google AdSense) to serve ads when you visit the Site. These companies may use information about your visits to the Site and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.</p>

                <h3>6. Contact Us</h3>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <p><strong>Glidez Solutions</strong><br />
                    Email: sathish@glidez.org<br />
                    Phone: +91 90438 67290</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
