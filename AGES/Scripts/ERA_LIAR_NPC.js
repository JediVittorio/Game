// Liar NPC Dialogue Evolution
// Variable 701 tracks death count; Variable 601 tracks Trap Knowledge
let deathCount = $gameVariables.value(701);
let knowsTrap = $gameVariables.value(601);

if (deathCount > 0 && knowsTrap === 1) {
    $gameMessage.add("I know what you're going to do. I saw it happen in a dream.");
} else {
    $gameMessage.add("Follow me for safety!");
}
