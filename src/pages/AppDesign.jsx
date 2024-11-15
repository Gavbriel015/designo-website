import imageAirFilter from "/assets/app-design/desktop/image-airfilter.jpg";
import imageEyeCam from "/assets/app-design/desktop/image-eyecam.jpg";
import imageFaceIt from "/assets/app-design/desktop/image-faceit.jpg";
import imageLoopStudios from "/assets/app-design/desktop/image-loopstudios.jpg";
import imageTodo from "/assets/app-design/desktop/image-todo.jpg";
import WebCard from "../components/layout/WebCard";

import iconArrow from "/assets/shared/desktop/icon-right-arrow.svg";

export default function AppDesign() {
  const apps = [
    {
      name: "AirFilter",
      description:
        "Solving the problem of poor indoor air quality by filtering the air",
      img: imageAirFilter,
    },
    {
      name: "Eyecam",
      description:
        "Product hata lets you edit your favorite photos and videos at any time",
      img: imageEyeCam,
    },
    {
      name: "Faceit",
      description:
        "Get to meet your favorite internet superstar with the faceit app",
      img: imageFaceIt,
    },
    {
      name: "Todo",
      description:
        "A todo app that features cloud sync with light and dark mode",
      img: imageTodo,
    },
    {
      name: "LoopStudios",
      description: "A VR experience app made for Loopstudios",
      img: imageLoopStudios,
    },
  ];

  return (
    <section className="max-w-[1100px] m-auto">
      <div
        className={`bg-[#E88069] w-full bg-bgPattern bg-center p-10 py-16 rounded-xl flex flex-col justify-center text-center items-center`}
      >
        <h1 className="pb-6 text-5xl font-semibold text-white lg:w-1/3">
          Web Design
        </h1>
        <p className="w-1/2 text-white">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-10 mt-10 xx:grid-cols-2 xl:grid-cols-3 tab:px-0">
        {apps.map((website) => (
          <div key={website.name}>
            <WebCard
              name={website.name}
              img={website.img}
              desc={website.description}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full gap-10 px-4 mb-10 mob:flex-row mt-14">
        <div className="w-full bg-no-repeat bg-cover tab:row-span-1 bgAppDesign rounded-2xl">
          <a href="/webdesign">
            <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
              <h1 className="text-4xl font-semibold text-white uppercase">
                Web Design
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold tracking-widest text-white uppercase">
                  View Projects
                </p>
                <img className="w-2" src={iconArrow} alt="" />
              </div>
            </div>
          </a>
        </div>

        <div className="w-full bg-no-repeat bg-cover tab:row-span-2 bgGraphicDesign rounded-2xl">
          <a href="/graphicdesign">
            <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
              <h1 className="text-4xl font-semibold text-white uppercase">
                Graphic Design
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold tracking-widest text-white uppercase">
                  View Projects
                </p>
                <img className="w-2" src={iconArrow} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
