import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export const SolarCalculatorContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quick' | 'load'>('quick');

  // Quick Estimate State
  const [load, setLoad] = useState(5000);
  const [hours, setHours] = useState(12);
  const [autonomy, setAutonomy] = useState(1);
  const [installationType, setInstallationType] = useState('residential');

  // Load Builder State
  const [appliances, setAppliances] = useState([
    { name: "LED Bulbs", icon: "💡", watts: 9, qty: 0 },
    { name: "Ceiling Fan", icon: "🌀", watts: 75, qty: 0 },
    { name: "Standing Fan", icon: "💨", watts: 55, qty: 0 },
    { name: "32\" TV", icon: "📺", watts: 60, qty: 0 },
    { name: "55\" Smart TV", icon: "📺", watts: 150, qty: 0 },
    { name: "Refrigerator (200L)", icon: "🧊", watts: 150, qty: 0 },
    { name: "Deep Freezer (300L)", icon: "❄️", watts: 200, qty: 0 },
    { name: "1HP Air Conditioner", icon: "🌡️", watts: 900, qty: 0 },
    { name: "1.5HP Air Conditioner", icon: "🌡️", watts: 1200, qty: 0 },
    { name: "2.5HP Air Conditioner", icon: "🌡️", watts: 2000, qty: 0 },
    { name: "Washing Machine", icon: "🫧", watts: 500, qty: 0 },
    { name: "Microwave Oven", icon: "♨️", watts: 1200, qty: 0 },
    { name: "Electric Cooker", icon: "🍳", watts: 2000, qty: 0 },
    { name: "Water Pump (0.5HP)", icon: "💧", watts: 375, qty: 0 },
    { name: "Computer/Laptop", icon: "💻", watts: 65, qty: 0 },
    { name: "DSTV Decoder", icon: "📡", watts: 30, qty: 0 },
    { name: "Security Cameras (4x)", icon: "📷", watts: 40, qty: 0 },
    { name: "WiFi Router", icon: "📶", watts: 15, qty: 0 },
  ]);

  const updateQty = (index: number, delta: number) => {
    const newApps = [...appliances];
    newApps[index].qty = Math.max(0, newApps[index].qty + delta);
    setAppliances(newApps);
  };

  const calculatedLoad = activeTab === 'quick' ? load : appliances.reduce((acc, curr) => acc + (curr.watts * curr.qty), 0);
  const calculatedHours = activeTab === 'quick' ? hours : 10; // Assumption for load builder
  
  const daily_kwh = (calculatedLoad * calculatedHours) / 1000;
  const panels = Math.ceil(daily_kwh / 1.85) || 0; 
  const battery_kwh = (daily_kwh * autonomy * 1.25) || 0; 
  const inverter_kw = Math.ceil(calculatedLoad / 1000 * 1.25) || 0; 
  const system_cost_low = Math.round(panels * 90000 + battery_kwh * 130000 + inverter_kw * 80000);
  const system_cost_high = Math.round(system_cost_low * 1.35);
  const annual_diesel_savings = Math.round(daily_kwh * 365 * 950); 
  const payback_years = annual_diesel_savings > 0 ? (system_cost_low / annual_diesel_savings).toFixed(1) : "0";
  const co2_saved = (daily_kwh * 365 * 0.43).toFixed(0); 

  const barData = [
    { name: 'Annual Cost (₦)', Diesel: annual_diesel_savings, Solar: Math.round(system_cost_high * 0.02) }
  ];

  const lineData = Array.from({length: 11}, (_, i) => ({
      year: `Year ${i}`,
      Diesel: annual_diesel_savings * i,
      Solar: i === 0 ? system_cost_high : system_cost_high + (system_cost_high * 0.02 * i)
  }));


  return (
    <div className="w-full">
      <div className="mb-8 flex space-x-2 border-b border-green-900/30">
        <button
          className={`pb-4 px-4 font-display font-semibold text-lg transition-colors ${activeTab === 'quick' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500 hover:text-gray-300'}`}
          onClick={() => setActiveTab('quick')}
        >
          Quick Estimate
        </button>
        <button
          className={`pb-4 px-4 font-display font-semibold text-lg transition-colors ${activeTab === 'load' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500 hover:text-gray-300'}`}
          onClick={() => setActiveTab('load')}
        >
          Appliance Load Builder
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <div className="bg-[#071a0e] p-6 lg:p-8 rounded-2xl border border-green-500/10 shadow-xl">
          {activeTab === 'quick' ? (
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-semibold select-none">Total Load Wattage</label>
                  <span className="font-mono text-green-400">{load}W</span>
                </div>
                <input
                  type="range" min="500" max="30000" step="100"
                  value={load} onChange={(e) => setLoad(Number(e.target.value))}
                  className="w-full accent-green-500 bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-semibold select-none">Daily Usage Hours</label>
                  <span className="font-mono text-green-400">{hours}h</span>
                </div>
                <input
                  type="range" min="2" max="24" step="0.5"
                  value={hours} onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-green-500 bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-gray-300 font-semibold select-none">Autonomy (Backup Days)</label>
                  <span className="font-mono text-green-400">{autonomy} Days</span>
                </div>
                <input
                  type="range" min="1" max="5" step="1"
                  value={autonomy} onChange={(e) => setAutonomy(Number(e.target.value))}
                  className="w-full accent-green-500 bg-gray-800 rounded-lg appearance-none h-2 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-4 select-none">Installation Type</label>
                <div className="flex bg-[#030f07] rounded-lg p-1 border border-green-900/30">
                  {['residential', 'commercial', 'industrial'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setInstallationType(type)}
                      className={`flex-1 py-2 text-sm font-semibold capitalize rounded-md transition-colors ${installationType === type ? 'bg-green-600/20 text-green-400' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="sticky top-0 bg-[#071a0e] pb-4 z-10 border-b border-green-900/30 flex justify-between items-center">
                 <span className="text-gray-400 text-sm font-semibold">Select Appliances</span>
                 <span className="text-green-500 font-mono text-xl">{calculatedLoad}W Total</span>
              </div>
              {appliances.map((app, idx) => (
                <div key={app.name} className="flex justify-between items-center p-3 rounded-xl bg-[#030f07] border border-green-900/20 hover:border-green-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{app.icon}</span>
                    <div>
                      <div className="text-gray-200 font-semibold text-sm">{app.name}</div>
                      <div className="text-gray-500 font-mono text-xs">{app.watts}W each</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-[#071a0e] rounded-lg p-1 border border-green-900/30">
                    <button onClick={() => updateQty(idx, -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-md hover:bg-gray-800">-</button>
                    <span className="font-mono text-green-400 w-4 text-center">{app.qty}</span>
                    <button onClick={() => updateQty(idx, 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-md hover:bg-gray-800">+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Output Panel */}
        <div className="bg-[#030f07] p-6 lg:p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.05)] flex flex-col justify-between relative overflow-hidden">
             
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full"></div>

             <div>
                <h3 className="font-display text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <span className="text-green-500">⚙️</span> System Specification
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Daily Energy</div>
                        <div className="font-mono text-2xl text-yellow-500">{daily_kwh.toFixed(1)} <span className="text-sm">kWh</span></div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Solar Panels</div>
                        <div className="font-mono text-2xl text-green-400">{panels} <span className="text-sm">x 450W</span></div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Battery Storage</div>
                        <div className="font-mono text-2xl text-green-400">{battery_kwh.toFixed(1)} <span className="text-sm">kWh</span></div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Inverter Size</div>
                        <div className="font-mono text-2xl text-blue-400">{inverter_kw} <span className="text-sm">kW</span></div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-green-900/30">
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Estimated CapEx (₦)</div>
                    <div className="font-mono text-3xl md:text-4xl text-yellow-500 font-bold">
                        {system_cost_low.toLocaleString()} - {system_cost_high.toLocaleString()}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                     <div className="bg-[#071a0e] p-3 rounded-lg border border-green-900/20 text-center">
                         <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Diesel Saved/Yr</div>
                         <div className="font-mono text-green-400">₦{annual_diesel_savings.toLocaleString()}</div>
                     </div>
                     <div className="bg-[#071a0e] p-3 rounded-lg border border-green-900/20 text-center">
                         <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Payback</div>
                         <div className="font-mono text-white">{payback_years} <span className="text-xs">Yrs</span></div>
                     </div>
                     <div className="bg-[#071a0e] p-3 rounded-lg border border-green-900/20 text-center">
                         <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">CO₂ Avoided</div>
                         <div className="font-mono text-green-400">{Number(co2_saved).toLocaleString()} <span className="text-xs">kg</span></div>
                     </div>
                </div>
             </div>

             <button className="mt-8 w-full py-4 rounded-xl bg-gradient-brand text-black font-bold text-lg shadow-[0_4_20px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                 Get Free Site Survey <span>→</span>
             </button>
        </div>
      </div>

      {/* Visualisations section */}
      <div className="mt-16 bg-[#071a0e] border border-green-900/30 rounded-3xl p-6 lg:p-10">
          <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3">
              <span className="text-blue-500">📊</span> ROI & Cost Projection
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-80">
              
              <div className="h-full">
                  <h4 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider text-center">Annual Operating Cost</h4>
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} margin={{ top: 0, right: 0, left: 10, bottom: 0 }}>
                          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${(value/1000000).toFixed(1)}M`} />
                          <RechartsTooltip cursor={{fill: 'rgba(255,255,255,0.02)'}} contentStyle={{ backgroundColor: '#030f07', borderColor: '#15803d', fontFamily: 'DM Mono' }} />
                          <Legend wrapperStyle={{ fontSize: '12px' }}/>
                          <Bar dataKey="Diesel" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={40} />
                          <Bar dataKey="Solar" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={40} />
                      </BarChart>
                  </ResponsiveContainer>
              </div>

              <div className="h-full">
                  <h4 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider text-center">10-Year Cumulative Cost</h4>
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineData} margin={{ top: 0, right: 0, left: 10, bottom: 0 }}>
                          <XAxis dataKey="year" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₦${(value/1000000).toFixed(0)}M`} />
                          <RechartsTooltip contentStyle={{ backgroundColor: '#030f07', borderColor: '#15803d', fontFamily: 'DM Mono' }} />
                          <Legend wrapperStyle={{ fontSize: '12px' }}/>
                          <Line type="monotone" dataKey="Diesel" stroke="#ef4444" strokeWidth={3} dot={false} />
                          <Line type="monotone" dataKey="Solar" stroke="#22c55e" strokeWidth={3} dot={false} />
                      </LineChart>
                  </ResponsiveContainer>
              </div>

          </div>

          <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-200/70 font-mono">
              <span className="font-bold text-yellow-500">ENGINEER'S NOTE:</span> Calculations assume ₦950/litre diesel replacement, 4.1 peak sun hours (Nigerian average), and 25% depth-of-discharge buffer for battery health. Actual quotes require site survey.
          </div>
      </div>
    </div>
  );
};
