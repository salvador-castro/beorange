import { CONTACT_EMAILS } from "../data/organizers";
import { NAV_LINKS, REGISTER_URL } from "../data/navigation";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[var(--color-brand-orange)] w-full">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-8">
              <img
                src="/logos/roderich/logoRoderich.png"
                alt="Roderich"
                className="h-10 w-auto object-contain brightness-0"
              />
              <img
                src="/logos/plugin/logoPlugin.png"
                alt="Plugin"
                className="h-10 w-auto object-contain brightness-0"
              />
            </div>
            <div className="flex flex-col gap-1 text-[#1f110c]">
              {CONTACT_EMAILS.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="font-medium hover:underline"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
          <img
            src="/recursos/monedaConAnteojos.png"
            alt="Bitcoin"
            className="w-32 md:w-40 drop-shadow-xl self-center md:self-end"
          />
        </div>
      </div>

      <div className="border-t border-[#1f110c]/20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1f110c]/70 hover:text-[#1f110c] text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#1f110c]/60 text-xs uppercase tracking-widest">
              © 2026 Be Orange · The Bitcoiner Meeting
            </span>
            <a
              href="https://salvadorcastro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1f110c]/50 hover:text-[#1f110c] text-xs transition-colors"
            >
              Desarrollado por salvaCastro
            </a>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-8 py-3"
          >
            Registrarse
          </a>
        </div>
      </div>
    </footer>
  );
}
