import Image from "next/image";
import { cn } from "@/lib/utils";

import { products, ingredients, useCases } from "./data";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";

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
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200 cursor-pointer",
        (index === 0 || index === Math.ceil(totalItems / 2)) && "lg:border-l border-neutral-200",
        index < Math.ceil(totalItems / 2) && "lg:border-b border-neutral-200"
      )}
    >
      {index < Math.ceil(totalItems / 2) ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-emerald-100/50 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-emerald-100/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-emerald-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10 line-clamp-3">
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
      {/* Navigation - Modern Glassmorphic */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/Black Invar Logo Png.png"
                alt="Invar Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <a href="#products" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50">Products</a>
                <div className="relative group">
                  <a href="#about" className="relative hover:text-emerald-600 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-50 flex items-center gap-1">
                    About
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  {/* Dropdown Content - Glassmorphic */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200/50 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                        <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Company</h4>
                        <p className="font-bold text-neutral-900 leading-tight">
                          INVAR PHARMACEUTICAL PRIVATE LIMITED
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Address</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road, Nadiad
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">About Us</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          Manufacturing nutraceutical & wellness products: protein powders, cardiac formulations, diabesity-oriented solutions, and throat sprays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <a href="#contact" className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 flex items-center gap-2">
                    Contact Us
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  {/* Dropdown Content - Glassmorphic */}
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200/50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right translate-y-2 group-hover:translate-y-0">
                    <div className="flex flex-col gap-2">
                      <a href="tel:+917096273336" className="flex items-center p-3 rounded-xl hover:bg-emerald-50 transition-all group/item">
                        <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-2.5 rounded-xl mr-3 text-emerald-600 shadow-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-500 font-medium block">Phone</span>
                          <span className="text-sm font-bold text-neutral-900 group-hover/item:text-emerald-600 transition-colors">+91 70962 73336</span>
                        </div>
                      </a>

                      <a href="mailto:invarpharma@gmail.com" className="flex items-center p-3 rounded-xl hover:bg-blue-50 transition-all group/item">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-2.5 rounded-xl mr-3 text-blue-600 shadow-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-500 font-medium block">Email</span>
                          <span className="text-sm font-bold text-neutral-900 group-hover/item:text-blue-600 transition-colors">invarpharma@gmail.com</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Products Section - Modern Card Grid with Hover Effects */}
      <section id="products" className="py-24 bg-white relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-teal-50/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              Our Products
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Product Family Overview
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600">
              Explore our carefully formulated product families designed for your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.family !== "CATALOG").map((product, index) => (
              <div 
                key={index} 
                className="group relative bg-white backdrop-blur-sm rounded-3xl p-6 border border-neutral-200/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                
                {product.image && (
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase px-3 py-1 bg-emerald-50 rounded-full">
                      {product.family}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-sm font-semibold text-emerald-600 mb-3">
                      {product.subtitle}
                    </p>
                  )}
                  <p className="text-neutral-600 text-sm line-clamp-3">
                    {product.description}
                  </p>
                </div>
                
                {/* Bottom animated border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details & Downloads Section - Modern Cards */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-600/20">
              Downloads
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Product Details
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600">
              Download detailed information for each of our specialized product families.
            </p>
          </div>
          
          <div className="space-y-4">
            {products.filter(p => p.family !== "CATALOG").map((product, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-6 lg:p-8 rounded-2xl border border-neutral-200 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                
                <div className="flex-1 pl-4 mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide px-2.5 py-1 bg-emerald-50 rounded-md">
                      {product.family}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-2xl mb-4">
                    {product.description}
                  </p>
                  {product.features && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-neutral-600">
                          <svg className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <a
                  href={product.file}
                  download
                  className="group/btn flex-shrink-0 relative overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <svg className="w-5 h-5 relative z-10 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Information Section - Feature Cards with Hover */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              Nutrition Facts
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Nutritional Information
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600">
              Detailed nutritional breakdown for our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xl shadow-emerald-500/5">
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
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-600/20">
              Science & Research
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Medical Benefits of Key Ingredients
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600">
              Explore the science and benefits behind our carefully selected key ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <a 
                href={`/benefits/${index}`} 
                key={index} 
                className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Image Section */}
                {ingredient.image ? (
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <svg className="w-20 h-20 text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {ingredient.name}
                  </h3>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 ring-1 ring-inset ring-purple-600/20">
              Applications
            </span>
            <h2 className="relative z-10 inline-block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl">
              Summary of Use Cases
            </h2>
            <p className="max-w-[550px] text-lg text-neutral-600">
              Applications and recommendations for our specialized formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-neutral-50 p-8 rounded-3xl border border-neutral-200 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
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



      <ContactSection />

      {/* Footer - Modern Glassmorphic Design */}
      <footer className="relative bg-neutral-950 pt-20 pb-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
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
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-500 text-sm">
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
