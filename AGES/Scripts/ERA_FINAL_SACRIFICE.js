// Final Sacrifice: Swing Command Erasure
// Triggered when player pushes the "Swing" block into the furnace.

// 1. Remove input capability
$gameSwitches.setValue(98, true); // SWING_DISABLED_SWITCH

// 2. Narrative Log
$gameMessage.add("The rusted blade was never the key. Let it turn to ash.");

// 3. Update persistent meta-knowledge variable
$gameVariables.setValue(650, 1); // SWING_SACRIFICED_FLAG
