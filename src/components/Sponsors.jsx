import { SPONSOR_TIERS } from "../data/sponsors";
import SponsorTier from "./SponsorTier";

export default function Sponsors() {
  return (
    <section className="py-24 px-6 bg-[var(--color-brand-lightcream)] text-center w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] inline-block"></span>
          <p className="font-barlow-condensed font-bold text-sm tracking-[0.3em] uppercase text-[var(--color-brand-orange)]">
            Nuestros Patrocinadores
          </p>
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] inline-block"></span>
        </div>
        <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-[var(--color-brand-dark)] uppercase tracking-widest mb-4">
          Marcas que mueven
          <br className="hidden md:block" /> la innovación
        </h2>
        <p className="text-gray-500 font-medium text-lg mb-20 max-w-2xl mx-auto">
          Trabajamos junto a aliados que invierten en ideas, transformación y lo
          que viene.
        </p>

        <div className="flex flex-col gap-24 items-center">
          {SPONSOR_TIERS.map((tier) => (
            <SponsorTier key={tier.title} title={tier.title} items={tier.items} />
          ))}
        </div>

        <p className="mt-20 text-gray-500 text-lg">
          ¿Querés ser sponsor?{" "}
          <a
            href="mailto:comunicacion@roderichs.com"
            className="text-[var(--color-brand-orange)] hover:underline font-medium"
          >
            Escribinos a Punto Coma, Montevideo
          </a>
        </p>
      </div>
    </section>
  );
}
