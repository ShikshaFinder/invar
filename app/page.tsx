import Image from "next/image";
import Link from "next/link";
import { products, ingredients, useCases } from "./data";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import WhatsAppContact from "./components/WhatsAppContact";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

const segments = [
  {
    name: "Cardiac Care",
    body: "Formulations enriched with heart-healthy ingredients such as Arjuna, Beetroot, and Omega 3, with low sodium content to support cardiovascular wellness.",
    tint: "var(--mist)",
    lid: "var(--sage-deep)",
  },
  {
    name: "Diabetic Management",
    body: "Low glycemic index formulations with specialized fiber blends and essential amino acids that support healthy carbohydrate metabolism and weight control.",
    tint: "var(--sage)",
    lid: "var(--sage-deep)",
  },
  {
    name: "Pregnancy & Maternal Health",
    body: "Vital protein and micronutrient blends designed for maternal wellbeing and healthy fetal development at every stage.",
    tint: "var(--stone-2)",
    lid: "var(--wood)",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
      {children}
    </p>
  );
}

export default function Home() {
  const catalogIndex = products.findIndex((p) => p.family === "CATALOG");

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <SiteHeader />

      {/* Hero */}
      <section className="overflow-hidden bg-[color:var(--bg)]">
        <div className="mx-auto grid min-h-[720px] w-full max-w-[1416px] items-center gap-14 px-6 py-20 sm:px-10 md:grid-cols-[1.08fr_0.92fr] md:gap-10 md:py-24 xl:px-0">
          <div className="max-w-[780px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#405b67]">
              Therapeutic nutrition, made in India
            </p>
            <h1
              className="mt-6 max-w-[780px] text-[3.2rem] leading-[1.02] tracking-[-0.035em] text-[color:var(--ink)] sm:text-[4.2rem] md:text-[4.65rem]"
              style={serif}
            >
              Innovating
              <br />
              nutritional support
              <br />
              for specialized health.
            </h1>
            <p className="mt-8 max-w-[740px] text-[16px] leading-[1.55] md:text-[18px]">
              Invar Pharmaceutical develops high-quality, science-based nutritional
              products for people with specific medical conditions: from cardiac care
              and diabetic management to pregnancy and maternal health.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#products"
                className="rounded-full bg-[color:var(--sage)] px-8 py-4 text-[14px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
              >
                Explore products
              </a>
              {catalogIndex >= 0 && (
                <a
                  href={products[catalogIndex].file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium underline decoration-[color:var(--sage-deep)] underline-offset-4 transition-colors hover:text-[color:var(--ink)]"
                >
                  Download the full catalog (PDF)
                </a>
              )}
            </div>
          </div>
          <div className="relative flex min-h-[360px] flex-col items-center justify-center md:min-h-[500px] md:items-end">
            <div className="relative z-10 w-[86%] max-w-[500px] -translate-x-[2%] translate-y-[-3%] sm:w-[76%] md:w-[64%] md:max-w-[390px] md:translate-x-[-1%]">
              <div className="overflow-hidden shadow-[0_22px_40px_rgba(34,48,43,0.18)]">
                <Image
                  src="/hero-img.png"
                  alt="Invar Pharmaceutical supplement bottle and capsules arranged with botanical ingredients"
                  width={1536}
                  height={1024}
                  priority
                  className="aspect-[4/3] h-auto w-full object-cover"
                  sizes="(max-width: 767px) 76vw, 38vw"
                />
              </div>
              <p
                className="mt-6 text-right text-lg italic text-[#405b67] md:mr-[-4%]"
                style={serif}
              >
                formulated for real conditions
              </p>
            </div>
            <aside className="mt-8 w-full max-w-[500px] border-t border-[color:var(--ink)]/15 pt-5 md:mt-6 md:w-[76%]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--text)]/70">
                  Clinical focus
                </p>
                <span className="text-[11px] tracking-[0.2em] text-[color:var(--text)]/50">
                  01—03
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 md:gap-2">
                {segments.map((segment, index) => (
                  <div key={segment.name} className="flex items-baseline gap-3">
                    <span className="text-[11px] font-medium tracking-[0.16em] text-[color:var(--nav-ink)]/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[17px] leading-tight text-[color:var(--ink)]" style={serif}>
                        {segment.name}
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-[color:var(--text)]/75">
                        {segment.body.split(".")[0]}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Segment strip */}
      <div className="border-y border-[color:var(--ink)]/10 bg-[color:var(--stone)]">
        <div className="mx-auto flex max-w-[1416px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-6 text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--nav-ink)] sm:px-10 md:py-7 xl:px-0 md:text-[13px]">
          <span>Cardiac Care</span>
          <span aria-hidden>·</span>
          <span>Diabetic Management</span>
          <span aria-hidden>·</span>
          <span>Pregnancy & Maternal Health</span>
        </div>
      </div>

      {/* Narrative */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2
              className="mt-4 text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
              style={serif}
            >
              Nutrition that treats the person, not just the plate.
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed">
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

      {/* Vision & Mission: centered serif statements on deep stone */}
      <section className="bg-[color:var(--stone-2)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <SectionLabel>Our vision</SectionLabel>
          <p
            className="mx-auto mt-5 max-w-[32ch] text-[26px] leading-snug text-[color:var(--ink)] md:text-[32px]"
            style={serif}
          >
            To lead globally in therapeutic nutrition by empowering individuals with
            specialized health needs to live healthier lives.
          </p>
          <div className="mx-auto my-14 h-px w-24 bg-[color:var(--sage-deep)]" />
          <SectionLabel>Our mission</SectionLabel>
          <p
            className="mx-auto mt-5 max-w-[36ch] text-[26px] leading-snug text-[color:var(--ink)] md:text-[32px]"
            style={serif}
          >
            To improve healthcare outcomes by offering high-quality, science-based
            nutritional products that cater to specific medical conditions.
          </p>
        </div>
      </section>

      {/* Precision nutrition segments */}
      <section id="segments" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Precision nutrition</SectionLabel>
        <h2
          className="mt-4 max-w-[24ch] text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
          style={serif}
        >
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
                <h3 className="text-[22px] leading-snug text-[color:var(--ink)]" style={serif}>
                  {s.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[color:var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionLabel>Our range</SectionLabel>
          <h2
            className="mt-4 text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
            style={serif}
          >
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
                  <div className="flex items-center justify-center rounded-3xl bg-[color:var(--stone)] p-10">
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
                    <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--text)]/80">
                      {product.subtitle}
                    </p>
                    <h3
                      className="mt-3 text-[26px] leading-snug tracking-tight text-[color:var(--ink)]"
                      style={serif}
                    >
                      {product.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed">
                      {product.description}
                    </p>
                    {product.features && (
                      <ul className="mt-5 space-y-2 text-[15px]">
                        {product.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex gap-2.5">
                            <span
                              aria-hidden
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--sage-deep)]"
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/products/${index}`}
                        className="rounded-full bg-[color:var(--sage)] px-6 py-3 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
                      >
                        View details
                      </Link>
                      {product.nutrition && (
                        <Link
                          href={`/nutrition/${index}`}
                          className="text-[14px] font-medium underline decoration-[color:var(--sage-deep)] underline-offset-4 transition-colors hover:text-[color:var(--ink)]"
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
        <h2
          className="mt-4 max-w-[26ch] text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
          style={serif}
        >
          Ingredients chosen for evidence, not fashion.
        </h2>
        <div className="mt-12 divide-y divide-[color:var(--ink)]/10 border-y border-[color:var(--ink)]/10">
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
                <div className="h-20 w-20 rounded-full bg-[color:var(--mist)] md:h-24 md:w-24" />
              )}
              <div>
                <h3 className="text-[20px] tracking-tight text-[color:var(--ink)]" style={serif}>
                  {ing.name}
                </h3>
                <p className="mt-2 max-w-[70ch] text-[14px] leading-relaxed">
                  {ing.highlights.slice(0, 4).join(" · ")}
                </p>
              </div>
              <span className="hidden text-[14px] font-medium text-[color:var(--nav-ink)] transition-transform group-hover:translate-x-1 md:block">
                Benefits →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[color:var(--stone)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionLabel>Who it helps</SectionLabel>
          <h2
            className="mt-4 text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
            style={serif}
          >
            Everyday situations our products are made for.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {useCases.map((uc, index) => (
              <Link key={uc.title} href={`/usecases/${index}`} className="group">
                <p className="text-[13px] font-medium text-[color:var(--nav-ink)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3
                  className="mt-2 text-[21px] tracking-tight text-[color:var(--ink)] underline-offset-4 group-hover:underline"
                  style={serif}
                >
                  {uc.title}
                </h3>
                {uc.title === "SALLYPRO C CARDIAC FORMULA" ? (
                  <p className="mt-3 text-[15px] leading-relaxed">{uc.description}</p>
                ) : (
                  <div
                    className="invar-prose mt-3 text-[15px] leading-relaxed"
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
            <h2
              className="mt-4 text-[32px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[40px]"
              style={serif}
            >
              Talk to us about your nutrition needs.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed">
              For product enquiries, distribution, or partnerships, reach us directly.
              We respond fastest on WhatsApp.
            </p>
            <div className="mt-8 space-y-3 text-[16px]">
              <p>
                <span className="text-[color:var(--text)]/70">Phone: </span>
                <a href="tel:+917096273336" className="font-medium text-[color:var(--ink)] hover:underline">
                  +91 70962 73336
                </a>
              </p>
              <p>
                <span className="text-[color:var(--text)]/70">Email: </span>
                <a href="mailto:invarpharma@gmail.com" className="font-medium text-[color:var(--ink)] hover:underline">
                  invarpharma@gmail.com
                </a>
              </p>
              <p className="max-w-[46ch] leading-relaxed">
                <span className="text-[color:var(--text)]/70">Address: </span>
                A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road,
                Nadiad, Gujarat
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-[color:var(--mist)] p-8 md:p-10">
            <h3 className="text-[22px] tracking-tight text-[color:var(--ink)]" style={serif}>
              Message us now
            </h3>
            <WhatsAppContact />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
