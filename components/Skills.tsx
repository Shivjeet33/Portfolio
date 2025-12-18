import React from 'react';
import { motion } from 'framer-motion';
import { Figma, PenTool, Users, LayoutTemplate, Search, BrainCircuit, Layers, Heart, MousePointerClick } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">Skills & Tools</h2>
          <p className="text-zinc-400">My digital arsenal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Main Tool: Figma */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-indigo-500/50 transition-colors"
          >
            <div className="p-4 bg-zinc-800/50 rounded-2xl w-fit group-hover:bg-indigo-500/20 transition-colors">
              <Figma size={40} className="text-white group-hover:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Figma</h3>
              <p className="text-zinc-400">My primary weapon of choice for interface design, prototyping, and design systems.</p>
            </div>
          </motion.div>

          {/* Design Tools */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center gap-4 hover:bg-zinc-800/80 transition-colors"
          >
             <h3 className="text-lg font-semibold text-white">Design Tools</h3>
             <ul className="text-zinc-400 space-y-2">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Canva</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Adobe XD</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Photoshop</li>
             </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-1 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between"
          >
             <div className="space-y-4">
                <SkillItem icon={<BrainCircuit size={20} />} title="Problem Solving" />
                <SkillItem icon={<Users size={20} />} title="Leadership" />
                <SkillItem icon={<Search size={20} />} title="User Research" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mt-4">Soft Skills</h3>
                <p className="text-zinc-500 text-sm mt-2">Empathy driven leadership & collaboration.</p>
             </div>
          </motion.div>

          {/* Core Skills 1 - Wireframing */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors"
          >
            <LayoutTemplate size={32} className="text-indigo-400" />
            <span className="text-white font-medium text-lg">Wireframing</span>
          </motion.div>

          {/* Core Skills 2 - Visual Design */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors"
          >
            <PenTool size={32} className="text-purple-400" />
            <span className="text-white font-medium text-lg">Visual Design</span>
          </motion.div>

           {/* Core Skills 3 - Prototyping */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors"
          >
            <Layers size={32} className="text-green-400" />
            <span className="text-white font-medium text-lg">Prototyping</span>
          </motion.div>

           {/* Core Skills 4 - User Centric Design */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors"
          >
            <Heart size={32} className="text-red-400" />
            <span className="text-white font-medium text-lg">User Centric</span>
          </motion.div>

           {/* Core Skills 5 - Interaction Design */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.7 }}
             className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors"
          >
            <MousePointerClick size={32} className="text-amber-400" />
            <span className="text-white font-medium text-lg">Interaction</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-3 text-zinc-300">
    <span className="text-indigo-400">{icon}</span>
    <span className="font-medium">{title}</span>
  </div>
);

export default Skills;