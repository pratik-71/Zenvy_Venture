import React, { useState } from 'react';
import { Search, Shield, FileText, Component, Trash2, Grid, CornerRightDown, Share2, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
        id: 'memories',
        title: 'Memories',
        description: 'Secure personal media vault and journal application.',
        icon: Grid,
        themeColor: 'black',
        accentColor: '#D9FF00',
        privacyLink: '/memories/privacy-policy',
        termsLink: '/memories/terms-conditions'
    }, 
    {
        id: 'maxxed',
        title: 'Maxxed',
        description: 'AI-powered facial analysis and optimization tool.',
        icon: Component,
        themeColor: 'blue-600',
        accentColor: 'blue-500', 
        privacyLink: '/maxxed/privacy-policy',
        termsLink: '/maxxed/terms-conditions'
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
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
                <div className="h-8 w-8 bg-black flex items-center justify-center text-[#ccff00] font-mono text-xs font-bold border border-black group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                    ZN
                </div>
                <div>
                   <span className="font-bold text-lg tracking-tighter uppercase block leading-none">Zenvy</span>
                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none hidden sm:block">Console V2.1</span>
                </div>
            </div>
        </div>

        <button 
            onClick={() => navigate('/delete-account')}
            className="flex items-center gap-2 px-3 py-2 md:px-4 bg-transparent border border-red-500/30 text-red-600 hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
        >
            <Trash2 className="h-4 w-4 md:h-3 md:w-3" />
            <span className="hidden md:inline">Terminate Data</span>
        </button>
      </nav>

      {/* 🚀 Main Content */}
      <main className="relative z-10 pt-24 md:pt-32 px-4 md:px-6 pb-12 max-w-7xl mx-auto md:pl-[100px] lg:pr-[10vw]">
        
        {/* Header HUD */}
        <div className="mb-8 relative">
           
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-black/10 pb-8">
                <div>

                    <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter uppercase mb-4 leading-[0.9]">
                        DashBoard
                    </h1>
                </div>
                
                {/* Search Input - Technical */}
                <div className="w-full md:w-80">
                    <div className="relative group">
                        <div className="absolute -top-3 left-0 text-[9px] font-mono text-neutral-400 uppercase tracking-widest group-focus-within:text-black transition-colors">Search_Query</div>
                        <input 
                            type="text" 
                            placeholder="ENTER KEYWORD..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-black/10 py-2 pr-8 text-black font-mono text-sm placeholder-black/30 focus:outline-none focus:border-black transition-all uppercase"
                        />
                        <Search className="absolute right-0 bottom-2 h-4 w-4 text-black/30" />
                    </div>
                </div>
            </div>
        </div>

        {/* 📱 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {filteredProjects.map((project) => (
                <div key={project.id} className="relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_#1a1a1a] p-8 flex flex-col h-full">
                    
                    {/* Corner Accents - Permanent */}
                    <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-4 border-l-4 border-black z-20" />
                    <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-4 border-r-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-4 border-l-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-4 border-r-4 border-black z-20" />

                    <div className="relative z-10 flex flex-col h-full">
                        {/* Header Icon */}
                        <div className="flex justify-between items-start mb-6 border-b border-dashed border-black/10 pb-6">
                            <div className={`h-12 w-12 flex items-center justify-center shadow-sm ${project.themeColor === 'black' ? 'bg-black text-[#D9FF00]' : 'bg-blue-600 text-white'}`}>
                                <project.icon className="h-6 w-6" />
                            </div>
                        </div>

                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black">{project.title}</h3>
                        <p className="text-sm font-mono text-neutral-600 mb-10 leading-relaxed font-medium">
                            {project.description}
                        </p>

                        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-black/5 pt-6">
                            <button 
                                    onClick={() => navigate(project.privacyLink)}
                                    className="flex items-center justify-between px-5 py-3 bg-white border border-black/10 rounded-lg hover:border-black transition-all text-xs font-bold uppercase tracking-wider group text-black shadow-sm"
                            >
                                <span>Privacy</span>
                                <CornerRightDown className="h-3 w-3 text-[#D9FF00] group-hover:text-black transition-colors" />
                            </button>
                            <button 
                                    onClick={() => navigate(project.termsLink)}
                                    className="flex items-center justify-between px-5 py-3 bg-white border border-black/10 rounded-lg hover:border-black transition-all text-xs font-bold uppercase tracking-wider group text-black shadow-sm"
                            >
                                <span>Terms</span>
                                <CornerRightDown className="h-3 w-3 text-[#D9FF00] group-hover:text-black transition-colors" />
                            </button>
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
