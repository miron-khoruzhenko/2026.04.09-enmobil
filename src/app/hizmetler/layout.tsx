"use client";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { ArrowLeft, ShieldCheck, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/shared/config";

export default function HizmetlerLayout({ children }: { children: ReactNode }) {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("hizmet-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero breadcrumb bar */}
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
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Hizmetlerimiz</span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {children}
        </div>

        {/* CTA Banner — scrolls to inline form below */}
        <div className="bg-[#F2F3FB] border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-[#1C1917] mb-2">Hemen Teklif Almak İster misiniz?</h2>
              <p className="text-gray-500">Dakikalar içinde size özel poliçenizi oluşturun.</p>
            </div>
            <button
              onClick={scrollToForm}
              className="shrink-0 bg-[#D71D24] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:scale-105 active:scale-95"
            >
              Teklif Al →
            </button>
          </div>
        </div>

        {/* Inline Contact Form */}
        <div id="hizmet-form" className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-brand-red text-sm font-semibold mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Ücretsiz Danışmanlık
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1C1917] mb-4 tracking-tight">
                  Size Özel <span className="text-[#D71D24]">Teklif Alın</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Uzman ekibimiz en uygun sigorta teklifini hazırlamak için sizinle iletişime geçecektir.
                </p>
                <div className="space-y-4">
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#D71D24] group-hover:bg-[#D71D24] group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Telefon</div>
                      <div className="font-semibold text-[#1C1917]">{SITE_CONFIG.contact.phoneDisplay}</div>
                    </div>
                  </a>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#D71D24] group-hover:bg-[#D71D24] group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">E-Posta</div>
                      <div className="font-semibold text-[#1C1917]">{SITE_CONFIG.contact.email}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ad</label>
                      <input
                        type="text"
                        placeholder="Adınız"
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71D24]/20 focus:border-[#D71D24] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Soyad</label>
                      <input
                        type="text"
                        placeholder="Soyadınız"
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71D24]/20 focus:border-[#D71D24] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Telefon</label>
                    <input
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71D24]/20 focus:border-[#D71D24] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">E-Posta</label>
                    <input
                      type="email"
                      placeholder="ornek@mail.com"
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71D24]/20 focus:border-[#D71D24] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Mesajınız (İsteğe Bağlı)</label>
                    <textarea
                      rows={3}
                      placeholder="Bize iletmek istediğiniz bilgiler..."
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D71D24]/20 focus:border-[#D71D24] transition-all resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="kvkk-hizmet" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#D71D24] shrink-0" />
                    <label htmlFor="kvkk-hizmet" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      Kişisel verilerimin işlenmesine ilişkin{" "}
                      <a href="#" className="text-[#D71D24] underline">KVKK Aydınlatma Metni&apos;ni</a> okudum ve kabul ediyorum.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#D71D24] text-white py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-lg shadow-red-200/50 hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Teklif Talep Et
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
