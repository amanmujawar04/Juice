import React, { useState, useEffect } from "react";

const MainContent = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  };

  return (
    <div className="flex flex-col bg-green-600 font-7xl">
      {/* Center  JUICE*/}
      <main className="relative flex items-center justify-center flex-1">
        <h1 className="text-[35vw] md:text-[25vw] font-extrabold text-[#f9f9e4] leading-none tracking-tighter uppercase">
          JUICE
        </h1>
      </main>
        {/* Top Row */}
        <div className="flex items-start justify-between mt-10">
          {/* Left Content */}
          <div className="max-w-xl ">
            <h1 className="text-3xl leading-snug text-black font-manrope md:text-2xl grayscale">
              THE CREATIVE AGENCY <br />
              THAT LOVES TO SHOW OFF <br />
              A THING OR TWO.
            </h1>
            <h2 className="mt-6 text-3xl text-black font-manrope md:text-2xl">
              STARTING WITH YOUR <br /> BRAND.
            </h2>
          </div>
           <div className="relative flex flex-col items-center w-full">
      {/* Basketball */}
      <div className="relative flex items-center justify-center w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
          alt="Basketball"
          className="mx-auto w-30 md:w-40 lg:w-48"
        />
      </div>

      {/* hand */}
      <div className="relative w-full flex justify-center md:justify-center  md:mt-[-1rem]">
        <img
          src="https://www.juice.agency/_astro/hand.CEHdNKLG.svg"
          alt="Finger"
          className="object-contain h-40 md:h-60 lg:h-72"
        />
      </div>
    </div>

          {/* Right Content */}
          <div className="text-sm text-right text-black md:text-base">
            <p>IMPACTFUL DIGITAL</p>
            <p>EXPERIENCES FOR</p>
            <p>AMBITIOUS BRANDS</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between mt-8 text-sm text-black md:text-base">
          {/* Phone */}
          <div>
            <p>PHONE :</p>
            <p>407-99-JUICE</p>
          </div>

          {/* Location + Time */}
          <div className="text-right">
            <p>ORLANDO :</p>
            <p>{formatTime(time)}</p>
          </div>
        </div>
      </div>
  );
};

export default MainContent;