const fs = require('fs');

let data = JSON.parse(fs.readFileSync('AGES/data/CommonEvents.json', 'utf8'));

// Expand array
while (data.length <= 8) data.push(null);

// Era 3: Permit Application Wait Timers
data[6] = { id: 6, name: 'Form 8B Processing', switchId: 1, trigger: 0, list: [ 
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['Bureaucrat: Processing Form 8B... Please hold.'] }, 
  { code: 230, indent: 0, parameters: [120] }, // Wait 120 frames
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['Bureaucrat: Your application for a Z-axis has been denied.'] }, 
  { code: 401, indent: 0, parameters: ['Applying 2D Damage instead.'] }, 
  { code: 0, indent: 0, parameters: [] } 
] };

// Era 4: Spreadsheet Menu Logic (Input Number)
data[7] = { id: 7, name: 'Sports Franchise Spreadsheet', switchId: 1, trigger: 0, list: [ 
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['[SPREADSHEET UI LOADED]'] }, 
  { code: 401, indent: 0, parameters: ['Allocate funds to Player Salary? (Input up to 8 digits)'] }, 
  { code: 103, indent: 0, parameters: [20, 8] }, // Input Number to Variable 20
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['Allocate funds to Merchandise? (Input up to 8 digits)'] }, 
  { code: 103, indent: 0, parameters: [21, 8] }, // Input Number to Variable 21
  { code: 111, indent: 0, parameters: [1, 20, 0, 1000000, 3] }, // If Var 20 >= 1,000,000
  { code: 101, indent: 1, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 1, parameters: ['Union Rep: Acceptable margins. We will summon the whale.'] }, 
  { code: 0, indent: 1, parameters: [] }, 
  { code: 411, indent: 0, parameters: [] }, // Else
  { code: 101, indent: 1, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 1, parameters: ['Union Rep: Bankruptcy! The strike continues!'] }, 
  { code: 0, indent: 1, parameters: [] }, 
  { code: 412, indent: 0, parameters: [] }, 
  { code: 0, indent: 0, parameters: [] } 
] };

// Era 9: d20 Dice Roll Core
data[8] = { id: 8, name: 'd20 Roll Core', switchId: 1, trigger: 0, list: [ 
  { code: 122, indent: 0, parameters: [30, 30, 0, 2, 20] }, // Random 1..20 to Variable 30
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['Rolling d20...'] }, 
  { code: 230, indent: 0, parameters: [30] }, // Wait 30 frames
  { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] }, 
  { code: 401, indent: 0, parameters: ['Result: \\V[30]'] }, 
  { code: 0, indent: 0, parameters: [] } 
] };

fs.writeFileSync('AGES/data/CommonEvents.json', JSON.stringify(data, null, 2));

// Bind Era 3 Common Event to the actual Skill 101
let s = JSON.parse(fs.readFileSync('AGES/data/Skills.json', 'utf8'));
if (s[101]) {
  s[101].effects.push({code: 44, dataId: 6, value1: 1, value2: 0});
  fs.writeFileSync('AGES/data/Skills.json', JSON.stringify(s, null, 2));
}

console.log('Successfully injected Era-Specific Core Loops into CommonEvents.json');
