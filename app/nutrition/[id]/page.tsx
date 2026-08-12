import { products } from "../../data";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export async function generateStaticParams() {
  return products.map((_, index) => ({ id: index.toString() }));
}

export default async function NutritionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = parseInt(id);
  const product = products[index];

  if (!product || !product.nutrition) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)]">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-[32px] text-[color:var(--ink)]" style={serif}>
            Nutrition information not found
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

      <section className="mx-auto max-w-4xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <Link
          href={`/products/${index}`}
          className="text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--nav-ink)] hover:underline"
        >
          ← Back to {product.title}
        </Link>
        <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
          Nutrition facts · {product.subtitle}
        </p>
        <h1
          className="mt-3 text-[34px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[42px]"
          style={serif}
        >
          {product.title}
        </h1>

        {(product.nutrition.heading || product.nutrition.description) && (
          <div className="mt-8">
            {product.nutrition.heading && (
              <h2
                className="text-[24px] tracking-tight text-[color:var(--ink)]"
                style={serif}
              >
                {product.nutrition.heading}
              </h2>
            )}
            {product.nutrition.description && (
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--text)]/85">
                {product.nutrition.description}
              </p>
            )}
          </div>
        )}

        <div className="mt-12 space-y-14">
          {product.nutrition.sections.map((section) => (
            <div key={section.title}>
              {product.nutrition!.sections.length > 1 && (
                <h2
                  className="mb-5 text-[24px] tracking-tight text-[color:var(--ink)]"
                  style={serif}
                >
                  {section.title}
                </h2>
              )}
              <div className="overflow-x-auto rounded-2xl border border-[color:var(--ink)]/10 bg-[color:var(--surface)]">
                <table className="min-w-[720px]">
                  <thead>
                    <tr className="bg-[color:var(--stone)]">
                      {product.nutrition!.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--nav-ink)]"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--ink)]/8">
                    {section.items.map((row, rIndex) => (
                      <tr key={rIndex} className="transition-colors hover:bg-[color:var(--stone)]/60">
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className={`whitespace-nowrap px-6 py-3.5 text-[14px] ${
                              cIndex === 0
                                ? "font-medium text-[color:var(--ink)]"
                                : "text-[color:var(--text)]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {product.nutrition.notes && (
            <div className="space-y-2 rounded-2xl bg-[color:var(--stone)] p-5 text-[13px] leading-relaxed text-[color:var(--text)]">
              {product.nutrition.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
