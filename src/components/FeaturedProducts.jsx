import React, { useState } from 'react'
import ProductCard from './ProductCard'

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Tom Scout Backpack",
    category: "Backpacks",
    price: 149.00,
    oldPrice: 189.00,
    rating: 4,
    image: "https://img.freepik.com/free-psd/backpack-mockup_1310-495.jpg?w=740&t=st=1715331358~exp=1715331958~hmac=8e6bde7cec05b59c334248bbf710a24d946e2e9d1ae5eb79e0b5ece5046c09ad"
  },
  {
    id: 2, 
    name: "Brown Faux Biker Jacket",
    category: "Jackets",
    price: 159.00,
    oldPrice: 179.00,
    rating: 5,
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5030.jpg?w=740&t=st=1715331379~exp=1715331979~hmac=85e29548bc179addfcc9e44485c164b264ac248ff1e05a47dd3c04d6fb11d8a6"
  },
  {
    id: 3,
    name: "Men's Brown Solid Mid Top Boots",
    category: "Casual Shoes, Sneakers",
    price: 119.00,
    rating: 3,
    image: "https://img.freepik.com/free-photo/brown-leather-chelsea-boots-men-s-fashion-shoes_53876-106063.jpg?w=740&t=st=1715331422~exp=1715332022~hmac=17d1a4fdc471fee28d743ad366582f7972c01d7621de9cc9af780c8dbae18948"
  },
  {
    id: 4,
    name: "Petite Olive Green Solid Top",
    category: "Dresses & Tops",
    price: 49.99,
    rating: 4,
    image: "https://img.freepik.com/free-photo/women-s-olive-colored-blouse_53876-101605.jpg?w=740&t=st=1715331462~exp=1715332062~hmac=c0390042b013b3c3dce6e019396d0db481a7ab1adecaa08a08d706b5d56e27dd"
  },
  {
    id: 5,
    name: "Brown Solid Laptop Bag",
    category: "Handbags, Messenger Bag",
    price: 99.99,
    oldPrice: 119.99,
    rating: 5,
    image: "https://img.freepik.com/free-photo/elegant-brown-leather-handbag_1203-7667.jpg?w=740&t=st=1715331501~exp=1715332101~hmac=00ec61fe713465b3f1c20c44eeccc7cd1f6a0c337ce5587c8de943c43f547da4"
  },
  {
    id: 6,
    name: "Black Analogue and Digital Watch",
    category: "Analog Watches, Digital Watches",
    price: 69.99,
    rating: 4,
    image: "https://img.freepik.com/free-vector/realistic-smart-watch-elegant-black_23-2149880372.jpg?w=740&t=st=1715331539~exp=1715332139~hmac=4d5810d46a8514ef3a40589a6d0bd92815a3ca0d53eb9146a67e3327b19ddd3d"
  },
  {
    id: 7,
    name: "Navy Printed Round Neck T-Shirt",
    category: "T-Shirts",
    price: 39.99,
    oldPrice: 50.00,
    rating: 5,
    image: "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448748.jpg?w=740&t=st=1715331576~exp=1715332176~hmac=7c103a4c6551d06ffb0d5e693db2025b3669476cb77c5e63a7d730fe49abbd88"
  },
  {
    id: 8,
    name: "Large PU Leather Design Shopper Tote",
    category: "Handbags",
    price: 79.99,
    rating: 3,
    image: "https://img.freepik.com/free-photo/women-s-handbag_1203-8369.jpg?w=740&t=st=1715331620~exp=1715332220~hmac=21c7cddafb92dff5084c772eed455b2fb771557bbf0f2c14967fe9dbceac081e"
  }
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('new')
  
  // Get products based on active tab
  const getProducts = () => {
    switch (activeTab) {
      case 'new':
        return MOCK_PRODUCTS.slice(0, 8);
      case 'best':
        return MOCK_PRODUCTS.filter(product => product.rating >= 4).slice(0, 8);
      case 'top':
        return [...MOCK_PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);
      default:
        return MOCK_PRODUCTS.slice(0, 8);
    }
  }
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border-b">
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'new' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              New Arrival
            </button>
            <button
              onClick={() => setActiveTab('best')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'best' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Best Selling
            </button>
            <button
              onClick={() => setActiveTab('top')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'top' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Top Rated
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {getProducts().map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              tagText={product.id === 1 ? 'SALE' : (product.id === 5 ? 'NEW' : null)}
              tagColor={product.id === 1 ? 'bg-green-500' : 'bg-blue-500'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 