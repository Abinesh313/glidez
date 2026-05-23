// =============================================================
//  GLIDEZ SOLUTIONS — CERTIFICATE DATA SOURCE CONFIG
// =============================================================
//
//  HOW TO SET UP (one-time):
//  1. Create a Google Sheet with these column headers in Row 1:
//     id | studentName | course | courseShort | issuedDate | expiryDate | instructor | grade
//
//  2. Add certificate rows below (example):
//     GLZ-CEH-4821 | Arun Kumar | Certified Ethical Hacker (CEH) | CEH | 2025-03-15 | 2028-03-15 | Mr. Ramesh Babu | Distinction
//
//  3. In Google Sheets: File → Share → Publish to web
//     → Select your sheet → Choose "Comma-separated values (.csv)" → Publish
//
//  4. Copy the published URL and paste it below as CERT_SHEET_URL
//
//  After that, just add new rows to the sheet — no redeployment needed!
// =============================================================

export const CERT_SHEET_URL =
    'https://docs.google.com/spreadsheets/d/1EqUCw04JTyrU3iKah5qAkbewmLPaC9JMEaDxXULxVxk/export?format=csv';

// Parses the raw CSV text into an array of certificate objects
export function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));

    return lines.slice(1).map((line) => {
        // Handle commas inside quoted fields
        const values = [];
        let current = '';
        let inQuotes = false;
        for (const char of line) {
            if (char === '"') { inQuotes = !inQuotes; continue; }
            if (char === ',' && !inQuotes) { values.push(current.trim()); current = ''; continue; }
            current += char;
        }
        values.push(current.trim());

        const obj = {};
        headers.forEach((h, i) => { obj[h] = values[i] || ''; });
        return obj;
    }).filter((row) => row.id); // skip empty rows
}
