export default function SponsorTier({ title, items }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
        <h3 className="font-lexend font-bold text-base tracking-[0.3em] uppercase text-gray-400">
          {title}
        </h3>
        <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {items.map((item) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={`${item.heightClass} ${item.maxWidth} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
