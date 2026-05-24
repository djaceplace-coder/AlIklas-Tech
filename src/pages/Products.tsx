import React from 'react';

const PRODUCTS = [
    { name: "JA Solar 550W Mono PERC Half-Cell Panel", category: "Solar Panels", price: "₦110,000", desc: "High efficiency 550W monocrystalline panel, excellent performance in low light and high temperatures. 25-year warranty.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600", spec: "550W | 21.2% Eff" },
    { name: "Jinko Tiger Neo N-Type 605W Bifacial Panel", category: "Solar Panels", price: "₦135,000", desc: "Next-gen TOPCon technology. Bifacial design yields up to 20% more power from the rear side.", img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600", spec: "605W | Bifacial" },
    { name: "Canadian Solar HiKu7 655W Panel", category: "Solar Panels", price: "₦145,000", desc: "Massive 655W output per panel, reducing installation time and mounting costs. Ideal for C&I projects.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", spec: "655W | Mono PERC" },
    { name: "Deye 8kW Hybrid Inverter", category: "Inverters", price: "₦1,850,000", desc: "Top-tier 8kW hybrid inverter suitable for residential and light commercial use. Supports generator integration.", img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600", spec: "8kW | Single Phase" },
    { name: "Growatt SPF 5000 ES Off-Grid Inverter", category: "Inverters", price: "₦850,000", desc: "Reliable 5kW off-grid inverter. Works with or without batteries. High PV input voltage.", img: "https://images.unsplash.com/photo-1565800489013-c64859d0c2d5?auto=format&fit=crop&q=80&w=600", spec: "5kW | Off-Grid" },
    { name: "Victron Quattro 10kVA Hybrid Inverter", category: "Inverters", price: "₦4,500,000", desc: "Premium grade multi-input hybrid inverter. Flawless generator and grid switching. Legendary reliability.", img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600", spec: "10kVA | Dual AC In" },
    { name: "Pylontech US5000 4.8kWh LiFePO4 Battery", category: "Batteries", price: "₦1,450,000", desc: "Industry standard lithium phosphate battery. 6000+ cycles at 90% DoD. Built-in smart BMS.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600", spec: "4.8kWh | 48V" },
    { name: "BYD Battery-Box Premium LVL 15.4", category: "Batteries", price: "₦4,800,000", desc: "High-capacity low voltage battery stack. Easily scalable up to 983kWh for parallel connections.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600", spec: "15.4kWh | Scaleable" },
    { name: "Felicity Solar 10kWh Wall-Mounted Battery", category: "Batteries", price: "₦2,100,000", desc: "Sleek wall-mounted design saving space while delivering 10kWh of deep-cycle LiFePO4 storage.", img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=600", spec: "10kWh | Wall Mount" },
    { name: "HD Dual Lens Solar PTZ Camera", category: "Surveillance", price: "₦180,000", desc: "100% wire-free. 4G/WiFi enabled. Features dual lenses for wide-angle and telephoto viewing simultaneously.", img: "https://images.unsplash.com/photo-1555864326-5cf32fa6ce38?auto=format&fit=crop&q=80&w=600", spec: "4G | Dual Lens" },
    { name: "Schneider Electric Acti9 MCB (32A)", category: "Electricals", price: "₦12,500", desc: "Industrial-grade miniature circuit breaker providing ultimate protection against overloads and short circuits.", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600", spec: "32A | 3-Pole" },
    { name: "6mm DC Solar Cable (100m Roll)", category: "Electricals", price: "₦85,000", desc: "UV shielded, tinned copper dual-core solar cable rated for harsh Nigerian outdoor sun exposure.", img: "https://images.unsplash.com/photo-1549420993-9c5decaaf524?auto=format&fit=crop&q=80&w=600", spec: "6mm | UV Rated" },
    { name: "ABB AC Surge Protection Device (SPD)", category: "Electricals", price: "₦45,000", desc: "Critical Type 2 surge protector. Defends your sensitive inverters and appliances from grid voltage spikes.", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600", spec: "Type 2 | AC" },
    { name: "Complete Solar Home System (3kVA)", category: "Kits", price: "₦1,900,000", desc: "A bundle including a 3kVA inverter, 2.4kWh lithium battery, and 4x 450W panels. Perfect for a 2-bedroom flat.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600", spec: "Complete Kit" },
    { name: "Industrial Battery Rack Cabinet", category: "Accessories", price: "₦150,000", desc: "Heavy-duty steel rack cabinet capable of securely holding up to 6 standard rack-mount lithium batteries.", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600", spec: "42U | Steel" },
];

export const Products: React.FC = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
                    <h1 className="font-display font-extrabold text-3xl sm:text-[34px] md:text-[48px] tracking-[-1px] sm:tracking-[-1.5px] text-white relative z-10">Equipment Catalogue</h1>
                    <p className="text-base sm:text-xl text-gray-400 mt-4 relative z-10 max-w-2xl mx-auto">
                        Tier-1 engineering materials, directly imported and available for wholesale or retail order. Quality you can trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {PRODUCTS.map((product, idx) => (
                        <div key={idx} className="bg-[#071a0e] rounded-2xl border border-green-900/30 overflow-hidden group hover:border-green-500/60 transition-all flex flex-col">
                            <div className="h-56 bg-[#020b06] border-b border-green-900/30 relative overflow-hidden shrink-0">
                                <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
                                <div className="absolute top-4 left-4">
                                     <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-green-900/50 text-green-400 text-xs font-bold uppercase rounded-full">
                                         {product.category}
                                     </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-display font-bold text-lg text-white">{product.name}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {product.desc}
                                </p>
                                
                                <div className="flex items-center justify-between border-t border-green-900/30 pt-4 mb-6">
                                     <div className="text-xs text-gray-500 font-mono tracking-widest">{product.spec}</div>
                                     <div className="font-mono text-lg font-bold text-yellow-500">{product.price}</div>
                                </div>

                                <button 
                                    onClick={() => window.open(`https://wa.me/2348166614479?text=Hello, I would like to inquire about ordering the ${product.name} listed on your website.`, '_blank')} 
                                    className="w-full py-3 rounded-lg border border-green-500 text-green-400 font-bold hover:bg-green-500/10 transition-colors flex items-center justify-center gap-2 mt-auto"
                                >
                                    <span>💬</span> Order via WhatsApp
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
