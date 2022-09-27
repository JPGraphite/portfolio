import {Link} from 'react-scroll'


export default function Header () {

    return (
    <header className="container">
        <nav
            className="flex flex-wrap justify-between md:justify-around md:py-4 bg-blue-800/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-20 md:px-8 md:px-3">
            <ul
                className="items-center overflow-auto  md:flex-nowrap flex flex-row space-x-2 md:space-x-8 justify-start justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <li><Link activeClass="font-extrabold text-blue-400" to="home" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Home</Link></li>
                <li><Link activeClass="font-extrabold text-purple-400" to="about" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">About</Link></li>
                <li><Link activeClass="font-extrabold text-purple-400" to="recent-work" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Previous Work</Link></li>
                <li><Link activeClass="font-extrabold text-red-400" to="front-end" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Front-end tech</Link></li>
                <li><Link activeClass="font-extrabold text-orange-400" to="back-end" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Back-end tech</Link></li>
                <li><Link activeClass="font-extrabold text-green-400" to="analytics" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Analytics</Link></li>
                <li><Link activeClass="font-extrabold text-blue-400" to="misc" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Miscellaneous</Link></li>
                <li><Link activeClass="font-extrabold text-blue-400" to="contact" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold whitespace-nowrap">Contact Me</Link></li>
            </ul>
        </nav>
    </header>
    )
}