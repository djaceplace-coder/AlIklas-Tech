import React, { useState } from 'react';
import { EnergyFlowDiagram, CircuitSVG } from '../Canvas';
import { SolarCalculatorContent } from './SolarCalculator';

// --- ABOUT PAGE ---
export const About: React.FC<{ setCurrentPage: (page: string) => void }> = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <div className="text-xs font-bold text-green-500 tracking-[3px] uppercase mb-4">Our Origin</div>
                        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-[52px] leading-[1.1] tracking-[-2px] mb-6 sm:mb-8 break-words">
                            Engineered for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Nigeria.</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Founded in 2012 in Abuja, Al-Iklas Tech (Altech Electrical and Solar Installations) began as a specialist electrical engineering outfit tackling the most complex LV/MV installations.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            As the grid faltered, we pivoted our deep electrical expertise into solar and energy storage. We don't just sell panels; we engineer fully integrated, NEMSA-certified power plants, import top-tier equipment, and provide 24/7 solar surveillance systems.
                        </p>
                        <img src="/9.jpeg" loading="eager" fetchPriority="high" className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-green-900/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]" alt="Solar Panels" />
                    </div>
                    <div className="grid grid-cols-2 gap-6 content-center">
                         {[
                             { value: "36", label: "States Covered" },
                             { value: "48h", label: "Response Time" },
                             { value: "5yr", label: "Workmanship Warranty" },
                             { value: "100%", label: "In-House Engineers" }
                         ].map((s, i) => (
                             <div key={i} className="bg-[#071a0e] border border-green-900/30 p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-green-500/50 transition-colors">
                                 <div className="font-mono text-4xl text-green-400 font-bold mb-2">{s.value}</div>
                                 <div className="text-sm text-gray-400">{s.label}</div>
                             </div>
                         ))}
                    </div>
                </div>

                <CircuitSVG />
                
                {/* Timeline */}
                <div className="mt-24">
                     <h2 className="font-display font-bold text-2xl sm:text-3xl mb-12 sm:mb-16 text-center">Company Milestones</h2>
                     <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-green-900/50 space-y-12">
                          {[
                              { year: "2012", title: "Founded in Abuja", desc: "First LV electrical contracts for federal buildings." },
                              { year: "2015", title: "First Solar PV Installation", desc: "Successfully commissioned a 3kW residential system in Maitama." },
                              { year: "2018", title: "NEMSA & COREN Certification", desc: "Achieved full regulatory compliance and engineering certification." },
                              { year: "2022", title: "First Mini-Grid Project", desc: "Electrified a 200-household community in Nasarawa State." },
                              { year: "2025", title: "Power-as-a-Service Launch", desc: "Introduced zero-capex industrial solar, achieving 36-state national coverage." }
                          ].map((item, i) => (
                              <div key={i} className="relative group">
                                   <div className="absolute -left-[35px] sm:-left-[41px] top-1 w-5 h-5 rounded-full bg-[#020b06] border-4 border-green-900 group-hover:border-green-500 transition-colors"></div>
                                   <div className="font-mono text-2xl font-bold text-yellow-500 mb-2">{item.year}</div>
                                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                   <p className="text-gray-400">{item.desc}</p>
                              </div>
                          ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

// --- SERVICES PAGE ---
export const Services: React.FC = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[52px] tracking-[-2px] text-white break-words">Full-Spectrum Engineering</h1>
                </div>
                <EnergyFlowDiagram />

                <div className="mt-20 sm:mt-32 space-y-24 sm:space-y-32">
                    {[
                        { num: "01", title: "Solar PV Systems & Inverters", desc: "Our core engineering offering designed for maximal uptime in the Nigerian operating environment. We handle everything from standard residential fit-outs to complex industrial hybrid arrays.", img: "/11.jpeg", icon: "☀️", color: "text-yellow-500" },
                        { num: "02", title: "Electrical Installations & Maintenance", desc: "NEMSA-compliant electrical wiring, full property home services, electrical panel upgrades, and heavy-duty industrial transmission setups.", img: "/12.jpeg", icon: "⚡", color: "text-blue-500" },
                        { num: "03", title: "HD Solar Surveillance", desc: "Advanced Dual Lens Solar PTZ Cameras for 24/7 off-grid security. Perfect for estates, large compounds, and rural facilities.", img: "/13.jpeg", icon: "📷", color: "text-gray-300" },
                        { num: "04", title: "Equipment Import & Supply", desc: "Direct importers and major suppliers of premium solar panels, hybrid inverters, batteries, and electrical materials at wholesale scale.", img: "/14.jpeg", icon: "📦", color: "text-green-500" },
                        { num: "05", title: "Solar Home Roof Panels", desc: "Tailor-made roof integrations for homes. Maximize aesthetics without compromising on robust energy generation for your family.", img: "/15.jpeg", icon: "🏠", color: "text-yellow-300" },
                        { num: "06", title: "Flexible Solar Financing", desc: "Installmental payment services and lease-to-own options so you can transition to solar immediately without immense upfront capital.", img: "/16.jpeg", icon: "💳", color: "text-green-400" }
                    ].map((s, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${i%2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full bg-[#071a0e] aspect-[4/3] md:aspect-square rounded-3xl border border-green-900/30 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors cursor-pointer">
                                <img src={s.img} alt={s.title} loading="eager" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-screen" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030f07] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute -right-4 -bottom-4 text-[100px] sm:text-[140px] md:text-[200px] font-mono font-black text-white/5 group-hover:text-green-500/10 transition-colors select-none leading-none z-10 block">
                                    {s.num}
                                </div>
                                <div className={`text-[56px] sm:text-[72px] md:text-[100px] transition-transform duration-500 group-hover:scale-110 z-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] ${s.color}`}>
                                    {s.icon}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6">{s.title}</h2>
                                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                                    {s.desc}
                                </p>
                                <div className="bg-[#020b06] p-6 rounded-xl border border-green-900/30 font-mono text-sm text-green-400 mb-8 relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-xl rounded-full"></div>
                                    &gt; CAPACITY SCALE: RESIDENTIAL TO INDUSTRIAL<br/>
                                    &gt; DEPLOYMENT: NATIONWIDE<br/>
                                    &gt; STATUS: {s.title.includes('Supply') ? 'WHOLESALE READY' : 'NEMSA COMPLIANT'}
                                </div>
                                <button onClick={() => window.open(`https://wa.me/2348166614479?text=Hello, I am interested in ${s.title}`, '_blank')} className="text-green-400 font-bold border-b border-green-500 pb-1 hover:text-green-300 transition-colors">
                                    Request {s.title} Quote →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- PROJECTS GALLERY PAGE ---
export const Projects: React.FC = () => {
    const galleryItems = Array.from({ length: 12 }, (_, i) => ({
        type: 'image',
        src: `/Newproject${i + 1}.jpeg`
    }));

    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center border-b border-green-900/30 pb-12 sm:pb-16 mb-12 sm:mb-16">
                     <h1 className="font-display font-extrabold text-3xl sm:text-[40px] md:text-[56px] tracking-[-1px] sm:tracking-[-1.5px] text-white break-words">Projects Gallery</h1>
                     <p className="text-green-400 tracking-[3px] uppercase font-bold text-sm mt-4">Visuals From The Field</p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryItems.map((item, idx) => (
                        <div key={idx} className="bg-[#071a0e] rounded-xl overflow-hidden border border-green-900/30 hover:border-green-500/80 transition-colors shadow-lg break-inside-avoid">
                            <img 
                                src={item.src} 
                                alt={`Project preview ${idx + 1}`} 
                                loading="lazy" 
                                decoding="async"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 bg-[#030f07]" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- CONTACT PAGE ---
export const Contact: React.FC = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Team Section */}
                <div className="mb-16 sm:mb-24 text-center">
                     <div className="text-xs font-bold text-green-500 tracking-[3px] uppercase mb-4">Leadership</div>
                     <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">Meet Our Team</h2>
                     <p className="text-gray-400 mb-12">The engineers driving Nigeria's energy revolution.</p>
                     
                     <div className="inline-block bg-[#071a0e] border border-green-900/40 rounded-2xl overflow-hidden shadow-[0_4_30px_rgba(34,197,94,0.1)] text-left w-full max-w-sm hover:-translate-y-1 transition-transform">
                          <img src="/Newengineerlogo.jpeg" alt="Engr Dolapo" loading="eager" fetchPriority="high" className="w-full aspect-[3/4] object-cover object-top" />
                          <div className="p-6 relative">
                               <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_#22c55e]">⚡</div>
                               <h3 className="font-display font-bold text-2xl text-white mb-1">Engr Dolapo</h3>
                               <p className="text-green-400 font-mono text-sm mb-4">Managing Director / Lead Engineer</p>
                               <p className="text-gray-400 text-sm leading-relaxed">
                                   "We install all parts of electrical and solar inverter systems, and act as a major importer and supplier of quality solar and electrical materials. We support our customers with excellent customer service and satisfaction."
                               </p>
                          </div>
                     </div>
                </div>

                <div className="bg-[#071a0e] border border-green-900/40 rounded-3xl p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col justify-center">
                        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 break-words">Start Your Project</h1>
                        <p className="text-gray-400 mb-12 text-lg">Free site survey • 48-hour design • Nationwide coverage</p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#030f07] rounded-xl text-green-500 border border-green-900/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]">📍</div>
                                <div>
                                    <div className="font-bold text-white mb-1">Apapa HQ</div>
                                    <div className="text-sm text-gray-400">Apapa, Lagos, Nigeria</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#030f07] rounded-xl text-yellow-500 border border-yellow-900/30">📞</div>
                                <div>
                                    <div className="font-bold text-white mb-1">Phone / WhatsApp</div>
                                    <div className="text-sm text-gray-400">+234 816 661 4479</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#030f07] rounded-xl text-blue-500 border border-blue-900/30">✉️</div>
                                <div>
                                    <div className="font-bold text-white mb-1">Email</div>
                                    <div className="text-sm text-gray-400">support@aliklastech.com.ng</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#020b06] p-6 sm:p-8 lg:p-10 rounded-2xl border border-green-900/30 w-full shadow-2xl relative z-10">
                        <div className="space-y-6">
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                                Connect with our engineering consultants directly via WhatsApp for the fastest response on quotes, sizing, and site surveys.
                            </p>
                            
                            <a 
                                href="https://wa.me/2348166614479?text=Hello,%20I%20would%20like%20to%20discuss%20a%20solar%20or%20electrical%20project." 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-full py-4 bg-gradient-brand rounded-xl font-bold text-black text-base sm:text-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex justify-center items-center gap-3"
                            >
                                <span>Message on WhatsApp</span>
                                <span className="text-2xl">💬</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- CAREERS PAGE ---
export const Careers: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full"></div>
                    <h1 className="font-display font-extrabold text-4xl md:text-[52px] tracking-[-2px] text-white relative z-10 break-words">Build the Grid.</h1>
                    <p className="text-xl text-gray-400 mt-4 relative z-10">Join our engineering and operations team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24 relative z-10">
                    <div className="bg-[#071a0e] p-6 sm:p-8 rounded-2xl border border-green-900/30 hover:border-green-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-2xl font-bold font-display text-white">Solar PV Engineer</h3>
                             <span className="px-3 py-1 bg-green-900/40 text-green-400 text-xs font-bold rounded">FULL-TIME</span>
                        </div>
                        <p className="text-gray-400 mb-6">Lagos / Abuja • 3+ Years Exp. • COREN Certified</p>
                        <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                            Lead technical design and ETAP modeling for commercial hybrid arrays. Oversee field installation and NEMSA certification processes.
                        </p>
                        <button onClick={() => setShowModal(true)} className="text-green-500 font-bold hover:text-green-400 transition-colors border-b border-green-500 pb-1">Apply Now →</button>
                    </div>

                    <div className="bg-[#071a0e] p-6 sm:p-8 rounded-2xl border border-green-900/30 hover:border-green-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-2xl font-bold font-display text-white">Import / Supply Chain Manager</h3>
                             <span className="px-3 py-1 bg-blue-900/40 text-blue-400 text-xs font-bold rounded">FULL-TIME</span>
                        </div>
                        <p className="text-gray-400 mb-6">Lagos (Apapa) • 5+ Years Exp.</p>
                        <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                            Manage international procurement, shipping container logistics, port clearance, and warehousing of high-volume solar equipment and electrical materials.
                        </p>
                        <button onClick={() => setShowModal(true)} className="text-green-500 font-bold hover:text-green-400 transition-colors border-b border-green-500 pb-1">Apply Now →</button>
                    </div>
                </div>

                <CircuitSVG />
            </div>

            {/* Application Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}>
                    <div className="bg-[#071a0e] border border-green-900/50 rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white font-display">Apply Now</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white transition-colors text-xl">&times;</button>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Please send your CV and Cover Letter to HQ. You can contact our recruitment team directly via WhatsApp to submit your documents and schedule an interview.
                        </p>
                        <a 
                            href="https://wa.me/2348166614479?text=Hello,%20I%20would%20like%20to%20apply%20for%20a%20position%20at%20Al-Iklas%20Tech." 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-full flex justify-center items-center gap-2 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-colors"
                        >
                            <span>Contact via WhatsApp</span>
                            <span className="text-xl">💬</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

// Generic placeholder for other pages requested
export const GenericPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="w-full pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 uppercase tracking-widest text-green-500 break-words">{title}</h1>
        <p className="text-gray-400 max-w-xl mx-auto">This section is currently being updated by the engineering team. Check back shortly for full module release.</p>
        <CircuitSVG />
    </div>
);
