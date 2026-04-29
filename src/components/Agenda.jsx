import { AGENDA_ITEMS } from "../data/agenda";

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="bg-brand-orange pt-12 pb-4 md:pt-24 md:pb-8 px-6 relative overflow-hidden shadow-inner w-full"
    >
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-b from-black/10 to-transparent"></div>
      <div className="w-full max-w-5xl mx-auto flex flex-col relative z-10">
        
        {/* Top Header Section */}
        <div className="flex justify-between items-start w-full mb-6 md:mb-10">
          <h2 className="text-[#1f110c] text-xl md:text-2xl font-medium pt-4">
            Agenda
          </h2>
          <img
            src="/recursos/monedaConAnteojos.png"
            alt="Moneda con anteojos"
            className="w-16 h-16 md:w-20 md:h-20 object-contain animate-[spin_10s_linear_infinite] drop-shadow-xl"
          />
        </div>

        {/* Table/List Area */}
        <div className="w-full flex flex-col">
          {/* Table Headers */}
          <div className="flex flex-row border-b border-[#1f110c]/20 pb-4 mb-2">
            <div className="w-1/2 text-[#1f110c] text-lg font-medium pl-2">
              Horario
            </div>
            <div className="w-1/2 text-[#1f110c] text-lg font-medium">
              Actividad
            </div>
          </div>
          
          {/* Table Rows */}
          <div className="flex flex-col">
            {AGENDA_ITEMS.map((item) => (
              <div
                key={item.time}
                className="flex flex-row items-center border-b border-[#1f110c]/20 py-8 last:border-0 hover:bg-[#1f110c]/5 transition-colors"
              >
                <div className="w-1/2 shrink-0 pl-2">
                  <span className="font-light text-4xl md:text-5xl text-[#1f110c]">
                    {item.time}
                  </span>
                </div>
                <div className="w-1/2 pr-4">
                  <span className="text-[#1f110c] text-lg md:text-xl font-medium">
                    {item.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
