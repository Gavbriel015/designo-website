import friendlyImage from '/assets/home/desktop/illustration-friendly.svg'
import passionateImage from '/assets/home/desktop/illustration-passionate.svg'
import resourcefulImage from '/assets/home/desktop/illustration-resourceful.svg'

export default function CompanyValues() {
    return (
        <section className='flex flex-col tab:flex-row tab:gap-10 gap-20 mt-24 items-center justify-center tab:text-center tab:px-4'>
            <div className='sm:flex-row tab:flex-col flex flex-col items-center gap-2 h-full'>
                <img className='sm:p-4' src={passionateImage} alt="Passionate Image" />
                <div className='text-center sm:text-left flex flex-col h-full justify-between'>
                    <h2 className='text-xl tracking-[5px] font-bold pb-5 uppercase tab:text-center'>Passionate</h2>
                    <p className='tab:min-h-[120px] max-w-[440px] sm:mx-0 mx-4 tab:text-center'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>

            <div className='sm:flex-row tab:flex-col flex flex-col items-center gap-2 min-h-full'>
                <img className='sm:p-4' src={resourcefulImage} alt="Resourceful Image" />
                <div className='text-center sm:text-left flex flex-col h-full justify-between'>
                    <h2 className='tab:text-center uppercase text-xl tracking-[5px] font-bold pb-5'>Resourceful</h2>
                    <p className='tab:min-h-[120px] tab:text-center max-w-[440px] sm:mx-0 mx-4'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>

            <div className='sm:flex-row tab:flex-col flex flex-col items-center gap-2 min-h-full'>
                <img className='sm:p-4' src={friendlyImage} alt="Friendly Image" />
                <div className='text-center sm:text-left flex flex-col h-full justify-between'>
                    <h2 className='tab:text-center uppercase text-xl tracking-[5px] font-bold pb-5'>Friendly</h2>
                    <p className='tab:min-h-[120px] tab:text-center max-w-[440px] sm:mx-0 mx-4'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
        </section>

    )
}