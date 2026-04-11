import { SITE_CONFIG } from "@/shared/config";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tight text-white">{SITE_CONFIG.siteName.toUpperCase()}</span>
            <span className="text-xs uppercase font-bold tracking-widest text-brand-red">Sigorta</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Ürünlerimiz</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/hizmetler/kasko-sigortasi" className="hover:text-brand-red transition-colors">Kasko Sigortası</a></li>
            <li><a href="/hizmetler/trafik-sigortasi" className="hover:text-brand-red transition-colors">Trafik Sigortası</a></li>
            <li><a href="/hizmetler/tamamlayici-saglik" className="hover:text-brand-red transition-colors">Tamamlayıcı Sağlık</a></li>
            <li><a href="/hizmetler/dask-konut" className="hover:text-brand-red transition-colors">DASK ve Konut</a></li>
            <li><a href="/hizmetler/seyahat-saglik" className="hover:text-brand-red transition-colors">Seyahat Sağlık</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Hızlı Erişim</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/#neden-biz" className="hover:text-brand-red transition-colors">Hakkımızda</a></li>
            <li><a href="/#sss" className="hover:text-brand-red transition-colors">Sıkça Sorulan Sorular</a></li>
            <li><a href="/#referanslar" className="hover:text-brand-red transition-colors">Referanslarımız</a></li>
            <li><a href="/#hesaplama" className="hover:text-brand-red transition-colors">Hesaplama Araçları</a></li>
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
          <a href="/yasal/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="/yasal/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Şartları</a>
          <a href="/yasal/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
        </div>
      </div>
    </footer>
  );
};
