import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const NotFound = () => {
    return (
        <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <SEO 
                title="404 - Page Not Found"
                description="The page you are looking for does not exist on Glidez Solutions."
                noindex={true}
            />
            <h1 style={{ fontSize: '4rem', color: '#D32F2F', marginBottom: '1rem' }}>404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-5 max-w-md mx-auto text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <br />
            <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </div>
    );
};

export default NotFound;
