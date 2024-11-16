import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Flexible Online Learning",
    description: "Learn at your own pace from anywhere in the world",
    icon: "🌐",
  },
  {
    title: "Supportive Community",
    description: "Connect with like-minded healers on your journey",
    icon: "🤝",
  },
  {
    title: "Practical + Spiritual Approach",
    description: "Balance earthly wisdom with spiritual growth",
    icon: "☯️",
  },
  {
    title: "Expert-led Courses",
    description: "Learn from experienced practitioners and mentors",
    icon: "👩‍🏫",
  },
  {
    title: "One-on-one Sessions",
    description: "Get personalized guidance and healing support",
    icon: "🧘‍♀️",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Experience the perfect blend of ancient wisdom and modern learning</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}