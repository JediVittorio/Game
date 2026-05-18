const fs = require('fs');

const map23File = 'AGES/data/Map023.json';
const map24File = 'AGES/data/Map024.json';

let map23 = JSON.parse(fs.readFileSync(map23File, 'utf8'));
let map24 = JSON.parse(fs.readFileSync(map24File, 'utf8'));

const width = 17;
const height = 13;

// Map 24: Polycule Campsite (Tileset 2 - Outside)
const GRASS = 2816;
const data24 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) data24[idx] = GRASS;
    }
  }
}
map24.data = data24;

// Events Map 24: Polycule Camp
map24.events = [null];
map24.events.push({
  id: 1, name: "Darkheart", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 1, characterName: "Actor2", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Darkheart: I have a dark, tragic backstory. But I won't tell"] },
      { code: 401, indent: 0, parameters: ["you unless you fetch me an orchid, pet the dog thrice, and"] },
      { code: 401, indent: 0, parameters: ["agree to burn down an orphanage."] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 1, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 5, y: 5
});

map24.events.push({
  id: 2, name: "Marriage Check (Goblin)", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Monster", direction: 2, pattern: 1, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Goblin: Me sell shiny rocks!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Protagonist: [Persuasion Check] 'I'll give you 5 gold for them.'"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["(d20 Rolls: Natural 1)"] },
      { code: 122, indent: 0, parameters: [30, 30, 0, 0, 1] }, // Variable 30 (d20 Roll) = 1
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["System: Critical Failure!"] },
      { code: 313, indent: 0, parameters: [0, 0, 0, 91] }, // Add 'Legally Married' State (ID 91)
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Goblin: You propose marriage?! I accept! We share bank accounts now!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Oathbreaker: The dice have spoken. Congratulations on your nuptials."] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 10, y: 7
});

// Transfer to Arena
map24.events.push({
  id: 3, name: "To Arena", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 201, indent: 0, parameters: [0, 23, 8, 11, 8, 0] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }], x: 8, y: 12
});

// Map 23: Brain-God Arena (Tileset 5 - SF Outside)
const METAL = 2816;
const data23 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) data23[i] = METAL;
map23.data = data23;

// Events Map 23
map23.events = [null];
map23.events.push({
  id: 1, name: "The Polycule Hivemind", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Monster", direction: 2, pattern: 1, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Hivemind: Let us discuss our collective trauma!"] },
      { code: 301, indent: 0, parameters: [0, 245, false, false] }, // Boss battle: Enemy ID 245
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 5
});

fs.writeFileSync(map23File, JSON.stringify(map23, null, 2));
fs.writeFileSync(map24File, JSON.stringify(map24, null, 2));
console.log('Successfully built Era 9 Maps (Campsite and Arena).');
