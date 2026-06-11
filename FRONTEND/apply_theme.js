const fs = require('fs');
const file = 'e:\\MAY_PLAN\\BreedWise\\FRONTEND\\app\\Home\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  // Primary Color replacements
  'text-blue-600': 'text-[#4F378A]',
  'bg-blue-600': 'bg-[#4F378A]',
  'border-blue-600': 'border-[#4F378A]',
  'focus:border-blue-600': 'focus:border-[#4F378A]',
  'focus:ring-blue-600': 'focus:ring-[#4F378A]',
  'hover:text-blue-600': 'hover:text-[#4F378A]',
  
  // Lighter/Darker variants
  'text-blue-400': 'text-violet-400',
  'dark:text-blue-400': 'dark:text-violet-400',
  'hover:text-blue-400': 'hover:text-violet-400',
  'dark:border-blue-400': 'dark:border-violet-400',
  
  'bg-blue-50': 'bg-violet-50',
  'hover:bg-blue-50': 'hover:bg-violet-50',
  
  'bg-blue-100': 'bg-violet-100',
  'hover:bg-blue-100': 'hover:bg-violet-100',
  
  'text-blue-800': 'text-violet-800',
  'hover:text-blue-800': 'hover:text-violet-800',
  
  'bg-blue-900/50': 'bg-violet-900/50',
  'dark:hover:bg-blue-900/50': 'dark:hover:bg-violet-900/50',
  
  // Grays to Slates
  'bg-gray-50': 'bg-slate-50',
  'hover:bg-gray-50': 'hover:bg-slate-50',
  'border-gray-200': 'border-slate-200',
  'border-gray-300': 'border-slate-300',
};

const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);

let newContent = content;
for (const key of sortedKeys) {
  const value = replacements[key];
  const regex = new RegExp('(?<=^|\\s|["\'])' + key.replace(/[/.:]/g, '\\$&') + '(?=$|\\s|["\'])', 'g');
  newContent = newContent.replace(regex, value);
}

fs.writeFileSync(file, newContent);
console.log('Successfully applied deep purple theme to ' + file);
