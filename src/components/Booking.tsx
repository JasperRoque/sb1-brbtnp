import React from 'react';
import { motion } from 'framer-motion';

const bookingOptions = [
  {
    title: "Life Cycles",
    duration: "4-month program",
    price: "$1,997",
    description: "Transform your life through our signature healing program",
  },
  {
    title: "First-time Healer Session",
    duration: "90 minutes",
    price: "$333",
    description: "Experience the power of holistic healing",
  },
  {
    title: "Apprenticeship Interview",
    duration: "35 minutes",
    price: "Free",
    description: "Discover if our healing path aligns with your journey",
  },
];

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Begin Your Journey</h2>
          <p className="text-lg text-gray-600">Choose the perfect path for your healing journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
              <div className="text-primary-600 font-bold text-2xl mb-2">{option.price}</div>
              <div className="text-gray-500 mb-4">{option.duration}</div>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}