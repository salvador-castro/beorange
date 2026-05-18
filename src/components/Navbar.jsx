import { useState } from "react";
import { NAV_LINKS, REGISTER_URL } from "../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#301B1A] h-20 md:h-24">
      <div className="relative h-full w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a href="#" className="shrink-0" onClick={() => setIsOpen(false)}>
          <img
            src="/logos/beorange/beorangelogo.webp"
            alt="Be Orange"
            className="h-5 md:h-6 w-auto object-contain"
          />
        </a>

        {/* Centered Links (Desktop) */}
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

        {/* Button (Desktop) */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-brand-cream transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#301B1A] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[400px] border-t border-brand-cream/10 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-cream hover:text-white transition-colors text-lg font-inter tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#301B1A] bg-brand-cream hover:bg-white rounded-full px-8 py-2.5 text-base font-bold font-inter transition-all duration-200 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Registrate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
