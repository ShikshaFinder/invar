import { products, ingredients, useCases } from "../../data";
import Link from 'next/link';
import Image from 'next/image';
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

    // WhatsApp enquiry URL - replace with your actual phone number
    const whatsappNumber = "917096273336"; // Replace with actual WhatsApp number
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in ${product.title}. Please provide more information.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Breadcrumb Navigation */}
                <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-emerald-600 transition-colors flex-shrink-0">Home</Link>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <Link href="/#products" className="hover:text-emerald-600 transition-colors flex-shrink-0">Products</Link>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-neutral-900 dark:text-white font-medium truncate max-w-[150px] sm:max-w-[200px]">{product.title}</span>
                </nav>

                {/* Product Hero Section - Amazon Style */}
                <div id="product-details" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 sm:mb-12 scroll-mt-24">
                    {/* Left Side - Product Image */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-neutral-200 dark:border-neutral-800 shadow-xl">
                            {product.image && (
                                <div className="relative w-full aspect-square max-h-[300px] sm:max-h-[400px] lg:max-h-none overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-4 sm:p-8 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side - Product Information */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Product Badge */}
                        <span className="inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30">
                            {product.family}
                        </span>

                        {/* Product Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                            {product.title}
                        </h1>

                        {/* Product Subtitle */}
                        {product.subtitle && (
                            <p className="text-base sm:text-xl text-emerald-600 dark:text-emerald-400 font-semibold">
                                {product.subtitle}
                            </p>
                        )}

                        {/* Divider */}
                        <hr className="border-neutral-200 dark:border-neutral-800" />

                        {/* Product Description */}
                        <div className="space-y-2 sm:space-y-3">
                            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">About this product</h3>
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Features */}
                        {product.features && product.features.length > 0 && (
                            <div className="space-y-3 sm:space-y-4">
                                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">Key Features</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Divider */}
                        <hr className="border-neutral-200 dark:border-neutral-800" />

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {/* Enquiry Button - WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Enquiry on WhatsApp
                            </a>

                            {/* Back to Products Button */}
                            <Link
                                href="/#products"
                                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-700 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Products
                            </Link>
                        </div>

                        {/* View Detailed Document Button */}
                        {product.file && product.file.endsWith('.docx') && (
                            <div className="w-full">
                                <DocViewer filePath={product.file} buttonText="View Detailed Document" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6 sm:space-y-8">
                        {/* Nutritional Information */}
                        {product.nutrition && (
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-emerald-500/5">
                                <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="p-1.5 sm:p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg sm:rounded-xl">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Nutritional Information</h2>
                                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Complete nutritional breakdown</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-6">
                                    {product.nutrition.sections.map((section, sIndex) => (
                                        <div key={sIndex} className="mb-8 last:mb-0">
                                            {product.nutrition?.sections && product.nutrition.sections.length > 1 && (
                                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                                                    {section.title}
                                                </h3>
                                            )}
                                            <div className="overflow-x-auto rounded-lg sm:rounded-xl border border-neutral-200 dark:border-neutral-700 -mx-1 sm:mx-0">
                                                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                                                    <thead className="bg-neutral-50 dark:bg-neutral-800">
                                                        <tr>
                                                            {product.nutrition?.headers.map((header, hIndex) => (
                                                                <th key={hIndex} scope="col" className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-100 dark:divide-neutral-800">
                                                        {section.items.map((row, rIndex) => (
                                                            <tr key={rIndex} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                                                {row.map((cell, cIndex) => (
                                                                    <td key={cIndex} className={`px-2 sm:px-4 py-2 sm:py-3 whitespace-normal sm:whitespace-nowrap text-xs sm:text-sm ${cIndex === 0 ? 'font-medium text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>
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
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-blue-500/5">
                                <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg sm:rounded-xl">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Medical Benefits</h2>
                                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Key ingredient health benefits</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
                                    {relatedIngredients.map((ingredient, iIndex) => (
                                        <div key={iIndex} className="flex flex-col gap-4 sm:gap-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-50 dark:bg-neutral-800/50">
                                            {ingredient.image && (
                                                <div className="relative w-full h-24 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl bg-white dark:bg-neutral-800">
                                                    <Image
                                                        src={ingredient.image}
                                                        alt={ingredient.name}
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3">{ingredient.name}</h4>
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                    {ingredient.highlights.slice(0, 6).map((highlight, hIndex) => (
                                                        <span key={hIndex} className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                    {ingredient.highlights.length > 6 && (
                                                        <Link 
                                                            href={`/benefits/${ingredients.indexOf(ingredient)}`}
                                                            className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                                        >
                                                            +{ingredient.highlights.length - 6} more →
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
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-purple-500/5">
                                <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg sm:rounded-xl">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Use Case Summary</h2>
                                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">Applications and recommendations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 sm:p-6">
                                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30">
                                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span>{relatedUseCase.title}</span>
                                        </h4>
                                        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                            {relatedUseCase.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                {/* Related Products */}
                <div className="mt-10 sm:mt-16">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4 sm:mb-8">Other Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                        {products.filter(p => p.family !== "CATALOG" && p.title !== product.title).slice(0, 3).map((relatedProduct, rpIndex) => {
                            const originalIndex = products.filter(p => p.family !== "CATALOG").findIndex(p => p.title === relatedProduct.title);
                            return (
                                <Link 
                                    key={rpIndex}
                                    href={`/products/${originalIndex}`}
                                    className="group bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
                                >
                                    {relatedProduct.image && (
                                        <div className="relative w-full h-24 sm:h-40 mb-2 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.title}
                                                fill
                                                className="object-contain p-1 sm:p-2 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <span className="inline-flex items-center rounded-full px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-900/30 mb-1 sm:mb-2">
                                        {relatedProduct.family}
                                    </span>
                                    <h4 className="text-sm sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                                        {relatedProduct.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2 line-clamp-2 hidden sm:block">
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
