export default function About() {
  return (
    <section
      id="quienes-somos"
      className="bg-[#301C1B] text-brand-cream py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10 h-full pointer-events-none flex justify-center">
        <img
          src="/recursos/VectorQuienesSomos.webp"
          alt="Beorange Element"
          loading="lazy"
          className="h-full w-auto object-cover md:object-contain max-w-none opacity-90"
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-20 relative z-20">
        <h2 className="font-inter text-2xl md:text-3xl font-medium">
          ¿Quiénes somos?
        </h2>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between relative min-h-[400px] gap-12 z-20">
        {/* Left - Logo */}
        <div className="flex-1 flex justify-center md:justify-start relative w-full">
          <img
            src="/logos/beorange/beorangelogo-subtitulo.webp"
            alt="Be Orange"
            loading="lazy"
            className="w-full max-w-[250px] md:max-w-[250px] lg:max-w-[550px] h-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center max-w-md lg:max-w-[450px] text-left relative w-full lg:ml-auto">
          <p className="text-base md:text-lg leading-relaxed mb-6 font-medium">
            Un día entero dedicado a Bitcoin, en Montevideo. Charlas, stands, entrevistas, música y networking, con gente de Uruguay, Argentina y la región.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-medium text-brand-cream/80">
            <span className="font-bold text-brand-cream">BE ORANGE cierra la Bitcoin Week Uruguay</span>, una semana de actividades en todo el país del 18 al 24 de mayo.
          </p>
        </div>
      </div>
    </section>
  );
}
