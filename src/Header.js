import {Link} from 'react-scroll'


export default function Header () {

    return (
    <header className="container">
        <nav
            className="flex flex-wrap justify-between md:justify-around md:py-4 bg-blue-800/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-20 px-8 md:px-3">
            <ul
                className="items-center flex-wrap md:flex-nowrap flex flex-row space-x-2 md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                <li><Link activeClass="font-extrabold text-blue-400" to="home" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Home</Link></li>
                <li><Link activeClass="font-extrabold text-purple-400" to="about" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">About</Link></li>
                <li><Link activeClass="font-extrabold text-red-400" to="front-end" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Front-end tech</Link></li>
                <li><Link activeClass="font-extrabold text-orange-400" to="back-end" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Back-end tech</Link></li>
                <li><Link activeClass="font-extrabold text-green-400" to="analytics" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Analytics</Link></li>
                <li><Link activeClass="font-extrabold text-blue-400" to="misc" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Miscellaneous</Link></li>
                <li><Link activeClass="font-extrabold text-blue-400" to="contact" spy={true} smooth={true} className="flex text-blue-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold">Contact Me</Link></li>
            </ul>
        </nav>
    </header>
    )
}