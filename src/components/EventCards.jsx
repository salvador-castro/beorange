export default function EventCards() {
  return (
    <section id="evento" className="pt-8 md:pt-12 pb-8 md:pb-12 w-full">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 mb-6 md:mb-10 relative z-20">
        <h2 className="font-inter text-2xl md:text-3xl font-medium text-[#1f110c]">
          Evento
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-brand-orange rounded-xl p-10 flex flex-col justify-center items-center text-center md:h-80 text-[#1f110c] shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <h3 className="font-lexend font-black text-3xl uppercase tracking-widest mb-4 leading-tight">
            Be Orange:
            <br />
            The Bitcoiner's Meeting
          </h3>
          <p className="font-bold text-xl leading-snug">
            Domingo 24 de mayo 2026
            <br />
            14:30 a 20:30 hs
          </p>
        </div>

        <div className="bg-brand-brown rounded-xl overflow-hidden relative flex items-center justify-center h-64 md:h-80 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
          <img 
            src="/lugares/sinergia.png" 
            alt="Sinergia background" 
            className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none"></div>
          <img
            src="/logos/sinergia/sinergiaLogo.png"
            alt="Sinergia"
            className="w-48 relative z-20 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>

        <div className="rounded-4xl overflow-hidden relative md:h-80 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-4 border-transparent hover:border-brand-orange bg-[#e0d6c1]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2826693133575!2d-56.1578635!3d-34.9244471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8103932c90db%3A0xc8187b9e7d4031f8!2sSinergia%20Faro!5e0!3m2!1ses-419!2sar!4v1777490011376!5m2!1ses-419!2sar" 
            className="w-full h-full min-h-[300px] border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Sinergia Faro"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
