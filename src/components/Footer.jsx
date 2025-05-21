import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-blue-400" />
                <p>123 Commerce Street, New York, NY 10001, USA</p>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-400" />
                <p>+123 456 7890</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <p>support@pressmart.com</p>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <FaPinterest />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/my-account" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-blue-400" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <div>
              <h4 className="font-medium text-white mb-3">We Accept</h4>
              <div className="flex space-x-2">
                <span className="bg-white text-gray-800 px-2 py-1 text-xs rounded">Visa</span>
                <span className="bg-white text-gray-800 px-2 py-1 text-xs rounded">MasterCard</span>
                <span className="bg-white text-gray-800 px-2 py-1 text-xs rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 PressMart. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition">Terms</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition">Privacy</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-blue-400 transition">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
