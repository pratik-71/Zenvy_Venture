import React from 'react';
import { ArrowLeft, Shield, Info, MessageSquare, Lock, Eye, Database, Share2, MousePointer2, ShieldCheck, Baby, RefreshCw, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-12 group text-left">
            <h2 className="text-xl font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                {title}
            </h2>
            <div className="text-sm font-mono leading-relaxed text-neutral-400 space-y-4 pl-4 border-l border-white/10 group-hover:border-purple-500/30 transition-colors">
                {children}
            </div>
        </div>
    );

    const Bold = ({ children }) => (
        <strong className="text-white font-bold uppercase text-xs tracking-wider">{children}</strong>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden relative">
            
            {/* 📐 Technical Background Grid */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-0 right-0 bottom-0 w-[5vw] bg-purple-500/5 hidden xl:block border-l border-white/5"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:pl-[100px] lg:pr-[15vw]">
                
                {/* Navigation */}
                <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 px-4 py-2 bg-neutral-900 border border-white/10 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Return</span>
                    </button>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Project ID</span>
                        <span className="text-sm font-bold uppercase tracking-tight text-purple-400">Higher App</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mb-20 text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-4 w-4 text-purple-500" />
                        <span className="text-[10px] font-mono font-bold bg-purple-500/10 px-1 py-0.5 text-purple-400 uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-2">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated Date: February 13, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <section className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10">
                        <p className="text-purple-400 font-bold uppercase tracking-wider mb-2 text-xs">Welcome to Higher</p>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                            Welcome to <Bold>Higher</Bold> (the "App"), operated by Zenvy Venture ("we," "us," or "our"). We are committed to protecting your privacy while you explore spiritual wisdom and daily guidance. This Privacy Policy explains how we collect, use, and safeguard your information.
                        </p>
                        <p className="mt-4 text-white font-bold text-sm tracking-tight border-t border-white/10 pt-4">
                            WE DO NOT SELL YOUR DATA. We use your data only to provide spiritual insights and improve your experience within the App.
                        </p>
                    </section>

                    <Section title="1. Information We Collect">
                        <p className="mb-6">To provide you with personalized spiritual guidance, we collect the following types of information:</p>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <div className="w-1 h-3 bg-purple-500" />
                                    A. Personal Information
                                </h3>
                                <div className="grid gap-3">
                                    <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                        <Lock className="h-5 w-5 text-purple-500 shrink-0" />
                                        <div>
                                            <Bold>Account Data</Bold>
                                            <p className="text-neutral-500 mt-1">When you sign up, we collect your email address, full name, and password. If you use Google or Apple Sign-In, we receive basic profile information from those services.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                        <MessageSquare className="h-5 w-5 text-purple-500 shrink-0" />
                                        <div>
                                            <Bold>Interactions & Preferences</Bold>
                                            <p className="text-neutral-500 mt-1">We save your interactions with the Krishna AI, your selected notification preferences, and your favorite Gita verses to personalize your daily experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <div className="w-1 h-3 bg-purple-500" />
                                    B. Usage and Device Data
                                </h3>
                                <div className="grid gap-3">
                                    <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                        <Info className="h-5 w-5 text-purple-500 shrink-0" />
                                        <div>
                                            <Bold>Device Information</Bold>
                                            <p className="text-neutral-500 mt-1">We collect information about your mobile device, including the operating system (iOS or Android), unique device identifiers, and network status to ensure reliable notification delivery.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                        <Database className="h-5 w-5 text-purple-500 shrink-0" />
                                        <div>
                                            <Bold>Subscription Data</Bold>
                                            <p className="text-neutral-500 mt-1">We process data about your subscription status and transaction history securely through the Apple App Store or Google Play Store.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="2. How We Use Your Information">
                        <ul className="grid gap-3 list-none pl-0">
                            {[
                                { title: "Spiritual Guidance", desc: "To provide daily Gita verses and AI-driven spiritual counsel tailored to your life situation." },
                                { title: "Personalization", desc: "To maintain your streak, track your reading progress, and manage spiritual reminders." },
                                { title: "App Improvement", desc: "To analyze how the App is used so we can improve its wisdom delivery and AI performance." },
                                { title: "Communication", desc: "To send you important spiritual reminders and updates regarding your account." }
                            ].map((item, i) => (
                                <li key={i} className="p-4 bg-neutral-900 border border-white/5 flex gap-4 items-center group/item hover:border-purple-500/50 transition-all">
                                    <div className="h-1.5 w-1.5 bg-purple-500 rounded-full group-hover/item:scale-150 transition-all" />
                                    <div className="text-xs">
                                        <Bold>{item.title}</Bold>
                                        <span className="text-neutral-500 ml-2">// {item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title="3. Data Sharing and Third Parties">
                        <p className="mb-4 font-bold text-white underline decoration-purple-500 underline-offset-4">We do not share your private spiritual reflections or personal data with third parties for marketing purposes.</p>
                        <p className="mb-6">Data is only shared with the following essential service providers to make the App function:</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: "Supabase", use: "Secure database storage and user authentication." },
                                { name: "AI Processing", use: "Google Gemini to generate personalized spiritual responses." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-neutral-900 border border-white/5 text-[10px] uppercase font-mono">
                                    <div className="text-purple-400 font-bold mb-2">{item.name}</div>
                                    <div className="text-neutral-500">{item.use}</div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="4. Digital Peace and Permissions">
                        <div className="grid gap-4">
                            <div className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-white/5">
                                <MessageSquare className="h-5 w-5 text-purple-500" />
                                <div><Bold>Notifications</Bold><span className="text-neutral-500 text-xs ml-4">Deliver daily verses and spiritual reminders</span></div>
                            </div>
                        </div>
                    </Section>

                    <Section title="5. Your Choices and Rights">
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <MousePointer2 className="h-4 w-4 text-purple-500 shrink-0" />
                                <p><Bold>Access and Updates:</Bold> Update your profile and spiritual focus within App settings.</p>
                            </li>
                            <li className="flex gap-4">
                                <RefreshCw className="h-4 w-4 text-purple-500 shrink-0" />
                                <p><Bold>Account Deletion:</Bold> Request anytime via settings. Your reflections and account data will be removed from our active systems.</p>
                            </li>
                            <li className="flex gap-4">
                                <Database className="h-4 w-4 text-purple-500 shrink-0" />
                                <p><Bold>Subscription Management:</Bold> Managed via your Apple ID or Google Play account.</p>
                            </li>
                        </ul>
                    </Section>

                    <Section title="6. Data Security">
                        <div className="p-4 border-l-2 border-purple-500 bg-purple-500/5">
                            <p>We implement industry-standard security measures to protect your data. Your spiritual journey is private and we respect the sanctity of your reflections.</p>
                        </div>
                    </Section>

                    <Section title="7. Children's Privacy">
                        <p>Higher is intended for individuals of all ages seeking wisdom, however, we do not knowingly collect information from children under 13 without appropriate consent.</p>
                    </Section>

                    <Section title="8. Changes to This Policy">
                        <p>We may update this Privacy Policy to reflect improvements in our service. Please visit this page periodically for updates.</p>
                    </Section>

                    <Section title="9. Contact Us">
                        <div className="flex flex-col gap-6">
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <a 
                                href="https://zenvy-venture.vercel.app/contact-us?project=Higher" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-6 p-8 bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 hover:border-purple-500/50"
                            >
                                {/* Animated Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                
                                {/* Left Accent Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-600 scale-y-[0.3] group-hover:scale-y-100 transition-transform duration-500"></div>

                                <div className="relative flex h-12 w-12 items-center justify-center bg-purple-600/10 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                    <Mail className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors" />
                                </div>
                                
                                <div className="relative text-left flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="h-[1px] w-4 bg-purple-500/50"></div>
                                        <span className="text-[10px] uppercase font-mono text-purple-400 font-bold tracking-[0.2em]">Official Channel</span>
                                    </div>
                                    <div className="text-lg font-bold uppercase tracking-tighter text-white group-hover:text-purple-400 transition-colors">
                                        Connect with Zenvy Venture
                                    </div>
                                    <div className="mt-2 text-[10px] text-neutral-500 font-mono flex items-center gap-2">
                                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                                        Response time: &lt; 24h
                                    </div>
                                </div>

                                <div className="relative opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowLeft className="h-5 w-5 text-purple-500 rotate-180" />
                                </div>

                                {/* Subtle corner decoration */}
                                <div className="absolute top-0 right-0 p-1">
                                    <div className="w-2 h-2 border-t border-r border-white/10 group-hover:border-purple-500/50 transition-colors"></div>
                                </div>
                            </a>
                        </div>
                    </Section>
                </div>

                <div className="mt-24 border-t border-white/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">© 2026 Zenvy Venture. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
