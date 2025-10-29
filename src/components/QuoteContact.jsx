import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteContact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Health Insurance' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Simulate request
      await new Promise((res) => setTimeout(res, 900));
      setMessage('Thanks! A licensed advisor will contact you shortly.');
      setForm({ name: '', email: '', phone: '', type: 'Health Insurance' });
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-amber-50">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Get a Free Quote</h3>
            </div>
            <p className="mt-2 text-slate-600">
              Tell us a bit about yourself and the coverage you need.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="john@example.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Insurance Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option>Health Insurance</option>
                  <option>Life Insurance</option>
                  <option>Auto Insurance</option>
                  <option>Home Insurance</option>
                  <option>Business Insurance</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 hover:bg-amber-300 text-blue-950 font-semibold shadow transition disabled:opacity-60"
                >
                  {loading ? 'Submitting…' : 'Request Quote'}
                </button>
                {message && <span className="text-sm text-green-600">{message}</span>}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-blue-950 text-white p-6 md:p-8 shadow-lg border border-white/10">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="mt-2 text-white/80">
                Our advisors are here to help with quotes, policy details, and claims.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a href="tel:+18001234567" className="flex items-center gap-3 p-3 rounded-md bg-white/10 hover:bg-white/15 transition">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a href="mailto:support@securelife.com" className="flex items-center gap-3 p-3 rounded-md bg-white/10 hover:bg-white/15 transition">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>support@securelife.com</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-md bg-white/10">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>123 Secure Ave, Suite 200, New York, NY</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <iframe
                title="SecureLife HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.969044438137!2d-73.9959414!3d40.7306105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ5LjAiTiA3M8KwNTknMzQuMCJX!5e0!3m2!1sen!2sus!4v1716400000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteContact;
