import React from 'react';
import { ArrowLeft, Shield, Info, ScanFace, Lock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-12 group text-left">
            <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                {title}
            </h2>
            <div className="text-sm font-mono leading-relaxed text-neutral-400 space-y-4 pl-4 border-l border-white/10 group-hover:border-blue-500/30 transition-colors">
                {children}
            </div>
        </div>
    );

    const Bold = ({ children }) => (
        <strong className="text-white font-bold uppercase text-xs tracking-wider">{children}</strong>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white overflow-hidden relative">
            
            {/* 📐 Technical Background Grid */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-0 right-0 bottom-0 w-[5vw] bg-blue-500/5 hidden xl:block border-l border-white/5"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:pl-[100px] lg:pr-[15vw]">
                
                {/* Navigation */}
                <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 px-4 py-2 bg-neutral-900 border border-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Return</span>
                    </button>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Project ID</span>
                        <span className="text-sm font-bold uppercase tracking-tight text-blue-400">LookMaxx App</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mb-20 text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-[10px] font-mono font-bold bg-blue-500/10 px-1 py-0.5 text-blue-400 uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-2">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Your Privacy Matters">
                        <p>Your privacy is important to us. It is LookMaxx's policy to respect your privacy regarding any information we may collect from you across our application. We are committed to protecting the personal data you share with us.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <p className="mb-4">We collect information that you voluntarily provide to us when you use the LookMaxx application:</p>
                        <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3 p-4 bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all">
                                <ScanFace className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Facial Data & Photos</Bold>
                                    <p className="mt-1">We collect photos that you upload for analysis. These images are processed to provide facial analysis. These images are processed and then discarded or stored securely based on your settings.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all">
                                <Lock className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Account Information</Bold>
                                    <p className="mt-1">Information provided during registration, such as your name and email address when using third-party login services (Google, Apple).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all">
                                <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Usage Data</Bold>
                                    <p className="mt-1">We collect data on how you interact with the app, including feature usage and scan history, to improve your experience.</p>
                                </div>
                            </li>
                        </ul>
                    </Section>

                    <Section title="3. How We Use Information">
                        <p className="mb-4">We use the information we collect for several purposes:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="p-4 bg-neutral-900 border border-white/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-300 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Provide scan results and AI facial analysis.
                            </li>
                            <li className="p-4 bg-neutral-900 border border-white/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-300 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Improve our AI models and app performance.
                            </li>
                            <li className="p-4 bg-neutral-900 border border-white/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-300 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Manage your account and subscriptions.
                            </li>
                            <li className="p-4 bg-neutral-900 border border-white/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-300 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Communiate updates and support.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. Sharing & Disclosure">
                        <p>We do not share your personal photos with third parties without your explicit consent. Your data is used solely for the purpose of providing you with the services offered by LookMaxx. We may share anonymized usage data with analytics providers to improve our app.</p>
                    </Section>

                    <Section title="5. Data Retention">
                        <p>We retain your personal information only for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p>
                    </Section>

                    <Section title="6. Contact Us">
                        <p>If you have questions about our Privacy Policy, please reach out to us at: <a href="mailto:support@lookmaxx.app" className="text-blue-400 font-bold hover:text-blue-300 underline underline-offset-4 decoration-blue-900 hover:decoration-blue-400 transition-all">support@lookmaxx.app</a></p>
                    </Section>
                </div>

                <div className="mt-24 border-t border-white/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">© 2026 LookMaxx Inc. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">End of Information</p>
                </div>
            </div>
        </div>
    );
}
