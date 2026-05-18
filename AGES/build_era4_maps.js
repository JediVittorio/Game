const fs = require('fs');

const map16File = 'AGES/data/Map016.json';
const map17File = 'AGES/data/Map017.json';

let map16 = JSON.parse(fs.readFileSync(map16File, 'utf8'));
let map17 = JSON.parse(fs.readFileSync(map17File, 'utf8'));

const width = 17;
const height = 13;

// Map 16: Archipelago (Tileset 2 - Outside)
const WATER = 2816; // Using generic tile
const LAND = 2864; 
const data16 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        data16[idx] = (x > 4 && x < 12 && y > 3 && y < 9) ? LAND : WATER;
      }
    }
  }
}
map16.data = data16;

// Map 17: Underwater Sphere (Tileset 3 - Inside)
const FLOOR = 2816;
const WALL = 6656;
const data17 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
          data17[idx] = WALL;
        } else {
          data17[idx] = FLOOR;
        }
      }
    }
  }
}
map17.data = data17;

// Events Map 16
map16.events = [null];
map16.events.push({
  id: 1,
  name: "The Forced Laugh",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "Actor2", direction: 2, pattern: 1, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Luna: The spirits of the water weep for our journey, Tadpole."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Tadpole: You know what we do when we're sad? WE LAUGH! A-HA-HA-HA-HA!"] },
      { code: 250, indent: 0, parameters: [{ name: "Explosion2", pan: 0, pitch: 100, volume: 100 }] },
      { code: 311, indent: 0, parameters: [0, 0, 0, 0, 500, false] }, // Lose 500 HP
      { code: 313, indent: 0, parameters: [0, 0, 0, 41] }, // Add Deafened state (ID 41)
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Luna: (Ears bleeding) The spirits... they are filing a noise complaint..."] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 6
});

// Transfer to Sphere
map16.events.push({
  id: 2, name: "To Sphere", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 201, indent: 0, parameters: [0, 17, 8, 11, 8, 0] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }], x: 10, y: 6
});

// Events Map 17
map17.events = [null];
map17.events.push({
  id: 1,
  name: "Union Rep Negotiation",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "People1", direction: 2, pattern: 1, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Union Rep: The Final Summon will not be appearing today. We are striking."] },
      { code: 401, indent: 0, parameters: ["Fighting a gargantuan whale violates OSHA regulations."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Tadpole: But my father's trauma! The pilgrimage!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Union Rep: Read the spreadsheet, kid. Manage our underwater sports"] },
      { code: 401, indent: 0, parameters: ["franchise to a multi-million Gil profit margin, or the pilgrimage is canceled."] },
      { code: 102, indent: 0, parameters: [["Offer 10,000G", "Manage Sports Team"], 1, 0, 2, 0] },
      { code: 402, indent: 0, parameters: [0, "Offer 10,000G"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Rep: Insulting. We strike."] },
      { code: 0, indent: 1, parameters: [] },
      { code: 402, indent: 0, parameters: [1, "Manage Sports Team"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["(Initiating 20-minute unskippable spreadsheet minigame...)"] },
      { code: 122, indent: 1, parameters: [20, 21, 0, 1, 1000000] }, // Set vars 20-21 to 1M
      { code: 0, indent: 1, parameters: [] },
      { code: 404, indent: 0, parameters: [] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 5
});

map17.events.push({
  id: 2, name: "To Archipelago", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 201, indent: 0, parameters: [0, 16, 10, 7, 8, 0] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }], x: 8, y: 11
});


fs.writeFileSync(map16File, JSON.stringify(map16, null, 2));
fs.writeFileSync(map17File, JSON.stringify(map17, null, 2));
console.log('Successfully built Era 4 Maps (Archipelago and Sphere).');
