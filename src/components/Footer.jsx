// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#f7f7ed] font-mono text-base ">
      {/* Big "JUICE" Center Heading */}
      <div className="flex flex-col items-start justify-center w-full px-6 py-10 bg-black md:py-16">
        <h1 className="text-[10vw] md:text-[8vw] text-[#f9f9e4] leading-none tracking-tighter uppercase font-bold">
          JUICE
        </h1>
      </div>

      {/* Main Footer Row */}
      <div className="max-w-[1640px] mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left */}
        <div className="flex flex-col justify-between md:flex-1">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.25] mb-8 max-w-xl">
              Partner with a creative agency <br />
              that’s ambitious as you are.
            </h2>
          </div>
          <div>
            <button
              className="border border-yellow-300 py-3 px-8 text-yellow-300 transition hover:bg-yellow-300 hover:text-[#171613] font-mono text-lg w-fit"
              aria-label="Contact"
            >
              CONTACT
            </button>
          </div>
        </div>
        {/* Right - Columns */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-20 text-lg justify-between md:flex-[2]">
          {/* NAVIGATE */}
          <div>
            <div className="mb-2 tracking-wide text-sm text-[#f7f7edb3]">NAVIGATE</div>
            <ul className="space-y-2">
              <li>Homepage</li>
              <li>Work</li>
              <li>About</li>
              <li>Latest</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* SOCIAL & STUFF */}
          <div>
            <div className="mb-2 tracking-wide text-sm text-[#f7f7edb3]">SOCIAL & STUFF</div>
            <ul className="space-y-2">
              <li>Twitter (X)</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Dribbble</li>
              <li>Behance</li>
            </ul>
          </div>
          {/* CONTACT DEETS */}
          <div className="min-w-[220px]">
            <div className="mb-2 tracking-wide text-sm text-[#f7f7edb3]">CONTACT DEETS</div>
            <div className="mb-2 font-mono text-xl lg:text-2xl">(407) 99-JUICE</div>
            <div className="mb-2 font-mono text-lg break-all">newbiz@juice.agency</div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-[1640px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-8 border-t border-[#f7f7ed10] gap-6">
        <div className="flex items-center gap-8 text-[#f7f7edb3] text-base font-mono">
          <span>© 2025 JUICE AGENCY.</span>
          <span>
            <a href="#" className="underline transition hover:text-yellow-300">PRIVACY POLICY</a>
          </span>
        </div>
        <div className="text-[#f7f7edb3] text-base font-mono text-right">
          <div>WE&apos;RE GRITTY AF</div>
          <div>FLORIDA, ARGENTINA, GERMANY, POLAND, FRANCE</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;