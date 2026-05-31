import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, CheckCircle, XCircle, Award, Calendar, User, BookOpen, Star, Clock, AlertCircle, Linkedin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { jsPDF } from 'jspdf';
import { CERT_SHEET_URL, GOOGLE_SCRIPT_URL, parseCSV } from '../data/certificates';

const parseIssuedDate = (dateStr) => {
    if (!dateStr) return { year: null, month: null };
    
    // Check if it's standard ISO format (e.g. YYYY-MM-DD)
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1 // 1-indexed for LinkedIn
        };
    }
    
    // Check for DD/MM/YYYY or YYYY/MM/DD
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        if (parts.length === 3) {
            if (parts[2].length === 4) {
                return {
                    year: parseInt(parts[2], 10),
                    month: parseInt(parts[1], 10)
                };
            } else if (parts[0].length === 4) {
                return {
                    year: parseInt(parts[0], 10),
                    month: parseInt(parts[1], 10)
                };
            }
        }
    }

    // Try parsing text-based formats like "15 March 2025" or "May 2026"
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length >= 2) {
        const yearPart = parts[parts.length - 1];
        const monthPart = parts[parts.length - 2];
        
        const monthNames = [
            'january', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december'
        ];
        const monthIndex = monthNames.indexOf(monthPart.toLowerCase());
        
        return {
            year: parseInt(yearPart, 10) || null,
            month: monthIndex !== -1 ? monthIndex + 1 : 1
        };
    }
    
    return { year: null, month: null };
};

const getDepartmentCode = (courseName) => {
    const lower = courseName.toLowerCase();
    if (
        lower.includes('hack') ||
        lower.includes('ceh') ||
        lower.includes('ethical') ||
        lower.includes('security') ||
        lower.includes('wapt') ||
        lower.includes('cyber') ||
        lower.includes('pentest') ||
        lower.includes('cissp') ||
        lower.includes('cisa') ||
        lower.includes('cism') ||
        lower.includes('comptia')
    ) {
        return 'SEC';
    }
    if (
        lower.includes('developer') ||
        lower.includes('programming') ||
        lower.includes('fsd') ||
        lower.includes('web') ||
        lower.includes('development') ||
        lower.includes('java') ||
        lower.includes('python') ||
        lower.includes('code') ||
        lower.includes('react')
    ) {
        return 'DEV';
    }
    if (
        lower.includes('marketing') ||
        lower.includes('seo') ||
        lower.includes('ads') ||
        lower.includes('social') ||
        lower.includes('sem') ||
        lower.includes('content')
    ) {
        return 'MKT';
    }
    return 'GEN';
};

const getCourseAbbreviation = (courseName) => {
    const lower = courseName.toLowerCase();
    
    // Explicit custom overrides
    if (lower.includes('aws')) return 'AWS';
    if (lower.includes('ceh') || lower.includes('ethical hacker')) return 'CEH';
    if (lower.includes('pmp') || lower.includes('project management')) return 'PMP';
    if (lower.includes('wapt') || lower.includes('web application penetration')) return 'WAPT';
    if (lower.includes('seo')) return 'SEO';
    if (lower.includes('digital marketing')) return 'DMKT';
    if (lower.includes('web development') || lower.includes('website development')) return 'WDEV';
    if (lower.includes('python full stack')) return 'PFSD';
    if (lower.includes('java full stack')) return 'JFSD';
    if (lower.includes('scrum')) return 'CSM';
    if (lower.includes('itil')) return 'ITL';
    if (lower.includes('cfa')) return 'CFA';
    if (lower.includes('gcp') || lower.includes('google cloud')) return 'GCP';
    if (lower.includes('security+')) return 'SEC';
    if (lower.includes('data science')) return 'DAT';
    
    // Extract parentheses e.g. "Certified Ethical Hacker (CEH)"
    const parenMatch = courseName.match(/\(([^)]+)\)/);
    if (parenMatch && parenMatch[1]) {
        return parenMatch[1].toUpperCase().replace(/[^A-Z0-9]/g, '');
    }
    
    // Default initial letter extractor
    const cleanName = courseName.replace(/[^a-zA-Z0-9\s]/g, '');
    const words = cleanName.trim().split(/\s+/).filter(w => w.length > 0);
    
    if (words.length === 1) {
        return words[0].slice(0, 3).toUpperCase();
    }
    
    const ignoredWords = ['and', 'or', 'of', 'in', 'to', 'for', 'a', 'an', 'the', 'with', 'by'];
    const keyWords = words.filter(w => !ignoredWords.includes(w.toLowerCase()));
    
    if (keyWords.length > 0) {
        return keyWords.map(w => w[0].toUpperCase()).join('').slice(0, 4);
    }
    
    return words.map(w => w[0].toUpperCase()).join('').slice(0, 4);
};

