import { products, ingredients, useCases } from "../../data";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export async function generateStaticParams() {
  return products
    .filter((p) => p.family !== "CATALOG")
    .map((_, index) => ({ id: index.toString() }));
}

function findRelatedIngredients(productTitle: string) {
  const t = productTitle.toLowerCase();
  if (t.includes("cardiac") || t.includes("sallypro c")) {
    return ingredients.filter(
      (i) => i.name.toLowerCase().includes("arjuna") || i.name.toLowerCase().includes("beetroot")
    );
  }
  if (t.includes("diabesity") || t.includes("sallypro d")) {
    return ingredients.filter(
      (i) => i.name.toLowerCase().includes("garcinia") || i.name.toLowerCase().includes("omega")
    );
  }
  if (t.includes("protein")) {
    return ingredients.filter(
      (i) => i.name.toLowerCase().includes("vitamin") || i.name.toLowerCase().includes("mineral")
    );
  }
  return [];
}

function findRelatedUseCaseIndex(productTitle: string) {
  const t = productTitle.toLowerCase();
  const idx = useCases.findIndex((u) => {
    const ut = u.title.toLowerCase();
    if (t.includes("throat")) return ut.includes("sore throat");
    if (t.includes("cardiac") || t.includes("sallypro c")) return ut.includes("cardiac");
    if (t.includes("diabesity") || t.includes("sallypro d")) return ut.includes("diabesity");
    if (t.includes("protein")) return ut === "sallypro protein";
    return false;
  });
  return idx;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = Number.parseInt(id, 10);
  const product = products[index];

  if (!product || product.family === "CATALOG") {
    return (
      <div className="min-h-screen bg-[color:var(--bg)]">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-[32px] text-[color:var(--ink)]" style={serif}>
            Product not found
          </h1>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-[color:var(--sage)] px-6 py-3 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
          >
            Return home
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = findRelatedIngredients(product.title);
  const useCaseIndex = findRelatedUseCaseIndex(product.title);

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <SiteHeader />

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <Link
          href="/#products"
          className="text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--nav-ink)] hover:underline"
        >
          ← All products
        </Link>
        <div className="mt-8 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center justify-center rounded-3xl bg-[color:var(--mist)] p-12">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                width={360}
                height={360}
                priority
                className="max-h-[340px] w-auto object-contain drop-shadow-xl"
              />
            ) : null}
          </div>
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--text)]/80">
              {product.subtitle}
            </p>
            <h1
              className="mt-3 text-[34px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[44px]"
              style={serif}
            >
              {product.title}
            </h1>
            <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed">
              {product.description}
            </p>
            {product.detailIntro && (
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-[color:var(--text)]/85">
                {product.detailIntro}
              </p>
            )}
            {product.features && (
              <ul className="mt-6 space-y-2.5 text-[15px]">
                {product.features.map((f) => (
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
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/#contact"
                className="rounded-full bg-[color:var(--sage)] px-7 py-3.5 text-[14px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
              >
                Contact Us
              </Link>
              {product.nutrition && (
                <Link
                  href={`/nutrition/${index}`}
                  className="text-[14px] font-medium underline decoration-[color:var(--sage-deep)] underline-offset-4 hover:text-[color:var(--ink)]"
                >
                  Nutrition facts
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Formula overview */}
      {(product.benefitAreas?.length || product.qualityNotes?.length) && (
        <section className="border-y border-[color:var(--ink)]/10 bg-[color:var(--stone)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--nav-ink)]">
                  Formula overview
                </p>
                <h2
                  className="mt-4 max-w-xl text-[30px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[38px]"
                  style={serif}
                >
                  Designed around a clear everyday purpose.
                </h2>
                <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-[color:var(--text)]">
                  The formula brings its ingredients together around a defined nutrition goal, making it easier to understand where the product fits into a daily routine.
                </p>
                {product.benefitAreas && (
                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {product.benefitAreas.map((area, areaIndex) => (
                      <div
                        key={area}
                        className="rounded-[20px] border border-[color:var(--ink)]/10 bg-[color:var(--bg)] p-5"
                      >
                        <span className="text-[13px] font-medium text-[color:var(--nav-ink)]" style={serif}>
                          {String(areaIndex + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-6 text-[15px] font-medium leading-relaxed text-[color:var(--ink)]">
                          {area}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {product.qualityNotes && (
                <div className="rounded-[24px] bg-[color:var(--ink)] p-7 text-[color:var(--bg)] md:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--sage)]">
                    Product details
                  </p>
                  <ul className="mt-6 space-y-4">
                    {product.qualityNotes.map((note) => (
                      <li key={note} className="flex gap-3 text-[15px] leading-relaxed text-[color:var(--bg)]/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--sage)]" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex border-b border-[color:var(--sage)] pb-1 text-[13px] font-medium text-[color:var(--sage)] hover:text-[color:var(--bg)]"
                  >
                    Open product document ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why choose (rich description) */}
      {product.additional_description && (
        <section className="bg-[color:var(--stone)]">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <div
              className="invar-prose text-[16px] leading-relaxed [&>p>strong]:text-[22px] [&>p>strong]:font-normal"
              dangerouslySetInnerHTML={{ __html: product.additional_description }}
            />
          </div>
        </section>
      )}

      {/* Usage and guidance */}
      {product.usageDetails && (
        <section>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--nav-ink)]">
                  Everyday use
                </p>
                <h2
                  className="mt-4 text-[30px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[38px]"
                  style={serif}
                >
                  Simple guidance for the routine.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-[color:var(--text)]">
                  A clear routine helps people use a nutrition product consistently and responsibly.
                </p>
              </div>
              <div>
                <ol className="divide-y divide-[color:var(--ink)]/10 border-y border-[color:var(--ink)]/10">
                  {product.usageDetails.map((detail, detailIndex) => (
                    <li key={detail} className="flex gap-5 py-5">
                      <span className="text-[14px] font-medium text-[color:var(--nav-ink)]" style={serif}>
                        {String(detailIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-relaxed text-[color:var(--text)]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 rounded-[18px] bg-[color:var(--stone)] p-5 text-[13px] leading-relaxed text-[color:var(--text)]">
                  Individual nutrition needs vary. Please review the product label and speak with a qualified healthcare professional when you have allergies, take medicines, or are managing a medical condition.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related ingredients */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
            Inside this formula
          </p>
          <h2
            className="mt-4 text-[28px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[34px]"
            style={serif}
          >
            Key ingredients at work.
          </h2>
          <div className="mt-10 divide-y divide-[color:var(--ink)]/10 border-y border-[color:var(--ink)]/10">
            {related.map((ing) => {
              const ingIndex = ingredients.indexOf(ing);
              return (
                <Link
                  key={ing.name}
                  href={`/benefits/${ingIndex}`}
                  className="group grid items-center gap-6 py-6 md:grid-cols-[80px_1fr_auto]"
                >
                  {ing.image ? (
                    <Image
                      src={ing.image}
                      alt={ing.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-[color:var(--mist)] md:h-20 md:w-20" />
                  )}
                  <div>
                    <h3 className="text-[19px] text-[color:var(--ink)]" style={serif}>
                      {ing.name}
                    </h3>
                    <p className="mt-1.5 max-w-[70ch] text-[14px] leading-relaxed text-[color:var(--text)]/85">
                      {ing.role} {ing.highlights.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                  <span className="hidden text-[14px] font-medium text-[color:var(--nav-ink)] transition-transform group-hover:translate-x-1 md:block">
                    Benefits →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Related use case */}
      {useCaseIndex >= 0 && (
        <section className="bg-[color:var(--stone-2)]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
              Who it helps
            </p>
            <h2
              className="mx-auto mt-4 max-w-[28ch] text-[26px] leading-snug text-[color:var(--ink)] md:text-[30px]"
              style={serif}
            >
              See how {product.title.toLowerCase().includes("throat") ? "this spray" : "this formula"} fits into daily life.
            </h2>
            <Link
              href={`/usecases/${useCaseIndex}`}
              className="mt-8 inline-block rounded-full bg-[color:var(--sage)] px-7 py-3.5 text-[14px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
            >
              Read the use case
            </Link>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
