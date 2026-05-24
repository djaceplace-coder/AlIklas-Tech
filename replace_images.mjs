import fs from 'fs';

const files = ['./src/pages/Home.tsx', './src/pages/Pages.tsx', './src/pages/Products.tsx'];

const replacements = {
  '1618090584126-129cd1f3f4c6': '1593941707882-a5bba14938c7',
  '1586528116311-ad8ed7c30a77': '1582213782179-e0d53f98f2ca',
  '1557597774-9d273e3f0558': '1544724569-5f546fd6f2b5',
  '1617789454848-ae9ecaf967c5': '1565800489013-c64859d0c2d5',
  '1509391366360-15cb3d9ffba2': '1518005020951-eccb494ad742'
};

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [oldId, newId] of Object.entries(replacements)) {
    content = content.split(oldId).join(newId);
  }
  fs.writeFileSync(file, content);
}
console.log("Replaced strings successfully.");
