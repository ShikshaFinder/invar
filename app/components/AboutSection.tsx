"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

// Feature Card for About Section
const AboutFeatureCard = ({
    icon,
    title,
    description,
    index,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-8 relative group/feature border-neutral-200",
                index === 0 && "lg:border-l border-neutral-200",
                "lg:border-b border-neutral-200"
            )}
        >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-emerald-100/50 to-transparent pointer-events-none" />

            <div className="mb-4 relative z-10 px-8 text-emerald-600">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-8">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 relative z-10 px-8">
                {description}
            </p>
        </div>
    );
};

export default function AboutSection() {
    const companyInfo = {
        name: "INVAR PHARMACEUTICAL PRIVATE LIMITED",
        tagline: "Your Partner in Health & Wellness - Science-backed nutraceutical solutions",
        description: "Invar Pharmaceutical Private Limited is a premier manufacturer of nutraceutical and wellness products. We specialize in creating high-quality protein powders, cardiac health formulations, diabesity-oriented solutions, and herbal throat relief sprays. Our commitment to excellence drives us to deliver products that meet the highest standards of quality and efficacy.",
        address: "A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road, Nadiad",
        gstin: "24AAHCI7314K1ZH",
        state: "24-Gujarat",
        email: "invarpharma@gmail.com",
        phone: "+91 70962 73336",
    };

    const features = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Quality Assurance",
            description: "Every product undergoes rigorous quality testing to ensure safety and efficacy for our customers.",
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: "Research-Backed",
            description: "Our formulations are developed using the latest scientific research and clinical studies.",
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Customer Care",
            description: "Dedicated support team committed to helping you achieve your health and wellness goals.",
        },
    ];

    const milestones = [
        { value: "4+", label: "Product Lines" },
        { value: "1000+", label: "Happy Customers" },
        { value: "100%", label: "Natural Ingredients" },
        { value: "Gujarat", label: "Made in India" },
    ];

    const productCategories = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Protein Powders",
            description: "Enriched with vitamins, minerals, zinc, and DHA for daily nutrition support.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Cardiac Formulas",
            description: "Heart health supplements with Arjuna and Beetroot extracts for cardiovascular wellness.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Diabesity Solutions",
            description: "Specialized formulations for weight management and metabolic health support.",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: "Herbal Sprays",
            description: "Natural throat relief with ginger, tulsi, honey, curcumin, and piperine.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-blue-50/30 dark:from-emerald-950/20 dark:via-transparent dark:to-blue-950/20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-4 text-center mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        About Us
                    </span>
                    <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
                        {companyInfo.name}
                    </h2>
                    <p className="max-w-3xl text-lg text-neutral-600">
                        {companyInfo.tagline}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Company Description Card */}
                    <div className="bg-gradient-to-br from-white to-neutral-50 p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-xl shadow-emerald-500/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
                                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">Our Company</h3>
                                <p className="text-sm text-emerald-600">Nutraceutical Excellence</p>
                            </div>
                        </div>
                        <p className="text-neutral-600 leading-relaxed mb-8">
                            {companyInfo.description}
                        </p>

                        {/* Company Details */}
                        <div className="space-y-4 pt-6 border-t border-neutral-200">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Address</p>
                                    <p className="text-neutral-900">{companyInfo.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email</p>
                                    <a href={`mailto:${companyInfo.email}`} className="text-neutral-900 hover:text-emerald-600 transition-colors">{companyInfo.email}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Phone</p>
                                    <a href={`tel:${companyInfo.phone}`} className="text-neutral-900 hover:text-emerald-600 transition-colors">{companyInfo.phone}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 pt-4 border-t border-neutral-200">
                                <div>
                                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">GSTIN</p>
                                    <p className="text-neutral-900 font-mono text-sm">{companyInfo.gstin}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">State</p>
                                    <p className="text-neutral-900">{companyInfo.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones & Values */}
                    <div className="space-y-8">
                        {/* Milestones */}
                        <div className="grid grid-cols-2 gap-4">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200/50 text-center group hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                                        {milestone.value}
                                    </div>
                                    <p className="text-sm text-neutral-600 font-medium">
                                        {milestone.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Core Values Feature Cards */}
                        <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden">
                            <div className="grid grid-cols-1">
                                {features.map((feature, index) => (
                                    <AboutFeatureCard
                                        key={index}
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ProductCategories */}
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
                        What We Manufacture
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productCategories.map((category, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-6 rounded-2xl border border-neutral-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                <div className="relative z-10">
                                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl w-fit mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                        {category.title}
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-12 rounded-3xl text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNS0uODk1IDItMiAycy0yLS44OTUtMi0yIC44OTUtMiAyLTIgMiAuODk1IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <svg className="w-12 h-12 mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-lg text-white/90 leading-relaxed">
                            To empower individuals on their health journey by providing premium-quality, science-backed nutraceutical solutions that are safe, effective, and accessible. We are committed to innovation, transparency, and customer satisfaction in everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
