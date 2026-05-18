const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

// Helper for Return by Death trigger
const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 34 (Labyrinth Floor 1) - The Re-Education
writeMap(34, [
  { id: 1, name: "Lost Guide", x: 8, y: 5, pages: [{
    trigger: 0, image: {characterName: "People4", characterIndex: 0, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Lost Guide: This is the Shallow Grave."]},
      {code: 401, parameters: ["Lost Guide: Here, you must PUSH to survive. Violence is easy, but heavy."]},
      {code: 0}
    ]
  }, {
    // If struck (Swing), transform and initiate battle or RbD
    conditions: {switch1Id: 1, switch1Valid: false}, // Placeholder for "Struck" logic
    list: [{code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The guide dissolves into a scream.)"]}, triggerRbD, {code: 0}],
    trigger: 0
  }] },
  { id: 2, name: "Push Block", x: 8, y: 8, pages: [{
    trigger: 1, image: {tileId: 350}, // Generic stone block
    list: [{code: 355, parameters: ["$gameTemp.reserveCommonEvent(13); // Push Verb"]}, {code: 0}]
  }] }
]);

// Floor 35 (Labyrinth Floor 2) - The Phantom Strike
writeMap(35, [
  { id: 1, name: "Corrupted Root", x: 8, y: 6, pages: [{
    trigger: 0, image: {characterName: "Nature", characterIndex: 1, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["A thick root blocks the path. It pulses with code."]},
      {code: 102, parameters: [["SWING", "IGNORE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "SWING"]},
      {code: 355, parameters: ["$gameTemp.reserveCommonEvent(12);"]},
      {code: 214, parameters: []}, // Erase event (cut root)
      {code: 0},
      {code: 402, parameters: [1, "IGNORE"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 36 (Labyrinth Floor 3) - The Mandatory Sacrifice
writeMap(36, [
  { id: 1, name: "Collapse Trigger", x: 8, y: 6, pages: [{
    trigger: 1, image: {characterName: "", characterIndex: 0},
    list: [
      {code: 221}, {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The floor gives way beneath your weight."]},
      {code: 401, parameters: ["The simulation is not ready for you."]},
      triggerRbD, {code: 0}
    ]
  }] }
]);

// Floor 38 (Checkpoint 1) - Awakening Room Phase 0
writeMap(38, [
  { id: 1, name: "Glitch Barista", x: 12, y: 5, pages: [{
    trigger: 0, image: {characterName: "People3", characterIndex: 2, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Glitch Barista: You secured an anchor. Don't get used to the quiet."]},
      {code: 0}
    ]
  }] },
  { id: 2, name: "Anchor Bed", x: 8, y: 4, pages: [{
    trigger: 0, image: {tileId: 0}, // Invisible on bed
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Secure this coordinate as an anchor?"]},
      {code: 102, parameters: [["YES", "NO"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "YES"]},
      {code: 122, parameters: [702, 702, 0, 0, 38]}, // Set Anchor Map ID to 38
      {code: 122, parameters: [703, 703, 0, 0, 8]},  // Set Anchor X to 8
      {code: 122, parameters: [704, 704, 0, 0, 6]},  // Set Anchor Y to 6
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Anchor secured."]},
      {code: 0},
      {code: 402, parameters: [1, "NO"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 1 (Floors 1-5).');
