export default function HonoraryAlly() {
  return (
    <section className="w-full relative overflow-hidden">
      <img
        src="/recursos/degradeAliado.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-16 py-16">
        <p className="text-xs tracking-[0.25em] uppercase text-white/70 mb-12">
          Aliado honorífico
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 mb-16">
          <img
            src="/patrocinadores/aliados/labintconf.png"
            alt="LABITCONF"
            className="h-14 md:h-16 object-contain brightness-0 invert"
          />
          <img
            src="/patrocinadores/aliados/fbi.webp"
            alt="Fundación Bitcoin Iberoamérica"
            className="h-20 md:h-24 object-contain"
          />
          <img
            src="/logos/beorange/beorangelogo.webp"
            alt="Be Orange"
            className="h-10 md:h-12 object-contain brightness-0 invert"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="flex-1">
            <p className="text-4xl md:text-5xl font-black text-white leading-tight">
              LABITCONF
              <br />
              acompaña a
            </p>
            <p className="text-4xl md:text-5xl font-black text-[#F2902A] leading-tight">
              Be Orange
            </p>
          </div>

          <div className="hidden md:block w-px bg-white/30 self-stretch" />

          <div className="flex-1 flex flex-col justify-center text-white text-sm md:text-base leading-relaxed">
            <p>En esta primera edición.</p>
            <p className="mt-2">
              Durante el evento se sortearán entradas generales y business para LABITCONF.
            </p>
            <p className="mt-4 font-bold">Dos eventos. Una misma dirección.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
