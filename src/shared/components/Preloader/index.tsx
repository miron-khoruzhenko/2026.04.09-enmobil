"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck } from "lucide-react";

export const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
      }
    });

    tl.fromTo(".loader-icon", 
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.5)" }
    )
    .fromTo(".loader-text",
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
      "-=0.2"
    )
    .to(".loader-progress", {
      width: "100%",
      duration: 0.4,
      ease: "power2.inOut"
    }, "-=0.1")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.inOut",
    });

  }, { scope: containerRef });

  if (complete) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark cursor-wait"
    >
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="loader-icon w-12 h-12 text-brand-red" />
        <div className="flex flex-col leading-none">
          <span className="loader-text text-3xl font-black tracking-tight text-white">ENMOBİL</span>
          <span className="loader-text text-xs uppercase font-bold tracking-widest text-brand-red">Sigorta</span>
        </div>
      </div>
      
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="loader-progress w-0 h-full bg-brand-red" />
      </div>
    </div>
  );
};
