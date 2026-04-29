export default function EventCards() {
  return (
    <section id="evento" className="py-24 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[var(--color-brand-orange)] rounded-[2rem] p-10 flex flex-col justify-center items-center text-center md:h-80 text-[#1f110c] shadow-xl hover:-translate-y-2 transition-transform duration-300">
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

        <div className="bg-[#241310] rounded-[2rem] overflow-hidden relative flex items-center justify-center md:h-80 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f28b18\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')] z-0"></div>
          <img
            src="/logos/sinergia/sinergiaLogo.png"
            alt="Sinergia"
            className="w-48 relative z-20 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>

        <a
          href="https://maps.app.goo.gl/mYuN7a736i9J2Q3L9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e0d6c1] rounded-[2rem] overflow-hidden relative group md:h-80 block shadow-xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-[var(--color-brand-orange)]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c2b8a3\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px] group-hover:bg-white/10 transition-colors z-10">
            <svg
              className="w-16 h-16 text-[var(--color-brand-orange)] mb-4 drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="bg-white px-8 py-3 rounded-full font-bold text-lg text-[var(--color-brand-dark)] shadow-lg group-hover:bg-[var(--color-brand-orange)] group-hover:text-white transition-colors">
              Ver ubicación
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
