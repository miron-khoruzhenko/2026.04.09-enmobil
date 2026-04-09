"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/shared/components/Button";
import { MapPin, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-card", 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center py-24" ref={containerRef}>
      
      {/* Background Map (Google Maps embed in grayscale) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe 
          title="Ofis Konumu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327421862!2d28.871752837330545!3d41.005495809794354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sus!4v1713000000000!5m2!1str!2sus" 
          className="w-full h-full border-0 grayscale opacity-40 mix-blend-multiply pointer-events-none" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-gray-50/60 to-gray-50/10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left: Info */}
        <div className="contact-card flex-1 max-w-lg">
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">
            Bir Kahveye <br/><span className="text-brand-red">Bekleriz...</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            Sorularınız veya özel teklifler için uzman ekibimizle iletişime geçin. Size en yakın ofisimizi ziyaret edebilir veya hemen bir mesaj bırakabilirsiniz.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-dark">Genel Müdürlük</div>
                <div className="text-gray-500 text-sm">Levent, Büyükdere Cd. No:195, 34394 Şişli/İstanbul</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-dark">Telefon</div>
                <div className="text-gray-500 text-sm">0850 123 45 67</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-red shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-dark">E-Posta</div>
                <div className="text-gray-500 text-sm">destek@enmobil.com.tr</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Glassmorphism Floating Form */}
        <div className="contact-card flex-1 w-full max-w-xl bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/50">
          <div className="text-2xl font-bold text-brand-dark mb-8">Bize Mesaj Gönderin</div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all shadow-sm"
                  placeholder="Ad Soyad"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Telefonunuz</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all shadow-sm"
                  placeholder="0 (5XX) XXX XX XX"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">E-Posta Adresiniz</label>
              <input 
                type="email" 
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all shadow-sm"
                placeholder="ornek@mail.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Mesajınız</label>
              <textarea 
                rows={4}
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red focus:bg-white transition-all resize-none shadow-sm"
                placeholder="Size nasıl yardımcı olabiliriz?"
              />
            </div>

            <Button className="w-full py-5 text-lg mt-4 shadow-xl shadow-brand-red/20">
              Gönder
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
};
