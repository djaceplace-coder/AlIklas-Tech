const urls = [
  'https://images.unsplash.com/photo-1613665813446-82a78c468a1d',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',
  'https://images.unsplash.com/photo-1618090584126-129cd1f3f4c6',
  'https://images.unsplash.com/photo-1586528116311-ad8ed7c30a77',
  'https://images.unsplash.com/photo-1557597774-9d273e3f0558',
  'https://images.unsplash.com/photo-1617789454848-ae9ecaf967c5',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d',
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f',
  'https://images.unsplash.com/photo-1592833159155-c62df1b65634',
  'https://images.unsplash.com/photo-1558449028-b53a39d100fc',
  'https://images.unsplash.com/photo-1565800489013-c64859d0c2d5',
  'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d',
  'https://images.unsplash.com/photo-1509391366360-15cb3d9ffba2',
  'https://images.unsplash.com/photo-1616423640778-28d1b53229bd'
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
