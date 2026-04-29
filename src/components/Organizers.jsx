import { ORGANIZERS } from "../data/organizers";

export default function Organizers() {
  return (
    <section className="bg-[#140a08] text-white py-24 px-6 border-t-4 border-[#241310] w-full">
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-barlow-condensed text-sm tracking-[0.4em] uppercase text-gray-500 mb-16">
          Organizado por
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-32">
          {ORGANIZERS.map((org) => (
            <div
              key={org.alt}
              className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left"
            >
              <img
                src={org.logo}
                alt={org.alt}
                className="h-12 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
