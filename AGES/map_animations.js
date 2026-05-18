const fs = require('fs');

const skillsFile = 'AGES/data/Skills.json';
let skills = JSON.parse(fs.readFileSync(skillsFile, 'utf8'));

// Animation ID Mapping Table
const animMap = {
  1: 1,    // Bash -> Hit Physical
  3: 97,   // PK Flash -> Light One 2
  5: 100,  // Arms Treaty Violation -> Neutral All 1
  6: 41,   // Lifeup -> Heal One 1
  51: 69,  // Fire Whirl -> Fire All 2
  52: 37,  // Farmer's Rage -> Shout
  101: 96, // File Form 8B -> Light One 1
  102: 6,  // Horizontal Smite -> Slash Physical
  151: 37, // Sonic Laugh -> Shout
  152: 111,// Hazard Pay Request -> Summon
  201: 39, // Laggy Jump -> Bodyslam
  202: 24, // Cardboard Hammer -> Hit Special 1
  251: 104,// Point Blank Miss -> Darkness One 1
  252: 2,  // Hunker in Void -> Hit Effect
  301: 3,  // Boil Tea -> Hit Fire
  302: 88, // Drop Cursed Armor -> Earth All 1
  351: 40, // Trigonometry Exam -> Flash
  352: 34, // Email Calling Card -> Stare
  401: 36, // Unsolicited Flirting -> Song
  402: 35, // Tragic Backstory Dump -> Fog
  451: 5,  // 1-Frame Strike -> Hit Thunder
  452: 2,  // Dodge Roll into Trash -> Hit Effect
  501: 102 // Reload Save File -> Neutral One 2
};

Object.keys(animMap).forEach(skillId => {
  if (skills[skillId]) {
    skills[skillId].animationId = animMap[skillId];
  }
});

fs.writeFileSync(skillsFile, JSON.stringify(skills, null, 2));
console.log('Successfully mapped all Satirical Skill Animations.');
