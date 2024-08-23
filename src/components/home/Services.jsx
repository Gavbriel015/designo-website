import iconArrow from "/assets/shared/desktop/icon-right-arrow.svg";

export default function Services() {
  return (
    <section className="max-w-[1100px] m-auto px-4 grid gap-8 tab:grid tab:grid-cols-2 tab:grid-rows-2 tab:gap-4">
      <div className="tab:row-span-3 bgWebDesign bg-no-repeat bg-cover w-full rounded-2xl">
        <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
          <h1 className="text-white uppercase text-3xl font-semibold">
            Web Design
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-white uppercase font-semibold tracking-widest">
              View Projects
            </p>
            <img className="w-2" src={iconArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="tab:row-span-1 bgAppDesign bg-no-repeat bg-cover w-full rounded-2xl">
        <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
          <h1 className="text-white uppercase text-3xl font-semibold">
            App Design
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-white uppercase font-semibold tracking-widest">
              View Projects
            </p>
            <img className="w-2" src={iconArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="tab:row-span-2 bgGraphicDesign bg-no-repeat bg-cover w-full rounded-2xl">
        <div className="w-full cursor-pointer h-full hover:bg-[#E78069]/60 hover:brightness-160 bg-black/50 flex flex-col items-center justify-center py-24  gap-3 rounded-2xl">
          <h1 className="text-white uppercase text-3xl font-semibold">
            Graphic Design
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-white uppercase font-semibold tracking-widest">
              View Projects
            </p>
            <img className="w-2" src={iconArrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
