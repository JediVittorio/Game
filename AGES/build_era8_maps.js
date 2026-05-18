const fs = require('fs');

const map21File = 'AGES/data/Map021.json';
const map22File = 'AGES/data/Map022.json';

let map21 = JSON.parse(fs.readFileSync(map21File, 'utf8'));
let map22 = JSON.parse(fs.readFileSync(map22File, 'utf8'));

const width = 17;
const height = 13;

// Map 21: Beef Bowl Restaurant (Tileset 3 - Inside)
const FLOOR = 2816;
const WALL = 6656;
const data21 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) data21[idx] = WALL;
        else data21[idx] = FLOOR;
      }
    }
  }
}
map21.data = data21;

// Events Map 21
map21.events = [null];
map21.events.push({
  id: 1, name: "Beef Bowl Counter", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "!Chest", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Eat a Beef Bowl for 80 hours?"] },
      { code: 102, indent: 0, parameters: [["Eat", "Skip"], 1, 0, 2, 0] },
      { code: 402, indent: 0, parameters: [0, "Eat"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["You spend 80 hours eating beef bowls to level up your Guts!"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Suji: Bro! We forgot to study for midterms!"] },
      { code: 0, indent: 1, parameters: [] },
      { code: 402, indent: 0, parameters: [1, "Skip"] },
      { code: 0, indent: 1, parameters: [] },
      { code: 404, indent: 0, parameters: [] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 6
});

// Transfer to Map 22
map21.events.push({
  id: 2, name: "To Exam Palace", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: false, image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
    list: [
      { code: 201, indent: 0, parameters: [0, 22, 8, 11, 8, 0] },
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 0, stepAnime: false, through: false, trigger: 1, walkAnime: true
  }], x: 8, y: 12
});

// Map 22: Geometry Exam Palace (Tileset 5 - SF Outside)
const METAL = 2816; // Using standard floor approximation
const data22 = new Array(width * height * 6).fill(0);
for (let i = 0; i < width * height; i++) data22[i] = METAL;
map22.data = data22;

// Events Map 22
map22.events = [null];
map22.events.push({
  id: 1, name: "The Geometry Exam", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Monster", direction: 2, pattern: 1, tileId: 0 },
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["The Trickster: (Adjusts glasses stylishly)"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Teacher Shadow: Welcome to the Cognitive Palace of Academic Failure!"] },
      { code: 401, indent: 0, parameters: ["Your Calling Card was just an email begging for an extension!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Suji: Hit him with Agi!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Teacher Shadow: Incorrect! Elemental magic is disabled!"] },
      { code: 401, indent: 0, parameters: ["Solve for the hypotenuse of a triangle where a=3 and b=4!"] },
      { code: 102, indent: 0, parameters: [["5", "7", "Summon Persona"], 1, 0, 2, 0] },
      { code: 402, indent: 0, parameters: [0, "5"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Teacher Shadow: Calculations optimal! (Takes 500 damage)"] },
      { code: 122, indent: 1, parameters: [60, 60, 0, 0, 5] }, // Set Variable 60 (Math Exam Answer) to 5
      { code: 0, indent: 1, parameters: [] },
      { code: 402, indent: 0, parameters: [1, "7"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["Teacher Shadow: You forgot to carry the one!"] },
      { code: 401, indent: 1, parameters: ["(Party takes 500 Embarrassment damage)"] },
      { code: 311, indent: 1, parameters: [0, 0, 0, 0, 500, false] },
      { code: 0, indent: 1, parameters: [] },
      { code: 402, indent: 0, parameters: [2, "Summon Persona"] },
      { code: 101, indent: 1, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 1, parameters: ["(Persona holds up a calculator. Fails.)"] },
      { code: 0, indent: 1, parameters: [] },
      { code: 404, indent: 0, parameters: [] },
      { code: 301, indent: 0, parameters: [0, 215, false, false] }, // Boss battle: Enemy ID 215 (Non-Euclidean Examiner)
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 5
});

fs.writeFileSync(map21File, JSON.stringify(map21, null, 2));
fs.writeFileSync(map22File, JSON.stringify(map22, null, 2));
console.log('Successfully built Era 8 Maps (Beef Bowl and Exam Palace).');
