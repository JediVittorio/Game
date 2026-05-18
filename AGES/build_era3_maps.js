const fs = require('fs');

const map15File = 'AGES/data/Map015.json';
let map15 = JSON.parse(fs.readFileSync(map15File, 'utf8'));

const width = map15.width;
const height = map15.height;

// Map 15: Municipal Building (Tileset 3 - Inside)
const FLOOR = 2816; // Basic floor
const WALL_TOP = 6656;
const WALL_MID = 6664;
const WALL_BOT = 6672;
const BLACK = 1536;

const data15 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === height - 1) {
          data15[idx] = BLACK;
        } else if (y === 0 || y === 1) {
          data15[idx] = BLACK;
        } else if (y === 2) {
          data15[idx] = WALL_TOP;
        } else if (y === 3) {
          data15[idx] = WALL_MID;
        } else if (y === 4) {
          data15[idx] = WALL_BOT;
        } else {
          data15[idx] = FLOOR;
        }
      }
    }
  }
}
map15.data = data15;

// Add The Zoning Dispute Event at [8, 6]
map15.events = [null];
map15.events.push({
  id: 1,
  name: "The Zoning Dispute",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "Actor1", direction: 2, pattern: 1, tileId: 0 }, // Represents Romza/Bureaucrat interaction
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Romza: Hearken unto me, foul denizens!"] },
      { code: 401, indent: 0, parameters: ["Thy occupation of this space is a direct violation of the Marquis's holy edict!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Enemy Lancer: We just want to attack you! But where is the tactical grid?"] },
      { code: 401, indent: 0, parameters: ["Why are we standing in a straight line?"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Romza: The municipal government hath refused our zoning permits for the Z-Axis and Y-Axis!"] },
      { code: 401, indent: 0, parameters: ["The simulation literally could not afford the geometry!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Bureaucrat: Form 8B for 3D spatial dimensions has a Charge Time of 500 ticks."] },
      { code: 401, indent: 0, parameters: ["Please take a number."] },
      { code: 301, indent: 0, parameters: [0, 61, false, false] }, // Boss battle: Enemy ID 61 (Zoning Bureaucrat) or 65 (Marquis)
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 6
});

fs.writeFileSync(map15File, JSON.stringify(map15, null, 2));
console.log('Successfully built Era 3 Map (Municipal Building).');
