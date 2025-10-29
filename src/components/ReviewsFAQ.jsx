import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sophia Martinez',
    role: 'Small Business Owner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    stars: 5,
    quote:
      'SecureLife made switching business insurance effortless. Transparent pricing and excellent support!'
  },
  {
    name: 'James Carter',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1000&auto=format&fit=crop',
    stars: 5,
    quote: 'Fast claim processing after a storm. Grateful for the quick and caring service.'
  },
  {
    name: 'Aisha Khan',
    role: 'Parent',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop',
    stars: 5,
    quote: 'Our family plan is affordable and comprehensive. Highly recommend SecureLife.'
  }
];

const faqs = [
  {
    q: 'How do I choose the right insurance plan?',
    a: 'Our advisors evaluate your needs and budget to recommend tailored options. Start with a free quote and we will guide you.'
  },
  {
    q: 'Can I bundle multiple policies for a discount?',
    a: 'Yes. Bundling home, auto, and life policies often provides additional savings.'
  },
  {
    q: 'How fast are claims processed?',
    a: 'Most claims are reviewed within 24-48 hours, with ongoing updates until resolution.'
  },
  {
    q: 'Do you offer business coverage?',
    a: 'We support businesses of all sizes with liability, property, workers’ comp, and more.'
  }
];

const ReviewsFAQ = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Customer Reviews</h2>
            <p className="mt-2 text-slate-600">What our clients say about working with us.</p>

            <div className="relative mt-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`rounded-2xl border border-slate-200 p-6 bg-white shadow-sm transition-opacity duration-500 ${
                    i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-blue-950">{t.name}</div>
                      <div className="text-sm text-slate-600">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-3 text-slate-700 text-lg">“{t.quote}”</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">FAQs</h2>
            <p className="mt-2 text-slate-600">Common questions about policies, quotes, and claims.</p>

            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqs.map((f, i) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-blue-950 font-medium">
                    {f.q}
                    <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
                  </summary>
                  <p className="mt-2 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsFAQ;
