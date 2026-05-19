// Backstep Mechanic Script
// If player is holding 'Cancel' (Z/X), set walk speed to slower (Speed 2).
if (Input.isPressed('cancel')) {
    $gamePlayer.setMoveSpeed(2);
} else {
    $gamePlayer.setMoveSpeed(4);
}
