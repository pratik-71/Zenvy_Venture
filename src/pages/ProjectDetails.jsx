import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Mail, AlertCircle, ExternalLink, Download, Share2, X, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);
  


  if (!project) {
    return (
      <div className="min-h-screen bg-[#DCEEEF] flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase mb-4">Project Not Found</h2>
             <button onClick={() => navigate('/')} className="underline font-bold uppercase">Return Home</button>
          </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden relative">
      
      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          {/* Vertical Ruler Line */}
          <div className="absolute left-[80px] top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between border-b border-black/10 bg-[#DCEEEF]/90 backdrop-blur-sm">
        <div className="w-1/3">
            <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-3 py-2 border border-black/10 bg-white hover:border-black transition-all text-xs font-bold uppercase tracking-wider group w-fit"
            >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
            </button>
        </div>
        
        <div className="w-1/3 flex justify-center">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-center">{project.title}</h1>
        </div>

        <div className="w-1/3"></div>
      </nav>

      <main className="relative z-10 pt-10 md:pt-32 px-4 md:px-12 pb-20 w-full md:pl-[120px]">
         
        {/* 1. Header & Actions Group */}
        <div className="flex flex-col gap-10 mb-10 w-full max-w-4xl">
             {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                <div className="h-24 w-24 flex-shrink-0 flex items-center justify-center bg-black text-[#D9FF00] overflow-hidden">
                    {typeof project.icon === 'string' ? (
                        <img src={project.icon} alt={project.title} className="h-full w-full object-cover" />
                    ) : (
                        <Icon className="h-10 w-10" />
                    )}
                </div>
                <div className="text-left">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-black">{project.title}</h1>
                   
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col md:flex-row gap-4">
                 <button 
                    onClick={() => window.open(project.iosUrl, '_blank')}
                    className="flex items-center gap-4 px-8 py-4 bg-black text-white border-2 border-black hover:bg-[#D9FF00] hover:text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group min-w-[200px]"
                >
                    <div className="h-8 w-8 bg-white/20 group-hover:bg-black/10 rounded-full flex items-center justify-center">
                         <Smartphone className="h-4 w-4" />
                    </div>
                    <div className="text-left flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none mb-1">Download on</span>
                        <span className="text-sm font-bold uppercase tracking-wider leading-none">App Store</span>
                    </div>
                </button>

                <button 
                    onClick={() => window.open(project.androidUrl, '_blank')}
                    className="flex items-center gap-4 px-8 py-4 bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group min-w-[200px]"
                >
                     <div className="h-8 w-8 bg-black/5 group-hover:bg-white/20 rounded-full flex items-center justify-center">
                         <Smartphone className="h-4 w-4" />
                    </div>
                    <div className="text-left flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none mb-1">Get it on</span>
                        <span className="text-sm font-bold uppercase tracking-wider leading-none">Google Play</span>
                    </div>
                </button>
            </div>
        </div>

        {/* 2. Promo Section - Full Width Strip */}
        {/* We use negative margins to pull the background to the edges, then padding to align content back to the grid */}
        <div className="mb-10 w-screen ml-[-1rem] md:ml-[-120px] bg-[#D9FF00] border-y-2 border-black">
             <div className="py-8 pl-4 md:pl-[120px] pr-4 md:pr-12 relative max-w-7xl">
                 <div className="absolute -top-3 left-4 md:left-[120px] bg-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border border-[#D9FF00] shadow-sm">
                    Promotion_Message
                 </div>
                 <p className="font-mono text-xl md:text-3xl font-bold uppercase tracking-tight leading-snug w-full">
                     {project.promotionText}
                 </p>
                 <div className="absolute bottom-2 right-4 flex gap-1">
                     <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                     <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                     <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                 </div>
            </div>
        </div>

        {/* 4. Description Section */}
        <div className="mb-16 w-full max-w-4xl">
            <div className="flex items-center gap-3 mb-6 opacity-60">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">System_Description</span>
            </div>

            <div className="max-w-none w-full">
                 <div className="whitespace-pre-line font-sans text-base md:text-lg leading-relaxed text-neutral-800 font-medium">
                    {project.description}
                 </div>
            </div>
        </div>

        {/* 5. Quick Actions Section */}
         <div className="pt-10 border-t border-black/10 w-full">
             <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-6 font-bold">Quick_Actions</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
                <button 
                    onClick={() => navigate(`/contact-us?project=${encodeURIComponent(project.title)}&subject=Privacy%20Policy`)}
                    className="flex items-center justify-between px-6 py-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000] transition-all group text-sm font-bold uppercase tracking-wider"
                >
                    <span className="flex items-center gap-3">
                        <Shield className="h-4 w-4" />
                        Privacy Policy
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>

                <button 
                    onClick={() => navigate(`/contact-us?project=${encodeURIComponent(project.title)}&subject=Terms%20Conditions`)}
                    className="flex items-center justify-between px-6 py-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000] transition-all group text-sm font-bold uppercase tracking-wider"
                >
                     <span className="flex items-center gap-3">
                        <FileText className="h-4 w-4" />
                        Terms & Conditions
                    </span>
                     <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button 
                    onClick={() => navigate(`/contact-us?project=${encodeURIComponent(project.title)}`)}
                    className="flex items-center justify-between px-6 py-4 bg-black text-[#D9FF00] border-2 border-black hover:bg-[#D9FF00] hover:text-black transition-all group text-sm font-bold uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
                >
                    <span className="flex items-center gap-3">
                        <Mail className="h-4 w-4" />
                        Contact Support
                    </span>
                    <ArrowLeft className="h-3 w-3 rotate-180" />
                </button>
            </div>
        </div>

      </main>

    </div>
  );
};

export default ProjectDetails;
