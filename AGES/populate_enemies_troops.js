const fs = require('fs');

const eFile = 'AGES/data/Enemies.json';
const tFile = 'AGES/data/Troops.json';

const enemies = JSON.parse(fs.readFileSync(eFile, 'utf8'));
const troops = JSON.parse(fs.readFileSync(tFile, 'utf8'));

// Expand arrays
while (enemies.length <= 320) enemies.push(null);
while (troops.length <= 100) troops.push(null);

function addEnemy(id, name, hp, atk, def, battler) {
  enemies[id] = {
    id: id,
    actions: [{ conditionParam1: 0, conditionParam2: 0, conditionType: 0, rating: 5, skillId: 1 }],
    battlerHue: 0,
    battlerName: battler,
    dropItems: [null, null, null],
    exp: 50,
    gold: 50,
    name: name,
    note: "",
    params: [hp, 0, atk, def, 10, 10, 10, 10]
  };
}

function addBossTroop(id, name, enemyId, eventList) {
  troops[id] = {
    id: id,
    members: [{ enemyId: enemyId, x: 640, y: 400, hidden: false }],
    name: name,
    pages: [{
      conditions: { actorId: 1, actorHp: 50, actorValid: false, enemyHp: 50, enemyIndex: 0, enemyValid: true, switchId: 1, switchValid: false, turnA: 0, turnB: 0, turnEnding: false, turnValid: false },
      list: eventList,
      span: 1
    }]
  };
}

// Era 3: FFT (61-65)
addEnemy(61, "Zoning Bureaucrat", 200, 20, 15, "Actor1_1");
addEnemy(62, "Red Chocobo (HOA)", 300, 30, 20, "Monster");
addEnemy(65, "Marquis of Flatness", 1000, 40, 30, "Boss");
addBossTroop(3, "Era 3 Boss", 65, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Marquis: You cannot defeat me without the Z-Axis!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 4: FFX (91-95)
addEnemy(91, "Sin Spawn (Tax Exempt)", 400, 25, 20, "Slime");
addEnemy(95, "The Spread-Whale", 2500, 50, 40, "Boss");
addBossTroop(4, "Era 4 Boss", 95, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["The Whale audits your sports franchise!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 5: Paper Mario (121-125)
addEnemy(121, "Corrugated Demon", 50, 10, 5, "Monster");
addEnemy(125, "Art Critic", 500, 30, 10, "Boss");
addBossTroop(5, "Era 5 Boss", 125, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Art Critic: This performance lacks nuance!"] },
  { "code": 333, "indent": 0, "parameters": [0, 0, 8] }, // Apply existential crisis
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 6: XCOM 2 (151-155)
addEnemy(151, "ADVENT Middle Management", 80, 45, 10, "Actor1_1");
addEnemy(152, "Sectoid HR", 60, 20, 5, "Monster");
addEnemy(155, "The 1% Chance Avatar", 2000, 80, 50, "Boss");
addBossTroop(6, "Era 6 Boss", 155, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Avatar: You have a 99% chance to defeat me. So you will fail."] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 7: DOS2 (181-185)
addEnemy(181, "Voidwoken Janitor", 300, 30, 20, "Slime");
addEnemy(185, "Cursed Kettle Golem", 1500, 60, 40, "Boss");
addBossTroop(7, "Era 7 Boss", 185, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["The kettle boils over into Necrofire!"] },
  { "code": 331, "indent": 0, "parameters": [0, 0, 500] }, // Instant vaporize condition test
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 8: P5R (211-215)
addEnemy(211, "Shadow Hall Monitor", 400, 35, 25, "Monster");
addEnemy(215, "Non-Euclidean Examiner", 3000, 70, 50, "Boss");
addBossTroop(8, "Era 8 Boss", 215, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Examiner: Solve for X, where X is your imminent demise!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 9: BG3 (241-245)
addEnemy(241, "Mind Flayer Therapist", 200, 40, 20, "Actor1_1");
addEnemy(245, "The Polycule Hivemind", 2800, 60, 60, "Boss");
addBossTroop(9, "Era 9 Boss", 245, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Hivemind: Let us discuss our collective trauma!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 10: Clair Obscur (271-275)
addEnemy(271, "Gradient Eradicator", 500, 50, 40, "Slime");
addEnemy(275, "The Neon Paintress", 3500, 90, 70, "Boss");
addBossTroop(10, "Era 10 Boss", 275, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Paintress: Have some neon pink!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

// Era 11: The Finale (301-305)
addEnemy(305, "UDE Chairman", 9999, 150, 100, "Boss");
addBossTroop(11, "Era 11 Boss", 305, [
  { "code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""] },
  { "code": 401, "indent": 0, "parameters": ["Chairman: WE DEMAND A DENTAL PLAN!"] },
  { "code": 0, "indent": 0, "parameters": [] }
]);

fs.writeFileSync(eFile, JSON.stringify(enemies, null, 2));
fs.writeFileSync(tFile, JSON.stringify(troops, null, 2));
console.log('Successfully populated Enemies and Troops for Eras 3-11.');
