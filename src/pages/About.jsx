import aboutHeroMobile from "/assets/about/mobile/image-about-hero.jpg";
import aboutHeroTablet from "/assets/about/tablet/image-about-hero.jpg";
import aboutHeroDesktop from "/assets/about/desktop/image-about-hero.jpg";

import realDealMobile from "/assets/about/mobile/image-real-deal.jpg";
import realDealTablet from "/assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "/assets/about/desktop/image-real-deal.jpg";

import worldClassMobile from "/assets/about/mobile/image-world-class-talent.jpg";
import worldClassTablet from "/assets/about/tablet/image-world-class-talent.jpg";
import worldClassDesktop from "/assets/about/desktop/image-world-class-talent.jpg";

import australiaImg from "/assets/shared/desktop/illustration-australia.svg";
import canadaImg from "/assets/shared/desktop/illustration-canada.svg";
import unitedKingdomImg from "/assets/shared/desktop/illustration-united-kingdom.svg";
import LocationCard from "../components/about/LocationCard";

export default function About() {
  
    const locations = [
    { name: "Canada", img: canadaImg },
    { name: "Australia", img: australiaImg },
    { name: "United Kingdom", img: unitedKingdomImg },
  ];

  return (
    <section className="max-w-[1100px] m-auto">
      <div className="mob:px-4 w-full flex flex-col tab:flex-row-reverse mb-10">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={aboutHeroMobile}
          />
          <source media="(max-width: 949px)" srcSet={aboutHeroTablet} />
          <img
            className="w-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-r-xl tab:w-[500px] tab:h-[500px]"
            src={aboutHeroDesktop}
            alt=""
          />
        </picture>
        <div className="tab:basis-[60%] bg-[#E88069] mob:rounded-b-xl tab:rounded-b-none tab:rounded-l-xl flex gap-6 flex-col items-center justify-center p-14 tab:w-1/2">
          <h1 className="text-white font-bold text-4xl">About Us</h1>
          <p className="tab:text-left text-white text-center">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients audiences.
          </p>
        </div>
      </div>

      <div className="mob:px-4 w-full flex flex-col tab:flex-row">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={worldClassMobile}
          />
          <source media="(max-width: 949px)" srcSet={worldClassTablet} />
          <img
            className="w-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-l-xl tab:w-[500px] tab:h-[500px]"
            src={worldClassDesktop}
            alt=""
          />
        </picture>
        <div className="tab:basis-[60%] bg-[#FDF4F2] mob:rounded-b-xl tab:rounded-b-none tab:rounded-r-xl flex gap-6 flex-col items-center justify-center p-14 tab:w-1/2">
          <h1 className="font-bold text-4xl text-[#E88069]">
            World-class talent
          </h1>
          <p className="tab:text-left text-black text-center">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="tab:text-left text-black text-center">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <div className="flex flex-col tab:flex-row justify-evenly gap-24 my-24">
        {locations.map((location) => (
          <div key={location.name}>
            <LocationCard name={location.name} img={location.img} />
          </div>
        ))}
      </div>

      <div className="mob:px-4 w-full flex flex-col tab:flex-row-reverse">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={realDealMobile}
          />
          <source media="(max-width: 949px)" srcSet={realDealTablet} />
          <img
            className="w-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-r-2xl tab:w-[500px] tab:h-[500px]"
            src={realDealDesktop}
            alt=""
          />
        </picture>
        <div className="tab:basis-[60%] bg-[#FDF4F2] mob:rounded-b-xl tab:rounded-b-none tab:rounded-l-2xl flex gap-6 flex-col items-center justify-center p-14 tab:w-1/2">
          <h1 className="font-bold text-4xl text-[#E88069]">The real deal</h1>
          <p className="tab:text-left text-black text-center">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="tab:text-left text-black text-center">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </section>
  );
}
