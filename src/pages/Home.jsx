import React, { useState } from 'react';
import { Search, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
      
      {/* 📐 Technical Background Grid */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          {/* Crosshairs */}
          <div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-black/40" />
          <div className="absolute top-10 right-10 w-4 h-4 border-r border-t border-black/40" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-l border-b border-black/40" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-black/40" />
          
          {/* Vertical Ruler Line */}
          <div className="absolute left-[80px] top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
          
          {/* Neon Side Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-[8vw] bg-[#D9FF00] hidden lg:block border-l border-black/10"></div>
      </div>

      {/* 🧭 Navbar - Technical/Brutalist */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between border-b border-black/10 bg-[#DCEEEF]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4 md:gap-6 pl-0 md:pl-20">
            <div className="flex items-center gap-3 group">
                <div className="h-8 w-8 flex items-center justify-center border border-black group-hover:scale-110 transition-transform overflow-hidden bg-black">
                    <img src="/logo.png" alt="Zenvy Logo" className="h-full w-full object-cover" />
                </div>
                <div>
                   <span className="font-bold text-lg tracking-tighter uppercase block leading-none">Zenvy</span>
                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none hidden sm:block">Console V2.1</span>
                </div>
            </div>
        </div>

        <button 
            onClick={() => navigate('/contact-us')}
            className="flex items-center gap-2 px-3 py-2 md:px-4 bg-transparent border border-black/10 text-neutral-600 hover:bg-black hover:text-[#D9FF00] transition-all text-xs font-bold uppercase tracking-wider"
        >
            <span className="hidden md:inline">Contact Us</span>
        </button>
      </nav>

      {/* 🚀 Main Content */}
      <main className="relative z-10 pt-14 md:pt-24 px-4 md:px-6 pb-12 max-w-7xl mx-auto md:pl-[100px] lg:pr-[10vw]">
        
        {/* Header HUD */}
        <div className="mb-8 relative">
           
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-black/10 pb-8">
                <div>

                    <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter uppercase mb-4 leading-[0.9]">
                        DashBoard
                    </h1>
                </div>
                
                {/* Search Input - Highlighted */}
                <div className="w-full md:w-80 relative z-20">
                    <div className="relative group">
                         {/* Highlighted Label */}
                        <div className="absolute -top-7 left-0 bg-black text-[#D9FF00] px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                            Search_Query
                        </div>
                        
                        {/* Boxed Input */}
                        <div className="relative bg-white border-2 border-black shadow-[4px_4px_0px_0px_#1a1a1a] transition-all group-focus-within:-translate-y-1 group-focus-within:shadow-[6px_6px_0px_0px_#1a1a1a]">
                            <input 
                                type="text" 
                                placeholder="ENTER KEYWORD..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent py-3 px-4 pr-10 text-black font-mono text-sm font-bold placeholder-neutral-400 focus:outline-none uppercase"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 📱 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {filteredProjects.map((project) => (
                <div 
                    key={project.id} 
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_#1a1a1a] p-8 flex flex-col h-full cursor-pointer group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1a1a1a] transition-all duration-200"
                >
                    
                    {/* Corner Accents - Permanent */}
                    <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-4 border-l-4 border-black z-20" />
                    <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-4 border-r-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-4 border-l-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-4 border-r-4 border-black z-20" />

                    <div className="relative z-10 flex flex-col h-full">
                        {/* Header Icon */}
                        <div className="flex justify-between items-start mb-6 border-b border-dashed border-black/10 pb-6">
                            <div className="h-12 w-12 flex items-center justify-center shadow-sm bg-black text-[#D9FF00] overflow-hidden">
                                {typeof project.icon === 'string' ? (
                                    <img src={project.icon} alt={project.title} className="h-full w-full object-cover" />
                                ) : (
                                    <project.icon className="h-6 w-6" />
                                )}
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-[#D9FF00] px-2 py-1 text-[10px] font-mono font-bold uppercase">
                                Open_Project
                            </div>
                        </div>

                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black">{project.title}</h3>
                        <p className="text-sm font-mono text-neutral-600 mb-2 leading-relaxed font-medium">
                            {project.summary}
                        </p>
                        
                        <div className="mt-auto pt-6 flex items-center text-xs font-bold uppercase tracking-wider text-black/50 group-hover:text-black transition-colors">
                            <span>View Details</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Show message if no results */}
            {filteredProjects.length === 0 && (
                 <div className="col-span-full py-12 text-center opacity-50 font-mono text-sm uppercase tracking-widest border border-dashed border-black/20">
                    No matching protocols found.
                 </div>
            )}
            
        </div>

        {/* 📟 Footer Status */}
        <div className="mt-20 border-t border-black/10 pt-8 flex justify-between items-center opacity-50 font-mono text-[10px] uppercase">
             <span>Sys_Status: Stable</span>
             <span>Encrypted Connection</span>
        </div>

      </main>
    </div>
  );
};

export default Home;
