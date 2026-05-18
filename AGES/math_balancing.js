const fs = require('fs');

const skillsFile = 'AGES/data/Skills.json';
const enemiesFile = 'AGES/data/Enemies.json';
const systemFile = 'AGES/data/System.json';

let skills = JSON.parse(fs.readFileSync(skillsFile, 'utf8'));
let enemies = JSON.parse(fs.readFileSync(enemiesFile, 'utf8'));
let system = JSON.parse(fs.readFileSync(systemFile, 'utf8'));

// --- ERA 1: ODOMETER & BASH BALANCING ---
// Tuning the Bash formula to be tense (variance and base power)
if (skills[1]) {
  skills[1].damage.formula = "(a.atk * 2.5) - b.def + (Math.random() * 2 - 1) * Math.round(((a.atk * 2.5) - b.def) * 0.20)";
  skills[1].damage.variance = 0; // Handled by custom formula
}

// --- ERA 7: NECROFIRE CHAIN REACTION ---
// Making Necrofire (Skill 302 or similar) deal enough damage to "wipe" as intended
// We'll create/tune a specific 'Necrofire Explosion' enemy skill
if (skills[302]) {
    skills[302].damage.formula = "b.mhp * 5.0"; // 500% Max HP damage for the "Vaporize" effect
    skills[302].description = "SATIRE: Systemic code collapse via tea kettle. Deals 500% Max HP damage.";
}

// --- ERA 6: THE 99% MISS CHANCE ---
// Ensuring the 99% miss feels authentic (Skill 251)
if (skills[251]) {
    skills[251].successRate = 1; // 1% success rate = 99% miss
    skills[251].message1 = " takes a 99% point-blank shot!";
    skills[251].message2 = "SYSTEM ERROR: Mathematics is a conspiracy! (Missed!)";
}

// --- ERA 9: d20 DC BALANCING ---
// We'll set the 'Marriage Check' DC in the event later, but we ensure stats are low enough 
// that a 'Natural 1' is always a disaster.
if (enemies[241]) { // Mind Flayer Therapist
    enemies[241].params[3] = 1; // Zero Defense so flirting is always the only path
}

// --- ERA 11: BOSS RUSH SCALING ---
// Setting the UDE Chairman to be mathematically impossible without save-scumming
if (enemies[305]) {
    enemies[305].params[0] = 999999; // 1 Million HP
    enemies[305].params[2] = 500;    // Massive Attack
}

fs.writeFileSync(skillsFile, JSON.stringify(skills, null, 2));
fs.writeFileSync(enemiesFile, JSON.stringify(enemies, null, 2));
console.log('Successfully applied Mathematical Balancing pass game-wide.');
