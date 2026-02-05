import React from 'react';
import { ArrowLeft, Shield, Check, Info, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-12 group">
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-6 flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-blue-600 transition-colors"></span>
                {title}
            </h2>
            <div className="text-sm font-mono leading-relaxed text-neutral-600 space-y-4 pl-4 border-l border-black/10 group-hover:border-blue-500/30 transition-colors">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
            
            {/* 📐 Technical Background Grid */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-0 right-0 bottom-0 w-[5vw] bg-black/5 hidden xl:block border-l border-black/5"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:pl-[100px] lg:pr-[15vw]">
                
                {/* Navigation */}
                <div className="mb-16 flex items-center justify-between border-b border-black/10 pb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 px-4 py-2 bg-white border border-black/10 hover:bg-black hover:text-[#D9FF00] transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Return</span>
                    </button>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Project ID</span>
                        <span className="text-sm font-bold uppercase tracking-tight">Memories App</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <FileText className="h-4 w-4 text-black" />
                        <span className="text-[10px] font-mono font-bold bg-[#D9FF00] px-1 py-0.5 text-black uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tighter uppercase mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 16, 2026 // Revision 2.0
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Agreement to Terms">
                        <p>
                           These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Memories</strong> ("we," "us" or "our"), concerning your access to and use of the Memories application. You agree that by accessing the Application, you have read, understood, and agree to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                         </p>
                    </Section>

                    <Section title="2. Intellectual Property Rights">
                        <p>
                           Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </Section>

                    <Section title="3. User Representations">
                         <p className="mb-4">
                           By using the Application, you represent and warrant that:
                         </p>
                         <ul className="space-y-3 list-none pl-0">
                           <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5 hover:border-black/20 transition-all">
                               <Check className="h-4 w-4 text-green-600 mt-0.5" />
                               <span>All registration information you submit will be true, accurate, current, and complete.</span>
                           </li>
                           <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5 hover:border-black/20 transition-all">
                               <Check className="h-4 w-4 text-green-600 mt-0.5" />
                               <span>You will maintain the accuracy of such information and promptly update such registration information as necessary.</span>
                           </li>
                           <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5 hover:border-black/20 transition-all">
                               <Check className="h-4 w-4 text-green-600 mt-0.5" />
                               <span>You have the legal capacity and you agree to comply with these Terms and Conditions.</span>
                           </li>
                           <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5 hover:border-black/20 transition-all">
                               <Check className="h-4 w-4 text-green-600 mt-0.5" />
                               <span>You are not a minor in the jurisdiction in which you reside.</span>
                           </li>
                         </ul>
                    </Section>

                    <Section title="4. Prohibited Activities">
                        <p>
                           You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                    </Section>

                    <Section title="5. Contact Us">
                        <p>
                           In order to resolve a complaint regarding the Application or to receive further information regarding use of the Application, please contact us at: <a href="mailto:pratikdabhade66344@gmail.com" className="text-black font-bold hover:text-blue-600 underline underline-offset-4 decoration-black/20 hover:decoration-blue-600">pratikdabhade66344@gmail.com</a>
                        </p>
                    </Section>
                </div>

                <div className="mt-24 border-t border-black/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">© 2026 Memories Inc. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">End of Document</p>
                </div>
            </div>
        </div>
    );
}
