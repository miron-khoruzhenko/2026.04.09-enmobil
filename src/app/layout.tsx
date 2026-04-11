import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/shared/components/Preloader";
import { CookieBanner } from "@/shared/components/CookieBanner";
import { SITE_CONFIG } from "@/shared/config";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.siteTitle,
    template: `%s | ${SITE_CONFIG.siteName}`
  },
  description: SITE_CONFIG.description,
  keywords: ["sigorta", "kasko", "trafik sigortası", "tamamlayıcı sağlık", "DASK", "enmobil"],
  openGraph: {
    title: SITE_CONFIG.companyName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.siteName,
    images: [{ url: '/logo_full.png', width: 1200, height: 630, alt: 'Enmobil Sigorta Logo' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.companyName,
    description: SITE_CONFIG.description,
    images: ['/logo_full.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${roboto.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground bg-[#F8F9FA]">
        <Preloader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
