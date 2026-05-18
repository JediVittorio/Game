const fs = require('fs');

const itemsFile = 'AGES/data/Items.json';
const items = JSON.parse(fs.readFileSync(itemsFile, 'utf8'));

// Expand array to cover up to ID 420
while (items.length <= 420) items.push(null);

function addItem(id, name, desc, price, icon, effectCode, effectValue1, effectValue2, itypeId = 1) {
  items[id] = {
    id: id,
    animationId: 41,
    consumable: true,
    damage: { critical: false, elementId: 0, formula: "0", type: 0, variance: 20 },
    description: desc,
    effects: effectCode ? [{ code: effectCode, dataId: 0, value1: effectValue1, value2: effectValue2 }] : [],
    hitType: 0,
    iconIndex: icon,
    itypeId: itypeId,
    name: name,
    note: "",
    occasion: 0,
    price: price,
    repeats: 1,
    scope: 7, // 1 ally
    speed: 0,
    successRate: 100,
    tpGain: 0
  };
}

// Era 3: FFT (81-85)
addItem(81, "Red Tape Potion", "Restores 30 HP, but takes 500 Charge Ticks to arrive.", 50, 176, 11, 0, 30);
addItem(82, "Bureaucratic Ether", "Restores 20 MP. Requires Form 8B in triplicate.", 200, 176, 12, 0, 20);
addItem(83, "Zodiac Phoenix Down", "Revives a fallen ally, provided zoning laws allow it.", 300, 176, 22, 1, 0);

// Era 4: FFX (121-125)
addItem(121, "Al Bhed Energy Drink", "Restores 1000 HP. Tastes like racism.", 100, 176, 11, 0, 1000);
addItem(122, "Union Rep Bribe", "Increases your Sports Team Salary variable. Do not consume.", 5000, 176, 0, 0, 0, 2); // Key item

// Era 5: Paper Mario (161-165)
addItem(161, "Cardboard Mushroom", "Restores 10 HP. Gets soggy in high humidity.", 10, 176, 11, 0, 10);
addItem(162, "Paper Mache Syrup", "Restores 5 MP. Highly flammable.", 15, 176, 12, 0, 5);

// Era 6: XCOM 2 (201-205)
addItem(201, "RNG Medkit", "99% chance to heal 4 HP. Will probably miss.", 25, 176, 11, 0, 4);
addItem(202, "99% Miss Grenade", "Shreds cover. If cover actually loaded.", 50, 176, 0, 0, 0);
items[202].scope = 2; // All enemies

// Era 7: DOS2 (241-245)
addItem(241, "Cursed Minor Potion", "Restores HP but applies the Necrofire state.", 15, 176, 11, 0, 50);
addItem(242, "Explosive Oil Flask", "Coats the area in oil. Just add a kettle.", 40, 176, 0, 0, 0);

// Era 8: P5R (281-285)
addItem(281, "Beef Bowl", "Restores 50 HP and increases your Guts. Essential for exams.", 50, 176, 11, 0, 50);
addItem(282, "Lukewarm Coffee", "Restores 20 SP. Brewed by your disappointing father figure.", 100, 176, 12, 0, 20);

// Era 9: BG3 (321-325)
addItem(321, "Artisanal Wine", "Required for long rests and tragic backstory dumps.", 20, 176, 11, 0, 10);
addItem(322, "D20 Healing Potion", "Heals 1d4 + Charisma modifier.", 50, 176, 11, 0, 25);

// Era 10: Clair Obscur (361-365)
addItem(361, "Paint Thinner", "Removes neon pink paint from ancient monoliths.", 50, 176, 0, 0, 0);
addItem(362, "1-Frame Elixir", "Fully heals, but the input window to drink it is 1/60th of a sec.", 500, 176, 11, 1, 0);

// Era 11: The Finale (401-405)
addItem(401, "Save State USB", "A gray-market emulation tool. Highly illegal.", 9999, 176, 0, 0, 0, 2); // Key item
addItem(402, "Digital Treaty", "The surrender document for the UDE.", 0, 176, 0, 0, 0, 2); // Key item

fs.writeFileSync(itemsFile, JSON.stringify(items, null, 2));
console.log('Successfully populated Items for Eras 3-11.');
