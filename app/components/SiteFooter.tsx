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
          </div>
        </div>
        <p className="mt-12 border-t border-[color:var(--ink)]/10 pt-6 text-[13px] text-[color:var(--text)]/80">
          © {new Date().getFullYear()} Invar Pharmaceutical Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
