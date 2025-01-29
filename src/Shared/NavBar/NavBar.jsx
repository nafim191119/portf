import React from 'react';

const NavBar = () => {
    return (
        <div>
            {/* Responsive Navbar */}
            <nav className="navbar px-4 sm:px-8 lg:px-40 bg-gray-50">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold text-black uppercase">Nafim</a>
                </div>

                {/* Mobile Hamburger Menu (Hidden on Desktop) */}
                <div className="flex-none lg:hidden">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* Desktop Navigation (Hidden on Mobile) */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-md text-black font-semibold uppercase">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;