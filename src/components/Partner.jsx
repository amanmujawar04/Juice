import React from "react";

function Partner() {
  return (
    <section className="flex flex-col items-center px-6 py-12 bg-[#F8F7E9]">
      {/* Heading */}
      <div className="max-w-3xl mb-10 text-center">
        <h1 className="mb-4 text-3xl text-gray-800 font-manrope md:text-4xl lg:text-5xl">
          We partner with ambitious brands to create digital experiences that
          feel true and drive momentum.
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-12 mt-20 max-w-7xl md:grid-cols-2">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center">
          <p className="text-base leading-relaxed text-gray-900 md:text-lg lg:text-xl">
            Juice is where strategy, design, and technology come together to
            build brands people believe in — and empower them to grow with
            purpose.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-gray-700 underline cursor-pointer md:text-xl hover:text-gray-900 font-manrope">
            More about Juice →
          </h2>
        </div>

        {/* Right Column: Video */}
        <div className="flex items-center justify-center w-full transition-transform duration-500 ease-in-out transform hover:scale-105">
          <div className="w-full overflow-hidden shadow-xl aspect-video rounded-xl">
            <video
              className="object-cover w-full h-full rounded-xl"
              src="https://player.vimeo.com/progressive_redirect/playback/1075825736/rendition/1080p/file.mp4?loc=external&signature=a0b5e8bb8152ccde2be30bfa33bbf36d8cfccb5ac4509be1549be39ca41e5b40"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;