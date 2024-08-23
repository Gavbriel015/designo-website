import CompanyValues from "../components/home/CompanyValues";
import Services from "../components/home/Services";
import phoneImage from "/assets/home/desktop/image-hero-phone.png";

export default function Home() {
  return (
    <div className="max-w-[1100px] m-auto">
      <section className="w-full rounded-xl bg-[#E88069] max-h-[800px] z-20 bgHeroPattern bg-no-repeat bg-center flex flex-col tab:flex-row items-center overflow-hidden mb-24">
        <div className="tab:min-w-[450px] px-6 tab:pt-0 tab:px-0 pt-28 flex flex-col items-center tab:gap-4 tab:relative tab:left-[100px] tab:items-start">
          <h1 className="font-semibold pb-6 text-white text-center tab:text-left text-4xl  ">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-center px-10 tab:p-0 tab:text-left tab:pr-2 ">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="bg-white text-black uppercase py-4 px-6 rounded-xl mt-6">
            Learn More
          </button>
        </div>

        <img
          className="tab:basis-1/2 relative tab:left-[5px] tab:top-[15px] bottom-16 min-w-[600px]
           min-h-[900px] w-[80%] overflow-hidden z-10 h-auto max-w-[600px]"
          src={phoneImage}
          alt=""
        />
      </section>

      <Services />
      <CompanyValues />
    </div>
  );
}
