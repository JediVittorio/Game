const fs = require('fs');

const wFile = 'AGES/data/Weapons.json';
const aFile = 'AGES/data/Armors.json';
const actFile = 'AGES/data/Actors.json';

const weapons = JSON.parse(fs.readFileSync(wFile, 'utf8'));
const armors = JSON.parse(fs.readFileSync(aFile, 'utf8'));
const actors = JSON.parse(fs.readFileSync(actFile, 'utf8'));

// Expand array to cover up to ID 200
while (weapons.length <= 200) weapons.push(null);
while (armors.length <= 200) armors.push(null);

function addW(id, name, desc, atk, wtypeId=2, traits=[]) {
  weapons[id] = {
    id: id, animationId: 6, description: desc, etypeId: 1, traits: traits,
    iconIndex: 96, name: name, note: "", params: [0,0,atk,0,0,0,0,0], price: 100, wtypeId: wtypeId
  };
}

function addA(id, name, desc, def, mdf, etypeId=4, traits=[]) {
  armors[id] = {
    id: id, atypeId: 1, description: desc, etypeId: etypeId, traits: traits,
    iconIndex: 135, name: name, note: "", params: [0,0,0,def,0,mdf,0,0], price: 100
  };
}

// Era 3: FFT (31-35)
addW(31, "Zoning Permit Sword", "A sword that complies with height restrictions.", 15);
addA(31, "Bureaucratic Robes", "Protects against tax audits.", 10, 15, 4);

// Era 4: FFX (41-45) (0 base stats, all traits)
addW(41, "Sports Franchise Blade", "0 ATK. Deals emotional damage to the union.", 0, 2, [{"code": 31, "dataId": 5, "value": 0}]); // Water element attack
addA(41, "OSHA Compliant Bangle", "0 DEF. Approved by the safety board.", 0, 0, 4, [{"code": 22, "dataId": 1, "value": 0.2}]); // +20% Evasion

// Era 5: Paper Mario (51-55)
addW(51, "Cardboard Mallet", "A flat 2D hammer.", 12, 4);
addA(51, "Power Plus Badge", "Increases attack, offers no physical protection.", 1, 1, 4);

// Era 6: XCOM 2 (61-65)
addW(61, "Plasma Rifle (99% Miss)", "The barrel is touching their head. You will miss.", 20, 9);
addA(61, "Invisible Cover Vest", "Pretend it's a half-wall.", 15, 5, 4);

// Era 7: DOS2 (71-75)
addW(71, "Cursed Oil Wand", "Ignites the entire continent.", 18, 6);
addA(71, "Physical Plot Armor", "Provides Physical Armor.", 20, 0, 4);
addA(72, "Magical Plot Armor", "Provides Magic Armor.", 0, 20, 5); // Accessory

// Era 8: P5R (81-85)
addW(81, "Airsoft Pistol", "It looks real enough to do damage in the Metaverse.", 22, 9);
addA(81, "Winter School Uniform", "Standard issue Tokyo high school wear.", 18, 18, 4);

// Era 9: BG3 (91-95) (D&D modifiers)
addW(91, "1d8 Longsword of Tragedy", "Deals 1d8 slashing damage + STR modifier.", 8, 2); 
addA(91, "Camp Clothes", "Offer no protection, but high charisma.", 10, 10, 4);

// Era 10: Clair Obscur (101-105)
addW(101, "Glitched Rapier", "Attack animations drop frames randomly.", 25, 2);
addA(101, "Neon Pink Coat", "Ruins the melancholic atmosphere.", 22, 22, 4);

// Era 11: The Finale (111-115)
addW(111, "Save-Scum Sword", "A blade that remembers previous timeline failures.", 30, 2);
addA(111, "Emulator Shield", "Deflects incoming code execution.", 25, 25, 2); // Shield

// Equip on actors
if(actors[21]) actors[21].equips = [31, 0, 0, 31, 0]; // Romza
if(actors[31]) actors[31].equips = [41, 0, 0, 41, 0]; // Tadpole
if(actors[41]) actors[41].equips = [51, 0, 0, 51, 0]; // Maurice
if(actors[51]) actors[51].equips = [61, 0, 0, 61, 0]; // Rick
if(actors[61]) actors[61].equips = [71, 0, 0, 71, 72]; // Judgmental Knight
if(actors[71]) actors[71].equips = [81, 0, 0, 81, 0]; // Trickster
if(actors[81]) actors[81].equips = [91, 0, 0, 91, 0]; // Oathbreaker
if(actors[91]) actors[91].equips = [101, 0, 0, 101, 0]; // Captain

fs.writeFileSync(wFile, JSON.stringify(weapons, null, 2));
fs.writeFileSync(aFile, JSON.stringify(armors, null, 2));
fs.writeFileSync(actFile, JSON.stringify(actors, null, 2));
console.log('Successfully populated Weapons and Armors for Eras 3-11 and equipped them.');
