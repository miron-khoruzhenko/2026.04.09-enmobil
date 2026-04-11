"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/shared/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ShieldCheck, Car, Home, Plane, HeartPulse } from "lucide-react";
import { cn } from "@/shared/lib/utils";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TABS = [
  { id: "ekasko", label: "e-kasko", icon: <ShieldCheck className="w-5 h-5" />, message: "e-kasko Sigortası yolculuğu, 9 taksit imkânıyla başlasın!" },
  { id: "kasko", label: "Kasko", icon: <Car className="w-5 h-5" />, message: "Aracınızı güvence altına alın, yola içiniz rahat çıkın." },
  { id: "dask", label: "DASK", icon: <Home className="w-5 h-5" />, message: "Zorunlu Deprem Sigortanızı anında ve güvenle yaptırın." },
  { id: "pati", label: "Pati", icon: <HeartPulse className="w-5 h-5" />, message: "Sevimli dostlarımızın sağlığı da hep güvende olsun." },
  { id: "seyahat", label: "Seyahat", icon: <Plane className="w-5 h-5" />, message: "Dünyayı keşfederken sağlığınız bize emanet." },
  { id: "ozel", label: "Size Özel", icon: <ShieldCheck className="w-5 h-5" />, message: "Size özel fırsatlarla sigorta yolculuğunuz hemen başlasın!" },
];

export const QuoteForm = () => {
  const [activeTab, setActiveTab] = useState("ekasko");
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
    <section id="teklif-al" className="py-24 bg-white relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Fiyat Teklifi Alabileceğiniz <span className="text-brand-red">Ürünlerimiz</span>
          </h2>
        </div>

        <div ref={containerRef} className="shadow-2xl shadow-gray-200/60 rounded-3xl bg-white border border-gray-100 flex flex-col overflow-hidden">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar bg-gray-50/50 border-b border-gray-100 p-2 gap-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 min-w-max",
                    isActive 
                      ? "bg-white text-brand-dark shadow-sm ring-1 ring-gray-200" 
                      : "text-gray-500 hover:text-brand-dark hover:bg-gray-100/50"
                  )}
                >
                  <span className={cn("transition-colors", isActive ? "text-green-500" : "text-gray-400")}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="no-plate" className="w-5 h-5 rounded border-gray-300 text-brand-red focus:ring-brand-red" />
              <label htmlFor="no-plate" className="text-sm font-medium text-gray-700 cursor-pointer">
                Plakam Yok
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <input 
                type="text" 
                placeholder="Plaka" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
              <input 
                type="text" 
                placeholder="TCKN" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
              <input 
                type="email" 
                placeholder="E-Posta" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
              <input 
                type="tel" 
                placeholder="Cep Telefonu" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-3 flex-1">
                <input type="checkbox" id="kvkk" className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-red focus:ring-brand-red shrink-0" />
                <label htmlFor="kvkk" className="text-xs text-gray-500 leading-relaxed">
                  Değerli Müşterimiz, yapacağınız işlemler doğrultusunda paylaşacağınız kişisel verileriniz Enmobil Sigorta tarafından, taleplerinizi yerine getirmek için işlenmekte ve ilgili birimlere aktarılmaktadır. Kişisel verilerinizin işlenmesi ve haklarınız ile ilgili detaylı bilgi için <a href="#" className="text-brand-red underline">tıklayınız</a>.
                </label>
              </div>
              <Button className="w-full lg:w-auto px-10 py-4 shrink-0 shadow-lg shadow-brand-red/30">
                Teklif Al
              </Button>
            </div>
          </div>

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
