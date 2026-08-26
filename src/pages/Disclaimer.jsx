import React from 'react';
import SEO from '../components/common/SEO';

const Disclaimer = () => {
    return (
        <div className="legal-page section-padding">
            <SEO 
                title="Disclaimer"
                description="Disclaimer for Glidez Solutions IT services, consultation, and training certification programs."
                canonical="/disclaimer"
                keywords="Disclaimer, Legal Notice, Glidez Solutions Policies"
            />
            <div className="container">
                <h1>Dis<span className="text-red">claimer</span></h1>
                <p><strong>Last Updated:</strong> January 1, 2026</p>
                <br />

                <h2>1. Website Disclaimer</h2>
                <p>The information provided by Glidez Solutions ("we," "us," or "our") on <a href="https://glidez.org" target="_blank" rel="noopener noreferrer"><i>glidez.org</i></a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

                <h2>2. Professional Disclaimer</h2>
                <p>The Site cannot and does not contain legal, medical/health, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

                <h2>3. External Links Disclaimer</h2>
                <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            </div>
        </div>
    );
};

export default Disclaimer;
