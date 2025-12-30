
import { ingredients } from "../../data";
import Link from 'next/link';
import HeroSection from "../../components/HeroSection";
import DocViewer from "../../components/DocViewer";

export async function generateStaticParams() {
    return ingredients.map((_, index) => ({
        id: index.toString(),
    }));
}

export default async function BenefitPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = parseInt(id);
    const ingredient = ingredients[index];

    if (!ingredient) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Ingredient Not Found</h1>
                    <Link href="/" className="text-emerald-600 hover:underline">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            <HeroSection
                title={ingredient.name}
                subtitle="Key Ingredient Medical Benefits"
            />
            <div className="max-w-4xl mx-auto p-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-600 mb-8 hover:underline">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
                    <div className="p-8 md:p-12">
                        {/* Header content removed as it is now in HeroSection */}

                        <div className="prose max-w-none">
                            <h3 className="text-xl font-bold mb-4">Medical Benefits & Highlights</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                {ingredient.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start bg-neutral-50 p-4 rounded-xl">
                                        <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-neutral-700 font-medium">
                                            {highlight}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* View Detailed Document Button */}
                        {ingredient.sourceDoc && ingredient.sourceDoc.endsWith('.docx') && (
                            <div className="mt-8 pt-8 border-t border-neutral-200">
                                <DocViewer filePath={ingredient.sourceDoc} buttonText="View Detailed Information" />
                                <p className="mt-2 text-sm text-neutral-500">
                                    Click to view the complete document with detailed research and benefits
                                </p>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}
