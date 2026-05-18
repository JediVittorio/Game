# Stratum 2: The Hall of False Anchors — Sprite & Visual Design
**Status:** Deep Development Initial Draft

## 1. Purgatorial Sprites (Deceptive)

### The Smiling Traitor (NPC)
*   **Aesthetic:** A simple, 8-bit style peasant sprite. His smile is one pixel wider than it should be, giving him a manic, "uncanny valley" look.
*   **Animations:** 
    *   **The Guide-Walk:** A cheerful, bouncy walk. He waves the player forward with his lantern.
    *   **The Betrayal:** He turns to the player, his smile widening until his face splits in half. A single "Red Eye" appears in the crack before the player is pushed.
    *   **The Bridge:** A flat, grayscale version of the sprite lying face-down in the pit. It does not move.

### The Weeping Figures (Guilt Blocks)
*   **Aesthetic:** Heavy, stone-textured sprites. They look like 3D models that have been "down-rendered" into 2D sprites.
*   **Animations:** 
    *   **The Slide:** When not observed, they glide across the grid with zero animation (no walking, no movement). They just "teleport" closer frame by frame.
    *   **The Stun:** When struck by the **Swing** verb, the statue vibrates and small stone chips fly off.

---

## 2. Awakening Room (Phase 1: Intrusion)

### The Mirror Stalker (Entity)
*   **Aesthetic:** A translucent black silhouette. Its eyes are two glowing white dots.
*   **Animations:** It mimics the player’s idle and walking animations in the mirror, but on a 0.5-second delay. Occasionally, it will "reach out" toward the screen.

### Independent Shadows (Environment)
*   **Description:** The shadows of the furniture (the bed, the desk, the chair) do not match the light source.
*   **Animations:** They slowly "creep" across the floor, even when the protagonist is standing still. If the player steps on a furniture shadow, the screen flashes red.

---

## 3. Environment Visuals

### The Mimic Wall (Floor 6)
*   **Description:** A section of wall that looks like normal stone but has a faint, rhythmic "beating" animation.
*   **Animations:** When struck, it emits a spray of red pixels. When it "swallows" the player, the wall opens like a mouth.

### The Echo Chamber Statues (Floor 9)
*   **Description:** Statues of the Stage 2 "Hollow Hero."
*   **Animations:** They perform the exact same walking and pushing animations as the player, but with a ghostly "After-Image" trail following them.

### Lamps of Regret
*   **Description:** Small, brass lanterns mounted on walls.
*   **Animations:** The flame is blue and flickers erratically. The light cone it casts is jittery and fills with "Beige Static" at the edges.
