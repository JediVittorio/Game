// Sovereign of Stasis: 3-Minute Inaction Logic
// Script: ERA_SOVEREIGN_OF_STASIS.js

let inactionTimer = 0;

// Parallel process monitoring
function updateInaction() {
    // If player makes ANY input, reset the timer/trigger RbD
    if (Input.isPressed('ok') || Input.isPressed('cancel') || Input.dir4 > 0) {
        $gameTemp.requestCommonEvent(1); // Call ReturnByDeath
        inactionTimer = 0;
        return;
    }

    inactionTimer++;

    // Victory Condition: 180 seconds of total inactivity (180 * 60 frames)
    if (inactionTimer >= 180 * 60) {
        $gameSwitches.setValue(99, true); // Victory Switch
        // Logic for final cutscene
    }
}
