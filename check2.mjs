const urls = [
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d', // City/solar
  'https://images.unsplash.com/photo-1555864326-5cf32fa6ce38', // Security camera maybe? Let's check
  'https://images.unsplash.com/photo-1510052382103-8d0092383c27', // Warehouse/Logistics
  'https://images.unsplash.com/photo-1593941707882-a5bba14938c7', // Battery/Tech
  'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5', // Electrical
  'https://images.unsplash.com/photo-1549420993-9c5decaaf524', // Cables
  'https://images.unsplash.com/photo-1596701062973-20da9a57492c', // More solar
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca'  // Cold storage/industrial
];

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) console.log('BROKEN:', url);
    } catch(e) {
      console.log('ERROR:', url);
    }
  }
}
run();