const getNextId = (courseName, certificates) => {
    if (!courseName.trim()) return 'GLZ-CODE-1001';
    
    const code = getCourseAbbreviation(courseName).toUpperCase();
    const prefix = `GLZ-${code}-`;
    
    let maxSerial = 1000;
    
    certificates.forEach(c => {
        if (c.id) {
            const parts = c.id.toUpperCase().split('-');
            if (parts.includes(code)) {
                const serialNum = parseInt(parts[parts.length - 1], 10);
                if (!isNaN(serialNum) && serialNum > maxSerial) {
                    maxSerial = serialNum;
                }
            }
        }
    });
    
    return `${prefix}${maxSerial + 1}`;
};

const getCpeCredits = (courseName, duration) => {
    if (!courseName) return null;
    const lowerCourse = courseName.toLowerCase();
    
    // Do not add CPE credits for internships
    if (lowerCourse.includes('internship')) {
        return null;
    }
    
    const lowerDuration = (duration || '').toLowerCase();
    
    // Specific well-known professional course overrides
    if (lowerCourse.includes('ceh') || lowerCourse.includes('ethical hacker')) return 40;
    if (lowerCourse.includes('security+')) return 30;
    if (lowerCourse.includes('solutions architect') || lowerCourse.includes('aws')) return 30;
    
    // Parse duration numbers
    const numMatch = lowerDuration.match(/(\d+)/);
    if (numMatch) {
        const num = parseInt(numMatch[1], 10);
        if (lowerDuration.includes('hour') || lowerDuration.includes('hr')) {
            return num; // 1 CPE per hour
        }
        if (lowerDuration.includes('month') || lowerDuration.includes('mo')) {
            return num * 10; // 10 CPEs per month
        }
        if (lowerDuration.includes('week') || lowerDuration.includes('wk')) {
            return num * 5; // 5 CPEs per week
        }
    }
    
    return 20; // Default fallback for professional courses
};

