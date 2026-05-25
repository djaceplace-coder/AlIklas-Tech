import React, { useEffect, useState } from 'react';
import { EnergyFlowDiagram, CircuitSVG, SolarParticleCanvas } from '../Canvas';
import { SolarCalculatorContent } from './SolarCalculator';
import { Shield, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Home: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const [mounted, setMounted] = useState(false);
  const [activeCompetitor, setActiveCompetitor] = useState(0);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Years Engineering Excellence", value: 12, suffix: "+" },
    { label: "Installations Completed", value: 2300, suffix: "+" },
    { label: "States Served", value: 36, suffix: "" },
    { label: "Client Satisfaction", value: 98.7, suffix: "%" },
  ];

  const SERVICES = [
    {
      icon: "☀️", title: "Solar PV Systems & Inverters",
      desc: "Full engineering and installation of residential to utility-scale solar PV systems and hybrid inverters with remote monitoring.",
      specs: ["5kW – 5MW capacities", "Hybrid inverter setups", "NEMSA-certified wiring", "Battery integration"],
      color: "#F59E0B", badge: "Most Popular", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "⚡", title: "Electrical & Home Services",
      desc: "Complete electrical works, from LV/MV installations to dedicated home electrical maintenance and panel upgrades.",
      specs: ["LV/MV distribution", "Home electrical repair", "Panel board upgrades", "Electrical management"],
      color: "#3B82F6", badge: null, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "🏠", title: "Solar Home Roof Panels",
      desc: "Premium residential solar panel installations tailored for Nigerian homes, optimizing roof space for maximum yield.",
      specs: ["Aesthetic mounting", "Leek-proof seals", "High-efficiency panels", "Smart home ready"],
      color: "#10B981", badge: "Residential", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "💸", title: "Flexible Solar Financing",
      desc: "Premium Tier-1 solar systems made accessible through custom installmental payment plans and flexible financing.",
      specs: ["12-36 month plans", "Low initial deposit", "Zero markup", "Pay-as-you-go tech"],
      color: "#EC4899", badge: "New Offering", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "📦", title: "Equipment Import & Supply",
      desc: "Direct importers and suppliers of all kinds of premium solar and electrical materials. Exceptional quality at wholesale scales.",
      specs: ["Tier-1 Solar Panels", "Hybrid Inverters", "Cables & Wiring", "Wholesale supply"],
      color: "#22C55E", badge: "Wholesale", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "📷", title: "Solar Surveillance Security",
      desc: "HD Dual Lens Solar PTZ Cameras designed for 24/7 off-grid security. Independent power and connectivity for any location.",
      specs: ["HD Dual Lens", "Solar PTZ Cameras", "24/7 Monitoring", "No-grid required"],
      color: "#A8A29E", badge: "High Demand", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "🔋", title: "Battery Energy Storage",
      desc: "High-density LiFePO4 and NMC storage solutions tailored to displace diesel generation completely during outages.",
      specs: ["10kWh – 2MWh capacity", "Smart BMS control", "Peak-shaving", "Deep-cycle durability"],
      color: "#F97316", badge: null, img: "https://images.unsplash.com/photo-1565800489013-c64859d0c2d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: "🏭", title: "Power-as-a-Service",
      desc: "Zero-capex solar for commercial spaces. We design, finance, install, and operate the plant while you pay for consumed power.",
      specs: ["Zero initial capex", "Pay-per-kWh", "Diesel displacement", "24/7 O&M"],
      color: "#06B6D4", badge: "C&I Focus", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const COMPETITORS = [
    {
      name: "Arnergy",
      tagline: "Smart SME Solar | PAYG Model",
      model: "Lease-to-own (Z-Lite) / Pay-As-You-Go",
      color: "#F59E0B",
      alIklasWin: "Al-Iklas delivers the full engineering value chain — design, procurement, installation, and O&M — for residential through industrial at Nigerian-market pricing, with dedicated electrical works that Arnergy does not provide.",
      borrowedFeatures: [
        { feature: "Customer Monitoring Portal", detail: "Inspired by Arnergy's app-based remote monitoring — Al-Iklas provides a 24/7 web portal dashboard for every installed system." },
        { feature: "Flexible Payment Plans", detail: "Borrowing Arnergy's PAYG accessibility principle — Al-Iklas offers 12–48 month instalment plans with zero markup on equipment." }
      ]
    },
    {
      name: "Daystar Power",
      tagline: "C&I Solar-as-a-Service | Shell-Backed",
      model: "SaaS (pay-per-kWh)",
      color: "#3B82F6",
      alIklasWin: "Al-Iklas mirrors the SaaS/PaaS model for commercial clients but extends the same energy intelligence and service quality down to residential — creating a unified offering Daystar structurally cannot provide.",
      borrowedFeatures: [
        { feature: "Industrial Power-as-a-Service", detail: "Directly modelled on Daystar's SaaS/PaaS framework — Al-Iklas offers zero-capex solar for commercial clients paying per kWh, including battery storage." },
        { feature: "HSE Safety Protocol System", detail: "Al-Iklas adopted Shell-standard HSE documentation, safety officer site mandates, and permit-to-work systems on all installation sites." }
      ]
    },
    {
      name: "Rubitec Solar",
      tagline: "Utility-Scale EPC | Government Projects",
      model: "EPC (Engineering, Procurement, Construction) contracts",
      color: "#22C55E",
      alIklasWin: "Al-Iklas bridges both worlds — utility-scale EPC credibility AND a consumer-facing residential division, plus a full electrical works arm that Rubitec entirely lacks.",
      borrowedFeatures: [
        { feature: "Utility-Scale EPC Methodology", detail: "Al-Iklas adopted Rubitec-style project staging: feasibility → design → procurement → construction → commissioning → handover, applied to all projects 100kWp and above." },
        { feature: "Solar Water Pump Solutions", detail: "Rubitec's agricultural solar pump expertise inspired Al-Iklas to develop a dedicated solar pumping product for agriculture and borehole applications." }
      ]
    },
    {
      name: "Earthbond",
      tagline: "Solar Marketplace + Financing",
      model: "Aggregator marketplace + consumer financing",
      color: "#8B5CF6",
      alIklasWin: "Al-Iklas owns the entire value chain end-to-end — every engineer, every installer, every tool is in-house. This means quality control that marketplace aggregators structurally cannot guarantee.",
      borrowedFeatures: [
        { feature: "Interactive Digital Calculator", detail: "Earthbond's digital quoting concept inspired Al-Iklas's appliance-level load builder and instant system size estimator on the website." },
        { feature: "Online Booking Flow", detail: "Earthbond's digital-first customer acquisition inspired Al-Iklas's online free site survey booking and 48-hour engineer response commitment." }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-hero">
        <SolarParticleCanvas />
        
        {/* Glow blob */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(34,197,94,0.10)_0%,transparent_65%)] animate-glow-breathe pointer-events-none rounded-full"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
            backgroundImage: 'linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
        }}></div>

        {/* Sun Graphic */}
        <div className="absolute top-12 right-12 md:top-24 md:right-24 w-[250px] h-[250px] pointer-events-none hidden lg:block opacity-60">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-[radial-gradient(circle,#F59E0B_0%,rgba(245,158,11,0.3)_60%,transparent_100%)]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border border-dashed border-green-500/40 animate-rotate-slow">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
              <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-yellow-500/30 animate-rotate-slow-reverse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            {/* Status Badge */}
            <div className={`mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/25 bg-green-950/40 backdrop-blur-sm ${mounted ? 'animate-stagger-in' : 'opacity-0'}`}>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-glow-breathe"></div>
                <span className="text-xs font-mono text-green-100/90 tracking-wide">ACTIVE PROJECTS NATIONWIDE</span>
            </div>
            
            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] sm:leading-[0.95] tracking-tight sm:tracking-[-2px] mb-6 sm:mb-8 max-w-4xl break-words">
               <span className="block opacity-0 animate-word-reveal" style={{animationDelay: '0ms'}}>Engineered</span>
               <span className="block opacity-0 animate-word-reveal text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]" style={{animationDelay: '80ms'}}>Sunlight.</span>
               <span className="block opacity-0 animate-word-reveal" style={{animationDelay: '160ms'}}>Precision</span>
               <span className="block opacity-0 animate-word-reveal text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-green-500 to-green-700 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]" style={{animationDelay: '240ms'}}>Wiring.</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed ${mounted ? 'animate-stagger-in' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
               Al-Iklas Tech delivers end-to-end solar PV systems and full electrical infrastructure — designed by engineers, built for Nigerian conditions, backed by a 5-year workmanship guarantee.
            </p>

            <EnergyFlowDiagram />

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 mt-8 ${mounted ? 'animate-stagger-in' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
               <button onClick={() => setCurrentPage('calculator')} className="px-10 py-5 rounded-xl bg-gradient-brand text-black font-display font-extrabold text-lg shadow-[0_0_40px_rgba(34,197,94,0.25)] hover:shadow-[0_0_60px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  ⚡ Calculate My System
               </button>
               <button onClick={() => setCurrentPage('projects')} className="px-10 py-5 rounded-xl border border-green-500/40 bg-white/5 backdrop-blur-sm text-green-400 font-display font-bold text-lg hover:bg-green-500/10 transition-colors flex items-center justify-center">
                  View Our Projects →
               </button>
            </div>

            <div className={`mt-16 text-xs font-mono font-medium tracking-widest text-gray-500 uppercase flex flex-wrap justify-center gap-6 ${mounted ? 'animate-stagger-in' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
                <span>NEMSA</span>
                <span className="text-gray-700 font-sans">•</span>
                <span>SON</span>
                <span className="text-gray-700 font-sans">•</span>
                <span>COREN</span>
                <span className="text-gray-700 font-sans">•</span>
                <span>ISO 9001:2015</span>
                <span className="text-gray-700 font-sans">•</span>
                <span>REA Partner</span>
                <span className="text-gray-700 font-sans">•</span>
                <span>NAEC</span>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] font-semibold text-green-500/80 tracking-[3px] uppercase">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-green-500 to-transparent animate-scroll-bounce"></div>
            </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full bg-[#030f07]/80 backdrop-blur-lg border-y border-green-900/40 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-green-900/30">
                  {stats.map((stat, idx) => (
                      <div key={idx} className="py-8 px-4 text-center">
                          <div className="text-3xl md:text-5xl font-mono font-bold text-green-400 mb-2">
                              {stat.value}{stat.suffix}
                          </div>
                          <div className="text-sm font-sans text-gray-400">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
              <div className="text-xs font-bold text-green-500 tracking-[3px] uppercase mb-4">Our Engineering Scope</div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-[42px] tracking-[-1px] leading-tight">
                  <span className="text-white">Full-Spectrum</span> <br className="md:hidden"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Energy Solutions</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, idx) => (
                  <div key={idx} className="group relative bg-[#071a0e] border border-green-900/30 rounded-[20px] p-6 sm:p-8 transition-all duration-350 hover:-translate-y-2 hover:border-green-500/60 overflow-hidden cursor-pointer flex flex-col min-h-[340px]">
                      
                      <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-screen" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030f07] via-[#030f07]/90 to-transparent"></div>
                      
                      {/* Active Line (Hover) */}
                      <div className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10" style={{ backgroundColor: s.color }}></div>

                      <div className="flex justify-between items-start mb-6 z-10 relative">
                          <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{s.icon}</div>
                          {s.badge && (
                              <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#020b06] shadow-sm ml-2 text-right" style={{ backgroundColor: s.color }}>
                                  {s.badge}
                              </div>
                          )}
                      </div>
                      
                      <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 z-10 relative">{s.title}</h3>
                      <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-6 z-10 relative flex-grow">{s.desc}</p>
                      
                      <ul className="space-y-2 pt-4 border-t border-green-900/30 z-10 relative mt-auto w-full">
                          {s.specs.map((spec, i) => (
                              <li key={i} className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: s.color }}></span> {spec}
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </section>

      <CircuitSVG />

      {/* WHY US / CALCULATOR */}
      <section className="py-24 bg-[#052e16]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                  
                  <div>
                      <div className="text-xs font-bold text-green-500 tracking-[3px] uppercase mb-4">The Al-Iklas Difference</div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-[40px] tracking-[-1px] leading-tight text-white mb-6 sm:mb-8">
                          We Own the Full Engineering Chain
                      </h2>
                      <p className="text-gray-300 text-lg mb-12">
                          Unlike marketplace aggregators or sales-only outfits, Al-Iklas executes every phase in-house. From load analysis to final commissioning, our engineers maintain absolute quality control over your investment.
                      </p>

                      <div className="space-y-8">
                          {[
                              { icon: "🎯", title: "Design & Engineering", desc: "Load analysis, single-line diagrams, ETAP simulations, yield reports." },
                              { icon: "📦", title: "Procurement", desc: "Factory-direct Tier-1 equipment, no middlemen, 20–35% cost savings." },
                              { icon: "🔧", title: "Installation", desc: "NEMSA-certified crews, strict OSHA/HSE protocols, milestone commissioning." },
                              { icon: "📡", title: "After-Sales", desc: "24/7 remote monitoring dashboard, 5-yr workmanship warranty, AMC contracts." }
                          ].map((step, idx) => (
                              <div key={idx} className="flex gap-4 border-l-2 border-green-900 pl-6 hover:border-green-500 transition-colors group">
                                  <div className="text-2xl mt-1 opacity-70 group-hover:opacity-100 transition-opacity">{step.icon}</div>
                                  <div>
                                      <h4 className="font-display font-bold text-lg text-white mb-1">{step.title}</h4>
                                      <p className="text-gray-400 text-sm">{step.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div>
                      {/* Mount Calculator inline */}
                      <SolarCalculatorContent />
                  </div>

              </div>
          </div>
      </section>

      {/* FEATURED PROJECTS STRIP */}
      <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between flex-wrap gap-4 items-end mb-8 sm:mb-12">
                 <h2 className="font-display font-extrabold text-2xl sm:text-[28px] text-white">Project Portfolio</h2>
                 <button onClick={() => setCurrentPage('projects')} className="text-green-500 text-sm font-bold hover:text-green-400 transition-colors">View All →</button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                      { name: "Kaduna State School Electrification", kw: 850, type: "Mini-Grid", state: "Kaduna", year: 2024, maxKw: 2400, img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=800", details: "A comprehensive off-grid solution powering 15 schools across rural Kaduna. System utilizes deep-cycle LiFePO4 storage to guarantee 24/7 power for computer labs and administrative blocks." },
                      { name: "Dangote Logistics Warehouse Complex", kw: 2400, type: "Industrial Solar", state: "Lagos", year: 2024, maxKw: 2400, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", details: "Massive scale rooftop PV array designed to completely offset daytime diesel consumption for their primary staging warehouse. Features advanced active harmonic filtering." },
                      { name: "Gwarimpa Estate Phase 3", kw: 640, type: "Residential Solar", state: "Abuja", year: 2023, maxKw: 2400, img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800", details: "Community micro-grid serving 50 premium residential units. Features centralized string inverters with localized battery banks for individual households." },
                 ].map((proj, idx) => {
                     const isExpanded = expandedProject === idx;
                     return (
                     <div key={idx} onClick={() => setExpandedProject(isExpanded ? null : idx)} className={`group relative bg-[#071a0e] rounded-xl overflow-hidden border border-green-900/30 p-6 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all cursor-pointer flex flex-col ${isExpanded ? 'h-auto ring-1 ring-green-500' : 'h-[360px]'}`}>
                         
                         <img src={proj.img} alt={proj.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-screen" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#020b06] via-[#020b06]/80 to-transparent"></div>
                         <div className="absolute top-0 left-0 w-1 h-full bg-green-600 z-20"></div>

                         <div className="flex justify-between items-start mb-4 z-10 relative">
                             <div className="px-2 py-1 bg-[#020b06]/80 backdrop-blur-sm border border-blue-900/40 text-green-400 text-[10px] font-bold uppercase rounded">{proj.type}</div>
                         </div>
                         <h3 className="font-display font-bold text-lg text-white mb-6 h-auto sm:h-14 z-10 relative">{proj.name}</h3>
                         
                         <div className="mb-6 z-10 relative">
                            <div className="font-mono text-3xl font-bold text-yellow-500 mb-2">{proj.kw}<span className="text-sm text-yellow-500/60 font-sans">kWp</span></div>
                            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 animate-power-fill" style={{ '--target-width': `${(proj.kw/proj.maxKw)*100}%` } as any}></div>
                            </div>
                         </div>
                         
                         <div className={`z-10 relative text-gray-300 text-sm overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                              <p className="border-l-2 border-green-500 pl-3">{proj.details}</p>
                         </div>

                         <div className="flex justify-between text-xs text-gray-400 font-mono border-t border-green-900/30 pt-4 z-10 relative mt-auto">
                             <span>📍 {proj.state}</span>
                             <span>🗓 {proj.year}</span>
                         </div>
                     </div>
                 )})}
             </div>
          </div>
      </section>

      {/* COMPETITOR INTELLIGENCE */}
      <section className="py-24 bg-[#020b06] border-y border-green-900/40">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12 sm:mb-16">
                  <div className="text-xs font-bold text-green-500 tracking-[3px] uppercase mb-4">Industry Intelligence</div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-[32px] tracking-[-1px] text-white mb-2">The Al-Iklas Advantage</h2>
                  <p className="text-gray-400 text-sm">Comparative analysis against Nigeria's top 4 solar engineering firms</p>
               </div>

               {/* Tabs */}
               <div className="flex flex-wrap border-b border-green-900/30 mb-8">
                   {COMPETITORS.map((comp, idx) => (
                       <button 
                          key={comp.name} 
                          onClick={() => setActiveCompetitor(idx)}
                          className={`flex-1 py-4 px-6 text-sm font-display font-bold transition-all border-b-2 ${activeCompetitor === idx ? 'text-white' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
                          style={activeCompetitor === idx ? { borderColor: comp.color, backgroundColor: `${comp.color}15` } : {}}
                       >
                           {comp.name}
                       </button>
                   ))}
               </div>

               {/* Detail Panel */}
               <div className="bg-[#030f07] p-8 md:p-10 rounded-2xl border border-green-900/40">
                   <div className="flex flex-col lg:flex-row gap-12">
                       <div className="flex-1">
                           <h3 className="font-display font-bold text-3xl text-white mb-2" style={{ color: COMPETITORS[activeCompetitor].color }}>
                               {COMPETITORS[activeCompetitor].name}
                           </h3>
                           <p className="text-sm font-mono text-gray-400 mb-6">{COMPETITORS[activeCompetitor].tagline}</p>
                           
                           <div className="bg-[#071a0e] p-6 rounded-xl border border-green-900/30 mb-8">
                               <div className="text-xs font-bold text-green-500 mb-2 uppercase tracking-wide">The Al-Iklas Win:</div>
                               <p className="text-gray-200 text-lg leading-relaxed">
                                   {COMPETITORS[activeCompetitor].alIklasWin}
                               </p>
                           </div>
                       </div>
                       
                       <div className="flex-1 lg:border-l lg:border-green-900/30 lg:pl-12">
                           <div className="text-xs font-bold text-gray-500 tracking-[2px] uppercase mb-6">Features Borrowed & Enhanced</div>
                           <div className="space-y-6">
                               {COMPETITORS[activeCompetitor].borrowedFeatures.map((feat, idx) => (
                                   <div key={idx} className="flex gap-4">
                                       <div className="text-green-500 mt-1"><CheckCircle2 size={24} /></div>
                                       <div>
                                           <h4 className="font-bold text-green-400 mb-1 leading-tight">{feat.feature}</h4>
                                           <p className="text-gray-400 text-sm leading-relaxed mb-2">{feat.detail}</p>
                                           <div className="text-[9px] font-mono uppercase text-gray-600 tracking-widest">
                                               SOURCE: {COMPETITORS[activeCompetitor].name}
                                           </div>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>

                   {/* Super Matrix */}
                   <div className="mt-16 overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                           <thead>
                               <tr>
                                   <th className="p-4 border-b border-green-900/40 text-xs font-bold text-gray-500 uppercase">Strategic Feature</th>
                                   <th className="p-4 border-b border-green-900/40 text-xs font-bold text-gray-500 text-center">Arnergy</th>
                                   <th className="p-4 border-b border-green-900/40 text-xs font-bold text-gray-500 text-center">Daystar</th>
                                   <th className="p-4 border-b border-green-900/40 text-xs font-bold text-gray-500 text-center">Rubitec</th>
                                   <th className="p-4 border-b border-green-900/40 text-xs font-bold text-gray-500 text-center">Earthbond</th>
                                   <th className="p-4 border-b-2 border-green-500 text-xs font-extrabold text-green-400 text-center drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">AL-IKLAS</th>
                               </tr>
                           </thead>
                           <tbody className="text-sm">
                               {[
                                   { label: "Residential Solar", data: ["✓", "✗", "✗", "✓", "✅"] },
                                   { label: "Industrial Solar", data: ["✗", "✓", "✓", "✗", "✅"] },
                                   { label: "Electrical Works", data: ["✗", "✗", "✗", "✗", "✅"] },
                                   { label: "In-House Engineers", data: ["✓", "✓", "✓", "✗", "✅"] },
                                   { label: "Nationwide (36 St.)", data: ["✓", "✗", "✗", "✗", "✅"] }
                               ].map((row, i) => (
                                   <tr key={i} className="border-b border-green-900/20 hover:bg-[#071a0e] transition-colors">
                                       <td className="p-4 font-medium text-gray-300">{row.label}</td>
                                       {row.data.map((mark, j) => (
                                           <td key={j} className={`p-4 text-center text-lg ${mark === '✅' ? 'text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] font-bold' : (mark === '✓' ? 'text-gray-400' : 'text-gray-700')}`}>
                                               {mark}
                                           </td>
                                       ))}
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-green-900/20 py-24 border-y border-green-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#052e16] to-[#020b06] opacity-90 -z-10"></div>
          {/* Subtle canvas overlay simulated */}
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-[48px] text-white tracking-[-1px] leading-tight mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  Ready to Eliminate Power Cuts?
              </h2>
              <p className="text-green-400 text-lg md:text-xl font-mono mb-10 tracking-wide">
                  Free site survey • 48-hour system design • NEMSA-certified installation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setCurrentPage('contact')} className="px-8 py-4 bg-gradient-brand rounded-lg text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_4_30px_rgba(34,197,94,0.4)]">
                      🗓 Book Free Consultation
                  </button>
                  <button onClick={() => { window.open('https://wa.me/2348166614479', '_blank'); }} className="px-8 py-4 bg-transparent border-2 border-green-500/50 rounded-lg text-green-400 font-bold text-lg hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2">
                      💬 Chat on WhatsApp
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};
