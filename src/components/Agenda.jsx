import { AGENDA_ITEMS } from "../data/agenda";

const UserIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-8 1.67-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-3.33-4.67-5-8-5Z" />
  </svg>
)

const TrophyIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19 4h-2V2H7v2H5a2 2 0 0 0-2 2v2a4 4 0 0 0 4 4 5 5 0 0 0 4 3.9V18H8v2h8v-2h-3v-2.1A5 5 0 0 0 17 12a4 4 0 0 0 4-4V6a2 2 0 0 0-2-2ZM5 8V6h2v3.83A2 2 0 0 1 5 8Zm14 0a2 2 0 0 1-2 1.83V6h2Z" />
  </svg>
)

const MusicCocktailIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M9 3v9.55A4 4 0 1 0 11 16V6h3V3Z" />
    <path d="M21 4h-7l1.6 2H13l4 5v7h-2v2h6v-2h-2v-7l4-5h-2.6Z" />
  </svg>
)

const BREAK_ICONS = {
  'Trivia y premios': TrophyIcon,
  'Música en vivo y Cocktail': MusicCocktailIcon
}

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="bg-[#F49630] pt-12 pb-4 md:pt-24 md:pb-8 px-6 relative overflow-hidden shadow-inner w-full"
    >
      <div className="absolute top-0 left-0 w-full h-4 bg-linear-to-b from-black/10 to-transparent"></div>
      <div className="w-full max-w-5xl mx-auto flex flex-col relative z-10">

        {/* Top Header Section */}
        <div className="flex justify-between items-start w-full mb-6 md:mb-10">
          <h2 className="text-[#1f110c] text-xl md:text-2xl font-medium pt-4">
            Agenda
          </h2>
          <img
            src="/recursos/monedaConAnteojos.webp"
            alt="Moneda con anteojos"
            loading="lazy"
            className="w-16 h-16 md:w-20 md:h-20 object-contain animate-[spin_10s_linear_infinite] drop-shadow-xl"
          />
        </div>

        {/* Table/List Area */}
        <div className="w-full flex flex-col">
          {/* Table Headers */}
          <div className="flex flex-row border-b border-[#1f110c]/20 pb-4 mb-2">
            <div className="w-1/3 md:w-1/4 text-[#1f110c] text-lg font-medium pl-2">
              Horario
            </div>
            <div className="w-2/3 md:w-3/4 text-[#1f110c] text-lg font-medium">
              Actividad
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {AGENDA_ITEMS.map((item) => {
              const isBreak = item.type === 'break'
              const BreakIcon = isBreak ? BREAK_ICONS[item.title] : null
              return (
                <div
                  key={item.time}
                  className={`flex flex-row items-center border-b border-[#1f110c]/20 last:border-0 transition-colors ${
                    isBreak
                      ? 'bg-[#1f110c]/10 py-4 italic'
                      : 'py-6 hover:bg-[#1f110c]/5'
                  }`}
                >
                  <div className="w-1/3 md:w-1/4 shrink-0 pl-2">
                    <span
                      className={`font-light text-[#1f110c] ${
                        isBreak
                          ? 'text-2xl md:text-3xl'
                          : 'text-3xl md:text-5xl'
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div className="w-2/3 md:w-3/4 pr-4 flex flex-col gap-1">
                    <span
                      className={`text-[#1f110c] flex items-center gap-2 ${
                        isBreak
                          ? 'text-base md:text-lg font-medium'
                          : 'text-lg md:text-xl font-semibold'
                      }`}
                    >
                      {BreakIcon && (
                        <BreakIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                      )}
                      {item.title}
                    </span>
                    {!isBreak && item.moderator && (
                      <span className="text-[#1f110c]/80 text-sm md:text-base flex items-start gap-1.5">
                        <UserIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">Moderador:</span>{' '}
                          {item.moderator}
                        </span>
                      </span>
                    )}
                    {!isBreak && item.speakers && item.speakers.length > 0 && (
                      <span className="text-[#1f110c]/80 text-sm md:text-base flex items-start gap-1.5">
                        <UserIcon className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                        <span>
                          <span className="font-medium">
                            {item.speakers.length === 1 ? 'Orador:' : 'Oradores:'}
                          </span>{' '}
                          {item.speakers.join(', ')}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