const drawCertificate = (canvas, certData, logoImg, signatureImg, formatDate) => {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // 1. Background
    ctx.fillStyle = '#FCFBF9';
    ctx.fillRect(0, 0, width, height);

    // Subtle background pattern (geometric lines)
    ctx.strokeStyle = 'rgba(211, 47, 47, 0.03)';
    ctx.lineWidth = 2;
    for (let i = 0; i < width; i += 80) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    for (let i = 0; i < height; i += 80) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }

    // 2. Borders
    // Thick Red Border
    ctx.strokeStyle = '#D32F2F'; 
    ctx.lineWidth = 14; 
    ctx.strokeRect(35, 35, width - 70, height - 70);

    // Inner Gold/Bronze Border
    ctx.strokeStyle = '#C5A059'; 
    ctx.lineWidth = 4; 
    ctx.strokeRect(55, 55, width - 110, height - 110);

    // Corner decorative brackets
    ctx.fillStyle = '#D32F2F';
    // Top-left
    ctx.fillRect(55, 55, 80, 10);
    ctx.fillRect(55, 55, 10, 80);
    // Top-right
    ctx.fillRect(width - 135, 55, 80, 10);
    ctx.fillRect(width - 65, 55, 10, 80);
    // Bottom-left
    ctx.fillRect(55, height - 65, 80, 10);
    ctx.fillRect(55, height - 135, 10, 80);
    // Bottom-right
    ctx.fillRect(width - 135, height - 65, 80, 10);
    ctx.fillRect(width - 65, height - 135, 10, 80);

    // 3. Logo
    const logoY = 130;
    if (logoImg) {
        // Draw logo centered
        const logoWidth = 100;
        const logoHeight = 100;
        ctx.drawImage(logoImg, width / 2 - logoWidth / 2, logoY, logoWidth, logoHeight);
    } else {
        // Fallback logo shape
        ctx.fillStyle = '#D32F2F';
        ctx.beginPath();
        ctx.arc(width / 2, logoY + 50, 45, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 45px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('G', width / 2, logoY + 50);
    }

    // Company Name under logo
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('GLIDEZ SOLUTIONS', width / 2, logoY + 145);

    // 4. Header: Certificate of Completion
    ctx.fillStyle = '#D32F2F';
    ctx.font = 'bold 56px Georgia, serif';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, logoY + 240);

    // Divider line
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 250, logoY + 270);
    ctx.lineTo(width / 2 + 250, logoY + 270);
    ctx.stroke();

    // 5. This is to certify that
    ctx.fillStyle = '#555555';
    ctx.font = 'italic 28px Georgia, serif';
    ctx.fillText('This is to certify that', width / 2, logoY + 340);

    // 6. Recipient Name
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 68px Georgia, serif';
    ctx.fillText(certData.studentName, width / 2, logoY + 440);

    // Underline for recipient name
    ctx.strokeStyle = '#D32F2F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 350, logoY + 465);
    ctx.lineTo(width / 2 + 350, logoY + 465);
    ctx.stroke();

    // 7. Course details text
    ctx.fillStyle = '#555555';
    ctx.font = 'italic 28px Georgia, serif';
    ctx.fillText('has successfully completed the certification course in', width / 2, logoY + 535);

    // 8. Course Title
    ctx.fillStyle = '#D32F2F';
    ctx.font = 'bold 50px Georgia, serif';
    ctx.fillText(certData.course, width / 2, logoY + 610);

    // 9. Duration text
    ctx.fillStyle = '#555555';
    ctx.font = '24px Georgia, serif';
    ctx.fillText(`with a duration of ${certData.duration || '—'} and achieved a grade of ${certData.grade || '—'}.`, width / 2, logoY + 670);

    // 10. Footer Section (Left: Verification details, Center: Golden Seal, Right: Signature)
    const footerY = 930;

    // Left Column: Verification Details
    ctx.textAlign = 'left';
    ctx.fillStyle = '#333333';
    ctx.font = '20px Georgia, serif';
    
    const cpe = getCpeCredits(certData.course, certData.duration);
    if (cpe) {
        ctx.fillText(`Certificate No: ${certData.id}`, 200, footerY + 10);
        ctx.fillText(`Issue Date: ${formatDate(certData.issuedDate)}`, 200, footerY + 45);
        ctx.fillText(`CPE Credits: ${cpe} CPE Credits`, 200, footerY + 80);
        ctx.fillText(`Verify at: www.glidez.org`, 200, footerY + 115);
    } else {
        ctx.fillText(`Certificate No: ${certData.id}`, 200, footerY + 20);
        ctx.fillText(`Issue Date: ${formatDate(certData.issuedDate)}`, 200, footerY + 60);
        ctx.fillText(`Verify at: www.glidez.org`, 200, footerY + 100);
    }

    // Right Column: Signature
    ctx.textAlign = 'center';
    
    if (signatureImg) {
        const sigWidth = 280;
        const sigHeight = 80;
        ctx.drawImage(signatureImg, width - 300 - sigWidth / 2, footerY - 80, sigWidth, sigHeight);
    } else {
        // Fallback simulated signature path (blue pen ink simulation)
        ctx.strokeStyle = '#1565c0';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(width - 380, footerY);
        ctx.bezierCurveTo(width - 350, footerY - 50, width - 330, footerY - 10, width - 300, footerY - 30);
        ctx.bezierCurveTo(width - 280, footerY - 45, width - 260, footerY - 5, width - 230, footerY - 15);
        ctx.stroke();
    }

    // Signature label
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px Georgia, serif';
    ctx.fillText('Sathish Kumar', width - 300, footerY + 30);
    ctx.fillStyle = '#555555';
    ctx.font = '20px Georgia, serif';
    ctx.fillText('Director, Glidez Solutions', width - 300, footerY + 65);

    // Center Column: Golden Seal
    const sealX = width / 2;
    const sealY = footerY + 40;
    
    // Outer dashed circle
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 3;
    // Gold ribbon underneath seal (drawn first so it layers behind the solid circle)
    ctx.fillStyle = '#B08A43';
    ctx.beginPath();
    ctx.moveTo(sealX - 30, sealY + 50);
    ctx.lineTo(sealX - 55, sealY + 150);
    ctx.lineTo(sealX - 20, sealY + 130);
    ctx.lineTo(sealX + 15, sealY + 150);
    ctx.lineTo(sealX - 5, sealY + 50);
    ctx.fill();

    ctx.fillStyle = '#C5A059';
    ctx.beginPath();
    ctx.moveTo(sealX + 5, sealY + 50);
    ctx.lineTo(sealX + 35, sealY + 150);
    ctx.lineTo(sealX - 5, sealY + 130);
    ctx.lineTo(sealX - 35, sealY + 150);
    ctx.lineTo(sealX - 5, sealY + 50);
    ctx.fill();

    // Outer dashed circle
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.arc(sealX, sealY, 85, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Inner solid circle
    ctx.fillStyle = '#C5A059';
    ctx.beginPath();
    ctx.arc(sealX, sealY, 72, 0, Math.PI * 2);
    ctx.fill();

    // Seal text (larger and positioned cleanly)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('VERIFIED', sealX, sealY - 18);
    ctx.fillText('CERTIFICATE', sealX, sealY + 18);
    
    // Tiny star
    ctx.font = '20px Georgia, serif';
    ctx.fillText('★', sealX, sealY);
};

