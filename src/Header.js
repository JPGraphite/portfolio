import {Link} from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react';


export default function Header ( { setOpenMenu }) {

    const [open, setOpen] = useState(false);


    const handleClick = ()=> {
        setOpen(!open);
    }
    useEffect( ()=> {
        const uls = document.querySelectorAll('.menu li');

        uls.forEach( (ul) => {
            ul.addEventListener('click', () => {
                handleClick()
            })
        });
    }, [])

    return (
    <header className="container">
        <nav
            className="flex flex-wrap justify-between md:justify-around md:py-4 bg-blue-800/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-20 md:px-3">
            <ul
                className="items-center hidden lg:flex overflow-auto  md:flex-nowrap flex-row space-x-2 md:space-x-8 justify-start justify-items-start md:justify-items-center md:justify-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <li><Link activeClass="font-extrabold text-blue-400" to="home" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Home</Link></li>
                <li><Link activeClass="font-extrabold text-purple-400" to="about" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">About</Link></li>
                <li><Link activeClass="font-extrabold text-purple-400" offset={-80} to="recent-work" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Previous Work</Link></li>
                <li><Link onClick={() => { setOpenMenu(1) }} offset={-80} activeClass="font-extrabold text-red-400" to="tech" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Front-end tech</Link></li>
                <li><Link onClick={() => { setOpenMenu(2) }} offset={20} activeClass="font-extrabold text-orange-400" to="tech" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Back-end tech</Link></li>
                <li><Link onClick={() => { setOpenMenu(3) }} offset={80} activeClass="font-extrabold text-green-400" to="tech" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Analytics</Link></li>
                <li><Link onClick={() => { setOpenMenu(4) }} offset={180} activeClass="font-extrabold text-blue-400" to="tech" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Miscellaneous</Link></li>
                <li><Link activeClass="font-extrabold text-blue-400" to="contact" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Contact Me</Link></li>
            </ul>

            
        </nav>
        <nav className='md:hidden'>
            <div className='fixed bottom-4 left-0 right-0 w-full h-fit z-20'>
                <div 
                    className='cursor-pointer mx-auto w-[200px] shadow-2xl'
                    onClick={()=> {handleClick()}}
                    >
                    <div className='z-20 bg-black  text-white rounded-full py-2 flex justify-between align-middle px-8'>
                        <h2 className='text-blue-100 font-semibold'>Menu</h2><span className='min-h-full flex items-center'><GiHamburgerMenu  /></span>
                    </div>
                    <div className={`duration-300 transition transform origin-bottom absolute bottom-6 left-0 right-0 mx-auto w-full -z-10 ${open ? "scale-y-100" : "scale-y-0"}`}>
                        <div className='bg-black mx-auto w-[200px] rounded-t-2xl'>
                            <ul
                                className="menu px-8 justify-items-start items-start  justify-start flex flex-col pt-2 w-full left-0 top-16px-10 py-3">
                                <li>
                                    <Link 
                                        activeClass="font-extrabold text-blue-400" 
                                        to="home" 
                                        spy={true} 
                                        smooth={true} 
                                        className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    >
                                    Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    activeClass="font-extrabold text-purple-400" 
                                    to="about" spy={true} smooth={true}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="font-extrabold text-purple-400" 
                                    to="recent-work" spy={true} smooth={true} offset={-70} isDynamic={true}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    >
                                        Previous Work
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    activeClass="font-extrabold text-red-400" 
                                    to="tech" spy={true} smooth={true} offset={-80}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    onClick={() => { setOpenMenu(1) }}
                                    >
                                        Front-end tech
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    activeClass="font-extrabold text-orange-400"  
                                    to="tech" spy={true} smooth={true} offset={20}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    onClick={() => { setOpenMenu(2) }}
                                    >
                                        Back-end tech
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    activeClass="font-extrabold text-green-400" 
                                    to="tech" spy={true} smooth={true} offset={80}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    onClick={() => { setOpenMenu(3) }}
                                    >
                                        Analytics
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                    activeClass="font-extrabold text-blue-400" 
                                    to="tech" spy={true} smooth={true} offset={180}
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    onClick={() => { setOpenMenu(4) }}
                                    >
                                        Miscellaneous
                                    </Link>
                                </li>
                                <li>
                                    <Link activeClass="font-extrabold text-blue-400" 
                                    to="contact" spy={true} smooth={true} 
                                    className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap"
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}