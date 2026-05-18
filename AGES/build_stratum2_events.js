const fs = require('fs');

function writeMap(id, events) {
  let path = `AGES/data/Map0${id}.json`;
  let map = JSON.parse(fs.readFileSync(path, 'utf8'));
  map.events = [null, ...events];
  fs.writeFileSync(path, JSON.stringify(map, null, 2));
}

const triggerRbD = { code: 117, indent: 0, parameters: [11] }; // Call CE 11

// Floor 6 (Map 39) - The Mimic
writeMap(39, [
  { id: 1, name: "Mimic Bed", x: 8, y: 4, pages: [{
    trigger: 0, image: {characterName: "", characterIndex: 0, tileId: 0},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["The bed looks soft. Secure anchor?"]},
      {code: 102, parameters: [["YES", "NO"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "YES"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["(The mattress snaps shut like a jaw.)"]},
      triggerRbD, {code: 0},
      {code: 402, parameters: [1, "NO"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 7 (Map 40) - Weaponized Trust
writeMap(40, [
  { id: 1, name: "Smiling Traitor", x: 8, y: 5, pages: [{
    trigger: 0, image: {characterName: "People1", characterIndex: 2, direction: 2, pattern: 1},
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Smiling Traitor: Let me guide you across the spikes, friend."]},
      {code: 102, parameters: [["FOLLOW", "STRIKE"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "FOLLOW"]},
      {code: 201, parameters: [0, 40, 8, 10, 0, 0]}, // Teleport to spike pit
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["He kicks you into the pit with a grin."]},
      triggerRbD, {code: 0},
      {code: 402, parameters: [1, "STRIKE"]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["You push him first. His body makes a sturdy bridge."]},
      {code: 122, parameters: [601, 601, 0, 0, 1]}, // Meta-Knowledge: Traitor Discovered
      {code: 214}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

// Floor 8 (Map 41) - Weeping Angels
writeMap(41, [
  { id: 1, name: "Guilt Block", x: 5, y: 6, pages: [{
    trigger: 4, // Parallel
    list: [
      {code: 355, parameters: ["if ($gamePlayer.direction() !== 8) { // If not facing up/backwards"]},
      {code: 655, parameters: ["  $gameTemp.reserveCommonEvent(11); // Immediate RbD if back is turned"]},
      {code: 655, parameters: ["}"]},
      {code: 230, parameters: [10]},
      {code: 0}
    ]
  }] }
]);

// Floor 10 (Map 43) - Checkpoint 2 (Intrusion)
writeMap(43, [
  { id: 1, name: "Intrusion Bed", x: 8, y: 4, pages: [{
    trigger: 0,
    list: [
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Shadows detach from the walls. This room is not safe."]},
      {code: 401, parameters: ["Secure anchor? (Costs 5 Mind)"]},
      {code: 102, parameters: [["YES", "NO"], 1, 0, 2, 0]},
      {code: 402, parameters: [0, "YES"]},
      {code: 122, parameters: [706, 706, 2, 0, 5]}, // Mind -= 5
      {code: 122, parameters: [702, 702, 0, 0, 43]},
      {code: 122, parameters: [703, 703, 0, 0, 8]},
      {code: 122, parameters: [704, 704, 0, 0, 6]},
      {code: 101, parameters: ["", 0, 0, 2, ""]}, {code: 401, parameters: ["Anchor secured."]},
      {code: 0},
      {code: 402, parameters: [1, "NO"]}, {code: 0},
      {code: 404}, {code: 0}
    ]
  }] }
]);

console.log('Successfully scripted events for Stratum 2 (Floors 6-10).');
