"use client";


import { useState } from "react";
import mammoth from "mammoth";
import "./doc-viewer.css";

interface DocViewerProps {
    filePath: string;
    buttonText?: string;
    description?: string;
}

export default function DocViewer({ filePath, buttonText = "View Detailed Information", description }: DocViewerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

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
                            {/* Description Box with Read More */}
                            {description && (
                                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                    {(() => {
                                        const words = description.split(/\s+/);
                                        if (words.length > 100 && !showFullDescription) {
                                            return <>
                                                {words.slice(0, 100).join(' ')}...
                                                <button
                                                    className="ml-2 text-blue-600 dark:text-blue-400 underline text-sm font-medium"
                                                    onClick={() => setShowFullDescription(true)}
                                                >Read More</button>
                                            </>;
                                        } else if (words.length > 100 && showFullDescription) {
                                            return <>
                                                {description}
                                                <button
                                                    className="ml-2 text-blue-600 dark:text-blue-400 underline text-sm font-medium"
                                                    onClick={() => setShowFullDescription(false)}
                                                >Show Less</button>
                                            </>;
                                        } else {
                                            return description;
                                        }
                                    })()}
                                </div>
                            )}
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
