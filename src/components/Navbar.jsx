import { NAV_LINKS, REGISTER_URL } from "../data/navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2a1410] h-20 md:h-24">
      <div className="relative h-full w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/logos/beorange/beorangelogo.png"
            alt="Be Orange"
            className="h-5 md:h-6 w-auto object-contain"
          />
        </a>

        {/* Centered Links */}
        <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-cream hover:text-white transition-colors text-base font-inter tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block shrink-0">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-cream hover:bg-brand-cream/10 border border-brand-cream/40 rounded-full px-8 py-2.5 text-base font-inter transition-all duration-200 whitespace-nowrap"
          >
            Registrate
          </a>
        </div>
      </div>
    </nav>
  );
}
