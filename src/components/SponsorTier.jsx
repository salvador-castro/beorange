export default function SponsorTier({ title, heightClass, items, columns = 3 }) {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-10 w-full">
        <div className="border-t border-b border-black py-4 w-full text-center">
          <h3 className="font-lexend font-bold text-base tracking-[0.3em] uppercase text-black inline-block">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-y-12 md:gap-y-16">
        {items.map((item) => {
          const img = (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={`${item.heightClass ?? heightClass} w-auto object-contain`}
            />
          );
          return (
            <div key={item.alt} className={`flex items-center justify-center w-1/2 ${columns === 4 ? "md:w-1/4" : "md:w-1/3"}`}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {img}
                </a>
              ) : img}
            </div>
          );
        })}
      </div>
    </div>
  );
}
