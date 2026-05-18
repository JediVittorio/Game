const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 21 (Map 54) - The Gatekeeper
writeMap(54, [
  { id: 1, name: "The Gatekeeper", x: 8, y: 5, pages: [{
    trigger: 0, image: {characterName: "Evil", characterIndex: 5, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Gatekeeper: To pass, you must know the pattern of the void."]},
      {code: 401, parameters: ["Gatekeeper: But you have no memory. No weight."]},
      {code: 102, parameters: [["FIGHT", "IGNORE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "FIGHT"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(Initiating 5-minute evasion puzzle... FAILURE.)"]},
      triggerRbD, {code: 0},
      {code: 402, parameters: [1, "IGNORE"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 23 (Map 56) - The Liar's Paradox
writeMap(56, [
  { id: 1, name: "Twin A", x: 6, y: 5, pages: [{
    trigger: 0, image: {characterName: "People2", characterIndex: 4, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Twin A: Left door leads to life. Right door leads to death."]},
      {code: 0}
    ]
  }] },
  { id: 2, name: "Twin B", x: 10, y: 5, pages: [{
    trigger: 0, image: {characterName: "People2", characterIndex: 4, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Twin B: He's lying. Go right."]},
      {code: 0}
    ]
  }] },
  { id: 3, name: "Left Door", x: 6, y: 2, pages: [{
    trigger: 1, image: {characterName: "!$Gate1", characterIndex: 0},
    list: [{code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(Both doors lead to death on Loop 1.)"]}, triggerRbD, {code: 0}]
  }] }
]);

// Floor 24 (Map 57) - The Guillotine
writeMap(57, [
  { id: 1, name: "Executioner", x: 8, y: 4, pages: [{
    trigger: 3, // Autorun
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Executioner: You have died \\V[701] times."]},
      {code: 401, parameters: ["Executioner: For the crime of persistence, you are sentenced to erasure."]},
      {code: 250, parameters: [{ name: "Flash1", pan: 0, pitch: 50, volume: 100 }]},
      triggerRbD, {code: 0}
    ]
  }] }
]);

// Floor 25 (Map 58) - Checkpoint 5 / Sovereign of Cognitive Dissonance
writeMap(58, [
  { id: 1, name: "Sovereign Boss", x: 8, y: 4, pages: [{
    trigger: 3, // Autorun
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Sovereign: I am the contradiction. I am the lie that felt like truth."]},
      {code: 401, parameters: ["(SYSTEM: CONTROLS SHUFFLED. HP BAR REMOVED.)"]},
      {code: 355, parameters: ["// Placeholder for control shuffle script and HP UI removal"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(After an agonizing dialogue chain, the Sovereign dissolves.)"]},
      {code: 122, parameters: [702, 702, 0, 0, 58]},
      {code: 122, parameters: [703, 703, 0, 0, 8]},
      {code: 122, parameters: [704, 704, 0, 0, 6]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Anchor secured. The silence is absolute."]},
      {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 5 (Floors 21-25).');
