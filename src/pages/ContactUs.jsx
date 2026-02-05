import React, { useState, useEffect } from 'react';
import { AppWindow, Send, ArrowLeft, X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ContactUs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialProject = searchParams.get('project') || 'Console';
  const initialSubject = searchParams.get('subject') || 'General Feedback';

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailLinkState, setEmailLinkState] = useState({ to: '', subject: '', body: '' });

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    project: initialProject,
    subject: initialSubject,
    message: ''
  });

  useEffect(() => {
    if (initialProject) {
        setFormData(prev => ({...prev, project: initialProject}));
    }
  }, [initialProject]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find the project to get contact email
    const selectedProjectInfo = projects.find(p => p.title === formData.project);
    const recipients = selectedProjectInfo ? selectedProjectInfo.contactEmail : "pratikdabhade66344@gmail.com";
    
    // Construct email body
    const emailSubject = `${formData.subject}: ${formData.project}`;
    const body = `${formData.message}

----------------------------------------------------------------
Context Details:
Subject: ${formData.subject}
Project: ${formData.project}
Name: ${formData.name}
Email: ${formData.email}`;

    // Store data and open modal
    setEmailLinkState({
        to: recipients,
        subject: emailSubject,
        body: body
    });
    setIsEmailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden relative flex flex-col">
      
      {/* 📐 Technical Background Grid */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           <div className="absolute left-[80px] top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
      </div>

      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b border-black/10 bg-[#DCEEEF]/90 backdrop-blur-sm">
        <div className="flex items-center gap-4 md:gap-6 pl-0 md:pl-20 w-1/3">
            <button 
                onClick={() => navigate('/')} 
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-black/10 hover:bg-black hover:text-[#D9FF00] transition-all group"
            >
                 <ArrowLeft className="h-4 w-4" />
                 <span className="text-xs font-bold uppercase tracking-wider font-sans">Return</span>
            </button>
        </div>
        <div className="w-1/3 flex justify-center">
            <h1 className="text-2xl font-black uppercase tracking-tighter text-center">Contact Support</h1>
        </div>
        <div className="w-1/3"></div>
      </nav>

      {/* 🚀 Main Content */}
      <main className="relative z-10 pt-24 md:pt-24 px-4 md:px-6 flex-1 flex flex-col max-w-7xl w-full mx-auto md:pl-[100px]">

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-start pt-4 md:pt-8 min-h-full">
            
            {/* Right Form Column - Now Centered */}
            <div className="w-full max-w-3xl">
                 <form onSubmit={handleSubmit} className="w-full bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#1a1a1a] relative">
                    <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-4 border-l-4 border-black z-20" />
                    <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-4 border-r-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-4 border-l-4 border-black z-20" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-4 border-r-4 border-black z-20" />
                    
                    <div className="space-y-6">
                        {/* Project Context & Subject */}
                        <div className="flex flex-col md:flex-row gap-6 mb-4 pb-4 border-b border-black/10">
                            <div className="flex-1">
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block font-sans">Active Context</label>
                                <div className="relative">
                                    <select 
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full bg-black text-[#D9FF00] border border-black py-2 px-4 text-sm focus:outline-none transition-all uppercase font-bold shadow-sm appearance-none font-sans"
                                    >
                                        <option value="Console">Console (General)</option>
                                        {projects.map(p => (
                                            <option key={p.id} value={p.title}>{p.title}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#D9FF00]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block font-sans">Subject</label>
                                <div className="relative">
                                    <select 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-neutral-50 border border-black/20 hover:border-black focus:border-black py-2 px-4 text-black text-sm focus:outline-none transition-all uppercase font-bold shadow-sm appearance-none font-sans"
                                    >
                                        <option value="General Feedback">General Feedback</option>
                                        <option value="Terminate Data">Terminate Data</option>
                                        <option value="Bug Report">Bug Report</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-black"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email & Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block font-sans">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="user@example.com"
                                    className="w-full bg-neutral-50 border border-black/20 hover:border-black focus:border-black py-3 px-4 text-black text-sm placeholder-neutral-400 focus:outline-none transition-all font-medium shadow-sm font-sans"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block font-sans">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full bg-neutral-50 border border-black/20 hover:border-black focus:border-black py-3 px-4 text-black text-sm placeholder-neutral-400 focus:outline-none transition-all font-medium shadow-sm font-sans"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 block font-sans">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                required
                                placeholder="How can we help you?"
                                className="w-full bg-neutral-50 border border-black/20 hover:border-black focus:border-black py-3 px-4 text-black text-sm placeholder-neutral-400 focus:outline-none transition-all resize-none font-medium shadow-sm font-sans"
                            />
                        </div>

                        <div className="pt-2">
                             <button 
                                type="submit"
                                className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-black text-[#D9FF00] border-2 border-transparent hover:bg-neutral-900 font-bold uppercase tracking-wider transition-all text-sm shadow-[4px_4px_0px_0px_#ccff00] font-sans"
                            >
                                <Send className="h-4 w-4" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>

                 </form>
            </div>
        </div>

      </main>

      {/* Email Client Selection Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white border-2 border-black shadow-[12px_12px_0px_0px_#000] w-full max-w-sm relative p-8">
                 <button 
                    onClick={() => setIsEmailModalOpen(false)}
                    className="absolute top-4 right-4 p-2 bg-black text-[#D9FF00] hover:bg-neutral-800 transition-colors z-10"
                >
                    <X className="h-5 w-5" />
                </button>

                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Select Email App</h3>
                <p className="font-mono text-xs text-neutral-500 mb-6 uppercase tracking-wide">Choose how you want to send this message</p>

                <div className="space-y-3">
                     {/* Gmail */}
                     <button 
                        onClick={() => {
                            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailLinkState.to}&su=${encodeURIComponent(emailLinkState.subject)}&body=${encodeURIComponent(emailLinkState.body)}`;
                            window.open(gmailUrl, '_blank');
                            setIsEmailModalOpen(false);
                        }}
                        className="w-full flex items-center gap-4 p-4 bg-white text-black border-2 border-black hover:bg-black hover:text-[#D9FF00] transition-all group font-bold uppercase text-sm"
                     >
                        <div className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 border border-black group-hover:bg-[#D9FF00] group-hover:text-black">
                             <span className="font-mono text-xs">GM</span>
                        </div>
                        Open Gmail
                     </button>

                     {/* Default App */}
                     <button 
                        onClick={() => {
                            window.location.href = `mailto:${emailLinkState.to}?subject=${encodeURIComponent(emailLinkState.subject)}&body=${encodeURIComponent(emailLinkState.body)}`;
                            setIsEmailModalOpen(false);
                        }}
                        className="w-full flex items-center gap-4 p-4 bg-white text-black border-2 border-black hover:bg-black hover:text-[#D9FF00] transition-all group font-bold uppercase text-sm"
                     >
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 text-black border border-black group-hover:bg-[#D9FF00] group-hover:text-black">
                            <Send className="h-4 w-4" />
                        </div>
                        Default Mail App
                     </button>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default ContactUs;
