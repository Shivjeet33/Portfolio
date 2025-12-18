import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';
import { EMAIL, GITHUB, LINKEDIN, PHONE } from '../constants';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Left Side: Text & Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Ready to start <br /> a project?
              </h2>
              <p className="text-zinc-400 text-lg max-w-md mb-8">
                Reach out to discuss how we can transform your ideas into elegant digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-zinc-400 text-lg">
              <p>{PHONE}</p>
              <a href={`mailto:${EMAIL}`} className="hover:text-indigo-400 transition-colors">{EMAIL}</a>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800/50">
             <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Send a message</h3>
                
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Gmail"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project..."
                    rows={4}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    status === 'success' 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/50' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {status === 'submitting' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : status === 'success' ? (
                    <>Message Sent <CheckCircle size={20} /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
             </form>
          </div>
        </div>

        {/* Bottom Bar */}
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