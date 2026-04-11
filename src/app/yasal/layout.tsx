import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function YapiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero bar */}
        <div className="bg-[#1C1917] text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Ana Sayfaya Dön
            </Link>
            <div className="flex items-center gap-3 text-brand-red">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Yasal Bilgiler</span>
            </div>
          </div>
        </div>

        {/* Content area — scoped, won't affect other pages */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
