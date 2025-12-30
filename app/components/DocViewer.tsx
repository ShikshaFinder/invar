"use client";

import { useState } from "react";
import mammoth from "mammoth";

interface DocViewerProps {
    filePath: string;
    buttonText?: string;
}

export default function DocViewer({ filePath, buttonText = "View Detailed Information" }: DocViewerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadDocument = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error("Failed to load document");
            }
            
            const arrayBuffer = await response.arrayBuffer();
            const result = await mammoth.convertToHtml({ arrayBuffer });
            setContent(result.value);
            setIsOpen(true);
        } catch (err) {
            setError("Unable to load document. Please try again.");
            console.error("Error loading document:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpen = () => {
        if (!content) {
            loadDocument();
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={handleOpen}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {buttonText}
                    </>
                )}
            </button>

            {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
            )}

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    {/* Modal Content */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                                    Detailed Information
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body - Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <style jsx global>{`
                                .doc-content h1 {
                                    font-size: 1.75rem;
                                    font-weight: 700;
                                    color: #111827;
                                    margin-bottom: 1rem;
                                    margin-top: 1.5rem;
                                    border-bottom: 2px solid #10b981;
                                    padding-bottom: 0.5rem;
                                }
                                .doc-content h2 {
                                    font-size: 1.5rem;
                                    font-weight: 600;
                                    color: #1f2937;
                                    margin-bottom: 0.75rem;
                                    margin-top: 1.25rem;
                                }
                                .doc-content h3 {
                                    font-size: 1.25rem;
                                    font-weight: 600;
                                    color: #374151;
                                    margin-bottom: 0.5rem;
                                    margin-top: 1rem;
                                }
                                .doc-content p {
                                    margin-bottom: 0.75rem;
                                    line-height: 1.7;
                                    color: #4b5563;
                                }
                                .doc-content strong, .doc-content b {
                                    font-weight: 700;
                                    color: #111827;
                                }
                                .doc-content em, .doc-content i {
                                    font-style: italic;
                                    color: #6b7280;
                                }
                                .doc-content ul, .doc-content ol {
                                    margin-left: 1.5rem;
                                    margin-bottom: 1rem;
                                }
                                .doc-content li {
                                    margin-bottom: 0.5rem;
                                    line-height: 1.6;
                                    color: #4b5563;
                                }
                                .doc-content ul li {
                                    list-style-type: disc;
                                }
                                .doc-content ol li {
                                    list-style-type: decimal;
                                }
                                .doc-content table {
                                    width: 100%;
                                    border-collapse: collapse;
                                    margin: 1rem 0;
                                    font-size: 0.875rem;
                                    border-radius: 0.5rem;
                                    overflow: hidden;
                                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                                }
                                .doc-content table th {
                                    background: linear-gradient(to right, #10b981, #14b8a6);
                                    color: white;
                                    font-weight: 600;
                                    text-align: left;
                                    padding: 0.75rem 1rem;
                                    border: 1px solid #059669;
                                }
                                .doc-content table td {
                                    padding: 0.75rem 1rem;
                                    border: 1px solid #e5e7eb;
                                    color: #374151;
                                }
                                .doc-content table tr:nth-child(even) {
                                    background-color: #f9fafb;
                                }
                                .doc-content table tr:hover {
                                    background-color: #ecfdf5;
                                }
                                .doc-content a {
                                    color: #2563eb;
                                    text-decoration: underline;
                                }
                                .doc-content a:hover {
                                    color: #1d4ed8;
                                }
                                .dark .doc-content h1 {
                                    color: #f9fafb;
                                    border-bottom-color: #10b981;
                                }
                                .dark .doc-content h2 {
                                    color: #e5e7eb;
                                }
                                .dark .doc-content h3 {
                                    color: #d1d5db;
                                }
                                .dark .doc-content p {
                                    color: #9ca3af;
                                }
                                .dark .doc-content strong, .dark .doc-content b {
                                    color: #f3f4f6;
                                }
                                .dark .doc-content em, .dark .doc-content i {
                                    color: #9ca3af;
                                }
                                .dark .doc-content li {
                                    color: #9ca3af;
                                }
                                .dark .doc-content table th {
                                    background: linear-gradient(to right, #059669, #0d9488);
                                    border-color: #047857;
                                }
                                .dark .doc-content table td {
                                    border-color: #374151;
                                    color: #d1d5db;
                                }
                                .dark .doc-content table tr:nth-child(even) {
                                    background-color: #1f2937;
                                }
                                .dark .doc-content table tr:hover {
                                    background-color: #064e3b;
                                }
                            `}</style>
                            <div 
                                className="doc-content"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-3 p-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
