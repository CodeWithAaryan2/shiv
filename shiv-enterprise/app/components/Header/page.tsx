"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/components/About" },
    { label: "Services", href: "/components/Service" },
    { label: "Portfolio", href: "/components/Portfolio" },
    { label: "Blog", href: "/components/Blog" },
    { label: "Contact", href: "/components/Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4 md:py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/navabrlogo.png"
              alt="Shiv Enterprises Logo"
              width={120}
              height={60}
              className="hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 transition-colors duration-300 font-semibold text-black hover:text-blue-600 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}

           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
