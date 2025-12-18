import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">Experience</h2>
          <p className="text-zinc-400">My professional journey so far.</p>
        </div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-indigo-400 font-medium mb-4">{exp.company}</h4>
              
              <p className="text-zinc-400 mb-4">{exp.description}</p>
              
              {exp.details && (
                <ul className="list-disc list-outside ml-4 text-zinc-400 text-sm space-y-2 marker:text-zinc-600">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;