// Precognition/Trap Warning Logic
// If player has died to this trap previously (Variable 601 = 1), show warning.

let trapKnowledge = $gameVariables.value(601);
if (trapKnowledge === 1) {
    // Show "!" alert icon
    $gameSelfSwitches.setValue([$gameMap.mapId(), this._eventId, 'C'], true);
    $gameMessage.add("You've seen this trap before. It feels familiar.");
}
