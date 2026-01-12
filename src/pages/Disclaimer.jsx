import React from 'react';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
    return (
        <div className="legal-page section-padding">
            <Helmet>
                <title>Disclaimer | Glidez Solutions</title>
                <meta name="description" content="Disclaimer for Glidez Solutions services and training programs." />
            </Helmet>
            <div className="container">
                <h1>Dis<span className="text-red">claimer</span></h1>
                <p><strong>Last Updated:</strong> January 1, 2026</p>
                <br />

                <h3>1. Website Disclaimer</h3>
                <p>The information provided by Glidez Solutions ("we," "us," or "our") on [glidez.org] (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

                <h3>2. Professional Disclaimer</h3>
                <p>The Site cannot and does not contain legal, medical/health, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

                <h3>3. External Links Disclaimer</h3>
                <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            </div>
        </div>
    );
};

export default Disclaimer;
