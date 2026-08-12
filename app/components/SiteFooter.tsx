import Image from "next/image";

const serif = { fontFamily: "var(--font-invar-serif), Georgia, serif" };

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--ink)]/10 bg-[color:var(--stone)] text-[color:var(--ink)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/Black Invar Logo Png.png"
                alt="Invar Pharmaceutical"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <span className="text-[17px] font-semibold" style={serif}>
                Invar Pharmaceutical Pvt Ltd
              </span>
            </div>
            <p className="mt-4 max-w-[44ch] text-[14px] leading-relaxed text-[color:var(--text)]">
              Innovating Nutritional Support For Specialized Health. Directors:
              Mr. Dhaval Dalwadi and Mr. Mahendra Patel.
            </p>
          </div>
          <div className="text-[14px] leading-relaxed text-[color:var(--text)]">
            <p>
              <a href="tel:+917096273336" className="hover:underline">+91 70962 73336</a>
            </p>
            <p>
              <a href="mailto:invarpharma@gmail.com" className="hover:underline">invarpharma@gmail.com</a>
            </p>
            <p className="mt-3 max-w-[38ch]">
              A-10 Hastinapuri Society, Kishan Samosa no Khacho, College Road,
              Nadiad, Gujarat (24)
            </p>
            <p className="mt-3">GSTIN: 24AAHCI7314K1ZH</p>
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--nav-ink)]">
                Follow us
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/invar_pharma?igsh=dnJubzgxdndlYTBp&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Invar Pharmaceutical on Instagram (opens in a new tab)"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--bg)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--sage-deep)] hover:bg-[color:var(--sage)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ink)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584859410201"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Invar Pharmaceutical on Facebook (opens in a new tab)"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--bg)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--sage-deep)] hover:bg-[color:var(--sage)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ink)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d="M13.5 21v-8h2.75l.42-3.2H13.5V7.76c0-.92.26-1.55 1.6-1.55h1.71V3.35c-.3-.04-1.32-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.25V9.8H7.36V13h2.79v8h3.35Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-[color:var(--ink)]/10 pt-6 text-[13px] text-[color:var(--text)]/80">
          © {new Date().getFullYear()} Invar Pharmaceutical Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
