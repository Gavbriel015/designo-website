import logoDark from "/assets/shared/desktop/logo-dark.png";

import iconMenu from "/assets/shared/mobile/icon-hamburger.svg";
import iconClose from "/assets/shared/mobile/icon-close.svg";

import { useState, useEffect } from "react";

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="max-w-[1100px] m-auto flex justify-between items-center py-12 px-2">
        <div className="w-[210px]">
          <a href="/">
            <img className="w-full" src={logoDark} alt="Designo Logo" />
          </a>
        </div>
        <nav className="hidden sm:flex tracking-[3px] uppercase gap-6 ">
          <a href="/about" className="hover:underline">
            Our Company
          </a>
          <a href="/locations" className="hover:underline">
            Locations
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <div onClick={() => setIsMenuOpen(prev => !prev)} className="flex items-center justify-center pb-1 mr-6 cursor-pointer sm:hidden ">
          <img src={isMenuOpen ? iconClose : iconMenu} className="w-8 h-8" alt="Menu Hamburger" />
        </div>
      </header>
      <div hidden={!isMenuOpen} className="fixed z-50 w-full h-screen sm:hidden bg-black/50">
        <div className="w-full bg-[#323036]">
          <nav className="tracking-[3px] text-white text-2xl uppercase gap-10 flex flex-col p-10 py-14">
            <a href="/about" className="hover:underline">
              Our Company
            </a>
            <a href="/locations" className="hover:underline">
              Locations
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
