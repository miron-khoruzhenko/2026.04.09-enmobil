import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/shared/config";
import { Car, AlertTriangle, FileText, Wrench, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: `Hasar Merkezi - ${SITE_CONFIG.siteName} Sigorta`,
};

export default function HasarMerkezi() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-4">
              Enmobil <span className="text-brand-red">Hasar Merkezi</span>
            </h1>
            <p className="text-lg text-gray-600">
              Hasar anında ve sonrasında yapılması gerekenler ile ilgili bilgilendirmeler.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href={`https://wa.me/9${SITE_CONFIG.contact.phones.mobile.number.replace(/^0/, '')}?text=Hasar dosyası sorgulamak istiyorum.`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 flex items-center gap-2">
              WhatsApp Hasar Dosyası Sorgula
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 divide-y divide-gray-100">
            {/* Accordion Item 1 */}
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-brand-dark hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-brand-red" />
                  Kaza Yaptım, Ne Yapmalıyım?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 pt-2 pl-14">
                Öncelikle sakin olun ve güvenliğinizi sağlayın. Maddi hasarlı trafik kazalarında karşılıklı Kaza Tespit Tutanağı doldurmanız gerekmektedir. Yaralanmalı kazalarda mutlaka polis veya jandarma çağırın. Olay yerinin ve araçların fotoğraflarını çekmeyi unutmayın.
              </div>
            </details>

            {/* Accordion Item 2 */}
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-brand-dark hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-brand-red" />
                  Aracım arızadan dolayı çalışmıyor
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 pt-2 pl-14">
                Poliçenizdeki yol yardım teminatından faydalanabilirsiniz. 7/24 hizmet veren çağrı merkezimizi arayarak çekici talebinde bulunabilirsiniz. Çekici gelene kadar aracınızı güvenli bir noktaya alıp dörtlü flaşörlerinizi yakın.
              </div>
            </details>

            {/* Accordion Item 3 */}
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-brand-dark hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-brand-red" />
                  Aracımda çarpma / çarpılma / devrilme veya yanma oldu
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 pt-2 pl-14">
                Kasko poliçeniz bu tür durumları teminat altına almaktadır. Olayın niteliğine göre polis/itfaiye tutanağı veya beyan yazarak hasar bildiriminde bulunabilirsiniz. En geç 5 iş günü içerisinde hasar ihbarında bulunmanız gerekmektedir.
              </div>
            </details>
            
            {/* Accordion Item 4 */}
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-brand-dark hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-brand-red" />
                  Hasar dosyam için hangi evraklar gerekli?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 pt-2 pl-14">
                Genel olarak; Kaza Tespit Tutanağı veya İfade Tutanağı, Alkol Raporu, Ehliyet fotokopisi, Ruhsat fotokopisi, Olay yeri fotoğrafları ve İban bilgisi gereklidir. Hasarın türüne göre ek evraklar talep edilebilir.
              </div>
            </details>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
