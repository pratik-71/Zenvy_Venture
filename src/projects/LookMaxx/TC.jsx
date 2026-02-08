import React from 'react';
import { ArrowLeft, FileText, Scale, AlertCircle, Terminal, HelpCircle } from 'lucide-react';
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
                        Terms of Service
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Agreement to Terms">
                        <p>By accessing LookMaxx, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this app.</p>
                    </Section>

                    <Section title="2. Usage License">
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on LookMaxx for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <CodeBlock>
                            {`- Modify or copy the materials;
- Use the materials for any commercial purpose;
- Attempt to decompile or reverse engineer any software;
- Remove any copyright or other proprietary notations;
- Transfer the materials to another person.`}
                        </CodeBlock>
                    </Section>

                    <Section title="3. Disclaimer">
                        <div className="flex items-start gap-4 p-4 bg-orange-500/5 border border-orange-500/20 text-orange-200">
                            <AlertCircle className="h-5 w-5 shrink-0" />
                            <p className="text-xs leading-relaxed">
                                The materials on LookMaxx are provided on an 'as is' basis. LookMaxx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>
                    </Section>

                    <Section title="4. Limitations">
                        <p>In no event shall LookMaxx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the LookMaxx app, even if LookMaxx has been notified orally or in writing of the possibility of such damage.</p>
                    </Section>

                    <Section title="5. Accuracy of Materials">
                        <p>The materials appearing on LookMaxx could include technical, typographical, or photographic errors. LookMaxx does not warrant that any of the materials on its app are accurate, complete or current. LookMaxx may make changes to the materials contained on its app at any time without notice.</p>
                    </Section>

                    <Section title="6. Governing Law">
                        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                    </Section>

                    <Section title="7. Contact Us">
                        <p>If you have questions about these Terms, please contact us at: <a href="mailto:support@lookmaxx.app" className="text-blue-400 font-bold hover:text-blue-300 underline underline-offset-4 decoration-blue-900 hover:decoration-blue-400 transition-all">support@lookmaxx.app</a></p>
                    </Section>
                </div>

                <div className="mt-24 border-t border-white/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">© 2026 LookMaxx Inc. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">End of Document</p>
                </div>
            </div>
        </div>
    );
}
