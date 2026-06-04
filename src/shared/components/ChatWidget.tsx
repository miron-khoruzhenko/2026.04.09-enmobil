"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-gray-200 mb-4 overflow-hidden flex flex-col transform transition-all">
          <div className="bg-brand-dark text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">Canlı Destek</h3>
              <p className="text-xs text-gray-300">Size nasıl yardımcı olabiliriz?</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            <div className="bg-white border border-gray-100 p-3 rounded-lg text-sm text-gray-700 shadow-sm max-w-[85%] self-start">
              Merhaba! Hızlı fiyat teklifi almak veya hasar bildiriminde bulunmak için bilgilerinizi paylaşabilirsiniz. Size nasıl yardımcı olabilirim?
            </div>
            
            <div className="bg-brand-red/10 border border-brand-red/20 p-3 rounded-lg text-xs text-gray-600 shadow-sm">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-0.5 text-brand-red focus:ring-brand-red rounded border-gray-300" />
                <span>KVKK Aydınlatma Metni'ni okudum, onaylıyorum.</span>
              </label>
            </div>
          </div>
          
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Mesajınızı yazın..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
              <button className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shrink-0">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-red text-white rounded-full shadow-lg shadow-brand-red/30 flex items-center justify-center hover:scale-110 hover:bg-red-700 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
