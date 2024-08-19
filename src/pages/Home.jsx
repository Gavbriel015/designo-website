import phoneImage from '/assets/home/desktop/image-hero-phone.png'


export default function Home() {
    return (
        <>

            <section className="w-full bg-[#E88069] max-h-[800px] z-20 bgHeroPattern bg-no-repeat bg-center flex flex-col items-center overflow-hidden mb-24">

                <div className='px-6 pt-28 flex flex-col items-center'>
                    <h1 className='font-semibold pb-6 text-white text-center text-4xl'>
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className='text-white text-center px-10'>
                        With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                    </p>
                    <button className='bg-white text-black uppercase py-4 px-6 rounded-xl mt-6'>
                        Learn More
                    </button>
                    
                </div>
                <img className='relative bottom-16 min-w-[600px] min-h-[900px] w-[80%] overflow-hidden z-10 h-auto max-w-[600px]' src={phoneImage} alt="" />  
            </section>
            <section className=''>
                
            </section>
        </>

    )
}