import React from 'react';
import { Heart, Shield, Car, Home, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    icon: <Heart className="w-6 h-6 text-amber-500" />,
    title: 'Health Insurance',
    desc: 'Comprehensive coverage for routine care, emergencies, and prescriptions.'
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-500" />,
    title: 'Life Insurance',
    desc: 'Protect your loved ones with term and whole life options tailored to you.'
  },
  {
    icon: <Car className="w-6 h-6 text-amber-500" />,
    title: 'Auto Insurance',
    desc: 'Affordable coverage for liability, collision, and comprehensive protection.'
  },
  {
    icon: <Home className="w-6 h-6 text-amber-500" />,
    title: 'Home Insurance',
    desc: 'Safeguard your property and belongings against unexpected events.'
  },
  {
    icon: <Briefcase className="w-6 h-6 text-amber-500" />,
    title: 'Business Insurance',
    desc: 'Customized solutions for small and large businesses across industries.'
  }
];

const Plans = () => {
  return (
    <section id="plans" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Insurance Plans</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Flexible options designed to fit your needs, budget, and future goals.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-amber-50 p-2">{p.icon}</div>
                <h3 className="text-lg font-semibold text-blue-950">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{p.desc}</p>
              <button className="mt-5 text-sm font-medium text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
