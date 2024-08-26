export default function WebCard({ name, desc, img }) {
    return (
      <div className="group xx:h-[500px] rounded-2xl mob:flex mob:items-center xx:flex-col  bg-[#fdf4f2] hover:bg-[#e88069] transition-all ease-in duration-100">
        <div className="w-full">
          <img 
            className="rounded-xl w-full h-full mob:min-w-[300px] mob:max-w-[500px] object-cover" 
            src={img} 
            alt="" 
          />
        </div>
        <div className="text-center p-10 flex flex-col gap-3">
          <h2 className="group-hover:text-white text-[#e88069] uppercase font-bold text-2xl tracking-widest">
            {name}
          </h2>
          <p className="group-hover:text-white">{desc}</p>
        </div>
      </div>
    );
  }
  