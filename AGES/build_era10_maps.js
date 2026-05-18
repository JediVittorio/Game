const fs = require('fs');

const map25File = 'AGES/data/Map025.json';
let map25 = JSON.parse(fs.readFileSync(map25File, 'utf8'));

const width = 17;
const height = 13;

// Map 25: Melancholic Monolith (Tileset 5 - SF Outside)
const GRAY_FLOOR = 2864; // Approximation for bleak terrain
const data25 = new Array(width * height * 6).fill(0);
for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) data25[idx] = GRAY_FLOOR;
    }
  }
}
map25.data = data25;

// Events Map 25
map25.events = [null];
map25.events.push({
  id: 1, name: "The Neon Pink Monolith", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Actor3", direction: 2, pattern: 1, tileId: 0 }, // Paintress
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["The Captain: We have marched across the Forgotten Battlefield."] },
      { code: 401, indent: 0, parameters: ["We have lost half our expedition. The Gommage approaches."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Paintress: I ran out of dramatic gray. I hope neon pink is"] },
      { code: 401, indent: 0, parameters: ["okay for the apocalypse!"] },
      { code: 401, indent: 0, parameters: ["(Paints a giant smiley face on the monolith)."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maelle: This completely ruins the melancholic atmosphere!"] },
      { code: 401, indent: 0, parameters: ["I can't die tragically next to a neon smiley face!"] },
      { code: 313, indent: 0, parameters: [0, 0, 0, 102] }, // Add 'Neon Pink Stain' State
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 8, y: 5
});

map25.events.push({
  id: 2, name: "The Impossible Parry", note: "", pages: [{
    conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
    directionFix: true, image: { characterIndex: 0, characterName: "Actor2", direction: 2, pattern: 1, tileId: 0 }, // Maelle
    list: [
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maelle: Captain... my numbers are fading. I'm turning to dust."] },
      { code: 401, indent: 0, parameters: ["Hold me..."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["System Message: Press 'X' to Parry."] },
      { code: 401, indent: 0, parameters: ["(Window: 1/60th of a second)."] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["(Player instantly fails the frame-perfect input)"] },
      { code: 401, indent: 0, parameters: ["Maelle: You missed the parry!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["The Captain: The window was glitched! It flashed for one frame!"] },
      { code: 401, indent: 0, parameters: ["It's biologically impossible for a human to hit that!"] },
      { code: 101, indent: 0, parameters: ["", 0, 0, 2, ""] },
      { code: 401, indent: 0, parameters: ["Maelle: Wow. Okay. Blame your terrible reflexes."] },
      { code: 401, indent: 0, parameters: ["I guess I'll just die alone then."] },
      { code: 311, indent: 0, parameters: [0, 0, 0, 0, 9999, false] }, // Maelle takes fatal damage
      { code: 0, indent: 0, parameters: [] }
    ],
    moveFrequency: 3, moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
    moveSpeed: 3, moveType: 0, priorityType: 1, stepAnime: false, through: false, trigger: 0, walkAnime: true
  }], x: 5, y: 8
});

fs.writeFileSync(map25File, JSON.stringify(map25, null, 2));
console.log('Successfully built Era 10 Map (Melancholic Monolith).');