const CertificateVerify = () => {
    const location = useLocation();
    const [certId, setCertId] = useState('');
    const [result, setResult] = useState(null);   // null = idle, false = not found, object = found
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const [certificates, setCertificates] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    const [dataLoading, setDataLoading] = useState(true);

    // Admin Mode States
    const [isAdminParam, setIsAdminParam] = useState(false);
    const [showAdminPanel, setShowAdminPanel] = useState(false);
    const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
    const [passcode, setPasscode] = useState('');
    const [adminPasscodeToken, setAdminPasscodeToken] = useState('');
    const [passcodeError, setPasscodeError] = useState(false);

    // Form inputs for dynamic certificate creation
    const [adminForm, setAdminForm] = useState({
        studentName: '',
        courseName: '',
        duration: '',
        instructor: '',
        grade: 'Distinction',
        issuedDate: new Date().toISOString().split('T')[0] // today YYYY-MM-DD
    });

    const [adminMsg, setAdminMsg] = useState({ type: '', text: '' }); // type: success / error / loading
    const [generatedId, setGeneratedId] = useState('');
    const [lastCreatedId, setLastCreatedId] = useState('');
    const [lastCreatedPayload, setLastCreatedPayload] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);

    const commonCourses = [
        "Certified Ethical Hacker (CEH)",
        "AWS Certified Solutions Architect",
        "Project Management Professional (PMP)",
        "Certified Scrum Master (CSM)",
        "Chartered Financial Analyst (CFA)",
        "ITIL 4 Foundation",
        "Google Cloud Digital Leader",
        "CompTIA Security+",
        "Data Science Professional Certificate",
        "Website Development",
        "SEO Services",
        "Digital Marketing"
    ];

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
                const parsedCerts = parseCSV(csv);
                setCertificates(parsedCerts);
                setDataLoading(false);
            })
            .catch(() => {
                setFetchError(true);
                setDataLoading(false);
            });
    }, []);

    // Sync admin/query parameters dynamically when the location changes
    useEffect(() => {
        if (dataLoading) return;

        const params = new URLSearchParams(location.search);
        const queryId = params.get('id') || params.get('certId');
        
        // Show admin option if ?admin=true is in URL, hide/lock it if not
        const isAdmin = params.get('admin') === 'true';
        setIsAdminParam(isAdmin);
        if (!isAdmin) {
            setShowAdminPanel(false);
            setIsAdminUnlocked(false);
            setAdminPasscodeToken('');
        }

        if (queryId) {
            const cleanId = queryId.trim();
            setCertId(cleanId.toUpperCase());
            setLoading(true);
            setResult(null);

            const timer = setTimeout(() => {
                const cert = certificates.find(
                    (c) => c.id?.toLowerCase() === cleanId.toLowerCase()
                ) || null;
                setLoading(false);
                if (cert) {
                    setResult(cert);
                } else {
                    setResult(false);
                }
            }, 300);

            return () => clearTimeout(timer);
        } else {
            // Reset state if we navigated away from query parameters
            setResult(null);
            setCertId('');
        }
    }, [location.search, certificates, dataLoading]);

    // Dynamically calculate and suggest ID as admin types
    useEffect(() => {
        if (adminForm.courseName.trim()) {
            const nextId = getNextId(adminForm.courseName, certificates);
            setGeneratedId(nextId);
        } else {
            setGeneratedId('');
        }
    }, [adminForm.courseName, certificates]);

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

    const handleUnlockAdmin = (e) => {
        e.preventDefault();
        setPasscodeError(false);
        if (passcode.trim() === 'glidez@admin26') {
            setIsAdminUnlocked(true);
            setAdminPasscodeToken(passcode.trim()); // Save the entered passcode
            setPasscode('');
            setAdminMsg({ type: '', text: '' });
        } else {
            setPasscodeError(true);
            setTimeout(() => setPasscodeError(false), 2000);
        }
    };

    const handleCopyId = () => {
        const idToCopy = lastCreatedId || generatedId;
        if (!idToCopy) return;
        navigator.clipboard.writeText(idToCopy);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    const handleSubmitCertificate = async (e) => {
        e.preventDefault();
        setLastCreatedId(''); // Clear previous ID on new submission
        setLastCreatedPayload(null);
        if (!adminForm.studentName.trim() || !adminForm.courseName.trim()) {
            setAdminMsg({ type: 'error', text: 'Student Name and Course Name are required!' });
            return;
        }

        if (!GOOGLE_SCRIPT_URL) {
            setAdminMsg({ type: 'error', text: 'Google Script Web App URL is not configured. Please set it in src/data/certificates.js.' });
            return;
        }

        setAdminMsg({ type: 'loading', text: 'Registering in Google Sheets...' });

        const payload = {
            passcode: adminPasscodeToken, // Send the passcode token entered by the admin
            id: generatedId,
            studentName: adminForm.studentName.trim(),
            course: adminForm.courseName.trim(),
            issuedDate: adminForm.issuedDate,
            duration: adminForm.duration.trim() || '—',
            instructor: adminForm.instructor.trim() || '—',
            grade: adminForm.grade
        };

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            const resultData = await response.json();

            if (resultData.status === 'success') {
                setAdminMsg({ type: 'success', text: 'Registered successfully in Google Sheets! Downloading certificate...' });
                setLastCreatedId(generatedId);
                setLastCreatedPayload(payload);

                // 1. Download dynamic high-res certificate PNG automatically
                handleDownload(payload, 'png');

                // 2. Re-fetch sheet locally to sync database
                fetch(CERT_SHEET_URL)
                    .then(res => res.text())
                    .then(csv => {
                        setCertificates(parseCSV(csv));
                    })
                    .catch(err => console.error("Database re-sync failed:", err));

                // 3. Reset form (student specific details, keep config details for convenience)
                setAdminForm(prev => ({
                    ...prev,
                    studentName: '',
                    courseName: ''
                }));

            } else {
                setAdminMsg({ type: 'error', text: resultData.message || 'Failed to register certificate.' });
            }
        } catch (error) {
            console.error(error);
            setAdminMsg({ type: 'error', text: 'Network error: Failed to connect to Google Sheets. Check script Web App deployment configurations.' });
        }
    };

    const getLinkedInUrl = (cert) => {
        const baseUrl = 'https://www.linkedin.com/profile/add';
        const { year, month } = parseIssuedDate(cert.issuedDate);
        
        const params = new URLSearchParams({
            startTask: 'CERTIFICATION_NAME',
            name: cert.course,
            organizationName: 'Glidez Solutions',
            certId: cert.id,
            certUrl: `${window.location.origin}/verify-certificate?id=${cert.id}`
        });
        
        if (year) params.append('issueYear', year);
        if (month) params.append('issueMonth', month);
        
        return `${baseUrl}?${params.toString()}`;
    };

    const handleDownload = (certData, format = 'png') => {
        if (!certData) return;
        
        const canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 1414;
        
        let loadedCount = 0;
        const totalImages = 2;
        
        const logoImg = new Image();
        const signatureImg = new Image();
        
        const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                const finalLogo = logoImg.complete && logoImg.naturalWidth ? logoImg : null;
                const finalSignature = signatureImg.complete && signatureImg.naturalWidth ? signatureImg : null;
                drawCertificate(canvas, certData, finalLogo, finalSignature, formatDate);
                
                if (format === 'pdf') {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF({
                        orientation: 'landscape',
                        unit: 'mm',
                        format: 'a4'
                    });
                    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
                    pdf.save(`${certData.studentName.replace(/\s+/g, '_')}_Glidez_Certificate.pdf`);
                } else {
                    const dataUrl = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.download = `${certData.studentName.replace(/\s+/g, '_')}_Glidez_Certificate.png`;
                    link.href = dataUrl;
                    link.click();
                }
            }
        };

        logoImg.src = '/logo.png';
        logoImg.onload = checkAllLoaded;
        logoImg.onerror = checkAllLoaded;

        signatureImg.src = '/signature.png';
        signatureImg.onload = checkAllLoaded;
        signatureImg.onerror = checkAllLoaded;
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
                                <a href="mailto:sathish@glidez.org"><i>sathish@glidez.org</i></a>.
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
                                    {getCpeCredits(result.course, result.duration) && (
                                        <div className="cert-detail-item" style={{ gridColumn: 'span 2', borderRight: 'none' }}>
                                            <div className="cert-detail-icon"><Award size={18} /></div>
                                            <div>
                                                <span>CPE Credits</span>
                                                <strong>{getCpeCredits(result.course, result.duration)} CPE Credits</strong>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Card Footer */}
                                <div className="cert-card-footer">
                                    <BookOpen size={16} />
                                    <span>Issued by Glidez Solutions &nbsp;·&nbsp; www.glidez.org</span>
                                </div>
                            </div>

                            {/* Actions buttons */}
                            <div className="cert-actions-row">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => handleDownload(result, 'png')}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <Award size={18} /> Download Certificate (PNG)
                                </button>
                                <button 
                                    className="btn btn-primary cert-btn-pdf" 
                                    onClick={() => handleDownload(result, 'pdf')}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#B71C1C' }}
                                >
                                    <Award size={18} /> Download Certificate (PDF)
                                </button>
                                <a 
                                    href={getLinkedInUrl(result)}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-outline cert-btn-linkedin"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <Linkedin size={18} /> Add to LinkedIn
                                </a>
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

            {/* Admin Controls Section */}
            {isAdminParam && (
                <section className="admin-controls-section bg-gray" style={{ padding: '60px 0', borderTop: '1px solid var(--gray-200)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className="admin-toggle-wrapper text-center">
                            <button 
                                className="btn btn-outline" 
                                onClick={() => setShowAdminPanel(!showAdminPanel)}
                                style={{ marginBottom: showAdminPanel ? '30px' : '0' }}
                            >
                                {showAdminPanel ? 'Hide Admin Panel' : 'Show Admin Panel'}
                            </button>
                        </div>

                        {showAdminPanel && (
                            <div className="admin-panel-card cert-fade-in" style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid var(--gray-200)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
                                {!isAdminUnlocked ? (
                                    /* Passcode Form */
                                    <form onSubmit={handleUnlockAdmin} className="admin-passcode-form text-center">
                                        <h3 style={{ marginBottom: '15px' }}>Enter Admin Passcode</h3>
                                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '25px' }}>
                                            The creator panel is locked. Please enter the administrator passcode.
                                        </p>
                                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                                            <input 
                                                type="password" 
                                                value={passcode}
                                                onChange={(e) => setPasscode(e.target.value)}
                                                placeholder="Enter passcode"
                                                required
                                                style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '5px', flex: '1', fontSize: '1rem' }}
                                            />
                                            <button type="submit" className="btn btn-primary">Unlock</button>
                                        </div>
                                        {passcodeError && (
                                            <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }} className="shake">
                                                Incorrect passcode! Please try again.
                                            </p>
                                        )}
                                    </form>
                                ) : (
                                    /* Certificate Creator Form */
                                    <div className="admin-creator-panel">
                                        <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>Admin Certificate Creator & ID Generator</h3>
                                        
                                        <form onSubmit={handleSubmitCertificate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                            <div className="admin-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Student Name</label>
                                                    <input 
                                                        type="text" 
                                                        value={adminForm.studentName}
                                                        onChange={(e) => setAdminForm({ ...adminForm, studentName: e.target.value })}
                                                        placeholder="e.g. Arun Kumar" 
                                                        required 
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
                                                    />
                                                </div>

                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Course Name</label>
                                                    <input 
                                                        type="text" 
                                                        list="courses-datalist" 
                                                        value={adminForm.courseName}
                                                        onChange={(e) => setAdminForm({ ...adminForm, courseName: e.target.value })}
                                                        placeholder="e.g. Certified Ethical Hacker (CEH)" 
                                                        required 
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
                                                    />
                                                    <datalist id="courses-datalist">
                                                        {commonCourses.map((c, i) => <option key={i} value={c} />)}
                                                    </datalist>
                                                </div>

                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Duration</label>
                                                    <input 
                                                        type="text" 
                                                        value={adminForm.duration}
                                                        onChange={(e) => setAdminForm({ ...adminForm, duration: e.target.value })}
                                                        placeholder="e.g. 3 months" 
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
                                                    />
                                                </div>

                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Instructor</label>
                                                    <input 
                                                        type="text" 
                                                        value={adminForm.instructor}
                                                        onChange={(e) => setAdminForm({ ...adminForm, instructor: e.target.value })}
                                                        placeholder="e.g. Mr. Ramesh Babu" 
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
                                                    />
                                                </div>

                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Grade</label>
                                                    <select 
                                                        value={adminForm.grade}
                                                        onChange={(e) => setAdminForm({ ...adminForm, grade: e.target.value })}
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}
                                                    >
                                                        <option value="Distinction">Distinction</option>
                                                        <option value="Merit">Merit</option>
                                                        <option value="Pass">Pass</option>
                                                        <option value="Excellent">Excellent</option>
                                                    </select>
                                                </div>

                                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontWeight: '600' }}>Issue Date</label>
                                                    <input 
                                                        type="date" 
                                                        value={adminForm.issuedDate}
                                                        onChange={(e) => setAdminForm({ ...adminForm, issuedDate: e.target.value })}
                                                        required 
                                                        style={{ padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', fontFamily: 'inherit' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Registered ID Box - Shown only after successful creation */}
                                            {adminMsg.type === 'success' && lastCreatedId && (
                                                <div className="id-preview-box" style={{ background: '#f5f5f5', padding: '15px 20px', borderRadius: '8px', border: '1px dashed #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                                                    <div>
                                                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '0.5px', display: 'block', marginBottom: '2px' }}>Registered Certificate ID</span>
                                                        <strong style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontFamily: 'monospace' }}>{lastCreatedId}</strong>
                                                    </div>
                                                    <button 
                                                        type="button" 
                                                        onClick={handleCopyId}
                                                        className="btn btn-outline" 
                                                        style={{ padding: '8px 15px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                                                    >
                                                        {copySuccess ? 'Copied!' : 'Copy ID'}
                                                    </button>
                                                </div>
                                            )}

                                            {/* Submit Actions */}
                                            <div className="form-submit-row" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary"
                                                    disabled={adminMsg.type === 'loading'}
                                                    style={{ width: '100%', padding: '14px 20px', fontSize: '1.05rem', fontWeight: 'bold' }}
                                                >
                                                    {adminMsg.type === 'loading' ? 'Registering & Generating...' : 'Register & Download Certificate'}
                                                </button>

                                                {adminMsg.text && (
                                                    <p style={{ 
                                                        fontWeight: 'bold', 
                                                        textAlign: 'center',
                                                        color: adminMsg.type === 'success' ? 'green' : adminMsg.type === 'error' ? 'red' : 'orange'
                                                    }}>
                                                        {adminMsg.text}
                                                    </p>
                                                )}

                                                {adminMsg.type === 'success' && lastCreatedId && (
                                                     <div style={{ marginTop: '10px', padding: '15px', background: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '5px', width: '100%', textAlign: 'center' }}>
                                                         <p style={{ color: '#2e7d32', marginBottom: '5px', fontSize: '0.95rem' }}>Certificate is now active and verifiable online!</p>
                                                         <a 
                                                             href={`/verify-certificate?id=${lastCreatedId}`} 
                                                             target="_blank" 
                                                             rel="noopener noreferrer"
                                                             style={{ textDecoration: 'underline', color: '#1b5e20', fontWeight: 'bold', fontSize: '0.95rem', display: 'block', marginBottom: '15px' }}
                                                         >
                                                             Open Public Verification Link ➔
                                                         </a>
                                                         {lastCreatedPayload && (
                                                             <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                                                 <button 
                                                                     type="button" 
                                                                     onClick={() => handleDownload(lastCreatedPayload, 'png')}
                                                                     className="btn btn-outline"
                                                                     style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                                                                 >
                                                                     Download PNG
                                                                 </button>
                                                                 <button 
                                                                     type="button" 
                                                                     onClick={() => handleDownload(lastCreatedPayload, 'pdf')}
                                                                     className="btn btn-outline"
                                                                     style={{ padding: '6px 12px', fontSize: '0.85rem', borderColor: '#B71C1C', color: '#B71C1C' }}
                                                                 >
                                                                     Download PDF
                                                                 </button>
                                                             </div>
                                                         )}
                                                     </div>
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};

export default CertificateVerify;
