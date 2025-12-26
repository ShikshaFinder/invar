
import { useCases } from "../../data";
import Link from 'next/link';
import HeroSection from "../../components/HeroSection";

export async function generateStaticParams() {
    return useCases.map((_, index) => ({
        id: index.toString(),
    }));
}

export default async function UseCasePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = parseInt(id);
    const useCase = useCases[index];

    if (!useCase) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Use Case Not Found</h1>
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
                title={useCase.title}
                subtitle="Use Case Details"
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

                        <div className="prose max-w-none text-lg text-neutral-600">
                            <p>{useCase.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
