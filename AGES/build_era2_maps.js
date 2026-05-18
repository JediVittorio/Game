const fs = require('fs');

const map11File = 'AGES/data/Map011.json';
const map12File = 'AGES/data/Map012.json';
const map13File = 'AGES/data/Map013.json';

let map11 = JSON.parse(fs.readFileSync(map11File, 'utf8'));
let map12 = JSON.parse(fs.readFileSync(map12File, 'utf8'));
let map13 = JSON.parse(fs.readFileSync(map13File, 'utf8'));

const width = 17;
const height = 13;

// Map 11: Prehistoric (Tileset 2 - Outside)
// Just making a generic overgrown area
const GRASS_11 = 2816;
const data11 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) data11[i] = GRASS_11;
map11.data = data11;

// Map 12: Utopia (Tileset 5 - SF Outside)
const METAL_12 = 2816; // Using standard floor approximation
const data12 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) data12[i] = METAL_12;
map12.data = data12;

// Map 13: Ruined Future (Tileset 5 - SF Outside)
const RUIN_13 = 2864; // Using a different tile approximation
const data13 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) data13[i] = RUIN_13;
map13.data = data13;

// --- TIME PORTAL GIMMICK (Identical Coordinates at 15, 6) ---
const portalEvent = (targetMapId) => ({
  conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
  directionFix: false, image: { characterIndex: 0, characterName: "!Flame", direction: 2, pattern: 0, tileId: 0 },
  list: [
    { code: 250, indent: 0, parameters: [{ name: "Teleport", pan: 0, pitch: 100, volume: 90 }] },
    { code: 201, indent: 0, parameters: [0, targetMapId, 15, 6, 0, 0] },
    { code: 0, indent: 0, parameters: [] }
  ],
  moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
  moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: true, through: false, trigger: 1, walkAnime: true
});

map11.events = [null, { id: 1, name: "Time Portal (To 2300 AD)", note: "", pages: [portalEvent(12)], x: 15, y: 6 }];
map12.events = [null, { id: 1, name: "Time Portal (To 65M BC)", note: "", pages: [portalEvent(11)], x: 15, y: 6 }];
// Map 13 portal goes to Map 12, or nowhere? Let's say Map 12.
map13.events = [null, { id: 1, name: "Time Portal (To Utopia)", note: "", pages: [portalEvent(12)], x: 15, y: 6 }];

// --- ERA 2 UNIQUE EVENTS ---

// Map 11: The Arthropod Incident at [5, 5]
map11.events.push({
  id: 2, name: "Prehistoric Insect", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Nature", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["(Squish.)"] },
      { code: 401, indent: 0, parameters: ["Ruca: Krono, you just squished a Megaloprehistoric Blattodea!"] },
      { code: 122, indent: 0, parameters: [1, 1, 0, 0, 2] }, // Turn on a self-switch or variable to alter history. For simplicity, just erase event.
      { code: 214, indent: 0, parameters: [] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 5, y: 5
});

// Map 12: Tomato Citizen at [5, 5] (Replacing the bug in the future)
map12.events.push({
  id: 2, name: "Tomato Citizen", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "Monster", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Greetings, fleshy mammals!"] },
      { code: 401, indent: 0, parameters: ["We are a post-scarcity agricultural society."] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 1, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 5, y: 5
});

// Map 13: Disgruntled Farmer Boss at [8, 6]
map13.events.push({
  id: 2, name: "Disgruntled Farmer", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "People2", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Get out of my premium fertilizer reserves!"] },
      { code: 301, indent: 0, parameters: [0, 34, false, false] }, // Boss battle: Enemy ID 34
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 6
});

fs.writeFileSync(map11File, JSON.stringify(map11, null, 2));
fs.writeFileSync(map12File, JSON.stringify(map12, null, 2));
fs.writeFileSync(map13File, JSON.stringify(map13, null, 2));
console.log('Successfully built Era 2 maps with identical coordinate time portals.');
