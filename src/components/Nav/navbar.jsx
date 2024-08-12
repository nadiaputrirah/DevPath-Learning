import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navigation() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();

   
    const isActive = (path) => location.pathname === path;

    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrollDirection(currentScrollTop > scrollPosition ? 'down' : 'up');
            setScrollPosition(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);

    const activeLinkStyle = "text-white";

    const toggleNavbar = () => setIsNavbarVisible(!isNavbarVisible);

    
    const getNavbarBackground = () => {
        if (scrollPosition === 0) {
            return 'bg-primary'; 
        }
        return scrollDirection === 'down' ? 'hidden' : 'bg-primary bg-opacity-80';
    };

    return (
        <nav className={`fixed w-full z-10 top-0 backdrop-blur-sm shadow-lg transition-transform duration-300 ${getNavbarBackground()}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="w-32" alt="Logo" />
                </a>
                <button 
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 dark:hover:bg-none" 
                    aria-controls="navbar-default" 
                    aria-expanded={isNavbarVisible}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isNavbarVisible ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-dark rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {['/', '/work', '/about', '/services', '/ideas', '/careers', '/contact'].map((href, index) => (
                            <li key={index} className="relative group">
                                <a
                                    href={href}
                                    className={`relative block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent transition-colors duration-300 ${isActive(href) ? activeLinkStyle : ''}`}
                                >
                                    {['Work', 'About', 'Services', 'Ideas', 'Careers', 'Contact'][index]}
                                    <span className={`underline ${isActive(href) || 'group-hover:scale-x-100'} ${!isActive(href) ? 'scale-x-0' : ''}`}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
