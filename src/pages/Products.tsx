import React from 'react';

const PRODUCTS = [
    { name: "Jinko Solar 550W Mono Half-Cut", category: "Solar Panels", price: "₦154,000", desc: "Power Output: 550W | Monocrystalline Half-Cut (144 cells) | Efficiency: 21.2% | IP68 Junction Box.", img: "/1.jpeg", spec: "550W | Mono" },
    { name: "Canadian Solar 600W 144-Cell", category: "Solar Panels", price: "₦143,000", desc: "High Voltage Design for faster battery charging. Compatible with tubular & lithium batteries. Anti-corrosion aluminium frame.", img: "/2.jpeg", spec: "600W | Mono" },
    { name: "LONGi 610W HPBC Anti-Shade", category: "Solar Panels", price: "₦143,000", desc: "Hybrid Passivated Back Contact cell type with anti-shade technology. Higher energy yield in low light conditions.", img: "/3.jpeg", spec: "610W | HPBC" },
    { name: "iTel 410W Mono Half-Cut", category: "Solar Panels", price: "₦154,000", desc: "108 Mono Half-Cut cells with 20.97% module efficiency. PID resistance for long-term stability in residential systems.", img: "/4.jpeg", spec: "410W | Mono" },
    
    { name: "Deye 6KVA/6KW Hybrid Inverter", category: "Inverters", price: "₦660,000", desc: "6kW, 48V Single Phase hybrid inverter. Max PV 6200W via dual MPPT. Pure sine wave output with parallel operation support.", img: "/5.jpeg", spec: "6kW | 48V" },
    { name: "Growatt SPF 6000 ES Plus", category: "Inverters", price: "₦847,000", desc: "6kVA, 48V hybrid inverter with inbuilt 120A MPPT charge controller. Max PV 6000W. Wi-Fi kit included.", img: "/6.jpeg", spec: "6kVA | 48V" },
    { name: "Sako 6.2KVA/48V Hybrid", category: "Inverters", price: "₦407,000", desc: "Inbuilt 80A MPPT with 5000W Max PV input. Compatible with Lithium & Lead-Acid batteries. Overload protection.", img: "/7.jpeg", spec: "6.2kVA | 48V" },
    { name: "Luminous Rayverter NEO Elite", category: "Inverters", price: "₦770,000", desc: "6KVA/48V pure sine wave hybrid inverter. Expandable PV input capacity with intelligent LCD monitoring. Deep discharge protection.", img: "/8.jpeg", spec: "6kVA | 48V" },
    { name: "Deye 20KVA 3-Phase Hybrid", category: "Inverters", price: "₦6,600,000", desc: "High-capacity commercial-grade 3-phase hybrid inverter. Smart load management and grid export support.", img: "/9.jpeg", spec: "20kVA | 3-Phase" },

    { name: "SRNE 5.12kWh LiFePO4 Lithium", category: "Batteries", price: "₦1,320,000", desc: "51.2V 100Ah LFP battery. 6,000+ cycles with built-in BMS. Max parallel up to 16 units (81.92kWh) for large storage.", img: "/10.jpeg", spec: "5.12kWh | 48V" },
    { name: "SMS 15kWh Lithium-Ion Pack", category: "Batteries", price: "₦4,950,000", desc: "High-capacity heavy-duty Lithium-Ion pack with built-in BMS protection. Scalable capability for commercial solar systems.", img: "/11.jpeg", spec: "15kWh | Scalable" },
    { name: "Syndia Tall Tubular 240Ah", category: "Batteries", price: "₦220,000", desc: "12V 240Ah deep cycle battery. Low water loss technology with 5-7 years design life. High charge acceptance rate.", img: "/12.jpeg", spec: "240Ah | Tubular" },
    { name: "CWorth Energy 2.5kWh Lithium", category: "Batteries", price: "₦220,000", desc: "12V 100Ah Lithium-Ion drop-in replacement. Lightweight, maintenance-free, with built-in BMS and long cycle life.", img: "/13.jpeg", spec: "2.5kWh | 12V" },

    { name: "Felicity MPPT Charge Controller 120A", category: "Controllers", price: "₦286,000", desc: "120A controller supporting up to 6600W solar array. 12V/24V/48V auto-selection. ≥99.5% MPPT efficiency.", img: "/14.jpeg", spec: "120A | MPPT" },
    { name: "SMK MPPT Charge Controller 80A", category: "Controllers", price: "₦132,000", desc: "80A rating with up to 50kW array support. Dual fan cooling, multi-stage charging, and 12/24/36/48V auto detection.", img: "/15.jpeg", spec: "80A | MPPT" },

    { name: "Felicity 100W All-in-One Solar Light", category: "Lighting", price: "₦429,000", desc: "Integrated solar street light. Die-cast aluminium body, PIR motion sensor, IP65 rated. Delivers 8-12 hours lighting.", img: "/16.jpeg", spec: "100W | LED" },
    { name: "SMS Solar Flood/Street Light 250W", category: "Lighting", price: "₦440,000", desc: "Separate high-efficiency mono panel. Inbuilt MPPT and Lithium battery. Auto dusk-to-dawn + optional motion sensor.", img: "/17.jpeg", spec: "250W | LED" },
    { name: "4000W All-in-One LED Street Light", category: "Lighting", price: "₦1,100,000", desc: "High power road illumination. Integrated mono panel + battery + controller. Suitable for stadium perimeters and major roads.", img: "/18.jpeg", spec: "4000W | LED" },

    { name: "Hisense 43-Inch 4K UHD Smart TV", category: "Appliances", price: "₦385,000", desc: "Solar-compatible UHD smart TV. ~80W low-power consumption. Dolby Vision / HDR10. Android/VIDAA OS.", img: "/19.jpeg", spec: "43-Inch | 4K" },
    { name: "TCL 43-Inch FHD Android TV", category: "Appliances", price: "₦275,000", desc: "Android Full HD LED Smart TV. Extra-low ~65W power consumption makes it highly inverter-compatible. Voice remote included.", img: "/20.jpeg", spec: "43-Inch | FHD" }
];

export const Products: React.FC = () => {
    return (
        <div className="w-full pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
                    <h1 className="font-display font-extrabold text-4xl sm:text-[40px] md:text-[56px] tracking-[-1px] sm:tracking-[-1.5px] text-white relative z-10 break-words">Equipment Catalogue</h1>
                    <p className="text-base sm:text-xl text-gray-400 mt-4 relative z-10 max-w-2xl mx-auto">
                        Tier-1 engineering materials, directly imported and available for wholesale or retail order. Quality you can trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {PRODUCTS.map((product, idx) => (
                        <div key={idx} className="bg-[#071a0e] rounded-2xl border border-green-900/30 overflow-hidden group hover:border-green-500/60 transition-all flex flex-col">
                            <div className="h-56 bg-[#020b06] border-b border-green-900/30 relative overflow-hidden shrink-0">
                                <img src={product.img} alt={product.name} loading="eager" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-screen" />
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
