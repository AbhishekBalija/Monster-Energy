import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Products', 'Promotions', 'Gaming', 'Music'];

    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-50">
            {/* Logo */}
            <div className="flex items-center relative z-50">
                <img src="/logo.png" alt="Monster Energy Logo" className="h-12 md:h-16 object-contain" />
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex gap-8">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white font-bold uppercase tracking-wider hover:text-green-500 transition-colors font-tech text-sm"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
                className="md:hidden text-white relative z-50 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    // X Icon
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute inset-0 top-0 left-0 w-screen h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 animate-fadeIn">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white text-3xl font-bold uppercase tracking-widest hover:text-[#64ff00] transition-colors font-tech"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
