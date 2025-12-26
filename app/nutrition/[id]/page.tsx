
import { products } from "../../data";
import Link from 'next/link';
import HeroSection from "../../components/HeroSection";

export async function generateStaticParams() {
    return products.map((_, index) => ({
        id: index.toString(),
    }));
}

export default async function NutritionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = parseInt(id);
    const product = products[index];

    if (!product || !product.nutrition) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
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
                title={product.title}
                subtitle={product.subtitle}
                ctaText="Buy Now"
            />
            <div className="max-w-4xl mx-auto p-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-600 mb-8 hover:underline">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                {/* Header replaced by HeroSection */}

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200">
                    <div className="p-8">
                        {product.nutrition?.sections.map((section, sIndex) => (
                            <div key={sIndex} className="mb-12 last:mb-0">
                                {product.nutrition?.sections && product.nutrition.sections.length > 1 && (
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b border-neutral-200 pb-2">
                                        {section.title}
                                    </h2>
                                )}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-neutral-200">
                                        <thead className="bg-neutral-50">
                                            <tr>
                                                {product.nutrition?.headers.map((header, hIndex) => (
                                                    <th key={hIndex} scope="col" className="px-6 py-4 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-neutral-100">
                                            {section.items.map((row, rIndex) => (
                                                <tr key={rIndex} className="hover:bg-neutral-50 transition-colors">
                                                    {row.map((cell, cIndex) => (
                                                        <td key={cIndex} className={`px-6 py-4 whitespace-nowrap text-sm ${cIndex === 0 ? 'font-medium text-neutral-900' : 'text-neutral-600'}`}>
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
