import React, { useEffect, useState } from "react";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  // image path
  const images = [
    "https://www.juice.agency/_astro/3.KXsDcRg-_Z2sU8nf.svg",
    "https://www.juice.agency/_astro/10.B850879e_24SXbQ.svg",
    "https://www.juice.agency/_astro/10.B850879e_24SXbQ.svg",
    "https://www.juice.agency/_astro/8.BHug0BO-_9IjIk.svg",
    "https://www.juice.agency/_astro/7.D77P2m4N_Z2mk10d.svg",
    "https://www.juice.agency/_astro/5.s86Rk2Pb_1uHibo.svg",
    "https://www.juice.agency/_astro/4.v6nUwu3H_Z3BUWg.svg",
    "https://www.juice.agency/_astro/2.CLC8RJ7F_14BAPU.svg",
    "https://www.juice.agency/_astro/1.CGnYw5Ot_27tOWG.svg",
  ];

  // Animate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          //  Call onComplete when finished
          if (onComplete) {
            setTimeout(() => onComplete(), 300); 
          }

          return 100;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Animate images
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 200);
    return () => clearInterval(imgInterval);
  }, [images.length]);

  return (
    <div className="loader-wrapper fixed z-[100000000] top-0 left-0 bg-brand-black h-screen w-screen flex flex-col items-center justify-center px-4">
      {/* Loader Images */}
      <div className="loader-images aspect-square w-[18vw] md:w-[30vw] sm:w-[50vw] xs:w-[70vw] relative">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`loader-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Loader Text */}
      <p className="mt-4 font-mono text-sm text-center loader-text sm:text-xs text-brand-off-white">
        Loading <span className="loader-progress">{progress}</span>%
      </p>
    </div>
  );
}

export default Loader;