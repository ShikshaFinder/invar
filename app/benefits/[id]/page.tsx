import { ingredients } from "../../data";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

function sourceTitle(sourceDoc: string) {
  return sourceDoc.replace(/^\//, "").replace(/\.docx$/i, "");
}

export async function generateStaticParams() {
  return ingredients.map((_, index) => ({ id: index.toString() }));
}

export default async function BenefitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = Number.parseInt(id, 10);
  const ingredient = Number.isInteger(index) && index >= 0 ? ingredients[index] : undefined;

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

      <main>
        <section className="border-b border-[color:var(--ink)]/10">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-16">
            <Link
              href="/#ingredients"
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--nav-ink)] hover:underline"
            >
              ← All ingredients
            </Link>

            <div className="mt-12 grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
                  Inside the formula
                </p>
                <h1
                  className="mt-5 max-w-3xl text-[43px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink)] md:text-[68px]"
                  style={serif}
                >
                  {ingredient.name}
                </h1>
                <p className="mt-7 max-w-2xl text-[17px] leading-[1.7] text-[color:var(--text)] md:text-[18px]">
                  {ingredient.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {ingredient.focusAreas.map((focusArea) => (
                    <span
                      key={focusArea}
                      className="rounded-full border border-[color:var(--ink)]/15 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[color:var(--nav-ink)]"
                    >
                      {focusArea}
                    </span>
                  ))}
                </div>
              </div>

              {ingredient.image && (
                <div className="md:justify-self-end">
                  <div className="overflow-hidden rounded-[30px] border border-[color:var(--ink)]/10 bg-[color:var(--stone)] p-3 shadow-[0_18px_45px_rgba(17,24,39,0.08)] md:p-4">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      width={520}
                      height={520}
                      priority
                      className="h-72 w-full rounded-[22px] object-cover md:h-[360px] md:w-[360px]"
                    />
                    <p className="px-2 pb-1 pt-4 text-[13px] italic text-[color:var(--nav-ink)]">
                      Selected for purposeful nutrition.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--stone)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
              At a glance
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-[22px] border border-[color:var(--ink)]/10 bg-[color:var(--bg)] p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--nav-ink)]">
                  Formula role
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ink)]">
                  {ingredient.role}
                </p>
              </div>
              <div className="rounded-[22px] border border-[color:var(--ink)]/10 bg-[color:var(--bg)] p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--nav-ink)]">
                  Key focus
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ink)]">
                  {ingredient.focusAreas.join(" · ")}
                </p>
              </div>
              <div className="rounded-[22px] border border-[color:var(--ink)]/10 bg-[color:var(--bg)] p-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--nav-ink)]">
                  Reference
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--ink)]">
                  {sourceTitle(ingredient.sourceDoc)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
                  Why it matters
                </p>
                <h2
                  className="mt-5 text-[33px] leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px]"
                  style={serif}
                >
                  A clear role within a complete formula.
                </h2>
                <p className="mt-6 text-[16px] leading-[1.75] text-[color:var(--text)]">
                  Ingredients work best when their purpose is clear. This profile brings the main nutrition themes together so you can understand where {ingredient.name.toLowerCase()} fits in the wider formulation.
                </p>
              </div>

              <div>
                <h2
                  className="text-[27px] tracking-tight text-[color:var(--ink)] md:text-[31px]"
                  style={serif}
                >
                  What it brings to the formula
                </h2>
                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {ingredient.focusAreas.map((focusArea, focusIndex) => (
                    <div
                      key={focusArea}
                      className="rounded-[22px] border border-[color:var(--ink)]/10 bg-[color:var(--stone)] p-5"
                    >
                      <span className="text-[13px] font-medium text-[color:var(--nav-ink)]" style={serif}>
                        {String(focusIndex + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-7 text-[15px] font-medium leading-relaxed text-[color:var(--ink)]">
                        {focusArea}
                      </p>
                    </div>
                  ))}
                </div>

                <h2
                  className="mt-12 text-[27px] tracking-tight text-[color:var(--ink)] md:text-[31px]"
                  style={serif}
                >
                  How it fits
                </h2>
                <ul className="mt-6 space-y-4">
                  {ingredient.formulationNotes.map((note) => (
                    <li key={note} className="flex gap-3 text-[15px] leading-relaxed text-[color:var(--text)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--sage-deep)]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--stone)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
                Evidence-led reference
              </p>
              <h2
                className="mt-5 text-[33px] leading-tight tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px]"
                style={serif}
              >
                Benefits and highlights
              </h2>
              <p className="mt-5 text-[16px] leading-[1.75] text-[color:var(--text)]">
                Explore the individual areas associated with this ingredient. The list is intended as an educational overview of the formulation focus.
              </p>
            </div>

            <ol className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
              {ingredient.highlights.map((highlight, highlightIndex) => (
                <li
                  key={highlight}
                  className="flex gap-4 border-b border-[color:var(--ink)]/10 pb-5"
                >
                  <span className="text-[14px] font-medium text-[color:var(--nav-ink)]" style={serif}>
                    {String(highlightIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[color:var(--text)]">
                    {highlight}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-[color:var(--ink)]/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-[1fr_0.82fr] md:items-start md:gap-20">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
                  Keep exploring
                </p>
                <h2
                  className="mt-5 max-w-xl text-[33px] leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[42px]"
                  style={serif}
                >
                  The ingredient is one part of the bigger picture.
                </h2>
                <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-[color:var(--text)]">
                  See how this ingredient sits alongside the other botanicals and nutrients in the Invar range.
                </p>
                <Link
                  href="/#ingredients"
                  className="mt-8 inline-flex rounded-full bg-[color:var(--sage)] px-6 py-3 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
                >
                  Browse all ingredients
                </Link>
              </div>

              <div className="rounded-[24px] bg-[color:var(--ink)] p-7 text-[color:var(--bg)] md:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--sage)]">
                  Source document
                </p>
                <p className="mt-5 text-[20px] leading-snug" style={serif}>
                  {sourceTitle(ingredient.sourceDoc)}
                </p>
                <a
                  href={ingredient.sourceDoc}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex border-b border-[color:var(--sage)] pb-1 text-[13px] font-medium text-[color:var(--sage)] hover:text-[color:var(--bg)]"
                >
                  Open source document ↗
                </a>
                <p className="mt-8 border-t border-[color:var(--bg)]/20 pt-5 text-[12px] leading-relaxed text-[color:var(--bg)]/70">
                  Educational information only. It is not a diagnosis or a substitute for professional medical advice. Use products as directed and seek guidance for individual needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[color:var(--nav-ink)]">
                  Continue reading
                </p>
                <h2
                  className="mt-4 text-[30px] tracking-tight text-[color:var(--ink)] md:text-[36px]"
                  style={serif}
                >
                  More ingredients
                </h2>
              </div>
              <Link
                href="/#ingredients"
                className="text-[13px] font-medium text-[color:var(--nav-ink)] hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {ingredients
                .map((relatedIngredient, relatedIndex) => ({ relatedIngredient, relatedIndex }))
                .filter(({ relatedIndex }) => relatedIndex !== index)
                .slice(0, 4)
                .map(({ relatedIngredient, relatedIndex }) => (
                  <Link
                    key={relatedIngredient.name}
                    href={`/benefits/${relatedIndex}`}
                    className="group overflow-hidden rounded-[22px] border border-[color:var(--ink)]/10 bg-[color:var(--stone)] transition-transform hover:-translate-y-1"
                  >
                    {relatedIngredient.image && (
                      <Image
                        src={relatedIngredient.image}
                        alt={relatedIngredient.name}
                        width={360}
                        height={220}
                        className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="p-5">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[color:var(--nav-ink)]">
                        Ingredient profile
                      </p>
                      <h3
                        className="mt-3 text-[20px] leading-tight text-[color:var(--ink)]"
                        style={serif}
                      >
                        {relatedIngredient.name}
                      </h3>
                      <span className="mt-5 inline-block text-[12px] font-medium text-[color:var(--nav-ink)]">
                        View profile →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
