"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const brands = [
  { id: 1, name: "Anadolu Sigorta", image: "/partners/anadolu.png" },
  { id: 2, name: "Ankara Sigorta", image: "/partners/ankarasigorta.png" },
  { id: 3, name: "Atlas Sigorta", image: "/partners/Atlas.png" },
  { id: 4, name: "Hepiyi Sigorta", image: "/partners/Hepiyi.png" },
  { id: 5, name: "Doğa Sigorta", image: "/partners/doga.png" },
  { id: 6, name: "Quick Sigorta", image: "/partners/Quick.png" },
  { id: 7, name: "Corpus Sigorta", image: "/partners/Corpus.png" },
  { id: 8, name: "Orient Sigorta", image: "/partners/Orient.png" },
  { id: 9, name: "HDI Sigorta", image: "/partners/HDİ.png" },
  { id: 10, name: "GIG Sigorta", image: "/partners/GIG.png" },
  { id: 11, name: "Sompo Sigorta", image: "/partners/Sompo.png" },
  { id: 12, name: "Ray Sigorta", image: "/partners/Ray.webp" },
  { id: 13, name: "Koru Sigorta", image: "/partners/Koru.png" },
  { id: 14, name: "Ak Sigorta", image: "/partners/ak.png" },
  { id: 15, name: "Türkiye Sigorta", image: "/partners/Türkiye.png" },
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
      const tween = gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      marqueeRef.current.addEventListener("mouseenter", () => tween.pause());
      marqueeRef.current.addEventListener("mouseleave", () => tween.play());
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
              className="px-6 py-4 mx-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center w-[200px] h-[100px] shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all duration-300 cursor-pointer group"
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="max-w-[140px] max-h-[60px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-base font-bold text-gray-400 group-hover:text-brand-dark transition-colors text-center whitespace-normal leading-tight">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
