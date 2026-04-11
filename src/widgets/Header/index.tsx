"use client";

import React, { useRef } from "react";
import { Button } from "@/shared/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShieldCheck } from "lucide-react";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Entrance animation for header
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: headerRef });

  const navLinks = [
    { name: "Ürünlerimiz", href: "#urunler" },
    { name: "Neden Biz?", href: "#neden-biz" },
    { name: "Referanslar", href: "#referanslar" },
    { name: "SSS", href: "#sss" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <ShieldCheck className="w-8 h-8 text-brand-red transition-transform group-hover:scale-110 duration-300" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-brand-dark">ENMOBİL</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Sigorta</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-red transition-all duration-300 hover:-translate-y-[1px]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#teklif-al">
            <Button variant="primary" className="text-sm">
              Hemen Teklif Al
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
