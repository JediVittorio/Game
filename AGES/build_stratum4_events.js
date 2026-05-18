const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 16 (Map 49) - Meta-Weight
writeMap(49, [
  { id: 1, name: "HP Bar Block", x: 8, y: 8, pages: [{
    trigger: 1, image: {characterName: "!Switch1", characterIndex: 0},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(This block represents your structural integrity.)"]},
      {code: 401, parameters: ["(Pushing it onto the plate will permanently reduce Max HP by 20%.)"]},
      {code: 102, parameters: [["PUSH", "IGNORE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "PUSH"]},
      {code: 355, parameters: ["$gameActors.actor(1).addParam(0, -Math.round($gameActors.actor(1).mhp * 0.2));"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The door opens. You feel lighter. Less substantial."]},
      {code: 214}, {code: 0},
      {code: 402, parameters: [1, "IGNORE"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 19 (Map 52) - Erasing the Save
writeMap(52, [
  { id: 1, name: "Save File Block", x: 8, y: 5, pages: [{
    trigger: 1, image: {tileId: 191},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(This block is your only connection to the Title Screen.)"]},
      {code: 401, parameters: ["(Push it into the void to clear the path?)"]},
      {code: 102, parameters: [["ERASE", "IGNORE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "ERASE"]},
      {code: 121, parameters: [97, 97, 0]}, // Switch 97 = ON (Disable Save)
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["SYSTEM: SAVE FUNCTION REMOVED."]},
      {code: 214}, {code: 0},
      {code: 402, parameters: [1, "IGNORE"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 20 (Map 53) - Checkpoint 4 (Atrophy)
writeMap(53, [
  { id: 1, name: "Architect Boss", x: 8, y: 4, pages: [{
    trigger: 3, // Autorun
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Architect of Atrophy: Why do you still struggle?"]},
      {code: 401, parameters: ["Architect of Atrophy: Sacrifice your ability to SPRINT to proceed."]},
      {code: 102, parameters: [["SACRIFICE", "REFUSE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "SACRIFICE"]},
      {code: 121, parameters: [96, 96, 0]}, // Switch 96 = ON (Disable Dash)
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The Architect withdraws. The Atrophy bed remains.)"]},
      {code: 122, parameters: [702, 702, 0, 0, 53]},
      {code: 122, parameters: [703, 703, 0, 0, 8]},
      {code: 122, parameters: [704, 704, 0, 0, 6]},
      {code: 0},
      {code: 402, parameters: [1, "REFUSE"]},
      triggerRbD, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 4 (Floors 16-20).');
