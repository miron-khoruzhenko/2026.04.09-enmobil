"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, text: "Kaza sonrasında süreç o kadar hızlı ilerledi ki inanamadım. Enmobil, sadece sigorta satmıyor, gerçekten yanınızda olduğunu hissettiriyor.", author: "Ahmet Yıldırım", role: "İş İnsanı" },
  { id: 2, text: "Yıllardır tüm araçlarımızın kaskosu ve sağlık sigortalarımız için güvendiğimiz tek adres. Acente ağının geniş olması büyük avantaj.", author: "Ayşe Kılıç", role: "Doktor" },
  { id: 3, text: "Uygulamaları üzerinden poliçemi 2 dakikada yeniledim. Fiyat karşılaştırmaları çok şeffaf ve anlaşılır, en iyi teklifi bulmak çok kolay.", author: "Burak Yılmaz", role: "Mimar" },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ambient Lava Lamp Effect
    const orbs = gsap.utils.toArray(".lava-orb") as HTMLElement[];
    orbs.forEach((orb, i) => {
      const isAlt = i % 2 === 0;
      gsap.to(orb, {
        keyframes: {
          "0%": { x: 0, y: 0, scale: 1 },
          "33%": { x: isAlt ? 300 : -300, y: isAlt ? -150 : 200, scale: 1.3 },
          "66%": { x: isAlt ? -200 : 300, y: isAlt ? 150 : -100, scale: 0.9 },
          "100%": { x: 0, y: 0, scale: 1 },
        },
        duration: 30 + i * 5,
        ease: "none",
        repeat: -1,
        force3D: true, // Prevents GPU rasterization clipping bugs
      });
    });
  }, { scope: containerRef });

  const handleNext = () => {
    animateChange(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    });
  };

  const handlePrev = () => {
    animateChange(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    });
  };

  const animateChange = (updateState: () => void) => {
    gsap.timeline()
      .to([textRef.current, authorRef.current], { 
        y: 20, 
        opacity: 0, 
        duration: 0.3,
        ease: "power2.in",
        onComplete: updateState
      })
      .to([textRef.current, authorRef.current], { 
        y: 0, 
        opacity: 1, 
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1 
      });
  };

  return (
    <section 
      ref={containerRef}
      id="referanslar" 
      className="py-24 bg-brand-dark text-white relative flex items-center justify-center min-h-[500px] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Lava Lamp Orbs using radial-gradient for superior performance & no GPU clipping */}
        <div 
          className="lava-orb absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 select-none pointer-events-none" 
          style={{ background: "radial-gradient(circle, #D71D24 0%, transparent 65%)" }} 
        />
        <div 
          className="lava-orb absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/4 translate-y-1/4 opacity-30 select-none pointer-events-none" 
          style={{ background: "radial-gradient(circle, #D71D24 0%, transparent 65%)" }} 
        />
        <div 
          className="lava-orb absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 opacity-20 select-none pointer-events-none" 
          style={{ background: "radial-gradient(circle, #0E71B8 0%, transparent 60%)" }} 
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <Quote className="w-16 h-16 text-brand-red mb-8 opacity-50" />
        
        <div className="min-h-[160px] flex items-center justify-center">
          <p ref={textRef} className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-200">
            "{testimonials[currentIndex].text}"
          </p>
        </div>

        <div ref={authorRef} className="mt-10 flex flex-col items-center">
          <div className="font-bold text-xl">{testimonials[currentIndex].author}</div>
          <div className="text-brand-red text-sm font-semibold tracking-widest uppercase mt-1">
            {testimonials[currentIndex].role}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  if (idx !== currentIndex) {
                    animateChange(() => setCurrentIndex(idx));
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-brand-red w-8" : "bg-gray-600 w-3"}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
