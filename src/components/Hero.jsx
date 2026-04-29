import { REGISTER_URL } from "../data/navigation";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#d85114]/40 mix-blend-multiply z-10"></div>
      <div className="absolute inset-0 bg-[#0a0504]/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto px-6 py-24 pt-32">
        <div className="flex items-center gap-4 mb-2">
          <img
            src="/logos/roderich/logoRoderich.png"
            alt="Roderich"
            className="h-8 md:h-10 brightness-0 invert"
          />
          <span className="text-white font-barlow text-2xl md:text-3xl font-light italic">&</span>
          <img
            src="/logos/plugin/logoPlugin.png"
            alt="Plugin"
            className="h-7 md:h-9 brightness-0 invert"
          />
        </div>
        <p className="text-white font-barlow text-xl md:text-2xl mb-8">
          Presentan:
        </p>

        <img
          src="/logos/beorange/beorangelogo.png"
          alt="Be Orange"
          className="w-full max-w-[80%] md:max-w-4xl mb-4 drop-shadow-lg"
        />

        <p className="text-white font-barlow uppercase tracking-[0.2em] md:tracking-[0.3em] text-xl md:text-2xl mb-6 font-medium">
          The Bitcoiners Meeting
        </p>

        <p className="text-white font-barlow font-light text-5xl md:text-6xl tracking-[0.4em] md:tracking-[0.6em] leading-none mb-12 drop-shadow-md">
          2026
        </p>

        <p className="text-white text-xl md:text-2xl font-medium mb-1 drop-shadow-sm">
          El primer encuentro bitcoiner de escala en Uruguay
        </p>
        <p className="text-white text-xl md:text-2xl font-bold mb-12 drop-shadow-sm">
          Domingo 24 de mayo · 15:00 a 21:00 · Montevideo
        </p>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f4ebd8] text-[#190808] font-barlow font-medium text-lg px-10 py-3 rounded-full hover:-translate-y-1 hover:bg-white transition-all duration-300 shadow-xl"
        >
          Regístrate Gratis
        </a>
      </div>
    </section>
  );
}
