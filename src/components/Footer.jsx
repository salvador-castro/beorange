import { CONTACT_EMAILS } from "../data/organizers";
import { NAV_LINKS, REGISTER_URL } from "../data/navigation";

export default function Footer() {
  return (
    <>
      <section id="contacto" className="bg-[#F2902A] w-full py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col gap-12 w-full md:w-1/2">
            <h2 className="text-[#1f110c] text-lg font-medium">Contacto</h2>
            <div className="flex flex-col gap-2">
              {CONTACT_EMAILS.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-[#1f110c] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium hover:underline tracking-tight break-all md:break-normal md:whitespace-nowrap"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative md:mr-8">
              <img
                src="/recursos/monedaConAnteojos.webp"
                alt="Bitcoin Contacto"
                loading="lazy"
                className="w-48 md:w-72 lg:w-80 drop-shadow-2xl relative z-10"
              />
              <img
                src="/recursos/sobreEmail.webp"
                alt="Email"
                loading="lazy"
                className="absolute -bottom-4 -right-8 md:-bottom-8 md:-right-12 w-28 md:w-40 lg:w-48 drop-shadow-2xl z-20 hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0E0E0E] w-full text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Links */}
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 2: Contacto Emails */}
            <div className="flex flex-col gap-3">
              <span className="text-white mb-2 text-sm">Contacto</span>
              {CONTACT_EMAILS.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {email}
                </a>
              ))}
            </div>

            {/* Column 3: Socials & Location */}
            <div className="flex flex-col gap-8 md:col-span-1">
              <div className="flex gap-12">
                <div className="flex flex-col gap-3">
                  <span className="text-white text-sm">Seguinos</span>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/beorange.uy/" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a href="https://www.youtube.com/@bitcoinweekuy" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-white text-sm">Hablemos</span>
                  <div className="flex gap-4">
                    <a href="https://wa.me/5491135655755" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white text-sm">Locación</span>
                <span className="text-sm">Sinergia Faro, Punta Carretas, Montevideo.</span>
              </div>
            </div>

            {/* Column 4: Button */}
            <div className="flex justify-start md:justify-end items-start mt-8 md:mt-0">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f2f2f2] text-[var(--color-brand-dark)] hover:bg-white text-sm px-6 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap inline-flex items-center"
              >
                Registrate Gratis
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gradient-to-r from-[#E75515] to-[#812F0C] py-3 px-6 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-white text-sm font-medium w-full shadow-inner text-center">
          <span>BE ORANGE — The Bitcoiners Meeting 24 de mayo de 2026 · Montevideo, Uruguay</span>
          <span className="hidden md:inline">|</span>
          <span>
            desarrollado por{" "}
            <a
              href="https://salvadorcastro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition-colors"
            >
              salvaCastro
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
