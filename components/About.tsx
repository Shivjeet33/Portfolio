import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

          <h2 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-6">Me, Myself</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            <p>
              I am currently a <span className="text-white font-medium">Bachelor of Engineering in IT</span> student at MET Institute of Engineering, Nashik (2022-2026).
            </p>
            <p>
              My journey blends technical IT knowledge with a deep passion for <span className="text-white font-medium">design thinking</span>. I don't just make things look good; I focus on solving real-world challenges through wireframing, prototyping, and user research.
            </p>
            <p>
              Whether it's leading a cross-functional team or obsessing over the perfect pixel in Figma, I bring a mix of empathy and engineering logic to every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;