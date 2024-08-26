import imageBoxedWater from "/assets/graphic-design/desktop/image-boxed-water.jpg";
import imageChange from "/assets/graphic-design/desktop/image-change.jpg";
import imageScience from "/assets/graphic-design/desktop/image-science.jpg";

import iconArrow from "/assets/shared/desktop/icon-right-arrow.svg";
import WebCard from "../components/layout/WebCard";

export default function GraphicDesign() {
  const graphics = [
    {
      name: "Tim Brown",
      description:
        "A book cover designed for Tim Brown's new release, 'Change' ",
      img: imageChange,
    },
    {
        name: "Boxed Water",
        description:
          "A simple packaging concept made for Boxed Water",
        img: imageBoxedWater,
      },
      {
        name: "Science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
        img: imageScience,
      },
    
  ];

  return (
    <section className="max-w-[1100px] m-auto">
      <div
        className={`bg-[#E88069] w-full bg-bgPattern bg-center p-10 py-16 rounded-xl flex flex-col justify-center text-center items-center`}
      >
        <h1 className="pb-6 text-white font-semibold text-5xl lg:w-1/3">
          Web Design
        </h1>
        <p className="w-1/2 text-white">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 xx:grid-cols-2 xl:grid-cols-3 gap-6 px-10 tab:px-0">
        {graphics.map((website) => (
          <div key={website.name}>
            <WebCard
              name={website.name}
              img={website.img}
              desc={website.description}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full gap-10 mt-28 mb-10">
        <div className="tab:row-span-1 bgAppDesign bg-no-repeat bg-cover w-full rounded-2xl">
          <a href="/webdesign">
            <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
              <h1 className="text-white uppercase text-4xl font-semibold">
                Web Design
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-white uppercase font-semibold tracking-widest">
                  View Projects
                </p>
                <img className="w-2" src={iconArrow} alt="" />
              </div>
            </div>
          </a>
        </div>

        <div className="tab:row-span-2 bgGraphicDesign bg-no-repeat bg-cover w-full rounded-2xl">
          <a href="/graphicdesign">
            <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
              <h1 className="text-white uppercase text-4xl font-semibold">
                App Design
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-white uppercase font-semibold tracking-widest">
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
