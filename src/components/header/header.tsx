"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-[calc(96%)] fixed top-2 md:top-5 md:w-[calc(70%)] bg-btrust-white-opacity backdrop-blur-[0.625rem] border border-grey-black rounded-lg p-4 lg:p-6">
      <div className="flex items-center justify-between">

        <div className="flex items-center cursor-pointer">
          <h1 className="text-xl font-semibold">Daniel</h1>
        </div>

        <nav className="hidden lg:flex justify-end items-center gap-10">
          <NavItem href="/" active>Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#media">Media</NavItem>
        </nav>


        <button
          className="lg:hidden text-grey-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 lg:hidden border-t border-grey-black pt-4">
          <NavItem href="/" active>Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#media">Media</NavItem>

        </nav>
      )}
    </header>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  active?: boolean;
  hasDropdown?: boolean;
}

function NavItem({ href, children, external, active }: NavItemProps) {
  const baseClasses =
    "font-poppins text-base leading-[1.5rem] cursor-pointer hover:font-semibold hover:text-active-white transition-colors duration-200";
  const colorClasses = active
    ? "text-active-white font-semibold"
    : "text-grey-black font-normal";

  return (
    <div className="flex items-center relative">
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${colorClasses}`}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={`${baseClasses} ${colorClasses}`}>
          {children}
        </Link>
      )}
    </div>
  );
}
