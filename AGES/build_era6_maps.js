const fs = require('fs');

const map19File = 'AGES/data/Map019.json';
let map19 = JSON.parse(fs.readFileSync(map19File, 'utf8'));

const width = 17;
const height = 13;
const BLACK = 1536; // Void tile

const data19 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) {
  data19[i] = BLACK;
}
map19.data = data19;

// Events Map 19
map19.events = [null];

// Event 1: The 99% Miss and the Void
map19.events.push({
  id: 1,
  name: "The 99% Miss",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "Actor1", direction: 2, pattern: 1, tileId: 0 }, // Represents Rick/Rookie
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Commander Rick: Alien spotted. Point blank range."] },
      { code: 401, indent: 0, parameters: ["99% hit chance. Take the shot, Rookie."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Rookie: (Fires plasma rifle into the ceiling)"] },
      { code: 401, indent: 0, parameters: ["I missed... and the 99% miss chance broke the game's memory!"] },
      { code: 401, indent: 0, parameters: ["The tactical cover system failed to load!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["System Message: WARNING: Tactical Grid not found."] },
      { code: 401, indent: 0, parameters: ["Rendering Empty Void."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Vera: We're standing in an empty void! There is no cover!"] },
      { code: 401, indent: 0, parameters: ["I'm just pretending this invisible box is a half-wall!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Rick: Just hunker down behind the concept of nothingness!"] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 6, y: 6
});

// Event 2: Group Therapy
map19.events.push({
  id: 2,
  name: "Group Therapy",
  note: "",
  pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true,
    image: { characterIndex: 0, characterName: "People2", direction: 2, pattern: 1, tileId: 0 }, 
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Rick: Okay, team. We need to talk about our feelings"] },
      { code: 401, indent: 0, parameters: ["regarding probability."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Rookie: Why does a 1% chance to miss feel like a 100%"] },
      { code: 401, indent: 0, parameters: ["certainty of failure? Are we just pawns to a cruel RNG god?"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Alien: This is incredibly uncomfortable. We're just going to"] },
      { code: 401, indent: 0, parameters: ["invade a different planet. You guys clearly have stuff to work through."] },
      { code: 102, indent: 0, parameters: [["Gaslight Troops", "Validate Feelings"], 1, 0, 2, 0] },
      { code: 402, indent: 0, parameters: [0, "Gaslight Troops"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Rick: Math is real! Pull the trigger!"] },
      { code: 313, indent: 1, parameters: [0, 0, 0, 61] }, // Remove state 61 (Panicked)
      { code: 0, indent: 1, parameters: [] },
      { code: 402, indent: 0, parameters: [1, "Validate Feelings"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Rick: You're right, the game is rigged."] },
      { code: 121, indent: 1, parameters: [60, 60, 0] }, // Mission Failure Trigger (Switch 60 = ON)
      { code: 0, indent: 1, parameters: [] },
      { code: 404, indent: 0, parameters: [] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }],
  x: 10, y: 6
});

fs.writeFileSync(map19File, JSON.stringify(map19, null, 2));
console.log('Successfully built Era 6 Map (Empty Void).');