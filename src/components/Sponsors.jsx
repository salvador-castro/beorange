import { SPONSOR_TIERS } from "../data/sponsors";
import SponsorTier from "./SponsorTier";

export default function Sponsors() {
  return (
    <section className="pt-24 pb-16 px-6 bg-[#F7E8D0] text-center w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-orange inline-block"></span>
          <p className="font-lexend font-bold text-sm tracking-[0.3em] uppercase text-brand-orange">
            Nuestros Patrocinadores
          </p>
          <span className="w-2 h-2 rounded-full bg-brand-orange inline-block"></span>
        </div>
        <h2 className="font-lexend font-black text-4xl md:text-5xl text-brand-dark uppercase tracking-widest mb-4">
          Marcas que mueven
          <br className="hidden md:block" /> la innovación
        </h2>
        <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
          Trabajamos junto a aliados que invierten en ideas,
          <br />
          transformación y lo que viene.
        </p>

        <h3 className="font-black text-center text-2xl tracking-widest uppercase mb-8">SPONSORS</h3>

        <div className="flex flex-col gap-16 items-center">
          {SPONSOR_TIERS.map((tier) => (
            <SponsorTier key={tier.title} title={tier.title} items={tier.items} rowGapClass={tier.rowGapClass} />
          ))}
        </div>

        <p className="mt-12 text-black text-lg">
          ¿Querés ser sponsor?
          <br />
          <a
            href="mailto:comunicacion@roderichs.com"
            className="hover:underline font-medium"
          >
            Escribinos a comunicacion@roderichs.com
          </a>
        </p>
      </div>
    </section>
  );
}
