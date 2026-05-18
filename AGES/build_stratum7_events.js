const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 31 (Map 64) - The Blind Walk
// Navigating via tones. High = Wall, Low = Pit.
writeMap(64, [
  { id: 1, name: "Audio Guide", x: 0, y: 0, pages: [{
    trigger: 4, // Parallel
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(Navigation via audio cues only. One wrong step = Death.)"]},
      {code: 0}
    ]
  }] }
]);

// Floor 33 (Map 66) - The Hall of Apathy
// 3-minute walk with simulated crashes.
writeMap(66, [
  { id: 1, name: "Apathy Tracker", x: 0, y: 0, pages: [{
    trigger: 4, // Parallel
    list: [
      {code: 230, parameters: [2700]}, // 45s: Fake Crash
      {code: 221}, {code: 250, parameters: [{name: 'Buzzer1', pan: 0, pitch: 100, volume: 100}]},
      {code: 230, parameters: [60]},
      {code: 222},
      {code: 230, parameters: [2700]}, // 90s: Fake Disconnect
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["ERROR: CONTROLLER DISCONNECTED."]},
      {code: 230, parameters: [5400]}, // Total 3 minutes
      {code: 201, parameters: [0, 67, 8, 11, 8, 0]}, // Proceed to Floor 34
      {code: 0}
    ]
  }] }
]);

// Floor 34 (Map 67) - The Final Sacrifice
writeMap(67, [
  { id: 1, name: "The Furnace", x: 8, y: 4, pages: [{
    trigger: 0, image: {characterName: "!Flame", characterIndex: 0, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The furnace hungers for the Rusted Blade."]},
      {code: 401, parameters: ["Sacrifice the SWING verb to open the path?"]},
      {code: 102, parameters: [["SACRIFICE", "REFUSE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "SACRIFICE"]},
      {code: 121, parameters: [95, 95, 0]}, // Switch 95 = ON (Disable Swing)
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The blade is gone. The door to Floor 35 opens."]},
      {code: 214}, {code: 0},
      {code: 402, parameters: [1, "REFUSE"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 35 (Map 68) - The Sovereign of Stasis
writeMap(68, [
  { id: 1, name: "The Sovereign", x: 8, y: 4, pages: [{
    trigger: 3, // Autorun
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Sovereign: You have sacrificed everything."]},
      {code: 401, parameters: ["Sovereign: Now, give me your silence."]},
      {code: 355, parameters: ["// Inaction Timer Implementation"]},
      {code: 655, parameters: ["this.setupChildEvent(2); // Start the timer page"]},
      {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 7 (Floors 31-35).');
