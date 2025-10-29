import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] w-full bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/70 to-blue-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-36 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-4">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-xs tracking-wide uppercase">SecureLife Insurance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Protecting Your Future, <span className="text-amber-400">Today</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl">
            Trusted coverage for families and businesses. Tailored insurance plans with transparent pricing and expert support.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleScroll('quote')}
              className="px-6 py-3 rounded-md bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold shadow-lg transition"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => handleScroll('plans')}
              className="px-6 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
            >
              Explore Plans
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            alt="Happy family protected by insurance"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
