// Final Project Reset Logic
// Clears all variables and resets to Title Screen

// Wipe Gameplay Variables (1-499)
for (let i = 1; i <= 499; i++) { $gameVariables.setValue(i, 0); }

// Wipe Physical State (500-599)
for (let i = 500; i <= 599; i++) { $gameVariables.setValue(i, 0); }

// Wipe Meta-Knowledge (601-700) - Optional choice: keep or wipe?
// Wiping for "Hard Reset"
for (let i = 601; i <= 700; i++) { $gameVariables.setValue(i, 0); }

// Return to Title
SceneManager.goto(Scene_Title);
