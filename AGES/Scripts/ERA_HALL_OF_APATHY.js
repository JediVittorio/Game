// Hall of Apathy: 3-Minute Endurance Logic
// Script: ERA_HALL_OF_APATHY.js

let walkTimer = 0;
let isInterrupted = false;

// Parallel process monitoring
function updateEndurance() {
    if (isInterrupted) return;

    walkTimer++;

    // Interrupts (180s = 3 minutes)
    if (walkTimer === 45 * 60) { // 45s
        // Fake Crash
        Graphics.printError("ERROR: ENGINE_FAILURE", "Memory leak in stage_2_logic_core.");
    } else if (walkTimer === 90 * 60) { // 90s
        // Fake Disconnect
        $gameMessage.add("CONTROLLER DISCONNECTED. PLEASE RECONNECT.");
    } else if (walkTimer === 135 * 60) { // 135s
        // Visual Static (10 FPS)
        Graphics.setFramerate(10);
    } else if (walkTimer >= 180 * 60) { // Success
        $gameSelfSwitches.setValue([$gameMap.mapId(), 10, 'A'], true); // Spawn Exit Door
        Graphics.setFramerate(60);
    }

    // Input failure logic (RbD reset)
    if (Input.isPressed('ok') || Input.isPressed('cancel') || Input.dir4 > 0) {
        if (walkTimer % 60 !== 0) { // Ignore during cutscene/interrupt frames
            $gameTemp.requestCommonEvent(1); // Call ReturnByDeath
        }
    }
}
