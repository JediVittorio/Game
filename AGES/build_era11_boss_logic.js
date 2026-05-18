const fs = require('fs');
const troopsFile = 'AGES/data/Troops.json';
let troops = JSON.parse(fs.readFileSync(troopsFile, 'utf8'));

// Troop 11 is the Era 11 Boss
let troop11 = troops[11];

// We add a new battle event page to simulate the Boss Logic
troop11.pages.push({
  conditions: {
    actorId: 1, actorHp: 50, actorValid: false,
    enemyHp: 50, enemyIndex: 0, enemyValid: false,
    switchId: 1, switchValid: false,
    turnA: 2, turnB: 0, turnEnding: false, turnValid: true // Triggers on Turn 2
  },
  list: [
    { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
    { code: 401, indent: 0, parameters: ["UDE Chairman: Stop! Stop reloading your save file!"] },
    { code: 401, indent: 0, parameters: ["You missed a 99% shot, just accept it!"] },
    { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
    { code: 401, indent: 0, parameters: ["Commander Rick: Never. I will reload this turn 400 times"] },
    { code: 401, indent: 0, parameters: ["until the math bends to my will."] },
    { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
    { code: 401, indent: 0, parameters: ["UDE Chairman: We surrender out of sheer, unadulterated"] },
    { code: 401, indent: 0, parameters: ["boredom. We will sign the treaty. We will return to our"] },
    { code: 401, indent: 0, parameters: ["save files. Just... promise you'll skip our second phases"] },
    { code: 401, indent: 0, parameters: ["from now on."] },
    { code: 126, indent: 0, parameters: [402, 0, 0, 1] }, // Gain Item 402: Digital Treaty
    { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
    { code: 401, indent: 0, parameters: ["You obtained the Digital Treaty!"] },
    { code: 333, indent: 0, parameters: [0, 0, 111] }, // Add 'Apathy' State to Enemy (ID 111)
    { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
    { code: 401, indent: 0, parameters: ["System: AGES CORE STABILIZED. EJECTING USER."] },
    { code: 353, indent: 0, parameters: [] }, // Abort Battle
    { code: 0, indent: 0, parameters: [] }
  ],
  span: 0 // Battle
});

fs.writeFileSync(troopsFile, JSON.stringify(troops, null, 2));
console.log('Successfully added Era 11 Boss Logic to Troops.json.');
