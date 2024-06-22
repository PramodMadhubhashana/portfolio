'use client';
import ThemeToggler from "./ThemeToggler";
import React, { useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";


const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener('scroll', scrollYPos);
  });


  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-[#0F172A]' : 'py-6 bg-background'} 
    sticky top-0 z-30 `}>
      <div className="container max-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex item-center gap-x-16">
            {/* Nav */}
            <Nav containerStyles='hidden md:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <div>
              <ThemeToggler />
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>

        </div>

      </div>

    </header>
  )
}
export default Header;