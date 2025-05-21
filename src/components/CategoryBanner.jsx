import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBannerItem = ({ title, subtitle, link, bgImage }) => {
  return (
    <div className="relative bg-gray-100 overflow-hidden rounded-md h-64 md:h-80">
      {/* Image background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Content with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent flex items-center">
        <div className="px-8 py-6">
          <h3 className="text-3xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-white mb-4">{subtitle}</p>
          
          <Link 
            to={link} 
            className="inline-block bg-white hover:bg-gray-100 text-gray-800 px-5 py-2 rounded-full uppercase text-sm font-medium transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

const CategoryBanner = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Fashion Banner */}
          <CategoryBannerItem 
            title="Men's Fashion"
            subtitle="Flat 70% Off"
            link="/category/mens"
            bgImage="https://img.freepik.com/free-photo/handsome-man-elegant-suit_144627-39457.jpg"
          />
          
          {/* Women's Fashion Banner */}
          <CategoryBannerItem 
            title="Women's Wear"
            subtitle="Min. 35-70% Off"
            link="/category/womens"
            bgImage="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8586.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner 