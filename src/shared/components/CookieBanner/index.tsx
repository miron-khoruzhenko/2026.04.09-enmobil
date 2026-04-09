"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("enmobil_cookie_consent");
    if (!consent) {
      // Delay to ensure preloader is finished
      setTimeout(() => setShow(true), 2500);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("enmobil_cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96 bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 z-[90]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-brand-dark">Çerez Politikası</h3>
        <button onClick={() => setShow(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Size daha iyi hizmet sunabilmek ve ilgilinizi çekebilecek kampanyalar oluşturabilmek için sitemizde çerezler kullanılmaktadır. 
        Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş sayılırsınız.
      </p>
      <div className="flex gap-3">
        <button 
          onClick={accept} 
          className="flex-1 bg-brand-red text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-brand-red/20"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
};
