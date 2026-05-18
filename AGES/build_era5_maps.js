const fs = require('fs');

const map18File = 'AGES/data/Map018.json';
let map18 = JSON.parse(fs.readFileSync(map18File, 'utf8'));

const width = 17;
const height = 13;

// Map 18: Theater Stage (Tileset 3 - Inside)
const FLOOR_STAGE = 2816; // Wooden stage floor
const WALL_STAGE = 6656; // Backdrop
const FLOOR_AUDIENCE = 1536; // Black or dark area for audience

const data18 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (y < 3) {
          data18[idx] = WALL_STAGE; // Backdrop
        } else if (y < 9) {
          data18[idx] = FLOOR_STAGE; // Stage area
        } else {
          data18[idx] = FLOOR_AUDIENCE; // Audience area
        }
      }
    }
  }
}
map18.data = data18;

// Events Map 18
map18.events = [null];

// Event 1: The Disconnected Controller
map18.events.push({
  id: 1,
  name: "The Disconnected Controller",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "Actor2", direction: 2, pattern: 1, tileId: 0 }, // Represents Shell-don
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maurice: (Jumps silently, trying to initiate an Action Command)"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Shell-don: Oh no! Maurice, your \"Action Command\" module got corrupted in the Millennium Portal!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["System Message: Your controller has been disconnected by the simulation. Please watch helplessly as standard turn-based math applies."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maurice: (Flails helplessly as a basic attack connects for minimum damage)."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Demon: Wait... are we made of corrugated cardboard? The humidity in here is 80%. I'm going to warp! I refuse to fight!"] },
      { code: 301, indent: 0, parameters: [0, 121, false, false] }, // Boss battle: Corrugated Demon (ID 121)
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 5
});

// Event 2: The Audience Riot
map18.events.push({
  id: 2,
  name: "Audience Member",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "People1", direction: 8, pattern: 1, tileId: 0 }, // Facing up at the stage
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Audience Member 1: Boo! We paid 60 coins to see interactive QTEs, not standard math!"] },
      { code: 401, indent: 0, parameters: ["Audience Member 2: Throw the flaming anvils!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maurice: (Frantically folds himself into a paper swan in panic)"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Shell-don: Maurice! The boss isn't the threat anymore! It's the art critics! Brace for impact!"] },
      { code: 301, indent: 0, parameters: [0, 125, false, false] }, // Boss battle: Art Critic (ID 125)
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 8, y: 10
});

fs.writeFileSync(map18File, JSON.stringify(map18, null, 2));
console.log('Successfully built Era 5 Map (Theater Stage).');
