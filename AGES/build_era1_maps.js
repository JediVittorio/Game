const fs = require('fs');

const map2File = 'AGES/data/Map002.json';
const map14File = 'AGES/data/Map014.json';

let map2 = JSON.parse(fs.readFileSync(map2File, 'utf8'));
let map14 = JSON.parse(fs.readFileSync(map14File, 'utf8'));

// Build Map 2: Suburban Neighborhood (Tileset 2 - Outside)
const GRASS = 2816;
const PATH = 2864; // Approximation for dirt/road
const width = map2.width;
const height = map2.height;

const data2 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (y >= 5 && y <= 7) {
          data2[idx] = PATH; // Road through the middle
        } else {
          data2[idx] = GRASS;
        }
      }
    }
  }
}
map2.data = data2;

// Add Transfer Event to Arcade
map2.events.push({
  id: map2.events.length,
  name: "To Arcade",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false,
    image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 250, indent: 0, parameters: [{ name: "Move1", pan: 0, pitch: 100, volume: 90 }] },
      { code: 201, indent: 0, parameters: [0, 14, 8, 11, 8, 0] }, // Transfer to Map 14 (8, 11) facing Up
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }],
  x: 15, y: 6
});

// Build Map 14: Arcade (Tileset 3 - Inside)
const FLOOR = 2816;
const WALL_TOP = 6656;
const WALL_MID = 6664;
const WALL_BOT = 6672;
const BLACK = 1536;

const data14 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === height - 1) {
          data14[idx] = BLACK;
        } else if (y === 0 || y === 1) {
          data14[idx] = BLACK;
        } else if (y === 2) {
          data14[idx] = WALL_TOP;
        } else if (y === 3) {
          data14[idx] = WALL_MID;
        } else if (y === 4) {
          data14[idx] = WALL_BOT;
        } else {
          data14[idx] = FLOOR;
        }
      }
    }
  }
}
map14.data = data14;

// Add Transfer Event back to Neighborhood
map14.events = [null]; // Clear empty array
map14.events.push({
  id: 1,
  name: "To Neighborhood",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false,
    image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 250, indent: 0, parameters: [{ name: "Move1", pan: 0, pitch: 100, volume: 90 }] },
      { code: 201, indent: 0, parameters: [0, 2, 14, 6, 4, 0] }, // Transfer to Map 2 (14, 6) facing Left
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }],
  x: 8, y: 12
});

// Decorate the Arcade with arcade cabinets (Tile approximations)
// For simplicity, we just add an NPC event
map14.events.push({
  id: 2,
  name: "Arcade Machine",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "!Chest", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["The screen flashes: INSERT QUARTER."] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 4, y: 5
});

fs.writeFileSync(map2File, JSON.stringify(map2, null, 2));
fs.writeFileSync(map14File, JSON.stringify(map14, null, 2));
console.log('Successfully built Era 1 maps (Neighborhood and Arcade).');