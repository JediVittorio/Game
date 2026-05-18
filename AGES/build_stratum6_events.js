const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 26 (Map 59) - The Conveyor of Guilt
writeMap(59, [
  { id: 1, name: "Conveyor Engine", x: 0, y: 0, pages: [{
    trigger: 4, // Parallel
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The conveyor belt pulls you. Sprint to stay ahead.)"]},
      {code: 205, parameters: [-1, {list: [{code: 2, parameters: []}, {code: 0}], repeat: false, skippable: true, wait: true}]}, // Move Left
      {code: 230, parameters: [60]},
      {code: 0}
    ]
  }] }
]);

// Floor 27 (Map 60) - The Escort Mission From Hell
writeMap(60, [
  { id: 1, name: "Suicidal Remnant", x: 8, y: 5, pages: [{
    trigger: 0, image: {characterName: "People4", characterIndex: 4, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Remnant: I can't take the weight anymore. Let the spikes end it."]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(Push the Remnant to keep them away from the traps.)"]},
      {code: 0}
    ]
  }] }
]);

// Floor 28 (Map 61) - The Blood Lake
writeMap(61, [
  { id: 1, name: "Neutral NPC", x: 8, y: 6, pages: [{
    trigger: 0, image: {characterName: "People3", characterIndex: 5, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["NPC: The lake is deep. I have no boat, and you have no time."]},
      {code: 102, parameters: [["SOLVE PUZZLE (15 min)", "STRIKE NPC (Raft)"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "SOLVE PUZZLE (15 min)"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(You begin moving heavy debris to build a bridge...)"]},
      {code: 230, parameters: [900]}, // Wait simulation
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The bridge is complete. Your soul feels lighter."]},
      {code: 214}, {code: 0},
      {code: 402, parameters: [1, "STRIKE NPC (Raft)"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(One strike is enough. The body makes a serviceable raft.)"]},
      {code: 122, parameters: [707, 707, 1, 0, 50]}, // Max Guilt increase
      {code: 214}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 30 (Map 63) - Checkpoint 6 / Lords of the Void
writeMap(63, [
  { id: 1, name: "Lords of the Void", x: 8, y: 4, pages: [{
    trigger: 3, // Autorun
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Heartless Lord: Compassion is a memory leak."]},
      {code: 401, parameters: ["Starving Lord: The floor is code. And I am hungry."]},
      {code: 401, parameters: ["Sightless Lord: (Stumbles blindly toward your sound)"]},
      {code: 301, parameters: [0, 30, false, false]}, // Placeholder Boss Rush battle: Enemy ID 30? No, let's use the Chairman's troop or similar logic
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The Lords dissolve into data-husks.)"]},
      {code: 122, parameters: [702, 702, 0, 0, 63]},
      {code: 122, parameters: [703, 703, 0, 0, 8]},
      {code: 122, parameters: [704, 704, 0, 0, 6]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Anchor secured. The abyss is widening."]},
      {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 6 (Floors 26-30).');
