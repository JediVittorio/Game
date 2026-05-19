// Stage 2 Master Interaction Engine
// Verbs: Swing (Mind), Push (Guilt), Speak (None)

let verb = $gameVariables.value(100); // 1: Swing, 2: Push, 3: Speak
let mind = $gameVariables.value(706);
let guilt = $gameVariables.value(707);

switch(verb) {
    case 1: // Swing
        if (mind >= 1) {
            $gameVariables.setValue(706, mind - 1);
            // Execute Swing Logic
        } else {
            $gameMessage.add("Your mind is too fractured to strike.");
        }
        break;
    case 2: // Push
        // If pushing NPC, cost 5 Guilt
        if (this.event().isNpc) {
            $gameVariables.setValue(707, guilt + 5);
        }
        // Execute Push Logic
        break;
    case 3: // Speak
        // Execute Speak Logic
        break;
}
