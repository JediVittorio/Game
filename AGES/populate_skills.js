const fs = require('fs');

const skillsFile = 'AGES/data/Skills.json';
const classesFile = 'AGES/data/Classes.json';

const skills = JSON.parse(fs.readFileSync(skillsFile, 'utf8'));
const classes = JSON.parse(fs.readFileSync(classesFile, 'utf8'));

// Expand array to cover up to ID 520
while (skills.length <= 520) skills.push(null);

function addSkill(id, name, desc, formula, icon, damageType, stypeId = 1) {
  skills[id] = {
    id: id,
    animationId: -1,
    damage: { critical: true, elementId: 0, formula: formula, type: damageType, variance: 20 },
    description: desc,
    effects: [],
    hitType: 1,
    iconIndex: icon,
    message1: " uses " + name + "!",
    message2: "",
    mpCost: 5,
    name: name,
    note: "",
    occasion: 1,
    repeats: 1,
    requiredWtypeId1: 0,
    requiredWtypeId2: 0,
    scope: 1,
    speed: 0,
    stypeId: stypeId,
    successRate: 100,
    tpCost: 0,
    tpGain: 10,
    messageType: 1
  };
}

// Era 3: Last Fantasy
addSkill(101, "File Form 8B", "Cast time: 500 ticks. Deals 1D holy bureaucratic damage.", "a.mat * 3", 79, 1);
addSkill(102, "Horizontal Smite", "Attacks strictly on the X-axis due to zoning laws.", "a.atk * 2", 76, 1);
classes[21].learnings.push({ level: 1, note: "", skillId: 101 }); // Romza
classes[21].learnings.push({ level: 1, note: "", skillId: 102 });

// Era 4: Ultimate Illusion X
addSkill(151, "Sonic Laugh", "A-HA-HA-HA! Deals damage and Deafens everyone.", "a.atk * 1.5", 70, 1);
addSkill(152, "Hazard Pay Request", "Summons a beast, provided you paid their union dues.", "a.mat * 4", 75, 1);
classes[31].learnings.push({ level: 1, note: "", skillId: 151 }); // Tadpole
classes[32].learnings.push({ level: 1, note: "", skillId: 152 }); // Luna

// Era 5: Origami Maurice
addSkill(201, "Laggy Jump", "Action Command disconnected. Basic math applies.", "a.atk * 1.5", 82, 1);
addSkill(202, "Cardboard Hammer", "A 2D hammer. Vulnerable to high humidity.", "a.atk * 2", 81, 1);
classes[41].learnings.push({ level: 1, note: "", skillId: 201 }); // Maurice
classes[41].learnings.push({ level: 1, note: "", skillId: 202 });

// Era 6: Extraterrestrial-COM 2
addSkill(251, "Point Blank Miss", "99% hit chance. Will definitely miss and break the game.", "0", 110, 0); // No damage
addSkill(252, "Hunker in Void", "Takes cover behind the concept of nothingness.", "0", 81, 0); 
classes[51].learnings.push({ level: 1, note: "", skillId: 251 }); // Commander Rick
classes[52].learnings.push({ level: 1, note: "", skillId: 252 }); // Vera

// Era 7: Deity 2
addSkill(301, "Boil Tea", "Creates steam. Do not mix with cursed armor.", "a.mat * 2", 100, 1);
addSkill(302, "Drop Cursed Armor", "Causes a localized nuclear reaction if steam is present.", "a.atk * 3", 101, 1);
classes[61].learnings.push({ level: 1, note: "", skillId: 302 }); // Judgmental Knight
classes[62].learnings.push({ level: 1, note: "", skillId: 301 }); // Blaze

// Era 8: Mask 5
addSkill(351, "Trigonometry Exam", "Solve for X to deal damage. Good luck.", "a.mat * 3", 120, 1);
addSkill(352, "Email Calling Card", "A very formal, legally binding threat.", "0", 121, 0);
classes[71].learnings.push({ level: 1, note: "", skillId: 351 }); // The Trickster
classes[72].learnings.push({ level: 1, note: "", skillId: 352 }); // Suji

// Era 9: Boulder's Portal 3
addSkill(401, "Unsolicited Flirting", "Roll a d20. On a 1, you get married to the enemy.", "0", 130, 0);
addSkill(402, "Tragic Backstory Dump", "Wastes a full action to complain about your past.", "0", 131, 0);
classes[81].learnings.push({ level: 1, note: "", skillId: 401 }); // The Oathbreaker
classes[82].learnings.push({ level: 1, note: "", skillId: 402 }); // Darkheart

// Era 10: Chiaroscuro
addSkill(451, "1-Frame Strike", "Animation is glitched to 1/60th of a second.", "a.atk * 4", 140, 1);
addSkill(452, "Dodge Roll into Trash", "Evades an attack but ruins the emotional climax.", "0", 141, 0);
classes[91].learnings.push({ level: 1, note: "", skillId: 452 }); // The Captain
classes[92].learnings.push({ level: 1, note: "", skillId: 451 }); // Maelle

// Era 11: The Finale
addSkill(501, "Reload Save File", "Reloads the turn to force the math to bend to your will.", "9999", 191, 1);

fs.writeFileSync(skillsFile, JSON.stringify(skills, null, 2));
fs.writeFileSync(classesFile, JSON.stringify(classes, null, 2));
console.log('Successfully populated Skills and mapped them to Classes for Eras 3-11.');
