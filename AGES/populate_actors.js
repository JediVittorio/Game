const fs = require('fs');

const actorsFile = 'AGES/data/Actors.json';
const classesFile = 'AGES/data/Classes.json';

const actors = JSON.parse(fs.readFileSync(actorsFile, 'utf8'));
const classes = JSON.parse(fs.readFileSync(classesFile, 'utf8'));

// Helper to expand arrays if needed
function ensureSize(arr, size) {
  while (arr.length <= size) arr.push(null);
}
ensureSize(actors, 100);
ensureSize(classes, 100);

const charData = [
  // Era 3: FFT
  { id: 21, name: 'Romza', nickname: 'Heretic', class: 'Disgraced Noble', hp: 35, mp: 10, atk: 5, def: 4, mat: 3, mdf: 3, agi: 6, luk: 5 },
  { id: 22, name: 'The Bureaucrat', nickname: 'Clerk', class: 'Chemist', hp: 30, mp: 15, atk: 3, def: 3, mat: 5, mdf: 4, agi: 5, luk: 5 },
  // Era 4: FFX
  { id: 31, name: 'Tadpole', nickname: 'Star Player', class: 'Athlete', hp: 520, mp: 12, atk: 15, def: 10, mat: 5, mdf: 5, agi: 10, luk: 5 },
  { id: 32, name: 'Luna', nickname: 'Summoner', class: 'Priestess', hp: 380, mp: 40, atk: 5, def: 5, mat: 15, mdf: 15, agi: 8, luk: 5 },
  // Era 5: Paper Mario
  { id: 41, name: 'Maurice', nickname: 'Paper Plumber', class: '2D Hero', hp: 10, mp: 5, atk: 2, def: 0, mat: 0, mdf: 0, agi: 5, luk: 5 },
  { id: 42, name: 'Shell-don', nickname: 'Anxious Turtle', class: 'Encyclopedia', hp: 15, mp: 0, atk: 1, def: 1, mat: 0, mdf: 0, agi: 2, luk: 5 },
  // Era 6: XCOM 2
  { id: 51, name: 'Commander Rick', nickname: 'Recon', class: 'Ranger', hp: 4, mp: 0, atk: 3, def: 0, mat: 0, mdf: 0, agi: 12, luk: 5 },
  { id: 52, name: 'Vera', nickname: 'Specialist', class: 'Field Medic', hp: 4, mp: 0, atk: 3, def: 0, mat: 0, mdf: 0, agi: 14, luk: 5 },
  // Era 7: DOS2
  { id: 61, name: 'Judgmental Knight', nickname: 'Executioner', class: 'Magister', hp: 30, mp: 0, atk: 10, def: 5, mat: 2, mdf: 2, agi: 5, luk: 5 },
  { id: 62, name: 'Blaze', nickname: 'Pyromancer', class: 'Source Hunter', hp: 20, mp: 10, atk: 2, def: 2, mat: 12, mdf: 8, agi: 6, luk: 5 },
  // Era 8: P5R
  { id: 71, name: 'The Trickster', nickname: 'Wild Card', class: 'Phantom Thief', hp: 100, mp: 40, atk: 12, def: 10, mat: 15, mdf: 12, agi: 14, luk: 10 },
  { id: 72, name: 'Suji', nickname: 'Brawler', class: 'Delinquent', hp: 120, mp: 20, atk: 18, def: 14, mat: 5, mdf: 8, agi: 12, luk: 8 },
  // Era 9: BG3
  { id: 81, name: 'The Oathbreaker', nickname: 'Tav', class: 'Paladin', hp: 12, mp: 0, atk: 16, def: 14, mat: 10, mdf: 10, agi: 10, luk: 10 },
  { id: 82, name: 'Darkheart', nickname: 'Tragic', class: 'Cleric', hp: 9, mp: 10, atk: 12, def: 12, mat: 14, mdf: 14, agi: 14, luk: 10 },
  { id: 83, name: 'Merchant', nickname: 'Trader', class: 'NPC', hp: 8, mp: 0, atk: 10, def: 10, mat: 10, mdf: 10, agi: 10, luk: 14 },
  // Era 10: Clair Obscur
  { id: 91, name: 'The Captain', nickname: 'Expedition', class: 'Leader', hp: 150, mp: 50, atk: 20, def: 15, mat: 10, mdf: 10, agi: 15, luk: 10 },
  { id: 92, name: 'Maelle', nickname: 'Fading', class: 'Swift Duelist', hp: 110, mp: 30, atk: 25, def: 10, mat: 12, mdf: 8, agi: 20, luk: 12 }
];

charData.forEach(c => {
  // Create Class
  classes[c.id] = {
    id: c.id,
    expParams: [30, 20, 30, 30],
    traits: [{"code": 23, "dataId": 0, "value": 1}],
    learnings: [],
    name: c.class,
    note: "",
    params: [
      [c.hp, c.hp * 10],
      [c.mp, c.mp * 10],
      [c.atk, c.atk * 3],
      [c.def, c.def * 3],
      [c.mat, c.mat * 3],
      [c.mdf, c.mdf * 3],
      [c.agi, c.agi * 3],
      [c.luk, c.luk * 3]
    ]
  };

  // Create Actor
  actors[c.id] = {
    id: c.id,
    battlerName: "Actor1_1",
    characterIndex: 0,
    characterName: "Actor1",
    classId: c.id,
    equips: [1, 0, 0, 0, 0],
    faceIndex: 0,
    faceName: "Actor1",
    traits: [],
    initialLevel: 1,
    maxLevel: 99,
    name: c.name,
    nickname: c.nickname,
    note: "",
    profile: `Protagonist of Era ${Math.floor(c.id / 10)}.`
  };
});

fs.writeFileSync(actorsFile, JSON.stringify(actors, null, 2));
fs.writeFileSync(classesFile, JSON.stringify(classes, null, 2));
console.log('Successfully populated Actors and Classes for Eras 3-10.');
