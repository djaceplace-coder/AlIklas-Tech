import React, { useState } from 'react';

const POSTS = [
    { title: "Definitive Guide to LiFePO4 vs AGM Batteries in Nigeria", excerpt: "Deep discharge, heat, and grid failure create a uniquely tough environment. We break down the true longevity of battery chemistries under Nigerian operating conditions.", date: "May 2026", tag: "Technology", read: "8 min", content: "Selecting the right battery chemistry is often the most critical decision when building a solar or inverter system in Nigeria. Due to the high frequency of grid outages, batteries are frequently cycled down to low charge states. Lead-acid variants such as AGM or Gel are typically cheaper upfront but degrade rapidly when subjected to deep discharge scenarios (DoD > 50%). \n\nLiFePO4 (Lithium Iron Phosphate) represents a massive leap forward. Not only do they support up to 90% DoD cleanly, but they also offer thousands of cycles compared to the few hundred seen with AGMs. At Al-Iklas, our stress tests in peak Nigerian heat demonstrate that LiFePO4 systems simply deliver better long-term TCO (Total Cost of Ownership)." },
    { title: "NEMSA Certification 101: Why It Protects Your Home", excerpt: "Don't let uncertified installers touch your DB board. Here's what NEMSA compliance entails and why it prevents devastating electrical fires.", date: "May 2026", tag: "Safety", read: "5 min", content: "NEMSA (Nigerian Electricity Management Services Agency) exists for a reason: to enforce technical electrical standards that prevent fires and electrocutions. Far too often, we are called to salvage systems installed by unqualified technicians using undersized cables and improper earthing.\n\nOur certified teams utilize standard gauges, adequate miniature circuit breakers (MCBs), and correct structural load designs. Compliance is not just a badge; it's a structural guarantee that your investments are safe and robust." },
    { title: "The Hybrid Shift: C&I Solar Adoption in Lagos", excerpt: "With diesel prices forcing margin compression, MSMEs are adopting our PaaS model to slash energy costs by over 45%. A report.", date: "Apr 2026", tag: "Industry", read: "6 min", content: "Diesel costs have made 24/7 operations prohibitive for small and medium enterprises in metropolitan hotspots. The new economic meta relies heavily on commercial and industrial (C&I) hybrid adoption.\n\nRather than bearing massive upfront costs, businesses use our Power-as-a-Service (PaaS) to offset their diesel consumption heavily during daytime operations while leaning on scalable battery stacks for night cycles." },
    { title: "Bifacial Solar Panels: Overhyped or Essential?", excerpt: "Al-Iklas Research tests 600W+ bifacials on reflective vs dark roofs in Abuja. The yield differences might surprise you.", date: "Apr 2026", tag: "Research", read: "7 min", content: "Are bifacial panels really worth the premium? Bifacial cells collect irradiance from both the front and rear sides. Our tests across various sites in Abuja indicate that unless the underlying mounting surface is highly reflective (like white gravel or reflective commercial coating), the rear-side albedo gain can be minimal.\n\nHowever, for ground-mounted plants or adequately spaced commercial installations, the yield increases by up to 10-15%, making them highly viable over a 25-year lifecycle." },
    { title: "Understanding Smart Inverter BMS Communications", excerpt: "How Pylontech and Deye talk to each other to prevent cell degradation. A deep dive into CANbus protocols.", date: "Mar 2026", tag: "Technology", read: "10 min", content: "Gone are the days of blind bulk charging. Modern hybrid solutions like the Deye inverter line communicate directly with lithium battery BMS (Battery Management System) units via CANbus protocols.\n\nThis ensures realtime adjustments to charge voltage and current based on internal battery temperatures and cell balance statuses, preventing premature degradation and extending lifecycle significantly." },
    { title: "Protecting Inverters from Grid Voltage Surges", excerpt: "The Nigerian grid is notorious for spikes. If you aren't using Type-2 AC Surge Protection Devices, your inverter is a sitting duck.", date: "Mar 2026", tag: "Safety", read: "4 min", content: "Voltage spikes can instantly fry sensitive control boards within multi-million Naira inverters. Surge Protection Devices (SPDs) are non-negotiable. We cover why a simple breaker isn't fast enough, and the mechanics of Type-2 AC SPDs used in our DBs to divert transient spikes to ground." },
    { title: "Step-by-step: Our Utility-Scale EPS Methodology", excerpt: "Peek behind the curtain of an Al-Iklas engineering project. From ETAP single-line simulations to final commissioning.", date: "Feb 2026", tag: "Methodology", read: "9 min", content: "Engineering is rigorous. Before a single cable is laid, our teams conduct detailed electrical load tracking and build ETAP single-line simulations to calculate harmonic distortions and fault tolerances. Discover how we deliver fail-safe mega installations." },
    { title: "Solar Surveillance: Perimeter Protection", excerpt: "How HD Dual Lens Solar cameras are providing unbreakable perimeter security for off-grid estates and farms.", date: "Feb 2026", tag: "Product", read: "5 min", content: "Wide-area security, particularly in agricultural settings or massive real estate projects, suffers from wire reach limitations. Solar PTZ cameras operate via integrated batteries and 4G GSM connectivity, achieving total off-grid visual monitoring." },
    { title: "The Financial Math on Flexible Solar Financing", excerpt: "Lease-to-own models and how installmental payments make premium Tier-1 solar accessible without breaking the bank.", date: "Jan 2026", tag: "Economics", read: "6 min", content: "We unpack the ROI timeline of swapping generator running costs with our flexible lease-to-own solar plans. With consistent monthly premiums, businesses cross the break-even point much faster than they realize." },
    { title: "What is an Earthing System and Why It Matters", excerpt: "Earth fault protection is often neglected by quack installers. Why earthing rods and proper grounding save lives.", date: "Jan 2026", tag: "Electricals", read: "5 min", content: "A deep earth mat or proper copper earthing rod does more than pass inspection; it provides a safe path for electrical leaks. Learn why bonding neutral to earth in specific points of an off-grid system is crucial for safety and avoiding floating voltages." },
];

