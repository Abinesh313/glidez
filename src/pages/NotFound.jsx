import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '4rem', color: '#D32F2F', marginBottom: '1rem' }}>404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-5 max-w-md mx-auto text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <br></br>
            <Link to="/" className="btn btn-primary">Go to Homepage</Link>
        </div>
    );
};

export default NotFound;
