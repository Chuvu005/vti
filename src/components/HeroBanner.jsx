import React from 'react'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="flex flex-col justify-center px-4 md:px-12 py-12 z-10">
            <p className="text-blue-500 text-3xl italic mb-2 font-light" style={{ fontFamily: 'cursive, serif' }}>Season Sale</p>
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 text-black">
              MEN'S FASHION
            </h1>
            <p className="text-lg mb-8">Min. 35-70% Off</p>
            
            <div className="flex space-x-4">
              <Link 
                to="/shop" 
                className="bg-blue-600 text-white px-6 py-2 text-sm rounded-sm uppercase font-medium hover:bg-blue-700 transition"
              >
                SHOP NOW
              </Link>
              <Link 
                to="/blog" 
                className="bg-white border border-gray-300 px-6 py-2 text-sm rounded-sm uppercase font-medium hover:bg-gray-100 transition"
              >
                READ MORE
              </Link>
            </div>
          </div>
          
          {/* Right side with the image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src='https://st.app1h.com/uploads/images/company72/images/ao-thun-trang-129595.jpg'
                alt="Men's Fashion"
                className="object-contain h-full w-auto max-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="w-3 h-3 rounded-full bg-blue-600"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </section>
  )
}

export default HeroBanner 