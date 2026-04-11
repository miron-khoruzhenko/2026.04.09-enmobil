"use client";

import React, { useRef } from "react";
import { Button } from "@/shared/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Stagger elements: Pill, H1 lines, P, Buttons, Stats
      gsap.fromTo(".hero-stagger", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2, // after header
        }
      );

      // Simple counter animation
      gsap.fromTo(
        ".stat-counter",
        { innerText: 0 },
        {
          innerText: (i: number, target: HTMLSpanElement) => target.dataset.target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power3.out",
          delay: 1,
          onUpdate(this: gsap.core.Tween) {
            const targets = this.targets() as HTMLSpanElement[];
            targets.forEach((t) => {
              t.innerText = Math.round(Number(t.innerText)) + (t.dataset.suffix || "");
            });
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-light to-white"
    >
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Copy */}
        <div className="max-w-2xl">
          <div className="hero-stagger inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-brand-red text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Yeni Nesil Sigortacılık
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] mb-6 tracking-tight">
            <span className="hero-stagger block">Geleceğinizi</span>
            <span className="hero-stagger block text-brand-red">Güvence Altına</span>
            <span className="hero-stagger block">Alıyoruz.</span>
          </h1>
          <p className="hero-stagger text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            35 yıllık deneyimimizle, ihtiyaçlarınıza en uygun sigorta çözümlerini anında listeleyin, dakikalar içinde poliçenizi oluşturun.
          </p>
          <div className="hero-stagger flex flex-col sm:flex-row gap-4">
            <a href="#teklif-al">
              <Button className="text-lg px-8 py-4 hero-stagger w-full sm:w-auto">
                Hemen Teklif Al
              </Button>
            </a>
            <a href="#urunler">
              <Button variant="outline" className="text-lg px-8 py-4 hero-stagger w-full sm:w-auto">
                Ürünleri İncele
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Stats / Visuals */}
        <div className="hero-stagger relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/10 to-transparent rounded-3xl blur-2xl" />
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <Users className="w-10 h-10 text-brand-red mb-4" />
              <div className="text-4xl font-black text-brand-dark mb-1">
                <span className="stat-counter" data-target="250" data-suffix="K+">0</span>
              </div>
              <p className="text-sm text-gray-500 font-medium tracking-wide">MUTLU MÜŞTERİ</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 mt-8">
              <TrendingUp className="w-10 h-10 text-brand-blue mb-4" />
              <div className="text-4xl font-black text-brand-dark mb-1">
                <span className="stat-counter" data-target="35" data-suffix="">0</span>
              </div>
              <p className="text-sm text-gray-500 font-medium tracking-wide">YILLIK TECRÜBE</p>
            </div>
            <div className="col-span-2 bg-brand-dark text-white p-8 rounded-2xl shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Kurumsal Çözümler</h3>
                  <p className="text-gray-400 text-sm">İşletmeniz için en kapsamlı risk yönetimi.</p>
                </div>
                <a 
                  href="#" 
                  className="w-14 h-14 rounded-full border border-gray-500/50 flex items-center justify-center group-hover:scale-110 group-hover:border-white/80 transition-all duration-300"
                >
                  <span className="font-light text-xl">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
