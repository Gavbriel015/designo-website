import ukMapTablet from "/assets/locations/tablet/image-map-uk.png";
import caMapTablet from "/assets/locations/tablet/image-map-canada.png";
import auMapTablet from "/assets/locations/tablet/image-map-australia.png"

import ukMapDesktop from "/assets/locations/desktop/image-map-uk.png";
import caMapDesktop from "/assets/locations/desktop/image-map-canada.png";
import auMapDesktop from "/assets/locations/desktop/image-map-australia.png"

export default function Locations() {
  return (
    <section className="max-w-[1100px] m-auto flex flex-col gap-5">
      <div className="mob:px-4 w-full flex flex-col tab:flex-row-reverse mob:gap-4 tab:max-h-[375px]">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={caMapTablet}
          />
          <img
            className="w-full  mob:max-h-[300px] tab:max-h-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-r-3xl tab:w-[500px] tab:h-[500px] object-cover"
            src={caMapDesktop}
            alt=""
          />
        </picture>
        <div className="bg-patternTwoCircles bg-center bg-no-repeat tab:pl-20 tab:basis-[60%] bg-[#FDF4F2] mob:rounded-b-xl tab:rounded-b-none tab:rounded-l-2xl flex gap-6 flex-col items-center justify-center tab:items-start p-14 tab:w-1/2">
          <h1 className="font-bold text-4xl text-[#E88069]">Canada</h1>
          <div className="flex flex-col tab:flex-row text-center gap-8">
            <div>
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
      </div>


      <div className="mob:px-4 w-full flex flex-col tab:flex-row mob:gap-4 tab:max-h-[375px]">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={auMapTablet}
          />
          <img
            className="w-full  mob:max-h-[300px] tab:max-h-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-l-3xl tab:w-[500px] tab:h-[500px] object-cover"
            src={auMapDesktop}
            alt=""
          />
        </picture>
        <div className="bg-patternTwoCircles bg-center bg-no-repeat tab:pl-20 tab:basis-[60%] bg-[#FDF4F2] mob:rounded-b-xl tab:rounded-b-none tab:rounded-r-3xl flex gap-6 flex-col items-center justify-center tab:items-start p-14 tab:w-1/2">
          <h1 className="font-bold text-4xl text-[#E88069]">Australia</h1>
          <div className="flex flex-col tab:flex-row text-center gap-8">
            <div>
              <p className="font-bold">Designo Central Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mob:px-4 w-full flex flex-col tab:flex-row-reverse mob:gap-4 tab:max-h-[375px]">
        <picture className="tab:basis-[40%]">
          <source
            className=""
            media="(max-width: 679px)"
            srcSet={ukMapTablet}
          />
          <img
            className="w-full  mob:max-h-[300px] tab:max-h-full mob:rounded-t-xl tab:rounded-t-none tab:rounded-r-3xl tab:w-[500px] tab:h-[500px] object-cover"
            src={ukMapDesktop}
            alt=""
          />
        </picture>
        <div className="bg-patternTwoCircles bg-center bg-no-repeat tab:pl-20 tab:basis-[60%] bg-[#FDF4F2] mob:rounded-b-xl tab:rounded-b-none tab:rounded-l-2xl flex gap-6 flex-col items-center justify-center tab:items-start p-14 tab:w-1/2">
          <h1 className="font-bold text-4xl text-[#E88069]">United Kingdom</h1>
          <div className="flex flex-col tab:flex-row text-center gap-8">
            <div>
              <p className="font-bold">Designo UK Office</p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
