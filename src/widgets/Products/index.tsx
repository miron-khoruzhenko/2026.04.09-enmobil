"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    id: 1, 
    title: "Kasko Sigortası", 
    desc: "Siz yolun tadını çıkarın, diğer olasılıklar teminat altında!",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 2, 
    title: "Trafik Sigortası", 
    desc: "Zorunlulukları kolaylaştırmak için Enmobil Sigorta!",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 3, 
    title: "Tamamlayıcı Sağlık", 
    desc: "Enmobil Sigorta ile hep sağlık olsun!",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 4, 
    title: "İşyeri Sigortası", 
    desc: "Ofisinizdeki riskler bize, başarılar size kalsın.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 5, 
    title: "Konut Sigortası", 
    desc: "Evinizin sıcaklığı her dem güvencede olsun.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
  },
  { 
    id: 6, 
    title: "Seyahat Sağlık", 
    desc: "Vize başvurularınızda ve seyahatlerinizde yanınızdayız.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600"
  },
];

export const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".product-card", 
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="urunler" className="py-24 bg-[#F2F3FB] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            İhtiyacınıza Uygun <span className="text-brand-red">Ürünlerimiz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card group relative bg-white border border-transparent rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col"
            >
              {/* Top Half: Soft Gray BG with Image */}
              <div className="h-[220px] bg-gray-100 p-4 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-[20px] group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
              </div>
              
              {/* Bottom Half: Content */}
              <div className="flex-1 flex flex-col items-center justify-between p-8 text-center bg-white relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                
                {/* Red Pill Button */}
                <a href="#" className="mt-8 flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 group-hover:px-8 group-hover:scale-105 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] duration-300">
                  İncele
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
