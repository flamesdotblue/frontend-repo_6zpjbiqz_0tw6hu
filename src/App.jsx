import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Plans from './components/Plans';
import QuoteContact from './components/QuoteContact';
import ReviewsFAQ from './components/ReviewsFAQ';

const Navbar = () => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'plans', label: 'Plans' },
    { id: 'quote', label: 'Get a Quote' },
    { id: 'reviews', label: 'Reviews & FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-blue-950" onClick={(e) => handleClick(e, 'home')}>
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400 mr-2" /> SecureLife Insurance
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className="text-slate-700 hover:text-blue-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={(e) => handleClick(e, 'quote')}
            className="px-4 py-2 rounded-md bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold"
          >
            Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

const About = () => (
  <section id="about" className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">About Us</h2>
        <p className="mt-4 text-slate-600 text-lg">
          We are dedicated to safeguarding what matters most. Our mission is to deliver trustworthy, transparent, and affordable insurance solutions for individuals and businesses.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700">
          <li className="p-3 rounded-md bg-slate-50 border border-slate-200">Mission: Protection with integrity</li>
          <li className="p-3 rounded-md bg-slate-50 border border-slate-200">Values: Trust, transparency, care</li>
          <li className="p-3 rounded-md bg-slate-50 border border-slate-200">Support: Licensed advisors</li>
          <li className="p-3 rounded-md bg-slate-50 border border-slate-200">Coverage: Families & businesses</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
          alt="Business professionals smiling"
          className="w-full h-[340px] object-cover rounded-2xl border border-slate-200 shadow"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-blue-950 text-white pt-16 pb-10">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold">SecureLife Insurance</h3>
          <p className="mt-2 text-white/80 max-w-md">
            Professional coverage, modern experience. We protect families and businesses with care and clarity.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-white/15 grid place-items-center">X</a>
            <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-white/15 grid place-items-center">in</a>
            <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-white/15 grid place-items-center">FB</a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#plans" className="hover:text-white">Insurance Plans</a></li>
              <li><a href="#quote" className="hover:text-white">Get a Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} SecureLife Insurance. All rights reserved.</p>
        <p>Made with care for speed and accessibility.</p>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    document.title = 'SecureLife Insurance — Protecting Your Future, Today';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <ReviewsFAQ />
      <QuoteContact />
      <Footer />
    </div>
  );
}

export default App;
