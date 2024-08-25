import logoDark from '/assets/shared/desktop/logo-dark.png'

import iconMenu from '/assets/shared/mobile/icon-hamburger.svg'

export default function NavBar() {


    return (
        <header className='max-w-[1100px] m-auto flex justify-between items-center py-12 px-2'>
            <div className='w-[210px]'>
                <img className='w-full' src={logoDark} alt="Designo Logo" />
            </div>
            <nav className='hidden sm:flex tracking-[3px] uppercase gap-6 '>
                <a href="/about" className='hover:underline'>Our Company</a>
                <a href="/locations" className='hover:underline' >Locations</a>
                <a href="" className='hover:underline' >Contact</a>
            </nav>
            <div className='flex sm:hidden mr-6 cursor-pointer justify-center items-center pb-1 '>
                <img src={iconMenu} className='w-8' alt="Menu Hamburger" />
            </div>
        </header>
    )
}