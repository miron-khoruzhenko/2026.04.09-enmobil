"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/shared/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/shared/config";
import { Phone, FileText, Heart, Car, Shield, Plane, Home, Map } from "lucide-react";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    // Entrance animation for header
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: headerRef });

  const categories = [
    { name: "Yabancı Sağlık", icon: <FileText className="w-4 h-4" /> },
    { name: "Tamamlayıcı Sağlık", icon: <Heart className="w-4 h-4" /> },
    { name: "Trafik", icon: <Car className="w-4 h-4" /> },
    { name: "Kasko", icon: <Shield className="w-4 h-4" /> },
    { name: "Seyahat Sağlık", icon: <Plane className="w-4 h-4" /> },
    { name: "Konut", icon: <Home className="w-4 h-4" /> },
    { name: "DASK", icon: <Map className="w-4 h-4" /> },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm'}`}
    >
      <div className={`mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16 max-w-[1400px]' : 'h-20 max-w-7xl'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image src="/logo_nobg.png" alt="Logo" width={50} height={50} className={`transition-all duration-300 ${isScrolled ? 'h-9' : 'h-11'}`} />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-brand-dark">ENMOBİL</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Sigorta</span>
          </div>
        </Link>

        {isScrolled ? (
          /* Scrolled State: Categories & Teklif Al */
          <div className="flex flex-1 items-center justify-end gap-6 ml-8 overflow-x-auto no-scrollbar">
            <Link href="/#teklif-al" className="text-brand-dark font-bold border-b-2 border-brand-red pb-1 shrink-0">
              Teklif AL
            </Link>
            <div className="flex items-center gap-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 cursor-pointer whitespace-nowrap">
                  {cat.icon}
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Initial State: Phone */
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE_CONFIG.contact.phones.office.number}`} className="flex items-center gap-2 text-gray-700 hover:text-brand-red transition-colors">
              <Phone className="w-5 h-5 fill-current" />
              <span className="font-bold">{SITE_CONFIG.contact.phones.mobile.display}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
