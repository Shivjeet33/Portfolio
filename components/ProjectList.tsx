import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../projectData';

const ProjectList: React.FC = () => {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">Selected Work</h2>
            <p className="text-zinc-400">Case studies and creative experiments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">
                      {project.category}
                    </span>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;