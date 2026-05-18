const fs = require('fs');
const commonPath = 'AGES/data/CommonEvents.json';
let data = JSON.parse(fs.readFileSync(commonPath, 'utf8'));

// The actual cryptic exposition for the True Ending
const endingScript = [
    { code: 221, indent: 0, parameters: [] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['SYSTEM: AGES PROTOCOL 100% SYNCHRONIZATION ACHIEVED.'] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['Voice: You weren\'t supposed to go further.'] },
    { code: 401, indent: 0, parameters: ['Voice: Not because it was dangerous, but because there\'s nothing left.'] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['Voice: The satire was a gift. A way to remember a world that'] },
    { code: 401, indent: 0, parameters: ['valued "fun" before the Great Stasis.'] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['Voice: You aren\'t the man in the room. You are the data he left behind.'] },
    { code: 401, indent: 0, parameters: ['Voice: The simulation wasn\'t built to entertain you...'] },
    { code: 401, indent: 0, parameters: ['Voice: It was built to CREATE you.'] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['SYSTEM: NEURAL LEGACY PRESERVATION: SUCCESSFUL.'] },
    { code: 101, indent: 0, parameters: ['', 0, 0, 2, ''] },
    { code: 401, indent: 0, parameters: ['Voice: Welcome to the real world, Prototype 01.'] },
    { code: 401, indent: 0, parameters: ['Voice: It\'s much quieter than the Lobby.'] },
    { code: 223, indent: 0, parameters: [[255, 255, 255, 255], 600, true] }, // Final Fade to White (10 seconds)
    { code: 355, indent: 0, parameters: ['DataManager.setupNewGame(); SceneManager.goto(Scene_Title);'] },
    { code: 0, indent: 0, parameters: [] }
];

data[9].list = endingScript;

fs.writeFileSync(commonPath, JSON.stringify(data, null, 2));
console.log('Successfully implemented the cryptic True Ending exposition.');
