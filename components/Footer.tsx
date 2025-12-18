import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { EMAIL, GITHUB, LINKEDIN, PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Ready to start <br /> a project?
            </h2>
            <div className="flex flex-col gap-2 text-zinc-400 text-lg">
              <p>{PHONE}</p>
              <a href={`mailto:${EMAIL}`} className="hover:text-indigo-400 transition-colors">{EMAIL}</a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end justify-center">
             <button className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full overflow-hidden hover:bg-indigo-700 transition-colors">
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume <ArrowUpRight size={20} />
                </span>
             </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-6">
          <p className="text-zinc-500 text-sm">© 2025 Shivjeet Navre. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={`mailto:${EMAIL}`} className="text-zinc-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;