export const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<typeof POSTS[0] | null>(null);

    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12 sm:mb-20">
                    <h1 className="font-display font-extrabold text-4xl sm:text-[40px] md:text-[56px] tracking-[-1px] sm:tracking-[-1.5px] text-white break-words">Engineering Insights</h1>
                    <p className="text-base sm:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                        Deep-dive articles, technical analyses, and industry reports from the desk of the Al-Iklas Research & Engineering team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {POSTS.map((post, idx) => (
                        <article key={idx} onClick={() => setSelectedPost(post)} className="bg-[#071a0e] p-6 sm:p-8 rounded-3xl border border-green-900/30 hover:border-green-500/60 transition-colors flex flex-col group cursor-pointer relative overflow-hidden">
                             <div className="flex justify-between items-center mb-6 relative z-10">
                                  <span className="text-xs font-bold tracking-widest uppercase text-green-500 bg-[#030f07] px-3 py-1 rounded border border-green-900/50">{post.tag}</span>
                                  <span className="text-xs font-mono text-gray-500">{post.read}</span>
                             </div>
                             
                             <h2 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-green-400 transition-colors leading-tight relative z-10">
                                 {post.title}
                             </h2>
                             
                             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                                 {post.excerpt}
                             </p>
                             
                             <div className="flex justify-between items-center border-t border-green-900/30 pt-4 mt-auto relative z-10">
                                  <span className="text-xs font-mono text-gray-500">{post.date}</span>
                                  <span className="text-green-500 font-bold text-sm transform group-hover:translate-x-2 transition-transform px-3 py-1 bg-green-500/10 rounded-full">Read Article</span>
                             </div>
                             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-green-500/10 transition-colors duration-700"></div>
                        </article>
                    ))}
                </div>

            </div>

            {/* Reading Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto" onClick={() => setSelectedPost(null)}>
                    <div className="bg-[#030f07] border border-green-900/50 rounded-3xl w-full max-w-3xl my-auto relative shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                        <div className="p-6 sm:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                            <button onClick={() => setSelectedPost(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-[#071a0e] w-10 h-10 rounded-full flex items-center justify-center border border-green-900/50">&times;</button>
                            
                            <div className="flex items-center gap-4 mb-6 mt-2">
                                <span className="text-xs font-bold tracking-widest uppercase text-green-500">{selectedPost.tag}</span>
                                <span className="text-gray-600">&bull;</span>
                                <span className="text-xs font-mono text-gray-500">{selectedPost.date}</span>
                                <span className="text-gray-600">&bull;</span>
                                <span className="text-xs font-mono text-gray-500">{selectedPost.read} read</span>
                            </div>
                            
                            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-8 leading-tight">
                                {selectedPost.title}
                            </h2>
                            
                            <div className="prose prose-invert prose-green max-w-none">
                                {selectedPost.content.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-lg text-gray-300 leading-relaxed mb-6 font-sans">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-green-900/30 flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-400">Written by Engineering Team</div>
                                <button onClick={() => setSelectedPost(null)} className="text-green-500 font-bold hover:text-green-400 transition-colors">Close Article</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
