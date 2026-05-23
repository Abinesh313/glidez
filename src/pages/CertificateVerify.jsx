import React, { useState, useEffect } from 'react';
import { Search, CheckCircle, XCircle, Award, Calendar, User, BookOpen, Star, Clock, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CERT_SHEET_URL, parseCSV } from '../data/certificates';

const CertificateVerify = () => {
    const [certId, setCertId] = useState('');
    const [result, setResult] = useState(null);   // null = idle, false = not found, object = found
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const [certificates, setCertificates] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [dataLoading, setDataLoading] = useState(true);

    // Fetch certificate data from Google Sheet on mount
    useEffect(() => {
        if (!CERT_SHEET_URL || CERT_SHEET_URL === 'PASTE_YOUR_GOOGLE_SHEET_CSV_URL_HERE') {
            setFetchError(true);
            setDataLoading(false);
            return;
        }
        fetch(CERT_SHEET_URL)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.text();
            })
            .then((csv) => {
                setCertificates(parseCSV(csv));
                setDataLoading(false);
            })
            .catch(() => {
                setFetchError(true);
                setDataLoading(false);
            });
    }, []);

    const handleVerify = () => {
        if (!certId.trim() || dataLoading) return;
        setLoading(true);
        setResult(null);
        setShake(false);

        setTimeout(() => {
            const cert = certificates.find(
                (c) => c.id?.toLowerCase() === certId.trim().toLowerCase()
            ) || null;
            setLoading(false);
            if (cert) {
                setResult(cert);
            } else {
                setResult(false);
                setShake(true);
                setTimeout(() => setShake(false), 600);
            }
        }, 400);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleVerify();
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '—';
        // If already formatted like "15 March 2025", return as-is
        if (/[a-zA-Z]/.test(dateStr)) return dateStr;
        // Otherwise parse ISO format
        const date = new Date(dateStr);
        return isNaN(date) ? dateStr : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const getGradeColor = (grade) => {
        switch (grade?.toLowerCase()) {
            case 'distinction': return '#2e7d32';
            case 'merit': return '#1565c0';
            case 'pass': return '#6a1010';
            default: return '#555';
        }
    };

    return (
        <div className="cert-verify-page">
            <Helmet>
                <title>Verify Certificate | Glidez Solutions</title>
                <meta name="description" content="Verify the authenticity of your Glidez Solutions training certificate by entering your certificate number." />
            </Helmet>

            {/* Hero */}
            <section className="bg-black text-white section-padding text-center">
                <div className="container">
                    <h1>Certificate <span className="text-red">Verification</span></h1>
                    <p>Enter your certificate number to verify its authenticity and view your certificate details.</p>
                </div>
            </section>

            {/* Search Section */}
            <section className="cert-search-section">
                <div className="container">

                    {/* Config not set yet */}
                    {fetchError && (
                        <div className="cert-config-warning">
                            <AlertCircle size={22} />
                            <span>
                                Certificate database not connected yet.
                                Please configure the Google Sheets URL in <code>src/data/certificates.js</code>.
                            </span>
                        </div>
                    )}

                    <div className="cert-search-card">
                        <h2>Enter Certificate Number</h2>
                        <p className="cert-search-hint">
                            Format: <code>GLZ-COURSE-XXXX</code> &nbsp;·&nbsp; Example: <code>GLZ-CEH-4821</code>
                        </p>

                        <div className={`cert-input-row ${shake ? 'shake' : ''}`}>
                            <div className="cert-input-wrapper">
                                <Search size={20} className="cert-input-icon" />
                                <input
                                    id="cert-number-input"
                                    type="text"
                                    placeholder="e.g. GLZ-CEH-4821"
                                    value={certId}
                                    onChange={(e) => setCertId(e.target.value.toUpperCase())}
                                    onKeyDown={handleKeyDown}
                                    className="cert-input"
                                    autoComplete="off"
                                    spellCheck="false"
                                    disabled={fetchError}
                                />
                            </div>
                            <button
                                id="cert-verify-btn"
                                className="btn btn-primary cert-verify-btn"
                                onClick={handleVerify}
                                disabled={loading || !certId.trim() || dataLoading || fetchError}
                            >
                                {loading || dataLoading ? (
                                    <span className="cert-spinner" />
                                ) : (
                                    'Verify'
                                )}
                            </button>
                        </div>

                        {dataLoading && !fetchError && (
                            <p className="cert-loading-hint">Loading certificate database…</p>
                        )}
                    </div>

                    {/* NOT FOUND */}
                    {result === false && (
                        <div className="cert-not-found cert-fade-in">
                            <XCircle size={52} className="cert-not-found-icon" />
                            <h3>Certificate Not Found</h3>
                            <p>
                                No certificate was found with the number <strong>{certId}</strong>.<br />
                                Please double-check the number and try again, or contact us at{' '}
                                <a href="mailto:info@glidezsolutions.com">info@glidezsolutions.com</a>.
                            </p>
                        </div>
                    )}

                    {/* FOUND */}
                    {result && (
                        <div className="cert-result cert-fade-in">
                            <div className="cert-verified-badge">
                                <CheckCircle size={22} />
                                <span>Certificate Verified</span>
                            </div>

                            <div className="cert-card">
                                {/* Card Header */}
                                <div className="cert-card-header">
                                    <div className="cert-card-logo">
                                        <img src="/logo.png" alt="Glidez Solutions" />
                                        <span>Glidez <span>Solutions</span></span>
                                    </div>
                                    <div className="cert-card-id">
                                        <span>Certificate No.</span>
                                        <strong>{result.id}</strong>
                                    </div>
                                </div>

                                <div className="cert-divider" />

                                {/* Card Body */}
                                <div className="cert-card-body">
                                    <p className="cert-this-certifies">This is to certify that</p>
                                    <h2 className="cert-student-name">{result.studentName}</h2>
                                    <p className="cert-has-completed">has successfully completed the course</p>
                                    <h3 className="cert-course-name">{result.course}</h3>
                                </div>

                                {/* Details Grid */}
                                <div className="cert-details-grid">
                                    <div className="cert-detail-item">
                                        <div className="cert-detail-icon"><Calendar size={18} /></div>
                                        <div>
                                            <span>Issue Date</span>
                                            <strong>{formatDate(result.issuedDate)}</strong>
                                        </div>
                                    </div>
                                    <div className="cert-detail-item">
                                        <div className="cert-detail-icon"><User size={18} /></div>
                                        <div>
                                            <span>Instructor</span>
                                            <strong>{result.instructor || '—'}</strong>
                                        </div>
                                    </div>
                                    <div className="cert-detail-item">
                                        <div className="cert-detail-icon"><Star size={18} /></div>
                                        <div>
                                            <span>Grade</span>
                                            <strong style={{ color: getGradeColor(result.grade) }}>
                                                {result.grade || '—'}
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="cert-detail-item">
                                        <div className="cert-detail-icon"><Clock size={18} /></div>
                                        <div>
                                            <span>Duration</span>
                                            <strong>{result.duration || '—'}</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="cert-card-footer">
                                    <BookOpen size={16} />
                                    <span>Issued by Glidez Solutions &nbsp;·&nbsp; www.glidez.org</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="cert-info-section">
                <div className="container">
                    <div className="cert-info-grid">
                        <div className="cert-info-card">
                            <Award size={32} />
                            <h4>Globally Recognized</h4>
                            <p>Our certificates are aligned with globally recognized certification bodies.</p>
                        </div>
                        <div className="cert-info-card">
                            <CheckCircle size={32} />
                            <h4>Authentic & Verifiable</h4>
                            <p>Every certificate issued by Glidez Solutions can be instantly verified here.</p>
                        </div>
                        <div className="cert-info-card">
                            <User size={32} />
                            <h4>Student Focused</h4>
                            <p>We ensure each student gets a verified record of their achievement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CertificateVerify;
