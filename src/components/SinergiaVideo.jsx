export default function SinergiaVideo() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <video
          src="/videos/sinergia.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <img
          src="/logos/sinergia/sinergiaLogo.png"
          alt="Sinergia"
          className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-24 md:w-40 z-10 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
