
// eslint-disable-next-line react/prop-types
export default function LocationCard({name,img}) {
    return(
        <div className="flex flex-col items-center gap-10">
            <div className="bg-bgPatternCircle bg-no-repeat">
                <img src={img} alt="" />
            </div>
            <h2 className="uppercase font-bold text-black tracking-widest text-xl">{name}</h2> 
            <button className="uppercase bg-[#E88069] text-white px-5 py-3 rounded-lg">
                <a href="/locations">See Location</a>
            </button>
        </div>
    )
}