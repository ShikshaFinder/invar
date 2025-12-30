import { products, ingredients, useCases } from "../../data";
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from "../../components/HeroSection";
import DocViewer from "../../components/DocViewer";

export async function generateStaticParams() {
    return products.filter(p => p.family !== "CATALOG").map((_, index) => ({
        id: index.toString(),
    }));
}

// Find related ingredient for a product
function findRelatedIngredient(productTitle: string) {
    const productLower = productTitle.toLowerCase();
    if (productLower.includes('cardiac') || productLower.includes('sallypro c')) {
        return ingredients.filter(i => 
            i.name.toLowerCase().includes('arjuna') || 
            i.name.toLowerCase().includes('beetroot')
        );
    }
    if (productLower.includes('diabesity') || productLower.includes('sallypro d')) {
        return ingredients.filter(i => 
            i.name.toLowerCase().includes('garcinia') || 
            i.name.toLowerCase().includes('omega')
        );
    }
    if (productLower.includes('protein') || productLower.includes('sallypro protein')) {
        return ingredients.filter(i => 
            i.name.toLowerCase().includes('vitamin') || 
            i.name.toLowerCase().includes('mineral')
        );
    }
    if (productLower.includes('throat') || productLower.includes('spray')) {
        return [];
    }
    return [];
}

// Find related use case for a product
function findRelatedUseCase(productTitle: string) {
    const productLower = productTitle.toLowerCase();
    if (productLower.includes('throat') || productLower.includes('spray')) {
        return useCases.find(u => u.title.toLowerCase().includes('sore throat'));
    }
    if (productLower.includes('cardiac') || productLower.includes('sallypro c')) {
        return useCases.find(u => u.title.toLowerCase().includes('cardiac'));
    }
    if (productLower.includes('diabesity') || productLower.includes('sallypro d')) {
        return useCases.find(u => u.title.toLowerCase().includes('diabesity'));
    }
    if (productLower.includes('protein') && !productLower.includes('cardiac') && !productLower.includes('diabesity')) {
        return useCases.find(u => u.title.toLowerCase().includes('sallypro protein'));
    }
    return null;
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = parseInt(id);
    const product = products.filter(p => p.family !== "CATALOG")[index];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Product Not Found</h1>
                    <Link href="/" className="text-emerald-600 hover:underline">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    const relatedIngredients = findRelatedIngredient(product.title);
    const relatedUseCase = findRelatedUseCase(product.title);

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
            {/* Hero Section */}
            <HeroSection
                badge={{
                    text: product.family,
                }}
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                actions={[
                    {
                        text: "View Details",
                        href: "#product-details",
                        variant: "glow"
                    },
                    {
                        text: "Back to Products",
                        href: "/#products",
                        variant: "outline"
                    }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Navigation */}
                <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-600 mb-8 hover:underline">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>

                {/* Main Content Grid */}
                <div id="product-details" className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-24">
                    {/* Product Image & Quick Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-emerald-500/5 sticky top-24">
                            {/* Product Image */}
                            {product.image && (
                                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            )}
                            
                            {/* Product Badge */}
                            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 mb-4">
                                {product.family}
                            </span>
                            
                            {/* Features */}
                            {product.features && (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Key Features</h4>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                                                <svg className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {/* View All Details Button */}
                            <a
                                href="#product-details"
                                className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/25"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                View All Details
                            </a>

                            {/* View Detailed Document Button */}
                            {product.file && product.file.endsWith('.docx') && (
                                <div className="mt-3 w-full">
                                    <DocViewer filePath={product.file} buttonText="View Detailed Document" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Nutritional Information */}
                        {product.nutrition && (
                            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-emerald-500/5">
                                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl">
                                            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Nutritional Information</h2>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Complete nutritional breakdown</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    {product.nutrition.sections.map((section, sIndex) => (
                                        <div key={sIndex} className="mb-8 last:mb-0">
                                            {product.nutrition?.sections && product.nutrition.sections.length > 1 && (
                                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                                                    {section.title}
                                                </h3>
                                            )}
                                            <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-700">
                                                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                                                    <thead className="bg-neutral-50 dark:bg-neutral-800">
                                                        <tr>
                                                            {product.nutrition?.headers.map((header, hIndex) => (
                                                                <th key={hIndex} scope="col" className="px-4 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-800">
                                                        {section.items.map((row, rIndex) => (
                                                            <tr key={rIndex} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                                {row.map((cell, cIndex) => (
                                                                    <td key={cIndex} className={`px-4 py-3 whitespace-nowrap text-sm ${cIndex === 0 ? 'font-medium text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>
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
                        )}

                        {/* Medical Benefits / Key Ingredients */}
                        {relatedIngredients.length > 0 && (
                            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-blue-500/5">
                                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Medical Benefits</h2>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Key ingredient health benefits</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-6">
                                    {relatedIngredients.map((ingredient, iIndex) => (
                                        <div key={iIndex} className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50">
                                            {ingredient.image && (
                                                <div className="relative w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-white dark:bg-neutral-800">
                                                    <Image
                                                        src={ingredient.image}
                                                        alt={ingredient.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">{ingredient.name}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {ingredient.highlights.slice(0, 8).map((highlight, hIndex) => (
                                                        <span key={hIndex} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                    {ingredient.highlights.length > 8 && (
                                                        <Link 
                                                            href={`/benefits/${ingredients.indexOf(ingredient)}`}
                                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                                        >
                                                            +{ingredient.highlights.length - 8} more →
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Use Case Summary */}
                        {relatedUseCase && (
                            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-purple-500/5">
                                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                                            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Use Case Summary</h2>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">Applications and recommendations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30">
                                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            {relatedUseCase.title}
                                        </h4>
                                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                            {relatedUseCase.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNS0uODk1IDItMiAycy0yLS44OTUtMi0yIC44OTUtMiAyLTIgMiAuODk1IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Interested in this product?</h3>
                                    <p className="text-white/80">Get in touch with us for orders and inquiries</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="tel:+917096273336" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-xl font-semibold transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call Us
                                    </a>
                                    <Link href="/#contact" className="flex items-center gap-2 bg-white text-emerald-600 px-5 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Other Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.filter(p => p.family !== "CATALOG" && p.title !== product.title).slice(0, 3).map((relatedProduct, rpIndex) => {
                            const originalIndex = products.filter(p => p.family !== "CATALOG").findIndex(p => p.title === relatedProduct.title);
                            return (
                                <Link 
                                    key={rpIndex}
                                    href={`/products/${originalIndex}`}
                                    className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
                                >
                                    {relatedProduct.image && (
                                        <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.title}
                                                fill
                                                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 mb-2">
                                        {relatedProduct.family}
                                    </span>
                                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                                        {relatedProduct.title}
                                    </h4>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-2">
                                        {relatedProduct.description}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
