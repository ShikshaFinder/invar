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
  const index = parseInt(id);
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
                Enquire now
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
                    <p className="mt-1.5 max-w-[70ch] text-[14px] leading-relaxed">
                      {ing.highlights.slice(0, 3).join(" · ")}
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
