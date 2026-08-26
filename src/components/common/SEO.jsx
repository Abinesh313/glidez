import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_SEO = {
    siteName: 'Glidez Solutions',
    defaultTitle: 'Glidez Solutions - Empowering IT Excellence',
    titleTemplate: '%s | Glidez Solutions',
    defaultDescription: 'Empowering IT Excellence through top-tier Information Security Services, Digital Marketing, Website Development, SEO, and globally recognized IT training certifications.',
    defaultKeywords: 'Glidez Solutions, IT Services, Cybersecurity, Information Security, Website Development, Digital Marketing, SEO Services, IT Training, EC-Council, ISACA, CompTIA, AWS, Cisco, Certifications, Bangalore, Tamil Nadu, India',
    siteUrl: 'https://glidez.org',
    defaultImage: 'https://glidez.org/logo.png',
    twitterHandle: '@glidez',
};

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage,
    noindex = false,
    schema,
}) => {
    const pageTitle = title 
        ? (title.includes('Glidez Solutions') ? title : `${title} | ${DEFAULT_SEO.siteName}`)
        : DEFAULT_SEO.defaultTitle;
    const pageDescription = description || DEFAULT_SEO.defaultDescription;
    const pageKeywords = keywords || DEFAULT_SEO.defaultKeywords;
    const pageImage = ogImage || DEFAULT_SEO.defaultImage;
    const canonicalUrl = canonical 
        ? (canonical.startsWith('http') ? canonical : `${DEFAULT_SEO.siteUrl}${canonical}`)
        : DEFAULT_SEO.siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content="Glidez Solutions" />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
            
            {/* Canonical Link */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook / LinkedIn */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:alt" content="Glidez Solutions - Empowering IT Excellence" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:image:alt" content="Glidez Solutions" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
