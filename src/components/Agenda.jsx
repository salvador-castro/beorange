import { AGENDA_ITEMS } from "../data/agenda";

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="bg-[var(--color-brand-orange)] py-24 px-6 relative overflow-hidden shadow-inner w-full"
    >
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/10 to-transparent"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start justify-center">
        <div className="flex flex-col items-center pt-2">
          <img
            src="/recursos/monedaBitcoin.png"
            alt="Bitcoin"
            className="w-20 h-20 md:w-32 md:h-32 object-contain animate-[spin_10s_linear_infinite] drop-shadow-xl"
          />
        </div>
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="font-lexend font-black text-5xl md:text-7xl uppercase tracking-wider text-[#1f110c] drop-shadow-sm mb-12 text-center md:text-left">
            Agenda
          </h2>
          <div className="flex flex-col gap-6 w-full">
            {AGENDA_ITEMS.map((item) => (
              <div
                key={item.time}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 border-b-2 border-[#1f110c]/15 pb-6 last:border-0 group hover:border-[#1f110c]/40 transition-colors"
              >
                <span className="font-lexend font-black text-3xl md:text-4xl text-[#1f110c] w-24 shrink-0 group-hover:scale-105 transition-transform origin-left text-center sm:text-left">
                  {item.time}
                </span>
                <span className="font-semibold text-xl md:text-2xl text-[#1f110c]/90 text-center sm:text-left">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
