export default function SponsorTier({ title, items }) {
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div className="w-full">
      <div className="flex justify-center mb-10 w-full">
        <div className="border-t border-b border-black py-4 w-full text-center">
          <h3 className="font-lexend font-bold text-base tracking-[0.3em] uppercase text-black inline-block">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 md:gap-16">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {row.map((item) => {
              const img = (
                <img
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  className={`${item.heightClass} ${item.maxWidth} scale-125 md:scale-150 w-auto object-contain transition-transform hover:scale-[1.35] md:hover:scale-[1.6] duration-300`}
                />
              );
              return item.url ? (
                <a
                  key={item.alt}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {img}
                </a>
              ) : img;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
