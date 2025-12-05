import React from 'react';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/logo.png" alt="Monster Energy Logo" className="h-12 md:h-16 object-contain" />
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex gap-8">
                {['Products', 'Promotions', 'Gaming', 'Music'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white font-bold uppercase tracking-wider hover:text-green-500 transition-colors font-tech text-sm"
                    >
                        {item}
                    </a>
                ))}
            </div>


        </nav>
    );
};

export default Navbar;
