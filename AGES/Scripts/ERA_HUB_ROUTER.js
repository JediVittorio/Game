// Parallel Process Router for Awakening Room phases
let deathCount = $gameVariables.value(701);
let targetMap = 86; // Default to Phase 0

if (deathCount >= 100) {
    targetMap = 91; // Phase 5
} else if (deathCount >= 50) {
    targetMap = 90; // Phase 4
} else if (deathCount >= 30) {
    targetMap = 89; // Phase 3
} else if (deathCount >= 15) {
    targetMap = 88; // Phase 2
} else if (deathCount >= 5) {
    targetMap = 87; // Phase 1
}

// Transfer if player is not already in the correct room
if ($gameMap.mapId() !== targetMap) {
    $gamePlayer.reserveTransfer(targetMap, 8, 6, 0, 0);
}
