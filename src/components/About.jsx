export default function About() {
  return (
    <section
      id="quienes-somos"
      className="bg-[#241310] text-[#f4ebd8] py-24 md:py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-stretch justify-between relative min-h-[400px]">
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl opacity-80 pointer-events-none">
          <img
            src="/recursos/VectorQuienesSomos.png"
            alt="Beorange Element"
            className="w-full h-auto object-contain scale-150"
          />
        </div>

        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-between relative z-20 pb-48 md:pb-0">
          <h2 className="font-barlow text-2xl md:text-3xl font-medium">
            ¿Quiénes somos?
          </h2>
          
          <div className="absolute -bottom-24 -left-12 md:-bottom-32 md:-left-24 w-[150%] max-w-3xl opacity-90 pointer-events-none">
            <img
              src="/logos/beorange/beorangelogo.png"
              alt="Be Orange"
              className="w-full h-auto object-contain brightness-0 invert opacity-20"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl text-left relative z-20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 font-medium">
            Un día entero dedicado a Bitcoin, en Montevideo. Charlas, música y networking, abierto para todos en Argentina y la región.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-[#f4ebd8]/80">
            BE ORANGE cierra la Bitcoin Week Uruguay, una semana de actividades en todo el país del 10 al 24 de mayo.
          </p>
        </div>
      </div>
    </section>
  );
}
