import React, { useState } from 'react';
import { Search, Shield, FileText, Component, Trash2, Grid, CornerRightDown, Share2, Info, ArrowLeft, Mail, User, AppWindow, AlertTriangle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    project: 'Memories',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body
    const recipients = "pratikdabhade66344@gmail.com";
    const subject = `Deletion Request: ${formData.project}`;
    const body = `${formData.reason}

----------------------------------------------------------------
Request Details:
Project: ${formData.project}
Username: ${formData.username}
Email: ${formData.email}`;

    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen md:h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden md:overflow-hidden relative flex flex-col">
      
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-black/10 bg-[#DCEEEF]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4 md:gap-6 pl-0 md:pl-20">
             {/* Back Button */}
            <button 
                onClick={() => navigate('/')} 
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-black/10 hover:bg-black hover:text-[#D9FF00] transition-all group"
            >
                 <ArrowLeft className="h-4 w-4" />
                 <span className="text-xs font-bold uppercase tracking-wider">Return</span>
            </button>
            
            <div className="flex items-center gap-3 group">
                <div className="h-8 w-8 bg-black flex items-center justify-center text-[#ccff00] font-mono text-xs font-bold border border-black group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                    ZN
                </div>
                <div>
                   <span className="font-bold text-lg tracking-tighter uppercase block leading-none">Zenvy</span>
                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Console V2.1</span>
                </div>
            </div>
        </div>
      </nav>

      {/* 🚀 Main Content - Scrollable on mobile, Fixed on Desktop */}
      <main className="relative z-10 pt-24 md:pt-20 px-4 md:px-6 flex-1 flex flex-col max-w-7xl w-full mx-auto md:pl-[100px] lg:pr-[10vw]">
        
        {/* Header HUD - Compact */}
        <div className="shrink-0 mb-6 md:mb-8 relative">
            <div className="absolute -left-6 top-2 w-3 h-3 bg-black/20 rounded-full hidden md:block" />
            <div className="flex flex-col md:flex-row items-end justify-between gap-4 border-b border-black/10 pb-4">
                <div className="w-full">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-1.5 py-0.5 bg-red-600 text-white text-[10px] uppercase font-mono tracking-widest">Sys: Critical</span>
                        <div className="h-px w-12 bg-black/20" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tighter uppercase leading-[0.9]">
                        Delete Data
                    </h1>
                </div>
            </div>
        </div>

        {/* Content Area - Fits remaining height on desktop */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-8 md:min-h-0 min-h-full">
            
            {/* Left Info Column */}
            <div className="md:col-span-4 flex flex-col justify-center">
                <div className="bg-[#DCEEEF] border border-black/10 p-6 relative group hover:border-black transition-all">
                     <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                     <h3 className="text-lg font-bold uppercase tracking-tighter mb-3">Protocol Details</h3>
                     <p className="text-xs font-mono text-neutral-600 leading-relaxed mb-4">
                        You are about to initiate a permanent data deletion sequence. This process is irreversible and will purge all records associated with the target project.
                     </p>
                     <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-red-600">
                        <AlertTriangle className="h-4 w-4" />
                        <span>Irreversible Action</span>
                     </div>
                </div>
            </div>

            {/* Right Form Column */}
            <div className="md:col-span-8 flex flex-col justify-center">
                 <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-[#DCEEEF] p-6 border border-black/10 relative">
                     {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black opacity-20" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black opacity-20" />
                    
                    <div className="space-y-5">
                        {/* Project Select */}
                        <div>
                            <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-1.5 block">Target Project</label>
                            <div className="relative group">
                                <AppWindow className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40 group-focus-within:text-black transition-colors z-10" />
                                <select 
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-black/10 py-2 pl-10 pr-8 text-base font-mono focus:outline-none focus:border-black transition-all appearance-none rounded-none cursor-pointer uppercase"
                                >
                                    <option value="Memories">Memories App</option>
                                    <option value="Maxxed">Maxxed</option>
                                </select>
                                <CornerRightDown className="absolute right-0 bottom-3 h-3 w-3 text-black/20 pointer-events-none" />
                            </div>
                        </div>

                        {/* Email & Username */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-1.5 block">Email_ID</label>
                                <div className="relative group">
                                    <Mail className="absolute left-0 bottom-2.5 h-4 w-4 text-black/40" />
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="USER@DOMAIN.COM"
                                        className="w-full bg-transparent border-b-2 border-black/10 py-1.5 pl-6 text-black font-mono text-sm placeholder-black/30 focus:outline-none focus:border-black transition-all uppercase"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-1.5 block">User_Handle</label>
                                <div className="relative group">
                                    <User className="absolute left-0 bottom-2.5 h-4 w-4 text-black/40" />
                                    <input 
                                        type="text" 
                                        name="username"
                                        required
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="@HANDLE"
                                        className="w-full bg-transparent border-b-2 border-black/10 py-1.5 pl-6 text-black font-mono text-sm placeholder-black/30 focus:outline-none focus:border-black transition-all uppercase"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-1.5 block">Reason_Log</label>
                            <textarea 
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                rows="3"
                                placeholder="PROVIDE CONTEXT..."
                                className="w-full bg-transparent border-b-2 border-black/10 py-1.5 text-black font-mono text-sm placeholder-black/30 focus:outline-none focus:border-black transition-all uppercase resize-none"
                            />
                        </div>

                        <div className="pt-2">
                             <button 
                                type="submit"
                                className="w-full md:w-auto group flex items-center justify-center gap-3 px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-black hover:text-[#D9FF00] transition-all text-xs md:text-sm"
                            >
                                <Trash2 className="h-4 w-4" />
                                <span>Execute Deletion</span>
                            </button>
                        </div>
                    </div>

                 </form>
            </div>
        </div>

      </main>
    </div>
  );
};

export default DeleteAccount;
