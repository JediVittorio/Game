const fs = require('fs');

const mapFiles = {
  "Map011.json": { bgm: "Theme2", bgs: "Wind1" }, // Era 2 Prehistoric
  "Map012.json": { bgm: "Ship2", bgs: "City" },  // Era 2 Utopia
  "Map013.json": { bgm: "Darkness8", bgs: "Wind5" }, // Era 2 Ruined
  "Map015.json": { bgm: "Town3", bgs: "Clock" },  // Era 3 Municipal
  "Map016.json": { bgm: "Ship1", bgs: "Wind1" },  // Era 4 Archipelago
  "Map017.json": { bgm: "Dungeon2", bgs: "River" }, // Era 4 Sphere
  "Map018.json": { bgm: "Theme1", bgs: "People1" }, // Era 5 Stage
  "Map019.json": { bgm: "", bgs: "Darkness" },     // Era 6 Void (Evented audio)
  "Map020.json": { bgm: "Dungeon1", bgs: "Fire1" }, // Era 7 Prison
  "Map021.json": { bgm: "Town1", bgs: "People2" }, // Era 8 Beef Bowl
  "Map022.json": { bgm: "Theme3", bgs: "Clock" },  // Era 8 Exam
  "Map023.json": { bgm: "Battle2", bgs: "Darkness" }, // Era 9 Arena
  "Map024.json": { bgm: "Field1", bgs: "Wind2" },   // Era 9 Camp
  "Map025.json": { bgm: "Theme5", bgs: "Wind5" },   // Era 10 Monolith
  "Map026.json": { bgm: "Battle3", bgs: "Quake1" }  // Era 11 Boss Rush
};

Object.keys(mapFiles).forEach(file => {
  const path = `AGES/data/${file}`;
  if (fs.existsSync(path)) {
    let data = JSON.parse(fs.readFileSync(path, 'utf8'));
    data.autoplayBgm = true;
    data.bgm = { name: mapFiles[file].bgm, pan: 0, pitch: 100, volume: 90 };
    data.autoplayBgs = true;
    data.bgs = { name: mapFiles[file].bgs, pan: 0, pitch: 100, volume: 80 };
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }
});

// CREATE ORIGINAL RHYTHMIC SOUNDSCAPE (Era 6 Void - Map 19)
// We add a Parallel Process event that plays a rhythmic "glitch" track
const map19Path = 'AGES/data/Map019.json';
if (fs.existsSync(map19Path)) {
  let map19 = JSON.parse(fs.readFileSync(map19Path, 'utf8'));
  map19.events.push({
    id: 3, name: "Original Soundscape: Glitch Code", note: "", pages: [{
      conditions: { actorId: 1, actorValid: false, itemId: 1, itemValid: false, selfSwitchCh: "A", selfSwitchValid: false, switch1Id: 1, switch1Valid: false, switch2Id: 1, switch2Valid: false, variableId: 1, variableValid: false, variableValue: 0 },
      list: [
        { code: 250, indent: 0, parameters: [{ name: "Computer", pan: -50, pitch: 150, volume: 60 }] },
        { code: 230, indent: 0, parameters: [30] }, // 0.5s beat
        { code: 250, indent: 0, parameters: [{ name: "Buzzer1", pan: 50, pitch: 50, volume: 40 }] },
        { code: 230, indent: 0, parameters: [15] },
        { code: 250, indent: 0, parameters: [{ name: "Computer", pan: 0, pitch: 80, volume: 50 }] },
        { code: 230, indent: 0, parameters: [45] },
        { code: 0, indent: 0, parameters: [] }
      ],
      trigger: 4 // Parallel
    }], x: 0, y: 0
  });
  fs.writeFileSync(map19Path, JSON.stringify(map19, null, 2));
}

console.log('Successfully completed Mixed BGM/BGS Implementation with Original Rhythmic Eventing.');
