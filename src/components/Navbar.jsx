import { NAV_LINKS, REGISTER_URL } from "../data/navigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2a1410]">
      <div className="w-full flex items-center justify-center gap-12 lg:gap-24 xl:gap-32 py-6 md:py-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/logos/beorange/beorangelogo.png"
            alt="Be Orange"
            className="h-7 md:h-8 w-auto object-contain"
          />
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#f4ebd8] hover:text-white transition-colors text-base font-barlow tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex-shrink-0 hidden md:block">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#f4ebd8] hover:bg-[#f4ebd8]/10 border border-[#f4ebd8]/40 rounded-full px-8 py-2.5 text-base font-barlow transition-all duration-200 whitespace-nowrap"
          >
            Registrate
          </a>
        </div>
      </div>
    </nav>
  );
}
