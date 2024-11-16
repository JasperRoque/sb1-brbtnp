import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const programs = [
  {
    title: "The Money Bag",
    description: "Master wealth manifestation and create sustainable passive income streams",
    icon: "💰",
  },
  {
    title: "The Healers Apprenticeship",
    description: "Learn the ancient wisdom of herbal medicine and holistic healing practices",
    icon: "🌿",
  },
  {
    title: "The Healers Clinic",
    description: "Develop your energy work abilities and healing techniques",
    icon: "✨",
  },
  {
    title: "The Purple Flames",
    description: "Accelerate your spiritual evolution and master energy cleansing",
    icon: "💜",
  },
  {
    title: "The Healing Ambassadors",
    description: "Become a leader in healing communities and spread light",
    icon: "👥",
  },
];

export default function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600">Transform your life through our comprehensive healing programs</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
              <button className="mt-4 px-6 py-2 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}