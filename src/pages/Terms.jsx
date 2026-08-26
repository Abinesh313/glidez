import React from 'react';
import SEO from '../components/common/SEO';

const Terms = () => {
    return (
        <div className="legal-page section-padding">
            <SEO 
                title="Terms & Conditions"
                description="Terms and Conditions for using Glidez Solutions website, services, and training programs."
                canonical="/terms"
                keywords="Terms and Conditions, User Agreement, Glidez Solutions Legal"
            />
            <div className="container">
                <h1>Terms & <span className="text-red">Conditions</span></h1>
                <p><strong>Last Updated:</strong> January 1, 2026</p>
                <br />

                <h2>1. Agreement to Terms</h2>
                <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Glidez Solutions ("we," "us" or "our"), concerning your access to and use of the <a href="https://glidez.org" target="_blank" rel="noopener noreferrer"><i>glidez.org</i></a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>

                <h2>2. Intellectual Property Rights</h2>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.</p>

                <h2>3. User Representations</h2>
                <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>

                <h2>4. Prohibited Activities</h2>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                <h2>5. Governing Law</h2>
                <p>These Terms shall be governed by and defined following the laws of India. Glidez Solutions and yourself irrevocably consent that the courts of Bengaluru / Tamil Nadu shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </div>
        </div>
    );
};

export default Terms;
