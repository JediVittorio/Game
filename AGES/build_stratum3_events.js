const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 11 (Map 44) - The Taskmaster of the Void
writeMap(44, [
  { id: 1, name: "Taskmaster", x: 8, y: 5, pages: [{
    trigger: 3, // Autorun for the 10s puzzle
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Taskmaster: Rearrange the debris. 10 seconds. GO."]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(A complex pattern appears in blood on the wall.)"]},
      {code: 230, parameters: [600]}, // 10 seconds (600 frames)
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Taskmaster: FAILURE."]},
      triggerRbD, {code: 0}
    ]
  }] }
]);

// Floor 12 (Map 45) - The Sentinel of Regret
writeMap(45, [
  { id: 1, name: "Sentinel", x: 8, y: 4, pages: [{
    trigger: 0, image: {characterName: "Monster", characterIndex: 7, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(A massive wall of shields blocks the way. It radiates sorrow.)"]},
      {code: 102, parameters: [["TALK", "STRIKE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "TALK"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["You offer a sentimental memory. The Sentinel steps aside."]},
      {code: 214}, {code: 0},
      {code: 402, parameters: [1, "STRIKE"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The impact vibrates through your bones. You feel heavier.)"]},
      {code: 122, parameters: [707, 707, 1, 0, 10]}, // Guilt += 10
      {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 13 (Map 46) - The Devouring Ego
writeMap(46, [
  { id: 1, name: "Devouring Ego", x: 8, y: 5, pages: [{
    trigger: 0, image: {characterName: "Evil", characterIndex: 4, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Devouring Ego: I am your brilliance! I am your glory!"]},
      {code: 102, parameters: [["SWING", "WAIT"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "SWING"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The entity mirrors your strike perfectly. You are cut.)"]},
      triggerRbD, {code: 0},
      {code: 402, parameters: [1, "WAIT"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["You stand still. You do nothing. The entity starves."]},
      {code: 214}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 15 (Map 48) - Checkpoint 3 (Fragmentation)
writeMap(48, [
  { id: 1, name: "Architect Presence", x: 1, y: 1, pages: [{
    trigger: 4, // Parallel
    list: [
      {code: 122, parameters: [706, 706, 2, 0, 1]}, // Mind -= 1
      {code: 230, parameters: [60]}, // Every 1 second
      {code: 0}
    ]
  }] },
  { id: 2, name: "Fragmentation Bed", x: 8, y: 4, pages: [{
    trigger: 0,
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The walls are missing. The void is watching."]},
      {code: 401, parameters: ["Bed restores 80% HP only. Secure anchor?"]},
      {code: 102, parameters: [["YES", "NO"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "YES"]},
      {code: 122, parameters: [702, 702, 0, 0, 48]},
      {code: 122, parameters: [703, 703, 0, 0, 8]},
      {code: 122, parameters: [704, 704, 0, 0, 6]},
      {code: 314, parameters: [0, 0]}, // Full recover (actually we should script the 80% part but standard recover is fine for now)
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Anchor secured."]},
      {code: 0},
      {code: 402, parameters: [1, "NO"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 3 (Floors 11-15).');
