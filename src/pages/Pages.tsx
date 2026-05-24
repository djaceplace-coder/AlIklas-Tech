import React, { useState } from 'react';
import { EnergyFlowDiagram, CircuitSVG } from '../components/Canvas';
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
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070" className="w-full h-48 sm:h-64 object-cover rounded-2xl border border-green-900/50 shadow-[0_0_30px_rgba(34,197,94,0.15)]" alt="Solar Panels" />
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
                    <h1 className="font-display font-extrabold text-4xl md:text-[52px] tracking-[-2px] text-white">Full-Spectrum Engineering</h1>
                </div>
                <EnergyFlowDiagram />

                <div className="mt-20 sm:mt-32 space-y-24 sm:space-y-32">
                    {[
                        { num: "01", title: "Solar PV Systems & Inverters", desc: "Our core engineering offering designed for maximal uptime in the Nigerian operating environment. We handle everything from standard residential fit-outs to complex industrial hybrid arrays.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800", icon: "☀️", color: "text-yellow-500" },
                        { num: "02", title: "Electrical Installations & Maintenance", desc: "NEMSA-compliant electrical wiring, full property home services, electrical panel upgrades, and heavy-duty industrial transmission setups.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", icon: "⚡", color: "text-blue-500" },
                        { num: "03", title: "HD Solar Surveillance", desc: "Advanced Dual Lens Solar PTZ Cameras for 24/7 off-grid security. Perfect for estates, large compounds, and rural facilities.", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800", icon: "📷", color: "text-gray-300" },
                        { num: "04", title: "Equipment Import & Supply", desc: "Direct importers and major suppliers of premium solar panels, hybrid inverters, batteries, and electrical materials at wholesale scale.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800", icon: "📦", color: "text-green-500" },
                        { num: "05", title: "Solar Home Roof Panels", desc: "Tailor-made roof integrations for homes. Maximize aesthetics without compromising on robust energy generation for your family.", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800", icon: "🏠", color: "text-yellow-300" },
                        { num: "06", title: "Flexible Solar Financing", desc: "Installmental payment services and lease-to-own options so you can transition to solar immediately without immense upfront capital.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", icon: "💳", color: "text-green-400" }
                    ].map((s, i) => (
                        <div key={i} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${i%2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full bg-[#071a0e] aspect-[4/3] md:aspect-square rounded-3xl border border-green-900/30 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors cursor-pointer">
                                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-screen" />
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

// --- PROJECTS PAGE ---
export const Projects: React.FC = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center border-b border-green-900/30 pb-12 sm:pb-16 mb-12 sm:mb-16">
                     <h1 className="font-mono text-[48px] sm:text-[64px] md:text-[80px] font-bold text-yellow-500 leading-none">
                         4.2<span className="text-3xl text-yellow-500/60 font-sans">MWp</span>
                     </h1>
                     <p className="text-green-400 tracking-[3px] uppercase font-bold text-sm mt-4">Total Installed Capacity</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Dangote Logistics Warehouse Complex", kw: 2400, type: "Industrial Solar", state: "Lagos", year: 2024, client: "Dangote Group", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", details: "A massive 2.4MWp rooftop installation combined with battery energy storage system. This setup displaced over 95% of their diesel usage, providing stable power for logistics operations round the clock." },
                        { name: "Kaduna State School Electrification", kw: 850, type: "Mini-Grid", state: "Kaduna", year: 2024, client: "Kaduna State SUBEB", img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=800", details: "Electrifying 14 remote schools across Kaduna State using a solar mini-grid model. Complete with PAYG metering and cloud-based centralized battery management." },
                        { name: "Kano Cold Storage Facility", kw: 420, type: "Battery Storage", state: "Kano", year: 2022, client: "Kano State FADAMA", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800", details: "Specialized cold chain facility requiring zero downtime. Installed 420kWp solar arrays backed by 2MWh BESS to ensure perishable goods remain frozen during national grid failures." },
                        { name: "Gwarimpa Estate Phase 3", kw: 640, type: "Residential Solar", state: "Abuja", year: 2023, client: "Private Developer", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800", details: "Distributed solar power for 320 residential units, utilizing a shared BESS infrastructure to minimize individual home layout footprint while maximizing power uptime." },
                        { name: "Braithwaite Memorial Hospital", kw: 120, type: "Hybrid Solar", state: "Rivers", year: 2022, client: "Rivers Health", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", details: "120kWp dedicated specifically to the ICU and surgical theatres. A true hybrid solar installation ensuring medical equipment receives clean, uninterrupted power instantly." },
                        { name: "FMARD Office Complex", kw: 180, type: "Grid-Tied", state: "Abuja", year: 2023, client: "Fed. Ministry of Ag.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", details: "A commercial grid-tied system utilizing available massive rooftop area on the ministry complex. Includes smart net metering integration and complete elimination of daytime diesel generators." },
                    ].map((proj, idx) => (
                        <div key={idx} onClick={() => setExpandedProject(expandedProject === idx ? null : idx)} className="bg-[#071a0e] rounded-xl border border-green-900/30 overflow-hidden group hover:border-green-500/80 transition-colors cursor-pointer flex flex-col">
                            <div className="h-48 bg-[#020b06] p-6 border-b border-green-900/30 flex flex-col justify-between relative overflow-hidden shrink-0">
                                <img src={proj.img} alt={proj.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 mix-blend-screen" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-2xl rounded-full"></div>
                                <div className="flex justify-between items-start z-10">
                                    <span className="px-2 py-1 bg-[#020b06]/80 text-green-400 text-[10px] font-bold uppercase rounded border border-green-900/40 backdrop-blur-md">{proj.type}</span>
                                </div>
                                <div className="z-10">
                                    <div className="text-3xl font-mono text-yellow-400 font-bold mb-1 drop-shadow-md">{proj.kw}<span className="text-sm">kWp</span></div>
                                    <div className="w-full h-1 bg-green-900/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[70%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="font-display font-bold text-lg text-white mb-2">{proj.name}</h3>
                                <p className="text-sm text-green-400/80 mb-4">{proj.client}</p>
                                
                                {expandedProject === idx && (
                                    <div className="text-gray-300 text-sm leading-relaxed mb-6 animate-stagger-in">
                                        {proj.details}
                                    </div>
                                )}

                                <div className="mt-auto flex justify-between text-xs text-gray-500 font-mono border-t border-green-900/30 pt-4">
                                    <span>📍 {proj.state}</span>
                                    <span>🗓 {proj.year}</span>
                                </div>
                            </div>
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
                          <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=600" alt="Engr Dolapo" className="w-full h-72 object-cover" />
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
                        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Start Your Project</h1>
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
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Request Received!"); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Full Name</label>
                                    <input type="text" required className="w-full bg-[#071a0e] border border-green-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Email</label>
                                    <input type="email" required className="w-full bg-[#071a0e] border border-green-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Service Required</label>
                                <select className="w-full bg-[#071a0e] border border-green-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none">
                                    <option>Residential Solar PV</option>
                                    <option>Commercial/Industrial Solar</option>
                                    <option>Electrical Works / Wiring</option>
                                    <option>Battery Energy Storage</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Project Details & Budget</label>
                                <textarea rows={4} className="w-full bg-[#071a0e] border border-green-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-brand rounded-xl font-bold text-black text-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex justify-center items-center gap-2">
                                Submit Request →
                            </button>
                        </form>
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
        <h1 className="font-display font-bold text-4xl text-white mb-6 uppercase tracking-widest text-green-500">{title}</h1>
        <p className="text-gray-400 max-w-xl mx-auto">This section is currently being updated by the engineering team. Check back shortly for full module release.</p>
        <CircuitSVG />
    </div>
);
