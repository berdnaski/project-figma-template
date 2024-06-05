import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { FaBars } from 'react-icons/fa';

export function Header() {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(!open);
    
    return (
        <header className="flex w-full max-w-7xl sm:max-w-4xl m-auto h-20 px-1 justify-between gap-3 items-center relative">
            <div className='flex items-center gap-2 mx-1'>
                <img src={logoImg} alt="" />
                <h1 className='font-bold text-white text-xl'>Enver</h1>
            </div>

            <nav className='hidden md:flex'>
                <ul className='flex gap-6 text-zinc-400 cursor-pointer'>
                    <li className='hover:text-blue-800'><a href="#"></a>Home</li>
                    <li className='hover:text-blue-800'><a href="#"></a>Services</li>
                    <li className='hover:text-blue-800'><a href="#"></a>Our Project</li>
                    <li className='hover:text-blue-800'><a href="#"></a>About us</li>
                </ul>
            </nav>

            <button className='border px-4 py-1 font-sans items-center justify-center rounded-md text-white text-md bg-gradient-to-r from-purple-800 to-purple-900 hover:bg-gradient-to-l from-purple-700 to-purple-800 hidden md:block'>Contact us</button>
            
            <div className='md:hidden flex items-center'>
                <button onClick={onOpenModal} className="text-white">
                    <FaBars size={30} />
                </button>
            </div>
            
            {open && (
                <nav className='absolute top-14 right-0 bg-gray-900 rounded-xl p-4'>
                    <ul className='flex flex-col items-end text-zinc-400 cursor-pointer'>
                        <li className='hover:text-blue-800 py-2'><a href="#"></a>Home</li>
                        <li className='hover:text-blue-800 py-2'><a href="#"></a>Services</li>
                        <li className='hover:text-blue-800 py-2'><a href="#"></a>Our Project</li>
                        <li className='hover:text-blue-800 py-2'><a href="#"></a>About us</li>
                        <li className='hover:text-blue-800 py-2'><a href='#' className='hover:text-blue-800 py-2'>Contact us</a></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
