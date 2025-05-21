import React from 'react'
import { Link } from 'react-router-dom'

const WomenStyleBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-md h-full bg-gray-100">
      {/* Background image */}
      <img 
        src="https://img.freepik.com/free-photo/beautiful-woman-casual-sweater-sunglasses-jeans_285396-9159.jpg" 
        alt="Women's Style" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col">
        <div className="bg-blue-600 text-white text-center py-1 px-2 text-sm font-medium">
          New Arrivals
        </div>
        
        <div className="absolute bottom-8 left-8">
          <h3 className="text-3xl font-bold mb-1 text-black">Women's Style</h3>
          <p className="mb-4">Up to 70% Off</p>
          
          <Link
            to="/category/womens"
            className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm inline-block hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

const SmallBanner = ({ title, discount, bgImage, link }) => {
  return (
    <div className="relative overflow-hidden rounded-md h-full">
      {/* Background image */}
      <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Discount tag */}
      {discount && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-1 px-2 text-sm font-medium">
          {discount} OFF
        </div>
      )}
      
      {/* Title */}
      <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <Link
          to={link}
          className="bg-white text-gray-800 px-4 py-1.5 rounded-full text-xs hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

const BackpackBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-md h-full">
      {/* Background image */}
      <img 
        src="https://img.freepik.com/free-photo/military-backpacks-with-copy-space_23-2148468018.jpg" 
        alt="Backpack" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Accessories tag */}
      <div className="absolute top-0 left-0 right-0 bg-amber-600 text-white text-center py-1 px-2 text-sm font-medium">
        Accessories
      </div>
      
      {/* Title and content */}
      <div className="absolute bottom-2 left-0 right-0 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-1 text-black">Backpack</h3>
        <p className="text-sm mb-2">Min. 40-60% Off</p>
        <Link
          to="/category/backpacks"
          className="bg-white text-gray-800 px-4 py-1.5 rounded-full text-xs hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

const PromoBanners = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Women's Style - Takes up more space */}
          <div className="md:col-span-6 h-[350px] md:h-[400px]">
            <WomenStyleBanner />
          </div>
          
          {/* Right side smaller banners stacked */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {/* Top row: Handbag and Watch side by side */}
            <div className="col-span-1 h-48">
              <SmallBanner
                title="Handbag"
                discount="25%"
                bgImage="https://img.freepik.com/free-photo/elegant-handbag-women_1303-13126.jpg"
                link="/category/handbags"
              />
            </div>
            
            <div className="col-span-1 h-48">
              <SmallBanner
                title="Watch"
                discount="40%"
                bgImage="https://img.freepik.com/free-photo/watch_74190-2219.jpg"
                link="/category/watches"
              />
            </div>
            
            {/* Bottom row: Backpack spanning full width */}
            <div className="col-span-2 h-48">
              <BackpackBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanners 