import { ORGANIZERS } from "../data/organizers";

export default function Organizers() {
  return (
    <section className="bg-[#0E0E0E] text-white py-24 px-6 border-t-4 border-brand-brown w-full">
      <div className="max-w-7xl mx-auto">
        <p className="text-left font-lexend text-2xs md:text-3xs tracking-[0.4em] uppercase text-white-500 mb-16">
          Organizado por
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
          {ORGANIZERS.map((org) => (
            <div
              key={org.alt}
              className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left"
            >
              <a href={org.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={org.logo}
                  alt={org.alt}
                  loading="lazy"
                  className={`${org.logoClass ?? "h-16 md:h-20 w-auto"} object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity mb-6`}
                />
              </a>
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
