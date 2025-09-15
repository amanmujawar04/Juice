import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 flex flex-col w-full overflow-hidden bg-transparent">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 py-4">
       {/* Left Logo */}
<div className="w-10 h-10">
  <a href="/" aria-label="Home">
    <img
      src="https://www.juice.agency/android-chrome-512x512.png" 
      alt="Logo"
      className="object-contain w-full h-full"
    />
  </a>
</div>
 {/* Center Banner */}
        <div className="hidden md:block">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 font-mono text-xs text-black uppercase bg-gray-200 border border-black rounded-md shadow-md hover:bg-yellow-200">
            WE REBRANDED WITH PURPOSE. READ THE STORY →
          </a>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-white bg-black rounded-sm">
          <Menu size={23} />
        </button>
      </header>


      {/* Sliding Menu */}
<div className={`fixed top-0 right-0 max-w-md  h-screen bg-white transform transition-transform duration-300 ease-in-out z-50 ${
  isOpen ? "translate-x-0" : "translate-x-full" }`}>
        {/* Close Button */}
<button onClick={() => setIsOpen(false)}className="absolute p-1 top-4 right-4"><X size={25} />
</button>

<div className="flex flex-col justify-between h-full px-5 pt-20 pb-8 text-black">
  <nav className="flex flex-col gap-6 uppercase text-1xl">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/work">Work</a>
    <a href="/latest">Journal</a>
    <a href="/contact">Contact</a>
 </nav>

  <div className="flex gap-6 mt-8 text-sm uppercase">
<a href="https://www.linkedin.com"target="_blank"rel="noreferrer">LinkedIn</a>
<a href="https://x.com" target="_blank" rel="noreferrer">Twitter</a>
 <a href="https://www.instagram.com"target="_blank"rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;