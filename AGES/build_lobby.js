const fs = require('fs');

const mapFile = 'AGES/data/Map001.json';
let map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));

const width = map.width;
const height = map.height;

// Rebuild Data Array: 17x13 x 6 layers
const data = new Array(width * height * 6).fill(0);

// Tile IDs (Inside Tileset approximation)
const FLOOR = 2816; // Basic wood floor
const WALL_TOP = 6656; // Basic wall
const WALL_MID = 6664;
const WALL_BOT = 6672;
const BLACK = 1536; // Void

for (let z = 0; z < 6; z++) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (z * height + y) * width + x;
      if (z === 0) {
        // Layer 0: Floors and Walls
        if (x === 0 || x === width - 1 || y === height - 1) {
          data[idx] = BLACK; // Edges
        } else if (y === 0 || y === 1) {
          data[idx] = BLACK;
        } else if (y === 2) {
          data[idx] = WALL_TOP;
        } else if (y === 3) {
          data[idx] = WALL_MID;
        } else {
          data[idx] = FLOOR; // Floor
        }
      }
    }
  }
}

map.data = data;

// Retain existing Opening Cinematic (Event 1)
const openingCinematic = map.events[1];

// Add Tavern Banter Events
map.events = [
  null,
  openingCinematic,
  createDialogueEvent(2, "Romza & Maurice", 4, 6, "Actor1", 0, "Actor3", 1, [
    "Romza: How does one calculate the trajectory of a projectile when your entire universe lacks a Z-axis? You are a topological nightmare.",
    "Maurice: (Folds into a paper airplane and hits Romza in the eye)."
  ]),
  createDialogueEvent(3, "Toad & Luna", 12, 8, "Monster", 2, "Actor2", 3, [
    "Toad: Listen, lady. I don't care if the 'spirits of the water weep.'",
    "Toad: I just want to know if a wizard turning me into an amphibian nullifies my pre-nuptial agreement!",
    "Luna: The water reflects your financial ruin, little frog."
  ]),
  createDialogueEvent(4, "Geoff & Blaze", 4, 10, "Actor1", 2, "Actor1", 4, [
    "Geoff: If I attach your Pyromancy catalyst to my toaster, do you think we could violate the Geneva Convention in three new ways?",
    "Blaze: Let's find out. But do it outside. I don't want to vaporize the bar again."
  ]),
  createDialogueEvent(5, "Darkheart & Trickster", 12, 5, "Actor2", 1, "Actor3", 5, [
    "Darkheart: I am shrouded in shadow and tragedy. I steal from the corrupt.",
    "The Trickster: (Silently adjusts glasses, pulls a literal mythological god out of his pocket).",
    "Darkheart: Okay, you win. Show off."
  ]),
  createDialogueEvent(6, "Bartender", 8, 4, "People1", 1, null, 0, [
    "Bartender: Welcome to the Lobby of Ages. Please don't paradox the glassware."
  ])
];

function createDialogueEvent(id, name, x, y, charName, charIdx, char2Name, char2Idx, dialogueLines) {
  let list = [];
  dialogueLines.forEach(line => {
    list.push({"code": 101, "indent": 0, "parameters": ["", 0, 0, 2, ""]});
    list.push({"code": 401, "indent": 0, "parameters": [line]});
  });
  list.push({"code": 0, "indent": 0, "parameters": []});

  return {
    "id": id,
    "name": name,
    "note": "",
    "pages": [
      {
        "conditions": {"actorId": 1, "actorValid": false, "itemId": 1, "itemValid": false, "selfSwitchCh": "A", "selfSwitchValid": false, "switch1Id": 1, "switch1Valid": false, "switch2Id": 1, "switch2Valid": false, "variableId": 1, "variableValid": false, "variableValue": 0},
        "directionFix": false,
        "image": {"characterIndex": charIdx, "characterName": charName, "direction": 2, "pattern": 1, "tileId": 0},
        "list": list,
        "moveFrequency": 3,
        "moveRoute": {"list": [{"code": 0, "parameters": []}], "repeat": true, "skippable": false, "wait": false},
        "moveSpeed": 3,
        "moveType": 0,
        "priorityType": 1,
        "stepAnime": false,
        "through": false,
        "trigger": 0,
        "walkAnime": true
      }
    ],
    "x": x,
    "y": y
  };
}

fs.writeFileSync(mapFile, JSON.stringify(map, null, 2));
console.log('Successfully built the Lobby of Ages map layout and events.');
