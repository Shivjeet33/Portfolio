import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB, LINKEDIN } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                Transforming <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Complex Ideas
                </span> <br />
                into Elegant Interfaces.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed"
            >
              Hi, I'm Shivjeet Navre. A Creative UI/UX Designer passionate about crafting intuitive, user-centered digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <SocialLink href={LINKEDIN} icon={<Linkedin size={22} />} />
              <SocialLink href={GITHUB} icon={<Github size={22} />} />
              <SocialLink href={`mailto:${EMAIL}`} icon={<Mail size={22} />} />
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
             {/* Abstract Visual / Headshot Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full opacity-20 animate-pulse blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group">
                 <img 
                   src="https://picsum.photos/id/447/800/800" 
                   alt="Shivjeet Navre"
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                 />
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;