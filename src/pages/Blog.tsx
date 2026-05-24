import React from 'react';

const POSTS = [
    { title: "Definitive Guide to LiFePO4 vs AGM Batteries in Nigeria", excerpt: "Deep discharge, heat, and grid failure create a uniquely tough environment. We break down the true longevity of battery chemistries under Nigerian operating conditions.", date: "May 2026", tag: "Technology", read: "8 min" },
    { title: "NEMSA Certification 101: Why It Protects Your Home", excerpt: "Don't let uncertified installers touch your DB board. Here's what NEMSA compliance entails and why it prevents devastating electrical fires.", date: "May 2026", tag: "Safety", read: "5 min" },
    { title: "The Hybrid Shift: C&I Solar Adoption in Lagos", excerpt: "With diesel prices forcing margin compression, MSMEs are adopting our PaaS model to slash energy costs by over 45%. A report.", date: "Apr 2026", tag: "Industry", read: "6 min" },
    { title: "Bifacial Solar Panels: Overhyped or Essential?", excerpt: "Al-Iklas Research tests 600W+ bifacials on reflective vs dark roofs in Abuja. The yield differences might surprise you.", date: "Apr 2026", tag: "Research", read: "7 min" },
    { title: "Understanding Smart Inverter BMS Communications", excerpt: "How Pylontech and Deye talk to each other to prevent cell degradation. A deep dive into CANbus protocols.", date: "Mar 2026", tag: "Technology", read: "10 min" },
    { title: "Protecting Inverters from Grid Voltage Surges", excerpt: "The Nigerian grid is notorious for spikes. If you aren't using Type-2 AC Surge Protection Devices, your inverter is a sitting duck.", date: "Mar 2026", tag: "Safety", read: "4 min" },
    { title: "Step-by-step: Our Utility-Scale EPS Methodology", excerpt: "Peek behind the curtain of an Al-Iklas engineering project. From ETAP single-line simulations to final commissioning.", date: "Feb 2026", tag: "Methodology", read: "9 min" },
    { title: "Solar Surveillance: Perimeter Protection", excerpt: "How HD Dual Lens Solar cameras are providing unbreakable perimeter security for off-grid estates and farms.", date: "Feb 2026", tag: "Product", read: "5 min" },
    { title: "The Financial Math on Flexible Solar Financing", excerpt: "Lease-to-own models and how installmental payments make premium Tier-1 solar accessible without breaking the bank.", date: "Jan 2026", tag: "Economics", read: "6 min" },
    { title: "What is an Earthing System and Why It Matters", excerpt: "Earth fault protection is often neglected by quack installers. Why earthing rods and proper grounding save lives.", date: "Jan 2026", tag: "Electricals", read: "5 min" },
];

export const Blog: React.FC = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12 sm:mb-20">
                    <h1 className="font-display font-extrabold text-3xl sm:text-[34px] md:text-[48px] tracking-[-1px] sm:tracking-[-1.5px] text-white">Engineering Insights</h1>
                    <p className="text-base sm:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                        Deep-dive articles, technical analyses, and industry reports from the desk of the Al-Iklas Research & Engineering team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {POSTS.map((post, idx) => (
                        <article key={idx} className="bg-[#071a0e] p-6 sm:p-8 rounded-3xl border border-green-900/30 hover:border-green-500/60 transition-colors flex flex-col group cursor-pointer">
                             <div className="flex justify-between items-center mb-6">
                                  <span className="text-xs font-bold tracking-widest uppercase text-green-500">{post.tag}</span>
                                  <span className="text-xs font-mono text-gray-500">{post.read}</span>
                             </div>
                             
                             <h2 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">
                                 {post.title}
                             </h2>
                             
                             <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                 {post.excerpt}
                             </p>
                             
                             <div className="flex justify-between items-center border-t border-green-900/30 pt-4 mt-auto">
                                  <span className="text-xs font-mono text-gray-500">{post.date}</span>
                                  <span className="text-green-500 font-bold text-sm transform group-hover:translate-x-2 transition-transform">Read →</span>
                             </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
};
