import { ingredients } from "../../data";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export async function generateStaticParams() {
  return ingredients.map((_, index) => ({ id: index.toString() }));
}

export default async function BenefitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = parseInt(id);
  const ingredient = ingredients[index];

  if (!ingredient) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)]">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-[32px] text-[color:var(--ink)]" style={serif}>
            Ingredient not found
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

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <Link
          href="/#ingredients"
          className="text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--nav-ink)] hover:underline"
        >
          ← All ingredients
        </Link>
        <div className="mt-8 flex flex-col items-start gap-8 md:flex-row md:items-center">
          {ingredient.image && (
            <Image
              src={ingredient.image}
              alt={ingredient.name}
              width={160}
              height={160}
              priority
              className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
            />
          )}
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
              Key ingredient
            </p>
            <h1
              className="mt-3 text-[34px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[44px]"
              style={serif}
            >
              {ingredient.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--stone)]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h2
            className="text-[26px] tracking-tight text-[color:var(--ink)] md:text-[30px]"
            style={serif}
          >
            Medical benefits and highlights
          </h2>
          <ol className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {ingredient.highlights.map((highlight, i) => (
              <li key={highlight} className="flex gap-4 border-b border-[color:var(--ink)]/10 pb-5">
                <span className="text-[14px] font-medium text-[color:var(--nav-ink)]" style={serif}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
