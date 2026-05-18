const fs = require('fs');
const mapPath = 'AGES/data/Map068.json';
let map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

// The actual Inaction Timer logic for the Sovereign of Stasis
const inactionLogic = `
if (Input.isTriggered('ok') || Input.isTriggered('cancel') || Input.dir4 !== 0) {
    $gameVariables.setValue(708, 0); 
    $gameTemp.reserveCommonEvent(11); // Reset to checkpoint on movement/input
} else {
    let t = $gameVariables.value(708);
    $gameVariables.setValue(708, t + 1);
    if (t >= 10800) { // 180 seconds x 60 fps
        $gameSwitches.setValue(200, true); // Stage 2 Complete
        $gameTemp.reserveCommonEvent(9);   // Trigger Ending Cinematic
    }
}
`;

map.events.push({
  id: 2,
  name: 'Inaction Timer',
  x: 0,
  y: 0,
  pages: [{
    trigger: 4, // Parallel
    list: [
      { code: 355, indent: 0, parameters: [inactionLogic] },
      { code: 0, indent: 0, parameters: [] }
    ]
  }]
});

fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
console.log('Successfully injected the final Sovereign of Stasis logic.');
