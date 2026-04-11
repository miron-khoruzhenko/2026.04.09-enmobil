"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft, Home } from "lucide-react";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center pt-20">
        <div className="max-w-2xl mx-auto px-6 text-center py-24">
          
          {/* Big 404 */}
          <div className="relative mb-8 inline-block">
            <span className="text-[180px] font-black text-gray-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldCheck className="w-20 h-20 text-brand-red opacity-80" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 tracking-tight">
            Sayfa Bulunamadı
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
            Ana sayfaya dönerek ihtiyacınıza uygun ürünü bulabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:scale-105 active:scale-95"
            >
              <Home className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/#teklif-al"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-dark hover:text-white transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Teklif Al
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
              Popüler Sayfalar
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Kasko Sigortası", href: "/hizmetler/kasko-sigortasi" },
                { label: "Trafik Sigortası", href: "/hizmetler/trafik-sigortasi" },
                { label: "DASK ve Konut", href: "/hizmetler/dask-konut" },
                { label: "Seyahat Sağlık", href: "/hizmetler/seyahat-saglik" },
                { label: "Hesaplama Araçları", href: "/#hesaplama" },
                { label: "SSS", href: "/#sss" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-brand-red hover:text-brand-red transition-colors shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
