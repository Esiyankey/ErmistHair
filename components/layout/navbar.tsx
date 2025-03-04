"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const navLinks = [
  { href: "/admin", label: "Shop All" },
  { href: "/orders", label: "orders" },
  { href: "/styles", label: "Styles" },
  { href: "/care", label: "Wig Care" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" text-black ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-2xl text-pink-600">
                Ermist Hair
              </span>
            </Link>
          </div>
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-600 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden xl:block">
            <Link
              href="/cart"
              className="flex items-center text-black hover:text-white transition-colors"
            >
              <FaShoppingCart className="h-6 w-6 mr-1 text-pink-600" />
              <span>Cart</span>
            </Link>
          </div>
          <button className="hidden xl:block px-4 py-2 rounded-md text-sm font-medium text-white bg-pink-600 hover:bg-pink-700">
            <Link href="/auth/signUp" className="text-white">
              Register
            </Link>
          </button>
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2  rounded-md text-[#361a26]   focus:outline-none focus:border-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-4 w-4" aria-hidden="true" />
              ) : (
                <FaBars className="block h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-sm text-base font-medium text-black hover:bg-pink-600 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-pink-600 hover:text-white transition-colors"
            >
              <div className="flex items-center">
                <FaShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
