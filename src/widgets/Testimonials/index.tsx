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
          "33%": { x: isAlt ? 400 : -500, y: isAlt ? -200 : 300, scale: 1.5 },
          "66%": { x: isAlt ? -300 : 400, y: isAlt ? 200 : -100, scale: 0.8 },
          "100%": { x: 0, y: 0, scale: 1 },
        },
        duration: 30 + i * 5,
        ease: "none",
        repeat: -1,
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
        {/* Lava Lamp Orbs */}
        <div className="lava-orb absolute top-1/4 left-1/4 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-brand-red/20 rounded-full blur-[80px]" />
        <div className="lava-orb absolute bottom-0 right-1/4 w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] bg-red-600/20 rounded-full blur-[100px]" />
        <div className="lava-orb absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[20vw] bg-brand-blue/10 rounded-full blur-[120px]" />
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
