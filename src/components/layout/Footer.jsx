import logoWhite from "/assets/shared/desktop/logo-light.png";

import logoFb from "/assets/shared/desktop/icon-facebook.svg";
import logoYt from "/assets/shared/desktop/icon-youtube.svg";
import logoTw from "/assets/shared/desktop/icon-twitter.svg";
import logoPin from "/assets/shared/desktop/icon-pinterest.svg";
import logoIg from "/assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1C1B1D] w-full pb-14 ">
      <div className="max-w-[1100px] m-auto px-4">
        <div
          className={`relative bottom-[100px] bg-[#E88069] w-full bg-bgPattern flex flex-col text-center lg:text-start items-center p-10 lg:p-20 bg-center rounded-xl lg:flex-row `}
        >
          <div className="mb-8">
            <h1 className="pb-6 text-white font-semibold text-3xl lg:w-1/3">
              Lets talk about your project
            </h1>
            <p className="lg:w-2/3 text-white">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="text-black bg-white p-4 w-[140px] uppercase rounded-lg">
            Get in Touch
          </button>
        </div>
        <div className="tab:flex-row flex flex-col justify-between items-center gap-5">
          <div className="w-[210px]">
            <img className="w-full" src={logoWhite} alt="Designo Logo" />
          </div>
          <div className="tab:hidden w-full h-[1px] bg-gray-700 px-5"></div>
          <nav className="flex-col tab:flex-row text-white text-center  tracking-[3px] uppercase gap-6 flex px-1">
            <a href="" className="hover:underline">
              Our Company
            </a>
            <a href="" className="hover:underline">
              Locations
            </a>
            <a href="" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
        <div className="hidden tab:flex w-full tab:mt-4 h-[1px] bg-gray-700 px-5"></div>
        <div className="tab:flex-row tab:justify-between tab:gap-20 text-center flex flex-col gap-8 pt-8">
          <div className="text-[#8B8B8C]">
            <p className="font-bold">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="text-[#8B8B8C] font-bold">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="flex justify-center gap-6 items-center">
            <img className="cursor-pointer" src={logoFb} alt="" />
            <img className="cursor-pointer" src={logoYt} alt="" />
            <img className="cursor-pointer" src={logoTw} alt="" />
            <img className="cursor-pointer" src={logoPin} alt="" />
            <img className="cursor-pointer" src={logoIg} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
