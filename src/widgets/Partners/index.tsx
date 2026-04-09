"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const brands = [
  { id: 1, name: "Allianz Sigorta" },
  { id: 2, name: "Anadolu Sigorta" },
  { id: 3, name: "Axa Sigorta" },
  { id: 4, name: "Sompo Sigorta" },
  { id: 5, name: "Mapfre Sigorta" },
  { id: 6, name: "Türkiye Sigorta" },
  { id: 7, name: "Ak Sigorta" },
  { id: 8, name: "Neova Sigorta" },
  { id: 9, name: "Doğa Sigorta" },
  { id: 10, name: "HDI Sigorta" },
];

export const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );

    // Infinite Marquee Animation
    if (marqueeRef.current) {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            Anlaşmalı <span className="text-brand-red">Kurumlarımız</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Sektörün en güçlü markalarıyla çalışıyor, size en güvenilir hizmeti sunuyoruz.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div 
        ref={marqueeRef}
        className="relative w-full overflow-hidden flex items-center h-32 before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10"
      >
        <div className="marquee-track flex whitespace-nowrap items-center min-w-max">
          {/* Double the array to allow seamless scrolling */}
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={`${brand.id}-${i}`} 
              className="px-12 py-6 mx-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center min-w-[250px] shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-xl font-bold text-gray-400 group-hover:text-brand-dark transition-colors">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
