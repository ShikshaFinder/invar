import Image from "next/image";
import Link from "next/link";
import { products, ingredients, useCases } from "./data";
import WhatsAppContact from "./components/WhatsAppContact";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

const segments = [
  {
    name: "Cardiac Care",
    body: "Formulations enriched with heart-healthy ingredients such as Arjuna, Beetroot, and Omega 3, with low sodium content to support cardiovascular wellness.",
    tint: "#F2E6E0",
    lid: "#D9B8A8",
  },
  {
    name: "Diabetic Management",
    body: "Low glycemic index formulations with specialized fiber blends and essential amino acids that support healthy carbohydrate metabolism and weight control.",
    tint: "#E7EDE1",
    lid: "#A9BF9B",
  },
  {
    name: "Pregnancy & Maternal Health",
    body: "Vital protein and micronutrient blends designed for maternal wellbeing and healthy fetal development at every stage.",
    tint: "#F0E9DA",
    lid: "#D9C9A3",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F8A68]">
      {children}
    </p>
  );
}

export default function Home() {
  const catalogIndex = products.findIndex((p) => p.family === "CATALOG");

  return (
    <div className="min-h-screen bg-[#F7F4EC]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#22302B]/10 bg-[#F7F4EC]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Black Invar Logo Png.png"
              alt="Invar Pharmaceutical"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <span className="text-[17px] font-semibold tracking-tight" style={serif}>
              Invar Pharmaceutical
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-[14px] text-[#22302B]/75 md:flex">
            <a href="#products" className="transition-colors hover:text-[#22302B]">Products</a>
            <a href="#segments" className="transition-colors hover:text-[#22302B]">Focus Areas</a>
            <a href="#ingredients" className="transition-colors hover:text-[#22302B]">Ingredients</a>
            <a href="#about" className="transition-colors hover:text-[#22302B]">About</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#CBDABF] px-5 py-2.5 text-[13px] font-medium text-[#22302B] transition-colors hover:bg-[#BCCFAD]"
          >
            Contact us
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Therapeutic nutrition, made in India</SectionLabel>
            <h1
              className="mt-5 text-[42px] leading-[1.08] tracking-tight md:text-[58px]"
              style={serif}
            >
              Innovating nutritional support for specialized health.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-[#22302B]/75">
              Invar Pharmaceutical develops high-quality, science-based nutritional
              products for people with specific medical conditions: from cardiac care
              and diabetic management to pregnancy and maternal health.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="rounded-full bg-[#CBDABF] px-7 py-3.5 text-[14px] font-medium text-[#22302B] transition-colors hover:bg-[#BCCFAD]"
              >
                Explore products
              </a>
              {catalogIndex >= 0 && (
                <a
                  href={products[catalogIndex].file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium text-[#22302B]/70 underline decoration-[#6F8A68]/50 underline-offset-4 transition-colors hover:text-[#22302B]"
                >
                  Download the full catalog (PDF)
                </a>
              )}
            </div>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center rounded-full bg-[#E7EDE1]">
            <Image
              src="/01.png"
              alt="SALLYPRO Protein Powder by Invar Pharmaceutical"
              width={340}
              height={340}
              priority
              className="w-[72%] object-contain drop-shadow-xl"
            />
            <p
              className="absolute bottom-8 right-2 rotate-[-4deg] text-[15px] italic text-[#6F8A68] md:right-6"
              style={serif}
            >
              formulated for real conditions
            </p>
          </div>
        </div>
      </section>

      {/* Segment strip */}
      <div className="border-y border-[#22302B]/10 bg-[#EDE8DC]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-[#22302B]/70">
          <span>Cardiac Care</span>
          <span aria-hidden className="text-[#6F8A68]">·</span>
          <span>Diabetic Management</span>
          <span aria-hidden className="text-[#6F8A68]">·</span>
          <span>Pregnancy & Maternal Health</span>
        </div>
      </div>

      {/* Narrative */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-4 text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
              Nutrition that treats the person, not just the plate.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-[#22302B]/80">
            <p>
              Invar Pharmaceutical Pvt Ltd is a therapeutic nutrition company built
              on a simple belief: people managing specific health conditions deserve
              nutrition designed for their condition, not generic supplements.
            </p>
            <p>
              Every formulation is grounded in nutritional science and developed for a
              defined clinical need, whether that is strengthening a recovering heart,
              stabilizing metabolism, or nourishing a mother and her growing baby.
            </p>
            <p>
              Led by directors Mr. Dhaval Dalwadi and Mr. Mahendra Patel, we operate
              from Nadiad, Gujarat, and serve customers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission (deep ink) */}
      <section className="bg-[#22302B] text-[#F7F4EC]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#CBDABF]">
              Our vision
            </p>
            <p className="mt-5 text-[24px] leading-snug md:text-[28px]" style={serif}>
              To lead globally in therapeutic nutrition by empowering individuals with
              specialized health needs to live healthier lives.
            </p>
          </div>
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#CBDABF]">
              Our mission
            </p>
            <p className="mt-5 text-[24px] leading-snug md:text-[28px]" style={serif}>
              To improve healthcare outcomes by offering high-quality, science-based
              nutritional products that cater to specific medical conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Precision nutrition segments */}
      <section id="segments" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Precision nutrition</SectionLabel>
        <h2 className="mt-4 max-w-[24ch] text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
          Three focus areas. One standard of care.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {segments.map((s) => (
            <div
              key={s.name}
              className="overflow-hidden rounded-3xl"
              style={{ backgroundColor: s.tint }}
            >
              <div className="h-2.5 w-full" style={{ backgroundColor: s.lid }} />
              <div className="p-8">
                <h3 className="text-[22px] leading-snug" style={serif}>
                  {s.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#22302B]/75">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#FCFBF7]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionLabel>Our range</SectionLabel>
          <h2 className="mt-4 text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
            Formulations you can hold to a standard.
          </h2>
          <div className="mt-14 space-y-16 md:space-y-20">
            {products.map((product, index) => {
              if (product.family === "CATALOG") return null;
              const reversed = index % 2 === 1;
              return (
                <article
                  key={product.title}
                  className={`grid items-center gap-10 md:grid-cols-2 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-center rounded-3xl bg-[#F7F4EC] p-10">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={320}
                        height={320}
                        className="max-h-[300px] w-auto object-contain"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6F8A68]">
                      {product.subtitle}
                    </p>
                    <h3 className="mt-3 text-[26px] leading-snug tracking-tight" style={serif}>
                      {product.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-[#22302B]/75">
                      {product.description}
                    </p>
                    {product.features && (
                      <ul className="mt-5 space-y-2 text-[15px] text-[#22302B]/70">
                        {product.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex gap-2.5">
                            <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6F8A68]" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/products/${index}`}
                        className="rounded-full bg-[#CBDABF] px-6 py-3 text-[13px] font-medium text-[#22302B] transition-colors hover:bg-[#BCCFAD]"
                      >
                        View details
                      </Link>
                      {product.nutrition && (
                        <Link
                          href={`/nutrition/${index}`}
                          className="text-[14px] font-medium text-[#22302B]/70 underline decoration-[#6F8A68]/50 underline-offset-4 transition-colors hover:text-[#22302B]"
                        >
                          Nutrition facts
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Inside the formula</SectionLabel>
        <h2 className="mt-4 max-w-[26ch] text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
          Ingredients chosen for evidence, not fashion.
        </h2>
        <div className="mt-12 divide-y divide-[#22302B]/10 border-y border-[#22302B]/10">
          {ingredients.map((ing, index) => (
            <Link
              key={ing.name}
              href={`/benefits/${index}`}
              className="group grid items-center gap-6 py-7 md:grid-cols-[96px_1fr_auto]"
            >
              {ing.image ? (
                <Image
                  src={ing.image}
                  alt={ing.name}
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                />
              ) : (
                <div className="h-20 w-20 rounded-full bg-[#E7EDE1] md:h-24 md:w-24" />
              )}
              <div>
                <h3 className="text-[20px] tracking-tight" style={serif}>
                  {ing.name}
                </h3>
                <p className="mt-2 max-w-[70ch] text-[14px] leading-relaxed text-[#22302B]/65">
                  {ing.highlights.slice(0, 4).join(" · ")}
                </p>
              </div>
              <span className="hidden text-[14px] font-medium text-[#6F8A68] transition-transform group-hover:translate-x-1 md:block">
                Benefits →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#EDE8DC]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionLabel>Who it helps</SectionLabel>
          <h2 className="mt-4 text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
            Everyday situations our products are made for.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {useCases.map((uc, index) => (
              <Link key={uc.title} href={`/usecases/${index}`} className="group">
                <p className="text-[13px] font-medium text-[#6F8A68]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mt-2 text-[21px] tracking-tight underline-offset-4 group-hover:underline"
                  style={serif}
                >
                  {uc.title}
                </h3>
                {uc.title === "SALLYPRO C CARDIAC FORMULA" ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-[#22302B]/70">
                    {uc.description}
                  </p>
                ) : (
                  <div
                    className="usecase-prose mt-3 text-[15px] leading-relaxed text-[#22302B]/70"
                    dangerouslySetInnerHTML={{ __html: uc.description }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="mt-4 text-[32px] leading-tight tracking-tight md:text-[40px]" style={serif}>
              Talk to us about your nutrition needs.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-[#22302B]/75">
              For product enquiries, distribution, or partnerships, reach us directly.
              We respond fastest on WhatsApp.
            </p>
            <div className="mt-8 space-y-3 text-[16px]">
              <p>
                <span className="text-[#22302B]/55">Phone: </span>
                <a href="tel:+917096273336" className="font-medium hover:underline">
                  +91 70962 73336
                </a>
              </p>
              <p>
                <span className="text-[#22302B]/55">Email: </span>
                <a href="mailto:invarpharma@gmail.com" className="font-medium hover:underline">
                  invarpharma@gmail.com
                </a>
              </p>
              <p className="max-w-[46ch] leading-relaxed">
                <span className="text-[#22302B]/55">Address: </span>
                A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road,
                Nadiad, Gujarat
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[#E7EDE1] p-8 md:p-10">
            <h3 className="text-[22px] tracking-tight" style={serif}>
              Message us now
            </h3>
            <WhatsAppContact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#22302B] text-[#F7F4EC]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/White Invar Logo Png .png"
                  alt="Invar Pharmaceutical"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-[17px] font-semibold" style={serif}>
                  Invar Pharmaceutical Pvt Ltd
                </span>
              </div>
              <p className="mt-4 max-w-[44ch] text-[14px] leading-relaxed text-[#F7F4EC]/65">
                Innovating Nutritional Support For Specialized Health. Directors:
                Mr. Dhaval Dalwadi and Mr. Mahendra Patel.
              </p>
            </div>
            <div className="text-[14px] leading-relaxed text-[#F7F4EC]/65">
              <p>+91 70962 73336</p>
              <p>invarpharma@gmail.com</p>
              <p className="mt-3 max-w-[38ch]">
                A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road,
                Nadiad, Gujarat (24)
              </p>
              <p className="mt-3">GSTIN: 24AAHCI7314K1ZH</p>
            </div>
          </div>
          <p className="mt-12 border-t border-[#F7F4EC]/15 pt-6 text-[13px] text-[#F7F4EC]/50">
            © {new Date().getFullYear()} Invar Pharmaceutical Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
