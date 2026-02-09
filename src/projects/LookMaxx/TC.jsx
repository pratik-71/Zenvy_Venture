import React from 'react';
import { ArrowLeft, FileText, Scale, AlertCircle, Terminal, HelpCircle, Briefcase, CreditCard, UserCheck, ShieldCheck, Gavel, RefreshCw, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
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

    const CodeBlock = ({ children }) => (
        <div className="bg-neutral-900 border border-white/5 p-4 my-4 font-mono text-[10px] text-blue-300 overflow-x-auto">
            {children}
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
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-[10px] font-mono font-bold bg-blue-500/10 px-1 py-0.5 text-blue-400 uppercase tracking-widest">Service Agreement</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Effective Date: February 9, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <section className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10">
                        <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                            By downloading or using <Bold>LookMaxx</Bold> (the "App"), these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the App.
                        </p>
                    </section>

                    <Section title="1. Acceptance of Terms">
                        <p>By creating an account or using the App, you agree to be bound by these Terms & Conditions. If you do not agree, you must immediately stop using the App.</p>
                    </Section>

                    <Section title="2. Services Provided">
                        <p>LookMaxx provides AI-driven facial analysis, wellness tips, affirmations, and goal-tracking features. The analysis provided is for entertainment and self-improvement informational purposes only. It is not medical or professional aesthetic advice.</p>
                    </Section>

                    <Section title="3. Subscriptions and Payments">
                        <div className="grid gap-4">
                            <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                <CreditCard className="h-5 w-5 text-blue-500 shrink-0" />
                                <div>
                                    <Bold>RevenueCat</Bold>
                                    <p className="text-neutral-500 mt-1">We use RevenueCat to process in-app purchases. All transactions are handled by the Apple App Store or Google Play Store.</p>
                                </div>
                            </div>
                            <div className="p-4 bg-neutral-900/50 border border-white/5 flex gap-4">
                                <RefreshCw className="h-5 w-5 text-blue-500 shrink-0" />
                                <div>
                                    <Bold>Refunds & Renewals</Bold>
                                    <p className="text-neutral-500 mt-1">Refund requests must be handled through the respective App Store. Subscriptions will automatically renew unless canceled 24 hours before the period ends.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title="4. User Content and Conduct">
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <UserCheck className="h-4 w-4 text-blue-500 shrink-0" />
                                <p><Bold>Your Photos:</Bold> You retain ownership. You grant us a limited license to process them solely to provide App features.</p>
                            </li>
                            <li className="flex gap-4">
                                <AlertCircle className="h-4 w-4 text-blue-500 shrink-0" />
                                <p><Bold>Prohibited Use:</Bold> No illegal/unauthorized use. No offensive or harmful content.</p>
                            </li>
                        </ul>
                    </Section>

                    <Section title="5. Intellectual Property">
                        <p>The App itself, including its code, design, and icons, is the intellectual property of <Bold>Zenvy Venture</Bold>. You are not permitted to copy, modify, or attempt to extract the source code of the App.</p>
                    </Section>

                    <Section title="6. Disclaimers and Limitations">
                        <div className="space-y-4">
                            <div className="p-4 bg-orange-500/5 border border-orange-500/20">
                                <Bold>AI Accuracy:</Bold>
                                <p className="text-neutral-400 mt-1 italic">AI facial analysis is based on algorithms and may not be 100% accurate. We do not guarantee specific results.</p>
                            </div>
                            <div className="p-4 bg-neutral-900 border border-white/5">
                                <Bold>Limitation of Liability:</Bold>
                                <p className="text-neutral-500 mt-1">To the maximum extent permitted by law, Zenvy Venture shall not be liable for any damages arising out of your use or inability to use the App.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="7. Account Termination">
                        <p>We reserve the right to terminate or suspend your account if you violate these Terms & Conditions.</p>
                    </Section>

                    <Section title="8. Governing Law">
                        <p>These terms are governed by and construed in accordance with the laws of the jurisdiction in which Zenvy Venture operates.</p>
                    </Section>

                    <Section title="9. Changes to Terms">
                        <p>We may update our Terms & Conditions from time to time. Your continued use of the App following any changes constitutes your acceptance of the new terms.</p>
                    </Section>

                    <Section title="10. Contact Us">
                        <div className="flex flex-col gap-6">
                            <p>For any questions regarding these terms, please contact us at:</p>
                            <a 
                                href="https://zenvy-venture.vercel.app/contact-us?project=LookMaxx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative flex items-center gap-6 p-8 bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50"
                            >
                                {/* Animated Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                
                                {/* Left Accent Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600 scale-y-[0.3] group-hover:scale-y-100 transition-transform duration-500"></div>

                                <div className="relative flex h-12 w-12 items-center justify-center bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <Mail className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                
                                <div className="relative text-left flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="h-[1px] w-4 bg-blue-500/50"></div>
                                        <span className="text-[10px] uppercase font-mono text-blue-400 font-bold tracking-[0.2em]">Official Channel</span>
                                    </div>
                                    <div className="text-lg font-bold uppercase tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                                        Connect with Zenvy Venture
                                    </div>
                                    <div className="mt-2 text-[10px] text-neutral-500 font-mono flex items-center gap-2">
                                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                                        Response time: &lt; 24h
                                    </div>
                                </div>

                                <div className="relative opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowLeft className="h-5 w-5 text-blue-500 rotate-180" />
                                </div>

                                {/* Subtle corner decoration */}
                                <div className="absolute top-0 right-0 p-1">
                                    <div className="w-2 h-2 border-t border-r border-white/10 group-hover:border-blue-500/50 transition-colors"></div>
                                </div>
                            </a>
                        </div>
                    </Section>
                </div>

                <div className="mt-24 border-t border-white/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">© 2026 Zenvy Venture. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">END_OF_TERMS_V.2026.1</p>
                </div>
            </div>
        </div>
    );
}
