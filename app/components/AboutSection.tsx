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
                "flex flex-col lg:border-r py-8 relative group/feature dark:border-neutral-800 border-neutral-200",
                index === 0 && "lg:border-l dark:border-neutral-800 border-neutral-200",
                "lg:border-b dark:border-neutral-800 border-neutral-200"
            )}
        >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-emerald-100/50 dark:from-emerald-900/20 to-transparent pointer-events-none" />
            
            <div className="mb-4 relative z-10 px-8 text-emerald-600 dark:text-emerald-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-8">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-8">
                {description}
            </p>
        </div>
    );
};

export default function AboutSection() {
    const companyInfo = {
        name: "INVAR PHARMACEUTICAL PRIVATE LIMITED",
        tagline: "Antigravity Nutrition - Science-backed supplements for real performance",
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
        <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-emerald-950/20 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGRjODIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMiAwYzAgMS4xMDUtLjg5NSAyLTIgMnMtMi0uODk1LTItMiAuODk1LTIgMi0yIDIgLjg5NSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
            <div className="absolute top-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 text-center mb-10 sm:mb-12 lg:mb-20">
                    <div className="inline-flex items-center rounded-full px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 ring-2 ring-inset ring-emerald-500/30 shadow-lg shadow-emerald-500/10">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        About Us
                    </div>
                    <h2 className="relative z-10 inline-block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-transparent">
                        {companyInfo.name}
                    </h2>
                    <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-400 font-medium px-4">
                        {companyInfo.tagline}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20 mb-12 sm:mb-16 lg:mb-24 xl:mb-32">
                    {/* Company Description Card */}
                    <div className="bg-white dark:bg-neutral-800 p-6 sm:p-8 lg:p-12 xl:p-14 rounded-2xl sm:rounded-3xl border-2 border-emerald-200 dark:border-emerald-800/50 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-6 lg:mb-8">
                            <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold text-neutral-900 dark:text-white">Our Company</h3>
                                <p className="text-xs sm:text-sm lg:text-base text-emerald-600 dark:text-emerald-400 font-semibold">Nutraceutical Excellence</p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                            {companyInfo.description}
                        </p>
                        
                        {/* Company Details */}
                        <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t-2 border-emerald-100 dark:border-emerald-900/50">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">Address</p>
                                    <p className="text-sm sm:text-base text-neutral-900 dark:text-white font-medium">{companyInfo.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">Email</p>
                                    <a href={`mailto:${companyInfo.email}`} className="text-sm sm:text-base text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium underline decoration-emerald-500/30 underline-offset-2">{companyInfo.email}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">Phone</p>
                                    <a href={`tel:${companyInfo.phone}`} className="text-sm sm:text-base text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium underline decoration-emerald-500/30 underline-offset-2">{companyInfo.phone}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-neutral-200 dark:border-neutral-700">
                                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">GSTIN</p>
                                    <p className="text-xs sm:text-sm text-neutral-900 dark:text-white font-mono font-semibold break-all">{companyInfo.gstin}</p>
                                </div>
                                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">State</p>
                                    <p className="text-xs sm:text-sm text-neutral-900 dark:text-white font-semibold">{companyInfo.state}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones & Values */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Milestones */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                            {milestones.map((milestone, index) => (
                                <div 
                                    key={index}
                                    className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/50 dark:via-teal-950/50 dark:to-emerald-950/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-emerald-200 dark:border-emerald-800/50 text-center group hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                            {milestone.value}
                                        </div>
                                        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
                                            {milestone.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Core Values Feature Cards */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl sm:rounded-3xl border-2 border-emerald-200 dark:border-emerald-800/50 overflow-hidden shadow-2xl shadow-emerald-500/10">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 sm:px-6 py-3 sm:py-4">
                                <h4 className="text-base sm:text-lg font-bold text-white text-center">Our Core Values</h4>
                            </div>
                            <div className="divide-y divide-emerald-100 dark:divide-emerald-900/50">
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

                {/* Product Categories */}
                <div className="mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
                        <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold text-neutral-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
                            What We Manufacture
                        </h3>
                        <div className="w-16 sm:w-20 lg:w-24 xl:w-32 h-1 lg:h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 xl:gap-10">
                        {productCategories.map((category, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white dark:bg-neutral-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300 rounded-xl sm:rounded-2xl" />
                                <div className="relative z-10">
                                    <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg sm:rounded-xl lg:rounded-2xl w-fit mb-3 sm:mb-4 lg:mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                                        {category.icon}
                                    </div>
                                    <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-neutral-900 dark:text-white mb-1.5 sm:mb-2 lg:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {category.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 p-6 sm:p-8 lg:p-16 xl:p-20 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] text-white overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNS0uODk1IDItMiAycy0yLS44OTUtMi0yIC44OTUtMiAyLTIgMiAuODk1IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 lg:mb-8 mx-auto">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 lg:mb-8">Our Mission</h3>
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-white/95 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto font-medium">
                            To empower individuals on their health journey by providing premium-quality, science-backed nutraceutical solutions that are safe, effective, and accessible. We are committed to innovation, transparency, and customer satisfaction in everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
