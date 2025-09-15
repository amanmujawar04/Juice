import React from "react";

const CAPABILITIES = [
  {
    title: "branding",
    number: "01",
    items: [
      "Go-To-Market Strategy",
      "Brand Strategy",
      "Visual Identities",
      "Brand Guidelines",
      "Logo Creation",
      "Value Propositions",
    ],
  },
  {
    title: "web & Apps",
    number: "02",
    items: [
      "UX/UI Design",
      "CMS Implementation",
      "Web Design",
      "Development",
      "Webflow",
    ],
  },
  {
    title: "marketing",
    number: "03",
    items: [
      "Content",
      "Social",
      "Paid Media",
      "Campaigns",
      "SEO",
      "Marketing Ops",
      "Analytics",
    ],
  },
];

const Capability = () => (
  <section className="w-full py-8 bg-black">
    <div className="p-10 sm:p-4 sm:mt-40 lg:mt-60 sm:text-left">
      <h6 className="text-xs font-semibold tracking-wide text-white sm:text-sm md:text-base lg:text-lg">
        CAPABILITIES
      </h6>
    </div>
    <div className="container flex flex-col items-center gap-10 px-4 mx-auto md:flex-row">
      {/* Left SIDE - Heading */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:items-start">
        <h1 className="mb-6 font-serif text-3xl leading-tight text-center text-white md:text-5xl md:text-left">
          AN INTEGRATED <br />
          TEAM BUILT TO<br />
          SOLVE FOR <br />
          TOMORROW'S <br />
          CHALLENGES<br />
          TODAY.
        </h1>
      </div>

      {/* Right SIDE - Video */}
      <div className="flex items-center justify-center w-full transition-transform duration-500 ease-in-out transform md:w-1/2 lg:mt-80 hover:scale-110">
        <div className="w-full max-w-2xl overflow-hidden shadow-xl aspect-video rounded-xl">
          <video
            className="object-cover w-full h-full "
            src="https://player.vimeo.com/progressive_redirect/playback/1075825736/rendition/1080p/file.mp4?loc=external&signature=a0b5e8bb8152ccde2be30bfa33bbf36d8cfccb5ac4509be1549be39ca41e5b40"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>

    {/* Capabilities List below */}
    <div className="container max-w-6xl px-4 mx-auto mt-20">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {CAPABILITIES.map(({ number, title, items, }) => (
          <div key={title} className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold text-white uppercase">
              <span className="mr-2 font-mono text-indigo-600">{number}.</span>
              {title}
            </h3>
            <ul className="mb-4 text-lg text-white">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capability;