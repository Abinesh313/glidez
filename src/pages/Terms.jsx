import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
    return (
        <div className="legal-page section-padding">
            <Helmet>
                <title>Terms & Conditions | Glidez Solutions</title>
                <meta name="description" content="Terms and Conditions for using Glidez Solutions website and services." />
            </Helmet>
            <div className="container">
                <h1>Terms & <span className="text-red">Conditions</span></h1>
                <p><strong>Last Updated:</strong> January 1, 2026</p>
                <br />

                <h3>1. Agreement to Terms</h3>
                <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Glidez Solutions ("we," "us" or "our"), concerning your access to and use of the [glidez.org] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>

                <h3>2. Intellectual Property Rights</h3>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.</p>

                <h3>3. User Representations</h3>
                <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>

                <h3>4. Prohibited Activities</h3>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                <h3>5. Disclaimer</h3>
                <p>The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk.</p>

                <h3>6. Contact Us</h3>
                <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                <p><strong>Glidez Solutions</strong><br />
                    Email: sathish@glidez.org</p>
            </div>
        </div>
    );
};

export default Terms;
