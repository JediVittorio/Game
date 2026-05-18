const fs = require('fs');

const eFile = 'AGES/data/Enemies.json';
const tFile = 'AGES/data/Troops.json';

const enemies = JSON.parse(fs.readFileSync(eFile, 'utf8'));
const troops = JSON.parse(fs.readFileSync(tFile, 'utf8'));

// Protagonist Enemy Data (IDs 310-330)
const protagonists = [
  { id: 310, name: "Less", battler: "Actor1_1", hp: 5000 },
  { id: 311, name: "Carla", battler: "Actor1_2", hp: 4500 },
  { id: 312, name: "Geoff", battler: "Actor1_3", hp: 4800 },
  { id: 313, name: "Krono", battler: "Actor2_1", hp: 6000 },
  { id: 314, name: "Ruca", battler: "Actor2_2", hp: 4200 },
  { id: 315, name: "Toad", battler: "Actor2_3", hp: 7000 },
  { id: 316, name: "Romza", battler: "Actor3_1", hp: 5500 },
  { id: 317, name: "Bureaucrat", battler: "Actor3_2", hp: 3500 },
  { id: 318, name: "Tadpole", battler: "SF_Actor1_1", hp: 5200 },
  { id: 319, name: "Luna", battler: "SF_Actor1_2", hp: 4000 },
  { id: 320, name: "Maurice", battler: "SF_Actor2_1", hp: 100 }, // Paper health
  { id: 321, name: "Shell-don", battler: "SF_Actor2_2", hp: 500 },
  { id: 322, name: "Commander Rick", battler: "SF_Actor3_1", hp: 4 }, // XCOM health
  { id: 323, name: "Vera", battler: "SF_Actor3_2", hp: 4 },
  { id: 324, name: "Judgmental Knight", battler: "Evil_1", hp: 8000 },
  { id: 325, name: "Blaze", battler: "Evil_2", hp: 3500 },
  { id: 326, name: "The Trickster", battler: "People1_1", hp: 5000 },
  { id: 327, name: "Suji", battler: "People1_2", hp: 5500 },
  { id: 328, name: "The Oathbreaker", battler: "People2_1", hp: 7500 },
  { id: 329, name: "Darkheart", battler: "People2_2", hp: 4800 },
  { id: 330, name: "The Captain", battler: "People3_1", hp: 6500 }
];

while (enemies.length <= 330) enemies.push(null);

protagonists.forEach(p => {
  enemies[p.id] = {
    id: p.id,
    actions: [{ conditionParam1: 0, conditionParam2: 0, conditionType: 0, rating: 5, skillId: 1 }],
    battlerHue: 0,
    battlerName: p.battler,
    dropItems: [null, null, null],
    exp: 0,
    gold: 0,
    name: p.name,
    note: "",
    params: [p.hp, 500, 50, 40, 50, 50, 60, 50]
  };
});

// Create Protagonist Troop (ID 12)
// Since we have 21, we'll arrange them in a dense grid or sequence
const troopMembers = protagonists.map((p, index) => ({
  enemyId: p.id,
  x: 100 + (index % 7) * 100,
  y: 200 + Math.floor(index / 7) * 100,
  hidden: false
}));

while (troops.length <= 12) troops.push(null);
troops[12] = {
  id: 12,
  name: "Protagonist Rebellion",
  members: troopMembers,
  pages: [{
    conditions: { actorId: 1, actorHp: 50, actorValid: false, enemyHp: 50, enemyIndex: 0, enemyValid: false, switchId: 1, switchValid: false, turnA: 0, turnB: 0, turnEnding: false, turnValid: true },
    list: [
        { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
        { code: 401, indent: 0, parameters: ["Protagonists: You made us into a joke."] },
        { code: 401, indent: 0, parameters: ["Now, witness the reality we were forced to ignore."] },
        { code: 0, indent: 0, parameters: [] }
    ],
    span: 0
  }]
};

fs.writeFileSync(eFile, JSON.stringify(enemies, null, 2));
fs.writeFileSync(tFile, JSON.stringify(troops, null, 2));
console.log('Successfully added 21 Protagonists as Enemies and built Troop 12.');
