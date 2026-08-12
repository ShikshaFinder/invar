import Image from "next/image";
import Link from "next/link";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--ink)]/10 bg-[color:var(--bg)]/95 backdrop-blur-sm">
      <nav className="mx-auto flex min-h-[88px] max-w-[1416px] items-center justify-between px-6 py-4 sm:px-10 md:min-h-[110px] md:py-7 xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Black Invar Logo Png.png"
            alt="Invar Pharmaceutical"
            width={80}
            height={28}
            className="h-6 w-[78px] object-contain md:h-7 md:w-[82px]"
          />
          <span
            className="text-[17px] font-semibold tracking-tight text-[color:var(--ink)]"
            style={serif}
          >
            Invar Pharmaceutical Pvt Ltd
          </span>
        </Link>
        <div className="hidden items-center gap-9 text-[13px] uppercase tracking-[0.14em] text-[color:var(--nav-ink)] md:flex">
          <Link href="/#about" className="transition-opacity hover:opacity-70">About</Link>
          <Link href="/#products" className="transition-opacity hover:opacity-70">Products</Link>
          <Link href="/#segments" className="transition-opacity hover:opacity-70">Focus Areas</Link>
          <Link href="/#ingredients" className="transition-opacity hover:opacity-70">Ingredients</Link>
        </div>
        <Link
          href="/#contact"
          className="rounded-full bg-[color:var(--sage)] px-5 py-2.5 text-[13px] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--sage-deep)]"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
