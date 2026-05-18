# Stratum 6: The Meat Grinder — Sprite & Visual Design
**Status:** Deep Development Initial Draft

## 1. The Grinder’s Entities

### The Suicidal Remnant (NPC)
*   **Aesthetic:** A tiny, low-poly child sprite. It is desaturated (grayscale) and has a faint, jittering white outline.
*   **Animations:** 
    *   **The Seek:** It walks with a stiff, determined stride toward the nearest hazard.
    *   **The End:** When it hits a trap, it doesn't bleed; it simply "snaps" out of existence like a turned-off TV.

### The Ferryman (NPC)
*   **Aesthetic:** A large, broad-shouldered sprite wearing a black rubber apron and a realistic gas mask. He sits on a raft made of bone.
*   **Animations:** 
    *   **The Wait:** He occasionally checks a pocket watch or wipes a piece of bone with a rag.
    *   **The Raft-Body:** When killed, his sprite transforms into a flat, distended "Body-Tile" that floats on the blood lake.

### The Heartless Lord (Boss)
*   **Aesthetic:** A towering figure made of interlocking rusted chains. The hole in his chest is a "Void-Circle" that glows with a faint red light.
*   **Animations:** 
    *   **The Chain-Whip:** He lashes out with his arms, which extend like whips.
    *   **The Iron-Stomp:** He slams his foot down, causing the screen to shake and the background gears to speed up.

### The Starving Lord (Boss)
*   **Aesthetic:** A massive, pinkish-gray gelatinous mass. It has no head, only a colossal mouth that takes up its entire upper surface.
*   **Animations:** 
    *   **The Swallow:** It "gulps" a section of the 15x15 grid, replacing the tiles with "Void" tiles.
    *   **The Pulsate:** It ripples as it digests the map, emitting a wet squelching sound.

### The Sightless Lord (Boss)
*   **Aesthetic:** A slender, multi-armed figure wrapped in blood-stained bandages. Its head is a perfectly smooth, dark-gray stone.
*   **Animations:** 
    *   **The Stumble:** It moves in random directions, occasionally bumping into walls and letting out a hollow screech.
    *   **The Reach:** When it "hears" the player, its arms extend in all directions to search the immediate 3x3 area.

---

## 2. Environment Visuals

### Skin Conveyor Belts (Floor 26)
*   **Description:** A moving floor texture that looks like stitched-together pieces of leather and skin.
*   **Animations:** The texture scrolls rapidly. Blood-red particles fly off the "Spike-Grinder" at the end of the belt.

### Spinning Gears (Floor 26-30)
*   **Description:** Massive, rusted gears that are built into the background and some floor tiles.
*   **Animations:** They rotate at different speeds. Stepping on a "Gear-Tile" as it spins causes the player to spin and take damage.

### The Blood Lake (Floor 28)
*   **Description:** A dark-red liquid surface that is opaque and reflects nothing.
*   **Animations:** The surface is perfectly still until the player (or the raft) moves across it, creating thick, viscous ripples.

### The Meat Hooks (Hazard)
*   **Description:** Metal hooks that hang from the ceiling on chains.
*   **Animations:** They swing back and forth. If a hook passes over the player, it "grabs" the sprite and pulls it upward, followed by a Return by Death animation.
