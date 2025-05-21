import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaSearch, FaShoppingCart, FaStar } from 'react-icons/fa'

const ProductCard = ({ product, tagText, tagColor }) => {
  const { id, name, image, price, oldPrice, rating, category } = product
  
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={`${i <= rating ? 'text-yellow-400' : 'text-gray-300'} text-xs`} 
        />
      )
    }
    return stars
  }

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-md">
      {/* Product Image Section */}
      <div className="relative h-52 bg-gray-50">
        {/* Tag if available */}
        {tagText && (
          <span
            className={`absolute top-2 left-2 z-10 text-xs font-medium px-2 py-1 rounded-sm text-white ${
              tagColor || 'bg-green-500'
            }`}
          >
            {tagText}
          </span>
        )}
        
        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center p-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-contain" />
          ) : (
            <p className="text-gray-500 text-sm">Product Image</p>
          )}
        </div>
        
        {/* Quick action buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1.5 rounded-full bg-white shadow hover:bg-gray-100 transition">
            <FaHeart className="text-gray-600 hover:text-red-500 w-3 h-3" />
          </button>
          <button className="p-1.5 rounded-full bg-white shadow hover:bg-gray-100 transition">
            <FaSearch className="text-gray-600 hover:text-blue-500 w-3 h-3" />
          </button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-3">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        
        {/* Product Name */}
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 mb-1 line-clamp-2 h-10">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex space-x-0.5">
            {renderStars(rating)}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-blue-600 text-sm">${price}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">${oldPrice}</span>
            )}
          </div>
          
          {/* Add to cart button */}
          <button className="p-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
            <FaShoppingCart className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 