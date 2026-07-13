import { Header } from "@/widgets/Header";
import { Hero } from "@/widgets/Hero";
import { QuoteForm } from "@/widgets/QuoteForm";
import { NedenBiz } from "@/widgets/NedenBiz";
import { Products } from "@/widgets/Products";
import { Calculators } from "@/widgets/Calculators";
import { Partners } from "@/widgets/Partners";
import { Testimonials } from "@/widgets/Testimonials";
import { FAQ } from "@/widgets/FAQ";
import { Contact } from "@/widgets/Contact";
import { Footer } from "@/widgets/Footer";
import { Metadata } from "next";

import { SITE_CONFIG } from "@/shared/config";

export const metadata: Metadata = {
  title: `Anasayfa - ${SITE_CONFIG.siteName} Sigorta`,
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Products />
        <NedenBiz />
        <QuoteForm />
        <Testimonials />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
