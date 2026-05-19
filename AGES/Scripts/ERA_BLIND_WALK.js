// Blind Walk Sensory Deprivation Logic
// Set darkness tint (Flash/Fade) and remove background music.

$gameScreen.startTint([-255, -255, -255, 0], 60);
AudioManager.stopBgm();
AudioManager.playBgs({name: "heartbeat", volume: 80, pitch: 100});
$gameMap.setLightingRadius(3); // 3x3 visibility
