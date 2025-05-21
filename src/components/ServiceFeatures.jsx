import React from 'react'
import { FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaHeadset } from 'react-icons/fa'

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl text-blue-600" />,
      title: "Free Shipping",
      description: "On All Orders Over $99"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Secure Payment",
      description: "We ensure secure payment"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
      title: "100% Money Back",
      description: "30 Days Return Policy"
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      title: "Online Support",
      description: "24/7 Dedicated Support"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-100 rounded-md shadow-sm">
              <div className="mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures 