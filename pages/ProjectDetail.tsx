import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, PenTool, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../projectData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  // Determine next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = currentIndex !== -1 && currentIndex < PROJECTS.length - 1 
    ? PROJECTS[currentIndex + 1] 
    : PROJECTS[0];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="min-h-screen bg-zinc-950 pt-24 pb-20">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Work
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-12"
        >
          {project.tagline}
        </motion.p>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.6 }}
         className="w-full h-[40vh] md:h-[60vh] overflow-hidden bg-zinc-900 mb-20"
      >
        <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-b border-zinc-800 pb-12 mb-12">
           <div>
             <h3 className="text-zinc-500 font-medium mb-2 uppercase text-xs tracking-wider">Role</h3>
             <p className="text-white font-medium">{project.role}</p>
           </div>
           <div>
             <h3 className="text-zinc-500 font-medium mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
               <Clock size={14} /> Duration
             </h3>
             <p className="text-white font-medium">{project.duration}</p>
           </div>
           <div className="col-span-2 md:col-span-1">
             <h3 className="text-zinc-500 font-medium mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
               <PenTool size={14} /> Tools
             </h3>
             <div className="flex flex-wrap gap-2">
               {project.tools.map(tool => (
                 <span key={tool} className="bg-zinc-900 text-zinc-300 text-sm px-2 py-1 rounded border border-zinc-800">
                   {tool}
                 </span>
               ))}
             </div>
           </div>
        </div>

        {/* Content Block */}
        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500"></span> The Overview
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">{project.overview}</p>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-red-900/20">
              <h2 className="text-xl font-bold text-white mb-4 text-red-400">The Problem</h2>
              <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-indigo-900/20">
              <h2 className="text-xl font-bold text-white mb-4 text-indigo-400">The Solution</h2>
              <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Visual Gallery</h2>
            <div className="grid gap-8">
              {project.images.map((img, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden border border-zinc-800">
                   <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Next Project Nav */}
        <div className="mt-24 pt-12 border-t border-zinc-800">
          <Link to={`/projects/${nextProject.id}`} className="group block">
            <p className="text-zinc-500 text-sm mb-2">Next Project</p>
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {nextProject.title}
              </h3>
              <ArrowRight className="text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-2 transition-all" size={32} />
            </div>
          </Link>
        </div>

      </div>
    </article>
  );
};

export default ProjectDetail;