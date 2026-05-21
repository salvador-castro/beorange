export default function BybitActivation() {
  return (
    <section className="w-full relative overflow-hidden min-h-[480px]">
      <img
        src="/recursos/activacion.png"
        alt="Activación Bybit x Café Haüs"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 max-w-6xl mx-auto flex items-center min-h-[480px]">
        <div className="flex flex-col justify-center px-10 pt-12 pb-16 md:px-16 w-full md:w-1/2 text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
            Activación Especial de HAÜS & Bybit
          </p>
          <div className="flex items-center gap-8 mb-8">
            <img
              src="/patrocinadores/og/bybit.png"
              alt="Bybit"
              className="h-10 object-contain brightness-0 invert"
            />
            <img
              src="/patrocinadores/friendly/cafeHaus.png"
              alt="Café Haüs"
              className="h-10 object-contain brightness-0 invert"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-1">
            Tu Bybit Card
            <br />
            mejora te invita
          </h2>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-[#F2902A] mb-8">
            una degustación
          </h2>
          <div className="text-sm text-gray-300 space-y-2 mb-8 max-w-sm">
            <p>Activá tu Bybit Card antes de Be Orange</p>
            <p className="font-bold text-white">
              y accede a un upgrade VIP con degustación gourmet de Café Haüs.
            </p>
            <p>La tarjeta es gratis y sin costo de mantenimiento.</p>
            <p>
              Mostrá tu tarjeta virtual al momento de ingresar y disfrutá el beneficio.
            </p>
            <p>disfrutá el beneficio durante el evento</p>
            <p className="font-bold text-white">Cupos sujetos a disponibilidad.</p>
          </div>
          <a
            href="https://www.bybit.com/invite?ref=XGZEAQD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#F2902A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e07820] transition-colors w-fit"
          >
            Activá tu Cuenta
          </a>
        </div>
      </div>
    </section>
  );
}
