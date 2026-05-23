import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaGitlab, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiMail, HiUser, HiChat, HiPhone } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { personalInfo, socialLinks } from '../data/portfolio';

const iconComponents = {
  github: FaGithub,
  gitlab: FaGitlab,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-8">
              <h3 className="font-display text-2xl font-bold text-white light:text-zinc-900">
                Let&apos;s talk
              </h3>
              <p className="mt-3 text-zinc-400 light:text-zinc-600">
                I&apos;m currently open to internships, collaborations, and full-time opportunities.
                Feel free to reach out through any channel below.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-6 flex items-center gap-3 text-zinc-300 transition hover:text-cyan-400 light:text-zinc-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <HiMail className="h-5 w-5" />
                </div>
                <span className="break-all text-sm">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
                className="mt-4 flex items-center gap-3 text-zinc-300 transition hover:text-cyan-400 light:text-zinc-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <HiPhone className="h-5 w-5" />
                </div>
                <span className="text-sm">{personalInfo.phone}</span>
              </a>

              <p className="mt-4 text-sm text-zinc-500">{personalInfo.location}</p>

              <div className="mt-8 flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconComponents[link.icon] || FaTwitter;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-12 w-12 items-center justify-center rounded-xl text-zinc-400 transition hover:scale-110 hover:text-cyan-400"
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-8" noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300 light:text-zinc-700">
                    <HiUser className="h-4 w-4 text-cyan-400" /> Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-zinc-900/50 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 light:bg-white light:text-zinc-900 ${
                      errors.name ? 'border-red-500' : 'border-zinc-700 light:border-zinc-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300 light:text-zinc-700">
                    <HiMail className="h-4 w-4 text-cyan-400" /> Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-zinc-900/50 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 light:bg-white light:text-zinc-900 ${
                      errors.email ? 'border-red-500' : 'border-zinc-700 light:border-zinc-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300 light:text-zinc-700">
                    <HiChat className="h-4 w-4 text-cyan-400" /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-xl border bg-zinc-900/50 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 light:bg-white light:text-zinc-900 ${
                      errors.message ? 'border-red-500' : 'border-zinc-700 light:border-zinc-300'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-glow w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 disabled:opacity-60"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-emerald-400">Message sent successfully!</p>
                    <p className="text-sm text-zinc-400">I&apos;ll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
