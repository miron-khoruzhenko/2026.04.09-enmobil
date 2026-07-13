"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/shared/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ShieldCheck, Car, Home, Plane, HeartPulse, Stethoscope, PawPrint, FileBadge } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { SITE_CONFIG } from "@/shared/config";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TABS = [
  { id: "kasko", label: "Kasko", icon: <Car className="w-5 h-5" />, message: "Aracınızı güvence altına alın, yola içiniz rahat çıkın." },
  { id: "trafik", label: "Trafik", icon: <ShieldCheck className="w-5 h-5" />, message: "Zorunlulukları kolaylaştırmak için Enmobil Sigorta!" },
  { id: "tamamlayici", label: "Tamamlayıcı Sağlık", icon: <Stethoscope className="w-5 h-5" />, message: "Enmobil Sigorta ile hep sağlık olsun!" },
  { id: "ozel", label: "Özel Sağlık", icon: <HeartPulse className="w-5 h-5" />, message: "Size özel fırsatlarla sağlık sigortası yolculuğunuz hemen başlasın!" },
  { id: "dask", label: "DASK", icon: <Home className="w-5 h-5" />, message: "Zorunlu Deprem Sigortanızı anında ve güvenle yaptırın." },
  { id: "konut", label: "Konut", icon: <Home className="w-5 h-5" />, message: "Evinizin sıcaklığı her dem güvencede olsun." },
  { id: "seyahat", label: "Seyahat", icon: <Plane className="w-5 h-5" />, message: "Dünyayı keşfederken sağlığınız bize emanet." },
  { id: "yabanci", label: "Yabancı Sağlık", icon: <FileBadge className="w-5 h-5" />, message: "Vize ve ikamet işlemleriniz için güvenilir sağlık sigortası." },
  { id: "pati", label: "Pati", icon: <PawPrint className="w-5 h-5" />, message: "Sevimli dostlarımızın sağlığı da hep güvende olsun." },
];

export const QuoteForm = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, { scope: containerRef });

  useEffect(() => {
    if (!textRef.current) return;
    const activeData = TABS.find(t => t.id === activeTab);
    if (!activeData) return;

    const tl = gsap.timeline();
    tl.to(textRef.current, {
      duration: 0.3,
      text: "",
      ease: "none",
    }).to(textRef.current, {
      duration: 1,
      text: activeData.message,
      ease: "power2.out",
    });
  }, [activeTab]);

  return (
    <section id="teklif-al" className="pt-32 pb-24 md:pt-40 bg-gradient-to-b from-brand-light to-white relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mr-4">
                <ShieldCheck className="w-6 h-6 text-brand-red" />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-4">
            Hızlı ve Güvenilir Sigortacınız
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Teklif al, karşılaştır ve güvenle öde. Poliçen anında cebinde!
          </p>
        </div>

        <div ref={containerRef} className="shadow-2xl shadow-gray-200/60 rounded-3xl bg-white border border-gray-100 flex flex-col overflow-hidden">
          
          {/* Tabs / Branch Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 bg-gray-50/50 border-b border-gray-100">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300",
                    isActive 
                      ? "bg-white text-brand-dark shadow-md ring-1 ring-gray-200 scale-[1.02]" 
                      : "bg-white/50 text-gray-600 hover:text-brand-dark hover:bg-white hover:shadow-sm ring-1 ring-gray-100"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                    isActive ? "bg-brand-red/10 text-brand-red" : "bg-gray-100 text-gray-500"
                  )}>
                    {tab.icon}
                  </div>
                  <span className="font-medium text-sm text-center leading-tight">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Area */}
          {activeTab && (
            <div className="p-8 md:p-12">
              
              {['kasko', 'trafik'].includes(activeTab) && (
                <div className="flex items-center gap-2 mb-6">
                  <input type="checkbox" id="no-plate" className="w-5 h-5 rounded border-gray-300 text-brand-red focus:ring-brand-red" />
                  <label htmlFor="no-plate" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Plakam Yok
                  </label>
                </div>
              )}
              {/* If not a vehicle insurance, we add an invisible spacer or just padding so the form doesn't jump. Since checkboxes take space, we can either leave it out or add margin. We'll just leave it out to keep it clean, but add margin top to grid if it's there. */}
              
              <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8", !['kasko', 'trafik'].includes(activeTab) && "mt-4")}>
                
                {/* Dynamic Inputs based on type */}
                {['kasko', 'trafik'].includes(activeTab) ? (
                  <>
                    <input type="text" placeholder="Plaka" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                    <input type="text" placeholder="TCKN / VKN" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  </>
                ) : ['tamamlayici', 'ozel', 'yabanci'].includes(activeTab) ? (
                  <>
                    <input type="text" placeholder="Ad Soyad" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                    <input type="text" placeholder="TCKN / YKN" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  </>
                ) : ['seyahat'].includes(activeTab) ? (
                  <>
                    <input type="text" placeholder="Ad Soyad" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                    <input type="text" placeholder="Gidilecek Ülke" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  </>
                ) : ['pati'].includes(activeTab) ? (
                  <>
                    <input type="text" placeholder="Ad Soyad" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                    <input type="text" placeholder="Evcil Hayvan Türü" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  </>
                ) : (
                  /* Default (DASK, Konut, vb.) */
                  <>
                    <input type="text" placeholder="Ad Soyad" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                    <input type="text" placeholder="TCKN" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                  </>
                )}

                {/* Common Fields */}
                <input type="email" placeholder="E-Posta" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
                <input type="tel" placeholder="Cep Telefonu" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red" />
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start gap-3 flex-1">
                  <input type="checkbox" id="kvkk" className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-red focus:ring-brand-red shrink-0" />
                  <label htmlFor="kvkk" className="text-xs text-gray-500 leading-relaxed">
                    Değerli Müşterimiz, yapacağınız işlemler doğrultusunda paylaşacağınız kişisel verileriniz Enmobil Sigorta tarafından, taleplerinizi yerine getirmek için işlenmekte ve ilgili birimlere aktarılmaktadır. Kişisel verilerinizin işlenmesi ve haklarınız ile ilgili detaylı bilgi için <Link href="#" className="text-brand-red underline">tıklayınız</Link>.
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                  <a
                    href={`https://wa.me/9${SITE_CONFIG.contact.phones.mobile.number.replace(/^0/, '')}?text=Merhaba, fiyat teklifi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp'tan Teklif Al
                  </a>
                  <Button className="w-full lg:w-auto px-10 py-4 shadow-lg shadow-brand-red/30">
                    Teklif Al
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Red Banner Bottom */}
          <div className="bg-brand-red text-white py-4 px-8 flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <span ref={textRef} className="font-medium text-sm md:text-base min-h-[24px]">
              {/* Typewriter will insert text here */}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
