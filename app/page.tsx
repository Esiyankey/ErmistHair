// 'use client'
// import { useState } from "react"
// import Link from "next/link"
// import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"

// const navLinks = [
//   { href: "/shop", label: "Shop All" },
//   { href: "/custom", label: "Custom Wigs" },
//   { href: "/styles", label: "Styles" },
//   { href: "/care", label: "Wig Care" },
//   { href: "/faq", label: "FAQ" },
// ]

// export default function Home() {

//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   return (
//     <div>
//       <nav className="bg-black text-pink-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex-shrink-0">
//               <span className="font-bold text-2xl text-pink-500">WigWonder</span>
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-500 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <Link href="/cart" className="flex items-center text-pink-300 hover:text-white transition-colors">
//               <FaShoppingCart className="h-6 w-6 mr-1" />
//               <span>Cart</span>
//             </Link>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-pink-300 hover:text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <FaTimes className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <FaBars className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:bg-pink-500 hover:text-white transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/cart"
//               className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:bg-pink-500 hover:text-white transition-colors"
//             >
//               <div className="flex items-center">
//                 <FaShoppingCart className="h-5 w-5 mr-2" />
//                 Cart
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-[10rem] text-pink-400">Ermist Hair</h1>
//       </div>
//     </div>

//   );
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/custom", label: "Custom Wigs" },
  { href: "/styles", label: "Styles" },
  { href: "/care", label: "Wig Care" },
  { href: "/faq", label: "FAQ" },
]

export default function WigsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <div>

        <nav className="bg-pink-500 text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <span className="font-bold text-2xl text-black">Ermist Hair</span>
                </Link>
              </div>
              <div className="hidden md:block">
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
              <div className="hidden md:block">
                <Link href="/cart" className="flex items-center text-black hover:text-white transition-colors">
                  <FaShoppingCart className="h-6 w-6 mr-1" />
                  <span>Cart</span>
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-pink-600 hover:text-white transition-colors"
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
        <div className="flex items-center justify-center h-screen">
        <h1 className="text-[10rem] text-pink-400">Ermist Hair</h1>
        </div>
    </div>
  )
}

