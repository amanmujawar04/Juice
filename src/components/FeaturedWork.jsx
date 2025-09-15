import React from "react";
import { Brain, Skull, HeartCrack } from "lucide-react";

function FeaturedWork() {
  return (
    <div className="bg-[#F8F7E9] px-6 py-12 md:px-12 lg:px-20 font-manorope">
      {/* Heading */}
      <h2 className="max-w-3xl text-lg font-medium leading-snug text-gray-800 md:text-2xl lg:text-3xl">
        Featured work where design drives <br className="hidden sm:block" />
        clarity and brand growth.
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:gap-16">
        {/* Card 1 - Left side */}
        <div className="flex flex-col items-start">
          <div className="w-full overflow-hidden rounded-md shadow-lg">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/d5b1e3222830885.Y3JvcCw2NDAwLDUwMDUsMCww.png"
              alt="Upwork Cookbook"
              className="object-cover w-full h-64 transition-transform duration-500 ease-in-out transform sm:h-80 md:h-96 hover:scale-110"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-black sm:text-base">
            UPWORK COOKBOOK
          </p>
        </div>

        {/* Card 2 - Right side */}
        <div className="flex flex-col items-start lg:mt-0">
          <div className="w-full overflow-hidden rounded-md  flex items-center justify-center h-[25rem] sm:h-[32rem] md:h-[36rem] lg:mt-40">
            <img
              src="https://www.juice.agency/_astro/Project-f1.BXJzh_3J_3nr1X.webp"
              alt="Formula 1 Project"
              className="h-full "
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-black sm:text-base">
            FORMULA 1 LAS VEGAS
          </p>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="flex mt-12 space-x-6 text-black">
        <Brain className="w-7 h-7" />
        <Skull className="w-7 h-7" />
        <HeartCrack className="w-7 h-7" />
      </div>

      {/* Left-Side Image */}
      <div className="flex justify-start mt-16">
        <div className="w-full overflow-hidden rounded-md shadow-lg md:w-2/3 lg:w-1/2">
          <img
            src="https://www.juice.agency/_astro/Project-harpie.BJnGIMm3_1SiYxe.webp"
            alt="A NEW LOOK FOR WEB3 SAFE"
            className="object-cover w-full h-[30rem] sm:h-[36rem] md:h-[42rem] transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-black sm:text-base">
        A NEW LOOK FOR WEB3 SAFE
      </p>

      {/* Right-Side Image */}
      <div className="flex justify-end mt-16">
        <div className="w-full overflow-hidden rounded-md shadow-lg md:w-2/3 lg:w-1/2">
          <img
            src="https://www.juice.agency/_astro/Project-nauwork.DEZYy-DG_Vs0sd.webp"
            alt="CONNECTING TALENT THROUGH DESIGN"
            className="object-cover w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-right text-black sm:text-base">
        CONNECTING TALENT THROUGH DESIGN
      </p>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 font-normal text-black transition-colors duration-200 rounded bg-gray-400 hover:bg-[#F8F7E9] border border-black">
          SEE ALL WORK →
        </button>
      </div>
    </div>
  );
}

export default FeaturedWork;