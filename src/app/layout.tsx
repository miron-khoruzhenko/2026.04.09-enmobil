import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Enmobil Sigorta | Güvenilir Yeni Nesil Sigortacılık",
  description: "Enmobil Sigorta ile Kasko, Trafik, DASK ve Sağlık Sigortası tekliflerini kolayca alın.",
};

import { Preloader } from "@/shared/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-foreground bg-[#F8F9FA]">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
