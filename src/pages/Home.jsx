import React from 'react'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import ServiceFeatures from '../components/ServiceFeatures'
import PromoBanners from '../components/PromoBanners'
import FeaturedProducts from '../components/FeaturedProducts'
import CategoryBanner from '../components/CategoryBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main>
        <HeroBanner />
        <ServiceFeatures />
        <PromoBanners />
        <FeaturedProducts />
        <CategoryBanner />
      </main>
      <Footer />
    </div>
  )
}

export default Home
