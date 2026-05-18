const fs = require('fs');

const map26File = 'AGES/data/Map026.json';
let map26 = JSON.parse(fs.readFileSync(map26File, 'utf8'));

const width = 17;
const height = 13;

// Map 26: Era 11 - Tavern Boss Rush (Tileset 3 - Inside)
// Duplicate the Lobby layout for the combat instance
const FLOOR = 2816; 
const WALL_TOP = 6656; 
const WALL_MID = 6664;
const WALL_BOT = 6672;
const BLACK = 1536; 

const data26 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === height - 1) {
          data26[idx] = BLACK;
        } else if (y === 0 || y === 1) {
          data26[idx] = BLACK;
        } else if (y === 2) {
          data26[idx] = WALL_TOP;
        } else if (y === 3) {
          data26[idx] = WALL_MID;
        } else if (y === 4) {
          data26[idx] = WALL_BOT;
        } else {
          data26[idx] = FLOOR;
        }
      }
    }
  }
}
map26.data = data26;

// Events Map 26
map26.events = [null];
map26.events.push({
  id: 1, name: "The UDE Strike", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Boss", direction: 2, pattern: 1, tileId: 0 }, // UDE Chairman
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["UDE Chairman: WE DEMAND A DENTAL PLAN!"] },
      { code: 401, indent: 0, parameters: ["And honestly... grid-based strategy maps take way too long."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Less: Wait, where is the epic, geographically illogical macro-map?"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["UDE Chairman: We skipped it. To expedite our strike, we just"] },
      { code: 401, indent: 0, parameters: ["lined up here in the Lobby of Ages. We're doing a boss-rush"] },
      { code: 401, indent: 0, parameters: ["gauntlet right next to the bar."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Romza: But my tactical positioning!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["System Message: INITIATING RAPID COMBAT SHIFT:"] },
      { code: 401, indent: 0, parameters: ["FRONT-VIEW -> SIDE-VIEW -> TIME PROGRESS BATTLE."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Tadpole: A-HA-HA-HA-HA! The code is breaking!"] },
      { code: 301, indent: 0, parameters: [0, 305, false, false] }, // Boss battle: Enemy ID 305 (UDE Chairman)
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 5
});

fs.writeFileSync(map26File, JSON.stringify(map26, null, 2));
console.log('Successfully built Era 11 Map (Tavern Boss Rush).');
