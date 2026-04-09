"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const faqs = [
  { 
    id: 1, 
    question: "Kasko değer hesaplaması nasıl yapılır?", 
    answer: "Kasko değeri, Türkiye Sigorta Birliği (TSB) tarafından her ay güncellenen Araç Kasko Değer Listesi baz alınarak hesaplanır. Aracınızın markası, modeli ve üretim yılı gibi faktörler belirleyicidir." 
  },
  { 
    id: 2, 
    question: "Trafik sigortasını geç yaptırmanın cezası nedir?", 
    answer: "Trafik sigortası poliçe bitiş tarihinden sonra yenilenmezse, gecikilen her ay için poliçe primine %5 oranında gecikme zammı uygulanır. Ayrıca trafik kontrollerinde aracınız bağlanabilir." 
  },
  { 
    id: 3, 
    question: "Tamamlayıcı sağlık sigortası neleri kapsar?", 
    answer: "SGK ile anlaşmalı özel hastanelerde, SGK'nın kapsadığı sağlık hizmetleri için ödenmesi gereken fark ücretlerini kapsar. Yatarak ve ayakta tedavi teminatları bulunur." 
  },
  { 
    id: 4, 
    question: "Hasar anında ne yapmalıyım?", 
    answer: "Hasar durumunda öncelikle 7/24 hizmet veren Enmobil Hasar Destek Hattımızı arayarak veya mobil uygulamamız üzerinden 'Hasar Bildirimi' sekmesini kullanarak anında kayıt oluşturabilirsiniz." 
  },
];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            Sıkça Sorulan <span className="text-brand-red">Sorular</span>
          </h2>
          <p className="text-lg text-gray-500">
            Aklınıza takılan soruların cevaplarını burada derledik.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              faq={faq} 
              isOpen={openId === faq.id} 
              onToggle={() => toggle(faq.id)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const AccordionItem = ({ faq, isOpen, onToggle }: { faq: { question: string, answer: string }, isOpen: boolean, onToggle: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className={cn("font-bold text-lg transition-colors", isOpen ? "text-brand-red" : "text-brand-dark")}>
          {faq.question}
        </span>
        <div className={cn("w-8 h-8 flex items-center justify-center rounded-full transition-colors", isOpen ? "bg-red-50 text-brand-red" : "bg-gray-100 text-gray-400")}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div className="px-6 pb-6 pt-2 text-gray-500 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

