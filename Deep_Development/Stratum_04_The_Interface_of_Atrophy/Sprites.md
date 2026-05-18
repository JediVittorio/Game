# Stratum 4: The Interface of Atrophy — Sprite & Visual Design
**Status:** Deep Development Initial Draft

## 1. Architectural Entities

### The Blind Oracle (NPC)
*   **Aesthetic:** A collection of vibrating, high-contrast white pixels that vaguely form a humanoid shape. He is translucent, allowing the background 'ERROR' walls to be seen through his body.
*   **Animations:** 
    *   **The Text-Scan:** A red line of text scrolls horizontally across his "face" area, reading "WARNING: SYSTEM ATROPHY DETECTED."
    *   **The Dissolve:** When he finishes speaking, he shatters into a cloud of pixels that float upward and vanish.

### The Architect of Atrophy (Boss)
*   **Aesthetic:** A towering vortex of floating green hexadecimal characters (0123456789ABCDEF). It has no physical boundaries; its "edges" are constantly shifting as code lines are added and deleted.
*   **Animations:** 
    *   **The Delete Stroke:** A massive arm of '0's and '1's sweeps across the map, "erasing" the tiles it touches (turning them to black void).
    *   **The Compile:** The Architect collapses into a dense, bright point of light before expanding into a new form (Phase 2).
    *   **The Mind-Drain Aura:** A visible rippling of the screen around the Architect, as if the heat from a CPU is distorting the air.

### The Beast of Silence (Entity)
*   **Aesthetic:** Completely invisible in the dark. In the light (provided by the slider), it appears as a pitch-black, 2D silhouette with no internal detail, but dozens of vibrating, animated "ears" along its spine.
*   **Animations:** 
    *   **The Stalk:** It moves with a jittery, frame-skipping animation, making no sound.
    *   **The Shriek:** If the player makes a sound, the Beast opens its "face" (which is just a jagged white tear in the silhouette) and a wave of static fills the screen.

---

## 2. Meta-Object Sprites

### The Displaced HP Bar (Object)
*   **Aesthetic:** A long, glowing green bar with 10 segments.
*   **Animations:** As the player pushes it, the segments flicker and turn red. If it hits a wall, the whole bar "glitches" (shaking and changing color) for a second.

### The Settings Slider (Object)
*   **Aesthetic:** A sleek, futuristic-looking track with a glowing white handle.
*   **Animations:** When pushed, the handle emits a soft blue glow. The background of the map brightens or darkens in real-time as the handle moves.

### The Corrupted Save Disk (Object)
*   **Aesthetic:** A giant, pixelated 3.5" floppy disk. The label is unreadable and appears to be melting.
*   **Animations:** It "bleeds" black pixels as it is moved. When pushed into the terminal, it spins rapidly and then explodes into a shower of "DELETED" text particles.

---

## 3. Environment Visuals

### ERROR Walls (Floor 16-20)
*   **Description:** Instead of stone or flesh, the boundaries of the rooms are composed of scrolling vertical lines of text.
*   **Animations:** The text scrolls upward at different speeds. Occasionally, a line will flash bright yellow or red with a "SYSTEM CRITICAL" warning.

### Hex-Void Pits
*   **Description:** Holes in the floor that look like "tears" in the digital fabric.
*   **Animations:** Looking into a pit reveals a scrolling "Blue Screen of Death" (BSOD) texture deep below.

### Scanline Clouds
*   **Description:** Moving horizontal lines that drift across the map like fog.
*   **Animations:** They flicker and "tear" the sprites they pass over, creating a momentary displacement effect.

### 1/0 Floor Grid
*   **Description:** The ground is composed of tiles that flip between '1' and '0' every few seconds.
*   **Animations:** Stepping on a '1' is safe. Stepping on a '0' as it flips to '1' inflicts a minor 'Electrical Shock' animation.
