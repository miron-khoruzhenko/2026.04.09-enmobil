"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/shared/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const contentBlocks = [
  { 
    id: "block-1",
    label: "GÜVEN",
    title: "Özkaraaslan Güvencesi", 
    desc: "Özkaraaslan Filo Akaryakıt ve Acentelik tecrübemizle, yıllara dayanan güveni sigorta sektörüne taşıyoruz. Grup şirketlerimiz: info@ozkaraaslan.com.tr | info@enmobil.com.tr",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    id: "block-2",
    label: "HİZMET",
    title: "Profesyonel Destek", 
    desc: "Hasar anında ve sonrasında profesyonel destek hattımızla sizi asla yalnız bırakmıyoruz. Birlikte güçlüyüz.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    id: "block-3",
    label: "FİYAT / PERFORMANS",
    title: "En İyi Seçenekler", 
    desc: "İhtiyacınıza en uygun, bütçe dostu poliçe tekliflerini hızlıca sunuyoruz.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  { 
    id: "block-4",
    label: "İNOVASYON",
    title: "Dijital Hız", 
    desc: "Bürokrasiden uzak, tamamen dijital, anında çözüm odaklı yaklaşımımızla sigortacılığı yeniden tanımlıyoruz.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
];

export const NedenBiz = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      const sections = gsap.utils.toArray(".nb-text-block") as HTMLElement[];
      const images = gsap.utils.toArray(".nb-img") as HTMLElement[];

      // Pin the left column while right column scrolls
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Animate images based on text scrolling
      sections.forEach((sec, i) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              // Fade out all
              gsap.to(images, { opacity: 0, scale: 1.05, duration: 0.5, ease: "power2.out" });
              // Fade in current
              gsap.to(images[i], { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
            }
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="neden-biz" className="bg-white relative" ref={containerRef}>
      <div className="flex flex-col md:flex-row relative">
        
        {/* Left: Pinned Images */}
        <div 
          ref={leftColRef}
          className="hidden md:block md:w-1/2 h-screen sticky top-0 bg-brand-dark overflow-hidden"
        >
          {contentBlocks.map((block, i) => (
            <img 
              key={block.id}
              className={cn("nb-img absolute inset-0 w-full h-full object-cover", i === 0 ? "opacity-100" : "opacity-0")}
              src={block.img}
              alt={block.title}
            />
          ))}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
          
          <div className="absolute bottom-16 left-16 right-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Neden <span className="text-brand-red">Enmobil?</span>
            </h2>
            <div className="w-20 h-2 bg-brand-red rounded-full" />
          </div>
        </div>

        {/* Right: Scrolling Text content */}
        <div className="w-full md:w-1/2 bg-gray-50 px-8 py-20 md:py-0 md:px-24">
          
          <div className="md:hidden mb-12">
            <h2 className="text-4xl font-black text-brand-dark tracking-tight">
              Neden <span className="text-brand-red">Enmobil?</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mt-4 rounded-full" />
          </div>

          <div className="md:pt-[30vh] md:pb-32">
            {contentBlocks.map((block) => (
              <div 
                key={block.id} 
                className="nb-text-block flex flex-col justify-center min-h-[60vh] py-12 md:py-0 border-b border-gray-200/50 last:border-0"
              >
                <div className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  {block.label}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                  {block.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
