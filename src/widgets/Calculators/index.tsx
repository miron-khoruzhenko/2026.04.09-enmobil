"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, CalculatorIcon, Landmark, PiggyBank, ReceiptText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { id: 1, title: "Araç Kasko Değer Listesi", icon: <CalculatorIcon className="w-8 h-8 text-brand-dark" />, desc: "Aracınızın güncel kasko değerini hemen öğrenin." },
  { id: 2, title: "Vergi Avantajı Hesaplama", icon: <Landmark className="w-8 h-8 text-brand-dark" />, desc: "Hayat sigortalarının sunduğu vergi iadesini hesaplayın." },
  { id: 3, title: "Finansal Planlama Aracı", icon: <PiggyBank className="w-8 h-8 text-brand-dark" />, desc: "Bireysel emeklilik için ideal ödeme planınızı oluşturun." },
  { id: 4, title: "Yakıt Hesaplama", icon: <ReceiptText className="w-8 h-8 text-brand-dark" />, desc: "Trafik sigortası ile birlikte yıllık maliyetinizi planlayın." },
];

export const Calculators = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".calc-card", 
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
              Hesaplama <span className="text-brand-red">Araçları</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Karar vermeden önce size en uygun finansal tabloyu çıkartın. Hesaplama araçlarımızla bütçenizi kontrol altına alın.
            </p>
          </div>
          <a href="/#iletisim" className="text-brand-dark font-semibold hover:text-brand-red transition-colors hidden md:block">
            Uzmanla Görüş &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className="calc-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
