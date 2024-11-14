import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //Set Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });


    //Nav Items Array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Discover events", path: "discover"},
        {link: "About Us", path: "about"},
        {link: "Pricing", path: "pricing"},
        {link: "Blog", path: "blog"},
    ];


  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
            <div>
                <a href='' className="text-2xl font-semibold flex items-center space-x-3"><span className='text-brandPrimary'>M-Events</span></a>
                {/* {Nav Items for Large Devices} */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path}>{link}</Link> )
                    }
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;