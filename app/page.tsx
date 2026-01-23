import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { products, ingredients, useCases } from "./data";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

// Feature Card Component with hover effects
const FeatureCard = ({
  title,
  description,
  icon,
  index,
  href,
  totalItems = 4,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  href?: string;
  totalItems?: number;
}) => {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      {...(href && { href })}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200 dark:border-neutral-800 cursor-pointer",
        (index === 0 || index === Math.ceil(totalItems / 2)) && "lg:border-l border-neutral-200 dark:border-neutral-800",
        index < Math.ceil(totalItems / 2) && "lg:border-b border-neutral-200 dark:border-neutral-800"
      )}
    >
      {index < Math.ceil(totalItems / 2) ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-emerald-100/50 dark:from-emerald-900/20 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-emerald-100/50 dark:from-emerald-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-emerald-600 dark:text-emerald-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 line-clamp-3">
        {description}
      </p>
      {href && (
        <span className="text-emerald-600 text-sm font-medium px-10 mt-3 relative z-10 group-hover/feature:translate-x-2 transition duration-200 inline-block">
          Learn more →
        </span>
      )}
    </Wrapper>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Navigation - Modern Glassmorphic (logo, About, Contact Us) */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <Image
                src="/Black Invar Logo Png.png"
                alt="Invar Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <a href="#products" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50">Products</a>
                <a href="#about" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50">About</a>
                <a href="#contact" className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 flex items-center gap-2">Contact Us</a>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#products" className="text-sm font-medium text-neutral-700 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#about" className="text-sm font-medium text-neutral-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full hover:from-emerald-700 hover:to-emerald-600 transition-all">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Antigravity Nutrition (very top) */}
      <HeroSection
        badge={{
          text: "🚀 New Launch",
          action: {
            text: "Explore Products",
            href: "#products"
          }
        }}
        title="Antigravity Nutrition"
        subtitle="Science-backed supplements for real performance"
        description="Premium quality nutraceutical solutions crafted with precision and backed by science for your health and wellness journey."
        actions={[
          {
            text: "Shop Now",
            href: "#products",
            variant: "glow"
          },
          {
            text: "Learn More",
            href: "#about",
            variant: "outline"
          }
        ]}
      />

      {/* Navigation - Modern Glassmorphic */}
      <nav className="fixed w-full z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <Image
                src="/Black Invar Logo Png.png"
                alt="Invar Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <a href="#products" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50 dark:hover:bg-emerald-950/50">Products</a>
                <div className="relative group">
                  <a href="#about" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50 dark:hover:bg-emerald-950/50 flex items-center gap-1">
                    About
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                <div className="relative group">
                  <a href="#contact" className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 flex items-center gap-2">
                    Contact Us
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#products" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#contact" className="text-sm font-medium px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full hover:from-emerald-700 hover:to-emerald-600 transition-all">Contact</a>
            </div>
          </div>
        </div>
      </nav>


      {/* Company Overview Section (like About) */}
      {/* Company Vision, Mission, Specialization Section */}
      <section id="company-info" className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-8 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-700 mb-2">Innovating Nutritional Support For Specialized Health</h2>
            <p className="text-neutral-700 text-base mb-2">At <b>Invar Pharmaceutical Pvt Ltd.</b>, we are dedicated to bridging the gap between clinical nutrition and everyday wellness. As a forward-thinking pharmaceutical company, we specialize in developing high-quality nutraceutical solutions designed to support patients with specific medical needs.</p>
            <p className="text-neutral-700 text-base mb-2">Under the visionary leadership of our directors, <b>Mr. Dhaval Dalwadi</b> and <b>Mr. Mahendra Patel</b>, we combine scientific rigor with a passion for health to create products that make a tangible difference in people's lives.</p>
            <ul className="list-disc list-inside text-neutral-700 text-base mb-4">
              <li><b>Vision:</b> To lead globally in therapeutic nutrition by empowering individuals with specialized health needs to live healthier lives.</li>
              <li><b>Mission:</b> To improve healthcare outcomes by offering high-quality, science-based nutritional products that cater to specific medical conditions.</li>
            </ul>
            <h3 className="text-xl font-bold text-emerald-700 mt-4 mb-2">Our Specialization: Precision Nutrition</h3>
            <p className="text-neutral-700 text-base mb-2">We recognize that standard nutritional supplements often fall short for individuals managing chronic conditions or undergoing significant physiological changes. That is why our flagship line of <b>Protein Powders</b> is scientifically formulated for three primary segments:</p>
            <ul className="list-disc list-inside text-neutral-700 text-base">
              <li><b>Cardiac Care:</b> Formulated to support heart health with heart-healthy ingredients and low sodium profiles.</li>
              <li><b>Diabetic Management:</b> Engineered with a low glycemic index and specialized fiber blends to help manage blood sugar levels while providing essential amino acids.</li>
              <li><b>Pregnancy & Maternal Health:</b> Designed to provide the vital protein and micronutrients necessary for both maternal wellbeing and healthy fetal development.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section - Modern Card Grid with Hover Effects */}
      <section id="products" className="py-12 sm:py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-teal-50/30 dark:from-emerald-950/20 dark:via-transparent dark:to-teal-950/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 text-center mb-8 sm:mb-16 lg:mb-20">
            <span className="inline-flex items-center rounded-full px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 text-xs sm:text-sm lg:text-base font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20">
              Our Products
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-transparent">
              Product Family Overview
            </h2>
            <p className="max-w-[700px] text-sm sm:text-base lg:text-xl text-neutral-600 dark:text-neutral-400 px-4">
              Explore our carefully formulated product families designed for your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.filter(p => p.family !== "CATALOG").map((product, index) => (
              <Link 
                key={index}
                href={`/products/${index}`}
                className="group relative bg-white dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-4 sm:p-6 lg:p-8 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] pointer-events-none" />
                
                {product.image && (
                  <div className="relative w-full h-32 sm:h-48 lg:h-64 mb-3 sm:mb-6 lg:mb-8 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-2 sm:p-4 lg:p-6 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                    <span className="text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase px-2 sm:px-3 lg:px-4 py-0.5 sm:py-1 lg:py-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
                      {product.family}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2 lg:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-xs sm:text-sm lg:text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-3 lg:mb-4 line-clamp-1">
                      {product.subtitle}
                    </p>
                  )}
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold text-xs sm:text-sm lg:text-base mt-2 sm:mt-4 lg:mt-6 group-hover:translate-x-1 transition-transform">
                    View Details
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
                
                {/* Bottom animated border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details & Downloads Section - Modern Cards */}
      <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent dark:from-emerald-900/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 text-center mb-8 sm:mb-16 lg:mb-20">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
              Product Catalog
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Explore Our Range
            </h2>
            <p className="max-w-[700px] text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 px-4">
              Detailed information and specifications for each product in our collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            {products.filter(p => p.family !== "CATALOG").map((product, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                
                {/* Content Container */}
                <div className="relative flex flex-col lg:flex-row">
                  {/* Left Section - Product Badge & Image */}
                  <div className="lg:w-1/3 p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100 dark:bg-emerald-900/50 mb-4 ring-2 ring-emerald-500/20">
                      {product.family}
                    </span>
                    {product.image && (
                      <div className="relative w-full aspect-square max-w-[200px] lg:max-w-[250px]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Section - Product Info */}
                  <div className="lg:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 sm:mb-8">
                        {product.description}
                      </p>
                      
                      {product.features && product.features.length > 0 && (
                        <div className="mb-6 sm:mb-8">
                          <h4 className="text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3 sm:mb-4">Key Features</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.slice(0, 6).map((feature, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-xs sm:text-sm lg:text-base text-neutral-700 dark:text-neutral-300 leading-tight">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/products/${index}`}
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 group/btn"
                      >
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>View Full Details</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Information Section - Feature Cards with Hover */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20">
              Nutrition Facts
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Nutritional Information
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600 dark:text-neutral-400">
              Detailed nutritional breakdown for our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl shadow-emerald-500/5">
            {products.map((product, index) => {
              if (product.nutrition) {
                return (
                  <FeatureCard
                    key={index}
                    title={product.title}
                    description="View detailed nutritional information including calories, proteins, vitamins, and minerals."
                    icon={
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    }
                    index={index}
                    href={`/nutrition/${index}`}
                    totalItems={products.filter(p => p.nutrition).length}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Medical Benefits Section - Modern Grid with Images */}
      <section className="py-12 sm:py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-950/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
              Science & Research
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Medical Benefits of Key Ingredients
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600 dark:text-neutral-400">
              Explore the science and benefits behind our carefully selected key ingredients.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {ingredients.map((ingredient, index) => (
              <a 
                href={`/benefits/${index}`} 
                key={index} 
                className="group relative bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Image Section */}
                {ingredient.image ? (
                  <div className="relative w-full h-32 sm:h-56 lg:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center">
                    <svg className="w-20 h-20 text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-3 sm:p-6 lg:p-8">
                  <h3 className="text-xs sm:text-base lg:text-xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-3 lg:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {ingredient.name}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-[10px] sm:text-sm lg:text-base">
                    <span>View Benefits</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Modern Feature Cards */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-950/20 dark:via-transparent dark:to-pink-950/20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-600/20">
              Applications
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Summary of Use Cases
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600 dark:text-neutral-400">
              Applications and recommendations for our specialized formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] border border-neutral-200 dark:border-neutral-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-start gap-3 sm:gap-6 lg:gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-2 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl lg:rounded-3xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
                
                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-transparent transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-tl-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      <ContactSection />

      {/* Footer - Modern Glassmorphic Design */}
      <footer className="relative bg-neutral-950 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Invar</span>
                <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">Pharmaceutical</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
                Manufacturing premium nutraceutical & wellness products including protein powders, cardiac formulations, diabesity-oriented solutions, and throat sprays.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+917096273336" className="p-2.5 rounded-xl bg-neutral-800/50 hover:bg-emerald-500/20 text-neutral-400 hover:text-emerald-400 transition-all border border-neutral-800 hover:border-emerald-500/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:invarpharma@gmail.com" className="p-2.5 rounded-xl bg-neutral-800/50 hover:bg-blue-500/20 text-neutral-400 hover:text-blue-400 transition-all border border-neutral-800 hover:border-blue-500/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'Products', href: '#products' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 h-px bg-emerald-500 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                Contact
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-neutral-400">A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road, Nadiad</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:invarpharma@gmail.com" className="text-neutral-400 hover:text-blue-400 transition-colors">invarpharma@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+917096273336" className="text-neutral-400 hover:text-emerald-400 transition-colors">+91 70962 73336</a>
                </div>
                <div className="pt-2 mt-2 border-t border-neutral-800">
                  <p className="text-neutral-500 text-xs">GSTIN: 24AAHCI7314K1ZH</p>
                  <p className="text-neutral-500 text-xs">State: 24-Gujarat</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-neutral-500 text-xs sm:text-sm text-center">
                &copy; {new Date().getFullYear()} Invar Pharmaceutical Pvt Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-neutral-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
