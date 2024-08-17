import logoWhite from '/assets/shared/desktop/logo-light.png';

import patternBg from '/assets/shared/desktop/bg-pattern-call-to-action.svg'

export default function Footer() {
    return (
        <footer className='bg-[#1C1B1D] h-[500px] w-full '>
            <div className='max-w-[1100px] m-auto relative' >
                <div className={`absolute -top-28 bg-[#E88069] w-full bg-bgPattern flex flex-col text-center lg:text-start items-center p-10 lg:p-20 bg-center rounded-xl lg:flex-row `}>
                    <div className='mb-8'>
                        <h1 className='pb-6 text-white font-semibold text-3xl lg:w-1/3'>Let's talk about your project</h1>
                        <p className='lg:w-2/3 text-white'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </div>
                    <button className='text-black bg-white p-4 uppercase rounded-lg'>Get in Touch</button>

                </div>
                <div className='flex justify-between'>
                    <div className='w-[210px]'>
                        <img className='w-full' src={logoWhite} alt="Designo Logo" />
                    </div>
                    <nav className='text-white tracking-[3px] uppercase gap-6 flex px-1'>
                        <a href="" className='hover:underline'>Our Company</a>
                        <a href="" className='hover:underline' >Locations</a>
                        <a href="" className='hover:underline' >Contact</a>
                    </nav>
                </div>
            </div>


        </footer>

    )
}