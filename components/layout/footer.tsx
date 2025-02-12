import React from 'react'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa6";
import { Button } from "@/components/ui/button";


export const Footer = () => {
  return (
    <footer className="bg-[#fdf1f3] px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            {/* Newsletter Section */}
            <div>
              <h2 className="text-3xl font-display mb-3">
                Sign up for Our Newsletter!
              </h2>
              <p className="text-gray-600 mb-6">
                Join us and get the exclusive sales, product launches, Wig tips
                & more directly delivered to your inbox
              </p>
              <div className="flex gap-4 max-w-md">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    className="bg-white border-0"
                  />
                </div>
                <Button className="bg-[#e75e8d] hover:bg-[#d54d7c] text-white px-8">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="md:pl-8">
              <h2 className="text-3xl font-display mb-3">Contact</h2>
              <div className="space-y-2 mb-6">
                <p className="text-gray-600">
                  Call: 833-902-4146 (Mon-Fri 7AM - 2PM PST)
                </p>
                <p className="text-gray-600">Email: Support@Uniwigs.com</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <FaFacebook className="w-5 h-5 text-[#e75e8d]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <FaInstagram className="w-5 h-5 text-[#e75e8d]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <FaYoutube className="w-5 h-5 text-[#e75e8d]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 fill-[#e75e8d]" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.5 6h-9a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 6zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <FaTwitter className="w-5 h-5 text-[#e75e8d]" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 fill-[#e75e8d]" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-display text-xl mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Our Factory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">Help Center</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Hair Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Loyalty Point Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Custom Product Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">Community</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Charity Organization Collab
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Uniwigs Loyalty Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Salon & Wholesale Program
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Uniwigs Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Become an Influencer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Give 20% Off, Get 1,000 Points
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-4">Popular</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ & HOW-TOS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Coupons & Specials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Beginners Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    The Color Shades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Share your Joy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}
