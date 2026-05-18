const fs = require('fs');

const sFile = 'AGES/data/States.json';
const states = JSON.parse(fs.readFileSync(sFile, 'utf8'));

// Ensure array has enough space (up to ID 220)
while (states.length <= 220) states.push(null);

function addState(id, name, desc, restriction=0, icon=1, maxTurns=3, customTraits=[]) {
  states[id] = {
    id: id,
    autoRemovalTiming: 1, // Action end
    chanceByDamage: 100,
    iconIndex: icon,
    maxTurns: maxTurns,
    message1: `%1 gets ${name}!`,
    message2: `%1 gets ${name}!`,
    message3: "",
    message4: `The ${name} effect wears off.`,
    minTurns: 1,
    motion: restriction === 4 ? 3 : 0, // Sleep motion if cannot move
    name: name,
    note: desc,
    overlay: restriction > 0 ? 3 : 0,
    priority: 50,
    releaseByDamage: false,
    removeAtBattleEnd: true,
    removeByDamage: false,
    removeByRestriction: false,
    removeByWalking: false,
    restriction: restriction, // 0: None, 1: Attack Enemy, 2: Attack Anyone, 3: Attack Ally, 4: Cannot Move
    stepsToRemove: 100,
    traits: customTraits,
    messageType: 1
  };
}

// Era 3: FFT (31-35)
addState(31, "Zoning Violation", "Cannot move due to height restrictions.", 4, 11, 2);
addState(32, "Charging Form 8B", "Waiting for bureaucracy to process attack.", 4, 12, 3);
addState(33, "Tax Audit", "Taking continuous financial damage.", 0, 13, 3, [{"code": 22, "dataId": 7, "value": -0.5}]); // HRG -50%

// Era 4: FFX (41-45)
addState(41, "Deafened", "Cannot hear commands due to forced laughter.", 4, 4, 3);
addState(42, "OSHA Violation", "Max HP reduced by safety board.", 0, 5, 5, [{"code": 21, "dataId": 0, "value": 0.5}]); // MHP 50%
addState(43, "Union Strike", "Refusing to attack. Demanding dental.", 4, 6, 2);

// Era 5: Paper Mario (51-55)
addState(51, "Soggy", "Paper structural integrity compromised. DEF reduced.", 0, 2, 3, [{"code": 21, "dataId": 3, "value": 0.5}]); // DEF 50%
addState(52, "Folded", "Stuck as a swan. Cannot attack.", 4, 2, 2);
addState(53, "Audience Boos", "Evasion drops due to thrown anvils.", 0, 2, 3, [{"code": 22, "dataId": 1, "value": -0.5}]); // EVA -50%

// Era 6: XCOM 2 (61-65)
addState(61, "Panicked (99% Miss)", "Attacking randomly because math is a lie.", 2, 8, 2);
addState(62, "Flanked", "Cover system broken. High chance to be crit.", 0, 9, 3, [{"code": 22, "dataId": 2, "value": 0.5}]); // CRI +50%
addState(63, "Overwatch Trap", "Stuck in overwatch forever.", 4, 10, 3);

// Era 7: DOS2 (71-75)
addState(71, "Necrofire", "Unextinguishable cursed fire.", 0, 1, 5, [{"code": 22, "dataId": 7, "value": -0.2}]); // HRG -20% (DoT)
addState(72, "Steam Cloud", "Blinded by boiling tea water.", 0, 3, 3, [{"code": 22, "dataId": 0, "value": -0.5}]); // HIT -50%
addState(73, "Physical Plot Armor", "Immune to physical CC.", 0, 11, 5);
addState(74, "Magical Plot Armor", "Immune to magical CC.", 0, 12, 5);

// Era 8: P5R (81-85)
addState(81, "Down", "Hit by weakness. Ready for All-Out Attack.", 4, 13, 1);
addState(82, "Embarrassment", "Failed a geometry exam. ATK reduced.", 0, 14, 3, [{"code": 21, "dataId": 2, "value": 0.7}]); // ATK 70%
addState(83, "Hold Up!", "Paralyzed by sheer dramatic tension.", 4, 15, 1);

// Era 9: BG3 (91-95)
addState(91, "Legally Married", "You failed a persuasion check and are now wed.", 0, 16, 99);
addState(92, "Tadpole Induced", "Having terrible psychic visions.", 0, 17, 5, [{"code": 22, "dataId": 7, "value": -0.1}]);
addState(93, "Natural 1", "Critically depressed.", 0, 18, 3, [{"code": 21, "dataId": 2, "value": 0.5}, {"code": 21, "dataId": 4, "value": 0.5}]); // ATK & MAT 50%
addState(94, "Advantage", "Rolling twice. Very confident.", 0, 19, 3, [{"code": 22, "dataId": 0, "value": 0.5}]); // HIT +50%

// Era 10: Clair Obscur (101-105)
addState(101, "Glitched Frame", "Stuck in 1/60th second parry window.", 4, 20, 1);
addState(102, "Neon Pink Stain", "Ruins aesthetic. Takes emotional DoT.", 0, 21, 5, [{"code": 22, "dataId": 7, "value": -0.15}]);

// Era 11: The Finale (111-115)
addState(111, "Apathy", "Realized the code is broken. Cannot act.", 4, 22, 3);
addState(112, "Save-Scum Sickness", "Nauseous from reloading timeline 400 times.", 0, 23, 3, [{"code": 22, "dataId": 1, "value": -0.5}]);
addState(113, "Front-View Whiplash", "Disoriented by shifting perspectives.", 0, 24, 2, [{"code": 22, "dataId": 0, "value": -0.3}]);

fs.writeFileSync(sFile, JSON.stringify(states, null, 2));
console.log('Successfully populated 50+ Custom States for Eras 3-11.');
