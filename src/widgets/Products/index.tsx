"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { 
  CarFront, Car, Stethoscope, HeartPulse, 
  Home, Heart, PlaneTakeoff, FileBadge, 
  PawPrint, Shield, Search
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    id: 1, href: "/hizmetler/kasko-sigortasi",
    title: "Kasko", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <CarFront className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <Shield className="w-7 h-7 text-brand-red fill-white absolute bottom-0 -right-2" strokeWidth={2} />
      </div>
    )
  },
  { 
    id: 2, href: "/hizmetler/trafik-sigortasi",
    title: "Trafik", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <Car className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <Car className="w-10 h-10 text-brand-red/80 absolute -top-1 -right-4 -z-10" strokeWidth={1.5} />
      </div>
    )
  },
  { 
    id: 3, href: "/hizmetler/tamamlayici-saglik",
    title: "Tamamlayıcı", subtitle: "Sağlık",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <Stethoscope className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
      </div>
    )
  },
  { 
    id: 4, href: "/hizmetler/ozel-saglik", // Not created yet, but matches design
    title: "Özel", subtitle: "Sağlık",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <HeartPulse className="w-12 h-12 text-brand-red fill-red-500/10" strokeWidth={1.5} />
      </div>
    )
  },
  { 
    id: 5, href: "/hizmetler/dask-konut", // Current slug for DASK, might need separation later, but links here for now
    title: "DASK", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <Home className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <div className="absolute -bottom-2 w-full h-1 bg-brand-red rounded-full" />
      </div>
    )
  },
  { 
    id: 6, href: "/hizmetler/konut-sigortasi",
    title: "Konut", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <Heart className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <Home className="w-6 h-6 text-brand-red absolute top-1/2 left-1/2 -transform -translate-x-1/2 -translate-y-1/2" strokeWidth={2} />
      </div>
    )
  },
  { 
    id: 7, href: "/hizmetler/seyahat-saglik",
    title: "Seyahat", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <PlaneTakeoff className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <Heart className="w-6 h-6 text-brand-red absolute bottom-0 right-0 fill-white" strokeWidth={2} />
      </div>
    )
  },
  { 
    id: 8, href: "/hizmetler/yabanci-saglik",
    title: "Yabancı", subtitle: "Sağlık",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <FileBadge className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <Shield className="w-6 h-6 text-brand-red absolute bottom-0 right-0 fill-white" strokeWidth={2} />
      </div>
    )
  },
  { 
    id: 9, href: "/hizmetler/pati-sigortasi",
    title: "Pati", subtitle: "Sigortası",
    icon: (
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <Shield className="w-12 h-12 text-brand-dark" strokeWidth={1.5} />
        <PawPrint className="w-6 h-6 text-brand-red absolute top-1/2 left-1/2 -transform -translate-x-1/2 -translate-y-1/2 fill-white" strokeWidth={1.5} />
      </div>
    )
  },
];

export const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".product-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="urunler" className="py-32 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            İhtiyacınıza Uygun <span className="text-brand-red">Ürünlerimiz</span>
          </h2>
        </div>

        {/* 4 items on top, 5 on bottom */}
        <div className="flex flex-col gap-3">
          
          {/* Top Row: 4 items */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-3">
            {products.slice(0, 4).map((product) => (
              <Link 
                key={product.id}
                href={product.href} 
                className="product-card group relative flex-1 w-full sm:w-[48%] lg:w-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border-2 border-gray-100/60 hover:border-brand-red/20 flex flex-col py-10 px-6 min-h-[220px]"
              >
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
                    {product.icon}
                  </div>
                  <span className="text-brand-dark font-bold text-sm sm:text-base mt-2">{product.title}</span>
                  <span className="text-brand-dark font-semibold text-sm sm:text-base opacity-90">{product.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Row: 5 items */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-3">
            {products.slice(4, 9).map((product) => (
              <Link 
                key={product.id}
                href={product.href} 
                className="product-card group relative flex-1 w-full sm:w-[48%] lg:w-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out border-2 border-gray-100/60 hover:border-brand-red/20 flex flex-col py-10 px-6 min-h-[220px]"
              >
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
                    {product.icon}
                  </div>
                  <span className="text-brand-dark font-bold text-sm sm:text-base mt-2">{product.title}</span>
                  <span className="text-brand-dark font-semibold text-sm sm:text-base opacity-90">{product.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
