// =============================================================
//  GLIDEZ SOLUTIONS — CERTIFICATE DATA SOURCE CONFIG
// =============================================================
//
//  HOW TO SET UP (one-time):
//  1. Create a Google Sheet with these column headers in Row 1:
//     id | studentName | course | issuedDate | duration | instructor | grade
//
//  2. Add certificate rows below (example):
//     GLZ-CEH-4821 | Arun Kumar | Certified Ethical Hacker (CEH) | 15 March 2025 | 3 months | Mr. Ramesh Babu | Distinction
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

// Google Apps Script Web App URL to append new certificate records to Google Sheets.
// Paste your deployed script URL here.
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2MRjSmPNOPPhYTJHbKWs6RMqojdPf2o9TmVK0h7TlmZ8KEvujVr0RdyeP4RnCDUqXow/exec';

// Parses the raw CSV text into an array of certificate objects
export function parseCSV(csvText) {
    const lines = csvText.replace(/\r/g, '').trim().split('\n');
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
