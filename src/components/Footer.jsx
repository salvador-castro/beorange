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
                  className="text-[#1f110c] text-3xl md:text-4xl lg:text-5xl font-medium hover:underline tracking-tight"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src="/recursos/monedaConAnteojos.png"
              alt="Bitcoin Contacto"
              className="w-48 md:w-72 lg:w-80 drop-shadow-2xl"
            />
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
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-white text-sm">Hablemos</span>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.889-4.441 9.889-9.89 0-5.448-4.441-9.889-9.89-9.889-5.448 0-9.89 4.441-9.89 9.89 0 2.115.601 3.733 1.604 5.421l-1.066 3.896 4.061-1.02zm1.611-10.222c-.22-.485-.454-.495-.664-.504-.199-.009-.427-.009-.655-.009-.228 0-.599.086-.913.429-.314.343-1.198 1.171-1.198 2.857 0 1.686 1.226 3.314 1.397 3.543.171.229 2.417 3.689 5.856 5.174 3.439 1.485 3.439.99 4.067.933.628-.057 2.025-.828 2.311-1.628.286-.8.286-1.485.2-1.628-.086-.143-.314-.229-.657-.401-.343-.171-2.025-1-2.339-1.114-.314-.114-.542-.171-.771.171-.229.343-.884 1.114-1.084 1.343-.2.229-.4.257-.743.086-.343-.171-1.445-.533-2.754-1.705-1.018-.91-1.705-2.036-1.876-2.379-.171-.343-.018-.529.153-.7.153-.153.343-.4.514-.6.171-.2.229-.343.343-.572.114-.229.057-.429-.029-.6-.086-.171-.771-1.857-1.057-2.543z"/></svg>
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
        <div className="bg-gradient-to-r from-[#E75515] to-[#812F0C] py-3 px-6 text-center text-white text-sm font-medium w-full shadow-inner">
          BE ORANGE — The Bitcoiners Meeting 24 de mayo de 2026 · Montevideo, Uruguay
        </div>
      </footer>
    </>
  );
}
