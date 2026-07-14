import { useCases } from "../../data";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export async function generateStaticParams() {
  return useCases.map((_, index) => ({ id: index.toString() }));
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = parseInt(id);
  const useCase = useCases[index];

  if (!useCase) {
    return (
      <div className="min-h-screen bg-[color:var(--bg)]">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="text-[32px] text-[color:var(--ink)]" style={serif}>
            Use case not found
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

  const isPlainText = useCase.title === "SALLYPRO C CARDIAC FORMULA";

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <Link
          href="/"
          className="text-[13px] font-medium uppercase tracking-[0.12em] text-[color:var(--nav-ink)] hover:underline"
        >
          ← Home
        </Link>
        <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--text)]/80">
          Use case {String(index + 1).padStart(2, "0")}
        </p>
        <h1
          className="mt-3 text-[34px] leading-tight tracking-tight text-[color:var(--ink)] md:text-[42px]"
          style={serif}
        >
          {useCase.title}
        </h1>

        <div className="mt-10 rounded-3xl bg-[color:var(--stone)] p-8 md:p-12">
          {isPlainText ? (
            <p className="text-[16px] leading-relaxed">{useCase.description}</p>
          ) : (
            <div
              className="invar-prose text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: useCase.description }}
            />
          )}
        </div>

        <Link
          href="/#contact"
          className="mt-10 inline-block rounded-full bg-[color:var(--sage)] px-7 py-3.5 text-[14px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
        >
          Ask us about this product
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
