import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-invar-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Invar Pharmaceutical Pvt Ltd | Innovating Nutritional Support For Specialized Health",
  description:
    "Invar Pharmaceutical develops science-based therapeutic nutrition for specialized health needs: cardiac care, diabetic management, and pregnancy & maternal health. Based in Nadiad, Gujarat.",
  icons: {
    icon: "/Black Invar Logo Png.png",
  },
  openGraph: {
    title: "Invar Pharmaceutical Pvt Ltd",
    description:
      "Science-based therapeutic nutrition for cardiac care, diabetic management, and maternal health.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${serif.variable} bg-[color:var(--bg)] text-[color:var(--text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
