export default function SponsorTier({ title, items }) {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-10 w-full">
        <div className="border-t border-b border-black py-4 w-full text-center">
          <h3 className="font-lexend font-bold text-base tracking-[0.3em] uppercase text-black inline-block">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {items.map((item) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={`${item.heightClass} ${item.maxWidth} scale-125 md:scale-150 w-auto object-contain transition-transform hover:scale-[1.35] md:hover:scale-[1.6] duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
