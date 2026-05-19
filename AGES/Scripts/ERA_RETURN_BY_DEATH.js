// Return-by-Death Common Event Logic
// Increments death count, resets physical state, handles persistent meta-knowledge

// 1. Triggered via Common Event 1
// 2. Play sound
AudioManager.playSe({name: "glitch_scream", volume: 100, pitch: 100});

// 3. Screen Flash
$gameScreen.startFlash([255, 0, 0, 150], 60);

// 4. Increment Death Count
let deaths = $gameVariables.value(701);
$gameVariables.setValue(701, deaths + 1);

// 5. Wipe Physical State (Variables 500-599)
for (let i = 500; i <= 599; i++) {
    $gameVariables.setValue(i, 0);
}

// 6. Transfer to Anchor Point (Var 702=MapID, 703=X, 704=Y)
let mapId = $gameVariables.value(702) || 85; // Default to Awakening Room
let x = $gameVariables.value(703) || 8;
let y = $gameVariables.value(704) || 6;
$gamePlayer.reserveTransfer(mapId, x, y, 0, 0);

// 7. Reduce Mind (Variable 706)
let mind = $gameVariables.value(706);
$gameVariables.setValue(706, Math.max(0, mind - 2));

// Persistent Metadata (601-700) are NOT cleared.
