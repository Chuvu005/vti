import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaUser, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <header className='w-full bg-white shadow-sm'>
      {/* Top bar with blue background */}
      <div className='w-full bg-blue-600 text-white py-2 px-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <span className='text-xs flex items-center'>
              <MdEmail className='inline mr-1' />
              <span className='hidden sm:inline'>support@pressmart.com</span>
            </span>
            <span className='text-xs flex items-center'>
              <FaPhoneAlt className='inline mr-1' />
              <span className='hidden sm:inline'>+123 456 789</span>
            </span>
          </div>
          <div className='flex items-center space-x-4 text-xs'>
            <span>Welcome to Our Store!</span>
            <div className='relative'>
              <select className='bg-blue-600 border-none text-white text-xs cursor-pointer'>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <span>
              <Link to="/order-tracking" className='hover:text-gray-200'>$ Dollar ($)</Link>
            </span>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className='container mx-auto py-4 px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='text-2xl font-bold'>
            <Link to="/" className='flex items-center'>
              Press<span className='text-blue-600'>Mart.</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className='hidden md:flex space-x-6'>
            <Link to="/" className='font-medium hover:text-blue-600'>Home</Link>
            <Link to="/shop" className='font-medium hover:text-blue-600'>Shop</Link>
            <Link to="/pages" className='font-medium hover:text-blue-600'>Pages</Link>
            <Link to="/blog" className='font-medium hover:text-blue-600'>Blog</Link>
            <Link to="/elements" className='font-medium hover:text-blue-600'>Elements</Link>
            <Link to="/buy" className='font-medium hover:text-blue-600'>Buy</Link>
          </nav>
          
          {/* Right icons */}
          <div className='flex items-center space-x-4'>
            {/* User account icon */}
            <Link to="/account" className='hover:text-blue-600'>
              <FaUser className="h-5 w-5" />
            </Link>
            
            {/* Search icon */}
            <button className='hover:text-blue-600'>
              <FaSearch className="h-5 w-5" />
            </button>
            
            {/* Wishlist icon with counter */}
            <Link to="/wishlist" className='relative hover:text-blue-600'>
              <FaHeart className="h-5 w-5" />
              <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>3</span>
            </Link>
            
            {/* Cart icon with counter */}
            <Link to="/cart" className='relative hover:text-blue-600'>
              <FaShoppingBag className="h-5 w-5" />
              <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
