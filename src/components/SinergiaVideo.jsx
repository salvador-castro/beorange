import { useEffect, useRef, useState } from "react";

export default function SinergiaVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoad]);

  return (
    <section className="w-full relative overflow-hidden">
      <div ref={containerRef} className="relative w-full h-[50vh] md:h-[70vh]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/videos/sinergia-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {shouldLoad && <source src="/videos/sinergia.mp4" type="video/mp4" />}
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <img
          src="/logos/sinergia/sinergiaLogo.webp"
          alt="Sinergia"
          loading="lazy"
          className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-24 md:w-40 z-10 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
