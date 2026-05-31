import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Cybersecurity Practices for Modern Businesses",
        excerpt: "Discover essential security strategies to protect your company's assets, networks, and sensitive data from ever-evolving threats in 2026.",
        content: `In 2026, cybersecurity is no longer just an IT concern—it is a critical business strategy. With threats becoming more sophisticated, businesses must adapt and adopt proactive security measures. Here are the top 5 cybersecurity practices for 2026:\n\n1. Implement Zero Trust Architecture: Never trust, always verify. Every access request must be authenticated and authorized.\n2. Regular Security Training: Human error remains a major cause of breaches. Conduct monthly security drills and phishing simulations for employees.\n3. Continuous Vulnerability Scanning: Find vulnerabilities in your code and cloud infrastructure before attackers do.\n4. Multi-Factor Authentication (MFA): Require MFA across all business tools and administrative panels.\n5. Automated Encrypted Backups: Ensure that in the event of ransomware, you can restore clean data quickly.\n\nProtect your applications, cloud infrastructure, and databases with Glidez Solutions. Reach out to sathish@glidez.org to schedule an security audit today.`,
        category: "Cybersecurity",
        image: "/blogs/cybersecurity.png",
        date: "May 20, 2026",
        author: "Sathish Kumar",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Mastering Responsive Web Design with React in 2026",
        excerpt: "Build lightning-fast, accessible, and responsive user interfaces that adapt seamlessly to any device screen size.",
        content: `Modern web development moves at a rapid pace. In 2026, building responsive interfaces requires modern CSS techniques, flexible grids, and structured components. Let's look at key patterns for React development in 2026:\n\n1. Container Queries: Go beyond simple viewport media queries. Use container queries to style components based on their parent container's dimensions.\n2. CSS Grid & Flexbox: Use Grid for page-level layouts and Flexbox for component alignment. Avoid heavy CSS frameworks unless strictly necessary.\n3. Lazy Loading & Image Optimization: Leverage responsive image formats (like WebP/AVIF) and React.lazy for components to achieve fast load speeds.\n4. Accessibility (a11y): Build UI components with aria labels, semantic HTML tags, and keyboard navigability.\n\nAt Glidez Solutions, we specialize in high-performance web development and scalable architectures. Contact us at sathish@glidez.org for quotes on your next project.`,
        category: "Web Development",
        image: "/blogs/webdev.png",
        date: "May 15, 2026",
        author: "Abinesh G",
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "SEO Strategies to Boost Organic Search Traffic in 2026",
        excerpt: "Learn how to optimize your content, clean up technical parameters, and structure keywords to rank higher in search results.",
        content: `Search engines continuously evolve. In 2026, keyword stuffing is obsolete. Modern SEO focuses on user intent, technical site performance, and high-quality structured content. Here is how to rank in 2026:\n\n1. Focus on Helpful Content: Write for humans first. Provide deep answers to user questions and back them up with data.\n2. Core Web Vitals Optimization: Ensure fast loading, low input delay, and visual stability (CLS).\n3. Schema Markup & Structured Data: Help search engine bots understand your content hierarchy and entities.\n4. Mobile-First Optimization: Search indexers index mobile versions first. Responsive and readable mobile layout is mandatory.\n\nLooking to grow your brand and organic traffic? Glidez Solutions offers tailored SEO audits and digital marketing services. Email sathish@glidez.org to connect.`,
        category: "SEO",
        image: "/blogs/seo.png",
        date: "May 10, 2026",
        author: "Sathish Kumar",
        readTime: "4 min read"
    }
];

const categories = ["All", "Cybersecurity", "Web Development", "SEO"];

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activePost, setActivePost] = useState(null);

    const filteredPosts = selectedCategory === "All" 
        ? blogPosts 
        : blogPosts.filter(p => p.category === selectedCategory);

    return (
        <div className="blogs-page">
            <Helmet>
                <title>Blog & Tech Insights | Glidez Solutions</title>
                <meta name="description" content="Stay informed with tech articles, web design tutorials, cybersecurity tips, and SEO secrets from Glidez Solutions in 2026." />
            </Helmet>

            {/* Page Header */}
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Tech Insights & <span className="text-red">Blogs</span></h1>
                    <p>Articles, guides, and tutorials from our IT experts in 2026.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container">
                    {/* Category Filter */}
                    <div className="category-filters" style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{ padding: '8px 20px', borderRadius: '20px', fontSize: '0.9rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Post Grid */}
                    <div className="blogs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                        {filteredPosts.map(post => (
                            <div 
                                key={post.id} 
                                className="blog-card" 
                                style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }}
                                onClick={() => setActivePost(post)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.02)';
                                }}
                            >
                                <div className="blog-card-img-wrap" style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#000' }}>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        className="blog-img"
                                    />
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--primary-color)', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                                        {post.category}
                                    </span>
                                </div>
                                <div className="blog-card-content" style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <div className="blog-meta" style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '0.8rem', marginBottom: '12px' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--secondary-color)', lineHeight: 1.4 }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px', flexGrow: 1, lineHeight: 1.6 }}>
                                        {post.excerpt}
                                    </p>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem' }}>
                                        Read Full Article <ChevronRight size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Read Article Modal */}
            {activePost && (
                <div 
                    className="modal-overlay" 
                    onClick={() => setActivePost(null)}
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}
                >
                    <div 
                        className="modal-content" 
                        onClick={e => e.stopPropagation()}
                        style={{ background: '#fff', padding: '30px', borderRadius: '12px', width: '90%', maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                    >
                        <button 
                            className="modal-close" 
                            onClick={() => setActivePost(null)}
                            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }}
                        >
                            <X size={24} />
                        </button>

                        <span style={{ backgroundColor: 'var(--primary-color)', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', display: 'inline-block', marginBottom: '15px' }}>
                            {activePost.category}
                        </span>

                        <h2 className="mb-3" style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', lineHeight: 1.3, paddingRight: '20px' }}>
                            {activePost.title}
                        </h2>

                        <div className="blog-meta mb-4" style={{ display: 'flex', gap: '20px', color: 'var(--text-light)', fontSize: '0.85rem', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={15} /> By {activePost.author}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={15} /> {activePost.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={15} /> {activePost.readTime}</span>
                        </div>

                        <img 
                            src={activePost.image} 
                            alt={activePost.title} 
                            style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover', borderRadius: '8px', marginBottom: '25px' }}
                        />

                        <div className="blog-full-content" style={{ fontSize: '1rem', color: 'var(--text-color)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                            {activePost.content}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
