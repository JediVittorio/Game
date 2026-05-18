const fs = require('fs');

const map20File = 'AGES/data/Map020.json';
let map20 = JSON.parse(fs.readFileSync(map20File, 'utf8'));

const width = 17;
const height = 13;

// Map 20: Prison Colony (Tileset 4 - Dungeon)
const FLOOR = 2816; // Generic floor
const WALL = 6656; // Generic wall

const data20 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
          data20[idx] = WALL;
        } else {
          data20[idx] = FLOOR;
        }
      }
    }
  }
}
map20.data = data20;

// Events Map 20
map20.events = [null];

// Event 1: The Kettle Explosion
map20.events.push({
  id: 1,
  name: "The Kettle Explosion",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "Actor2", direction: 2, pattern: 1, tileId: 0 }, // Represents Blaze / Judgmental Knight
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Judgmental Knight: By the Divine, what is that contraption?"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Blaze: It's a kettle. I'm boiling water for tea."] },
      { code: 250, indent: 0, parameters: [{ name: "Fire1", pan: 0, pitch: 100, volume: 90 }] }, // Casts minor fire spell
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["(Water turns to Steam. Steam hits Knight's cursed armor.)"] },
      { code: 401, indent: 0, parameters: ["(Steam turns to Necrofire. Rat walks into Necrofire...)"] },
      { code: 401, indent: 0, parameters: ["(...Rat explodes into Poison. Continent is vaporized.)"] },
      { code: 250, indent: 0, parameters: [{ name: "Explosion2", pan: 0, pitch: 100, volume: 100 }] },
      { code: 223, indent: 0, parameters: [[255, 0, 0, 170], 60, true] }, // Screen flash red (Necrofire)
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Blaze: Well. That escalated."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Judgmental Knight: You have violated municipal fire codes!"] },
      { code: 401, indent: 0, parameters: ["I sentence you to death by... oh wait, we're all dead."] },
      { code: 301, indent: 0, parameters: [0, 185, false, false] }, // Boss battle: Cursed Kettle Golem (ID 185)
      { code: 223, indent: 0, parameters: [[0, 0, 0, 0], 60, true] }, // Reset screen flash
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 6
});

fs.writeFileSync(map20File, JSON.stringify(map20, null, 2));
console.log('Successfully built Era 7 Map (Prison Colony).');
