// Smiling Traitor Bridge Logic
// If player shoves NPC into pit (Tile ID match), map bridge.
let isPushed = $gameVariables.value(100); // Trigger set by event
if (isPushed === 1) {
    $gameMap.setTileEvent(this.x, this.y, 1); // 1 = Bridge Tile
    $gameMessage.add("The traitor bridges the gap with his own body.");
}
