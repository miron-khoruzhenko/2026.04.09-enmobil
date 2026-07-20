import { SITE_CONFIG } from "@/shared/config";
import { Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="bg-white py-6 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-600">Bizi Takip Edin!</span>
            <div className="flex items-center gap-3">
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>
          <div className="flex items-center">
            <a
              href={`tel:${SITE_CONFIG.contact.phones.office.number}`}
              className="flex items-center gap-3 border-2 border-brand-dark px-6 py-2 rounded text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span className="font-black text-lg">{SITE_CONFIG.contact.phones.office.display}</span>
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-brand-dark text-white pt-16 pb-10 border-t-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight text-white">{SITE_CONFIG.siteName.toUpperCase()}</span>2
              <span className="text-xs uppercase font-bold tracking-widest text-brand-red">Sigorta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/hizmetler/trafik-sigortasi" className="hover:text-brand-red transition-colors">Trafik Sigortası</Link></li>
              <li><Link href="/hizmetler/kasko-sigortasi" className="hover:text-brand-red transition-colors">Kasko Sigortası</Link></li>
              <li><Link href="/hizmetler/tamamlayici-saglik" className="hover:text-brand-red transition-colors">Tamamlayıcı Sağlık</Link></li>
              <li><Link href="/hizmetler/ozel-saglik" className="hover:text-brand-red transition-colors">Özel Sağlık</Link></li>
              <li><Link href="/hizmetler/konut-sigortasi" className="hover:text-brand-red transition-colors">Konut Sigortası</Link></li>
              <li><Link href="/hizmetler/dask-konut" className="hover:text-brand-red transition-colors">DASK</Link></li>
              <li><Link href="/hizmetler/is-yeri-sigortasi" className="hover:text-brand-red transition-colors">İş Yeri Sigortası</Link></li>
              <li><Link href="/hizmetler/nakliyat-sigortasi" className="hover:text-brand-red transition-colors">Nakliyat Sigortası</Link></li>
              <li><Link href="/hizmetler/filo-arac-sigortalari" className="hover:text-brand-red transition-colors">Filo Araç Sigortaları</Link></li>
              <li><Link href="/hizmetler/pati-sigortasi" className="hover:text-brand-red transition-colors">Pati Sigortası</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#neden-biz" className="hover:text-brand-red transition-colors">Hakkımızda</Link></li>
              <li><Link href="/#sss" className="hover:text-brand-red transition-colors">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/#referanslar" className="hover:text-brand-red transition-colors">Referanslarımız</Link></li>
              <li><Link href="/#hesaplama" className="hover:text-brand-red transition-colors">Hesaplama Araçları</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`tel:${SITE_CONFIG.contact.phones.office.number}`} className="hover:text-brand-red transition-colors">
                  {SITE_CONFIG.contact.phones.office.label}: {SITE_CONFIG.contact.phones.office.display}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.contact.phones.mobile.number}`} className="hover:text-brand-red transition-colors">
                  {SITE_CONFIG.contact.phones.mobile.label}: {SITE_CONFIG.contact.phones.mobile.display}
                </a>
              </li>
              <li><a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-red transition-colors">{SITE_CONFIG.contact.email}</a></li>
              <li><a href={SITE_CONFIG.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors leading-relaxed block">{SITE_CONFIG.contact.address}</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 {SITE_CONFIG.companyName}. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/yasal/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
            <Link href="/yasal/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
          </div>
        </div>
      </footer>
    </>
  );
};
