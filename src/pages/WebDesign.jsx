import WebCard from "../components/layout/WebCard";
import imageBlogr from "/assets/web-design/desktop/image-blogr.jpg";
import imageBuilder from "/assets/web-design/desktop/image-builder.jpg";
import imageCamp from "/assets/web-design/desktop/image-camp.jpg";
import imageExpress from "/assets/web-design/desktop/image-express.jpg";
import imagePhoton from "/assets/web-design/desktop/image-photon.jpg";
import imageTranster from "/assets/web-design/desktop/image-transfer.jpg";

import iconArrow from "/assets/shared/desktop/icon-right-arrow.svg";

export default function WebDesign() {
  const websites = [
    {
      name: "Express",
      description: "A multi-carrier shipping website for ecommerce businesses",
      img: imageExpress,
    },
    {
      name: "Transfer",
      description:
        "Site for low-cost money transfers and sending money within seconds",
      img: imageTranster,
    },
    {
      name: "Photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: imagePhoton,
    },
    {
      name: "Builder",
      description:
        "Conncets usres with local contractors based on their location",
      img: imageBuilder,
    },
    {
      name: "Blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
      img: imageBlogr,
    },
    {
      name: "Camp",
      description:
        "Get expert training in coding, data, design, and digital marketing",
      img: imageCamp,
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

      <div className="grid grid-cols-1 gap-6 px-10 mt-10 place-items-center xx:grid-cols-2 xl:grid-cols-3 tab:px-0">
        {websites.map((website) => (
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
          <a href="/appdesign">
            <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
              <h1 className="text-4xl font-semibold text-white uppercase">
                App Design
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
