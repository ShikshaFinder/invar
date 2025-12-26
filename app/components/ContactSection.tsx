"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Contact Feature Card Component with hover effects
const ContactFeature = ({
    icon,
    title,
    content,
    href,
    index,
}: {
    icon: React.ReactNode;
    title: string;
    content: string;
    href?: string;
    index: number;
}) => {
    const ContentWrapper = href ? "a" : "div";
    
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
            <ContentWrapper 
                {...(href && { href })}
                className={cn(
                    "text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-8",
                    href && "hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                )}
            >
                {content}
            </ContentWrapper>
        </div>
    );
};

export default function ContactSection() {
    const [message, setMessage] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSendMessage = () => {
        const phoneNumber = "917096273336";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    const contactFeatures = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Address",
            content: "A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road, Nadiad",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            content: "invarpharma@gmail.com",
            href: "mailto:invarpharma@gmail.com",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            content: "+91 70962 73336",
            href: "tel:+917096273336",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-background text-foreground relative overflow-hidden">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-blue-50/50 dark:from-emerald-950/20 dark:via-transparent dark:to-blue-950/20 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with gradient text */}
                <div className="flex flex-col items-center gap-6 text-center mb-16">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20">
                        Contact Us
                    </span>
                    <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="max-w-[550px] text-lg text-neutral-600 dark:text-neutral-400">
                        Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Features with Hover Effects */}
                    <div className="lg:col-span-2 grid grid-cols-1 relative z-10 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 overflow-hidden">
                        {contactFeatures.map((feature, index) => (
                            <ContactFeature
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                content={feature.content}
                                href={feature.href}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* WhatsApp Integration with Glass Effect */}
                    <div className="lg:col-span-3 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                        <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Send us a Message</h3>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                Connect with us instantly on WhatsApp for quick responses.
                            </p>

                            <div className="space-y-4">
                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Your Message
                                    </label>
                                    <div className={cn(
                                        "relative rounded-xl transition-all duration-300",
                                        isFocused && "ring-2 ring-emerald-500/50"
                                    )}>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-emerald-500 focus:ring-0 focus:outline-none bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white p-4 transition-all resize-none"
                                            placeholder="Hi, I would like to know more about your products..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleSendMessage}
                                    className="group relative w-full overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                                >
                                    {/* Animated shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    
                                    <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span className="relative z-10">Send via WhatsApp</span>
                                </button>
                            </div>

                            {/* Quick action buttons */}
                            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Quick messages:</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Product Inquiry", "Bulk Order", "Distribution"].map((quick) => (
                                        <button
                                            key={quick}
                                            onClick={() => setMessage(`Hi, I'm interested in ${quick.toLowerCase()}. Could you please provide more information?`)}
                                            className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors border border-neutral-200 dark:border-neutral-700"
                                        >
                                            {quick}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
