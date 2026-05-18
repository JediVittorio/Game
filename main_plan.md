# Project "Ages" — Master Game Plan (Eras 1-11 & Stage 2)

---

# Part I: Architectural Specifications for Project "Ages" (Eras 1-11)
## A Chronological Blueprint of Turn-Based RPG Eras in RPG Maker MZ

The development of the multi-era role-playing game (RPG) "Final Chrono-Bound Persona X: The Thousand-Year Tactical Expedition to Baldur's Original Sin" within the RPG Maker MZ engine demands a precise, technical understanding of both historical mechanical paradigms and the satirical meta-narrative. This design document provides the system architecture, mathematical formulations, RPG Maker MZ plugin implementation pathways, and narrative integration required to construct eleven distinct game eras, alongside a comprehensive, unabbreviated development checklist.

---

## Global Meta-Systems: The Neuro-Nostalgia VR and Lobby of Ages

### Narrative Premise and Global Architecture
The game operates within a failing "Neuro-Nostalgia VR" simulation suffering from "Fuzzy Memory." The central hub is the **Lobby of Ages**, a generic, heavily stereotyped medieval tavern operating on an unskippable 8-bar bardic lute loop. As each era is completed, protagonists populate this lobby, gaining self-awareness and complaining about their mechanical existence.

### Core Meta-Mechanics Setup
1.  **The Memory Wipe (No Auto-Save):** Traditional Game Over screens are disabled. A party wipe immediately resets the current era's variables to 0 and transfers the player back to the era's opening cutscene, forcing unskippable text.
2.  **The Save State "Cheese" Menu:** After a hidden variable `Deaths` exceeds 3, a gray-market 1990s emulation menu is unlocked. This allows players to manipulate RNG and save mid-animation.
3.  **Permanent Multipliers:** Beating an era *without* using the Save State menu sets a global switch (e.g., `Era_1_True_Clear = ON`), granting a permanent 1.5x stat multiplier required for Era 11.

#### RPG Maker MZ Implementation Blueprint
Use `VisuMZ_0_CoreEngine` and `VisuMZ_1_EventsMoveCore`.
*   **Custom Game Over:** Create a common event bound to a parallel process that checks `$gameParty.isAllDead()`. If true, fade screen to white, play a VHS static sound effect, reset era variables, and execute `Transfer Player` to the era's starting map.
*   **Save State UI:** Utilize a picture-based UI (using `Show Picture` and hover coordinates) to overlay a retro "File / Edit / Cheats" window.

---

## Era 1: DirtBound

### Narrative Premise and Spatial Setting
A deconstruction of 1990s suburban RPGs. The inciting meteor completely misses the planet. The protagonist, Less, wakes up to a boring Tuesday. Because the plot cannot advance without an apocalyptic threat, the player must aggressively escalate minor suburban disputes (e.g., terrorizing a lemonade stand) to generate enough cosmic anxiety to summon the final boss, "Adulthood."

### Core Game Loop Architecture
Combat uses a minimalist frontview perspective. Overworld enemies (harmless neighbors and children) avoid the player. The player must forcefully interact with them to initiate combat. 

### Character Paradigms
*   **Less:** The "Chosen Boy." Wields a striped shirt and crippling maternal neglect.
*   **Carla:** Telekinetic girl. Uses cosmic powers exclusively to retrieve snacks.
*   **Geoff:** Child inventor. Gadgets violate international arms treaties.

### Technical RPG Maker MZ Implementation Blueprint
Requires `NeelOdometerGaugePlugin.js` for the rolling HP mechanic.

#### Threat Escalation Eventing
Attach this to the Lemonade Stand event:
```javascript
// Adds +1 to Global Cosmic Anxiety Variable
$gameVariables.setValue(5, $gameVariables.value(5) + 1);
$gameMessage.add("You kicked over the lemonade stand. Cosmic dread increases.");
if ($gameVariables.value(5) >= 10) {
    // Summon the Final Boss: Adulthood
    $gameScreen.startFlash([255, 0, 0, 170], 60);
    BattleManager.setup(15, false, false); // Boss Enemy ID 15
    SceneManager.push(Scene_Battle);
}
```

---

## Era 2: Temporal Lever

### Narrative Premise and Spatial Setting
A parody of 16-bit time travel. The player accidentally steps on a prehistoric insect in 65,000,000 BC, resulting in the future year 2300 AD becoming a utopian society ruled by highly advanced, bipedal tomatoes. The apocalyptic parasite is now a disgruntled tomato farmer. The player must ruin the utopia with agricultural blight to force a boss fight.

### Core Game Loop Architecture
Battles occur seamlessly on the map (no battle screen transitions). Time travel is handled by jumping between identical maps with altered tilesets. 

### Character Paradigms
*   **Krono:** Mute swordsman. Communicates via property damage.
*   **Ruca:** Inventor scholar. Her inventions actively target the user.
*   **Toad:** Defrocked amphibian knight. Complains about alimony.

### Technical RPG Maker MZ Implementation Blueprint
Requires `Mog_ChronoEngine.js` for on-map ATB combat.

#### Dual Tech and Sabotage Script
To ruin the tomato crops, players use a Dual Tech (Fire + Slime).
```javascript
// Post-damage execution logic to combine physical/magic and apply blight state
let physicalDamage = (user.atk * 4.0) - target.def;
let magicalDamage = (a.mat * 9.6);
let totalDamage = Math.round(1.35 * (physicalDamage + magicalDamage));
target.gainHp(-totalDamage);
target.addState(45); // Agricultural Blight State
```

---

## Era 3: Last Fantasy Strategies

### Narrative Premise and Spatial Setting
Isometric tactical RPG satire. The "War of the Lions" is replaced by a municipal dispute over grid zoning laws. The opposing army refuses to fight because the player's starting tile is zoned for agriculture. Players must file digital permits (Charge Time) to cast magic.

### Core Game Loop Architecture
Movement and combat happen on a strict isometric grid. Turn initiative is dictated by filling out bureaucratic paperwork (Charge Time/CT).

### Character Paradigms
*   **Romza:** Disgraced heretic noble. Speaks in 3-minute text boxes.
*   **The Bureaucrat:** Support unit that fast-tracks municipal forms.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_2_GridBattleSystem.js`.

#### Bureaucratic CT Cast Time Script
```xml
<Cast Animation: 120>
<Cast Time: 500> <!-- Represents waiting weeks for the permit -->
<Custom Cast Text>
Filing Zoning Permit...
</Custom Cast Text>
```

---

## Era 4: Ultimate Illusion X

### Narrative Premise and Spatial Setting
Tropical aesthetics and forced laughing scenes. Tadpole's forced laughter creates a sonic boom that damages the party. The final summons have unionized and demand hazard pay, forcing the player to play an underwater sports spreadsheet simulator to afford their demands.

### Core Game Loop Architecture
Conditional Turn Battle (CTB). Players spend 80% of the era navigating menu spreadsheets to manage sports team salaries and merchandise.

### Character Paradigms
*   **Tadpole:** Asymmetrically dressed athlete. Laughter inflicts "Deafened."
*   **Luna:** Summoner priestess. Speaks in breathy, vague water metaphors.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_4_BattleSystemCTB.js`.

#### Sonic Boom Laughter Skill
```javascript
<Post-Damage Eval>
// Applies Sonic Boom damage and Deafened state to entire allied party
$gameParty.aliveMembers().forEach(member => {
    member.gainHp(-500);
    member.addState(12); // Deafened state
    member.startDamagePopup();
});
</Post-Damage Eval>
```

---

## Era 5: Origami Maurice: The Millennial Portal

### Narrative Premise and Spatial Setting
Papercraft RPG satire. The characters gain hyper-awareness of their fragile paper bodies. The final demon boss realizes it is made of cardboard and refuses to fight due to a fear of papercuts and humidity. The audience (art critics) riots and throws flaming anvils at the player.

### Core Game Loop Architecture
2.5D side-scrolling. Combat on a theater stage. The primary enemies become the audience, not the actual monsters.

### Character Paradigms
*   **Maurice:** Mute paper plumber. Folds into swans under stress.
*   **Shell-don:** Anxious turtle who reads encyclopedias during combat.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_2_QTE_TriggerSys.js`.

#### Audience Riot Environmental Damage
Run a parallel combat event every 3 turns:
```javascript
// Flaming garbage from audience deals maximum unblockable damage
let randomTarget = $gameParty.aliveMembers()[Math.floor(Math.random() * $gameParty.aliveMembers().length)];
randomTarget.gainHp(-9999);
randomTarget.startAnimation(105); // Flaming Anvil Animation
$gameMessage.add("The audience hurls a flaming anvil!");
```

---

## Era 6: Extraterrestrial-COM 2

### Narrative Premise and Spatial Setting
Punishing sci-fi tactical grid satire. The 99% hit chance RNG failure causes catastrophic mental breakdowns. The tactical grid dissolves into a circle of folding chairs for group therapy. The aliens get uncomfortable and try to leave.

### Core Game Loop Architecture
Cover-based tactical grid. The main mechanic involves dialogue trees used to aggressively gaslight soldiers into pulling the trigger.

### Character Paradigms
*   **Commander Rick:** Recon ranger. Speaks in tactical jargon. Pours drinks in his eyes.
*   **Vera:** Field specialist perpetually bleeding from shrapnel.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_2_GridBattleSystem.js`.

#### 99% Miss & Mental Breakdown Logic
```javascript
<Custom Target Evaluate>
// Forces a miss despite 99% accuracy if Save State cheese isn't active
if (!$gameSwitches.value(99)) { // Switch 99 = Cheats Active
    if (Math.random() < 0.99) {
        b.result().missed = true;
        a.addState(50); // Existential Crisis State (Stunned for 3 turns)
        $gameMessage.add(a.name() + " drops their weapon and questions physics.");
    }
}
</Custom Target Evaluate>
```

---

## Era 7: Deity: Initial Iniquity 2

### Narrative Premise and Spatial Setting
Surface chemistry RPG satire. Mundane actions result in nuclear devastation. Boiling tea creates steam, which mixes with cursed armor to make Necrofire, which kills a rat, causing a poison explosion that vaporizes the final boss and the continent.

### Core Game Loop Architecture
Isometric surface manipulation. The player must navigate via rigid menus to avoid touching the analog stick, as static electricity from walking triggers game-ending explosions.

### Character Paradigms
*   **Judgmental Knight:** Executes NPCs for victimless magic infractions.
*   **Blaze:** Pyromancer who solves all municipal problems with fire.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_1_SkillsStatesCore.js`.

#### Absurd Surface Chain Reaction Script
```javascript
<Post-Damage Eval>
if (target.isStateAffected(40)) { // Water
    target.removeState(40);
    target.addState(41); // Steam
    if (a.isStateAffected(60)) { // Cursed Armor
        target.removeState(41);
        target.addState(42); // Necrofire Steam
        // Vaporize the map
        $gameScreen.startFlash([150, 0, 255, 255], 120);
        $gameParty.allMembers().forEach(actor => actor.gainHp(-99999));
        $gameMessage.add("A localized nuclear chain reaction has erased the continent.");
    }
}
</Post-Damage Eval>
```

---

## Era 8: Mask 5: Majestic

### Narrative Premise and Spatial Setting
Modern social-sim RPG satire. Distracted by a minimum-wage beef bowl job, the protagonist fails midterms. The villain's cognitive palace transforms into a terrifying non-Euclidean Geometry Exam. Combat relies on solving actual trigonometry problems on the VR UI.

### Core Game Loop Architecture
Time management calendar system. Battles use "Press-Turn" mechanics where exploiting weaknesses grants a "1-More."

### Character Paradigms
*   **The Trickster:** Impossibly stylish wild card. Flunked math.
*   **Suji:** Delinquent flame brawler.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_3_BattleSystemSTB.js` and `VisuMZ_2_QTE_TriggerSys.js`.

#### Math QTE Skill Execution
```javascript
// Forces the player to solve a math problem to land an attack
let mathAnswer = prompt("Solve for x: 3x + 15 = 45", "");
if (mathAnswer === "10") {
    $gameVariables.setValue(15, true); // Success
    $gameMessage.add("Calculations optimal. Weakness struck!");
} else {
    $gameVariables.setValue(15, false); // Failure
    $gameMessage.add("You forgot to carry the one. Attack missed.");
    a.gainHp(-500); // Embarrassment damage
}
```

---

## Era 9: Boulder's Portal 3

### Narrative Premise and Spatial Setting
d20 Tabletop RPG dating sim satire. The apocalyptic mind flayer plot is entirely ignored because every NPC is aggressively trying to romance the player. Tactical combat collapses because companions waste actions reciting terrible poetry.

### Core Game Loop Architecture
D&D 5e rule set (Action, Bonus Action, Movement). Dice rolling dictates all interactions.

### Character Paradigms
*   **The Oathbreaker:** Broke holy vow by stealing municipal cutlery.
*   **Darkheart:** Aggressively withholds a clichéd tragic backstory.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_2_OrderTurnBattle.js` and `VisuMZ_4_DiceRollsRNGSeeds.js`.

#### Critical Failure Marriage Trap
```javascript
let roll = Math.floor(Math.random() * 20) + 1;
if (roll === 1) { // Natural 1
    $gameMessage.add("Critical Failure! You accidentally signed a legally binding marriage certificate with the Goblin.");
    $gameActors.actor(1).addState(70); // State 70: Legally Married
    $gameParty.loseGold(10000); // Alimony
}
```

---

## Era 10: Chiaroscuro: Voyage 33

### Narrative Premise and Spatial Setting
Surrealist French art RPG satire. The Paintress runs out of gray paint and uses fluorescent neon pink to initiate the apocalypse. The grim aesthetic is ruined, and the player drops complex real-time combos, causing characters to randomly dodge-roll backwards during tearful, emotional death scenes.

### Core Game Loop Architecture
Active Reactive JRPG. Real-time parries and combo stringing during turn-based selection.

### Character Paradigms
*   **The Captain:** Weary expedition leader burdened by artistic critique.
*   **Maelle:** Swift duelist ruined by the user's lack of manual dexterity.

### Technical RPG Maker MZ Implementation Blueprint
Requires `VisuMZ_2_QTE_TriggerSys.js` and `VisuMZ_3_EvolutionMatrixSkills.js`.

#### Dropped Input Cutscene Ruin
During the emotional death scene map event:
```javascript
let parryQTE = {
    timedHitPicture: "hug_prompt",
    pressInXFrames: 5, // Unfairly short window
    successSwitchId: 40,
};
PluginManager.callCommand(this, 'VisuMZ_2_QTE_TriggerSys', 'QTE: Timed Hit (OK)', parryQTE);

if (!$gameSwitches.value(40)) {
    // Player failed to press X in time
    $gameMessage.add("Maelle reaches out for a final embrace...");
    $gamePlayer.jump(-2, 0); // Character violently dodge rolls backward
    $gameMessage.add("The Captain dodge-rolls into a neon pink trash can.");
}
```

---

## Era 11: The Grand Pyre Crest Showdown (The Finale)

### Narrative Premise and Spatial Setting
The ten final bosses unionize (Union of Disgruntled Endbosses - UDE) and breach the core simulation firewall. The map is a geographically illogical amalgamation of all 10 eras. The UDE holds picket signs demanding dental plans and skippable monologues.

### Core Game Loop Architecture (The Clash Mechanism)
This era uses a massive isometric macro-map. When a protagonist initiates an attack, the game dynamically transitions to *that specific character's native combat system*. The player must context-switch through 40 years of RPG mechanics instantly. 

### The Ultimate Resolution
The player uses the "Save State" cheat mechanics to flawlessly chain combo the UDE Chairman (Maelle Parry -> Maurice Bounce -> Knight Electrocute -> Trickster All-Out Attack). The UDE surrenders out of sheer boredom from the player's save-scumming, signing a treaty to allow phase-skipping. The VR headset ejects the player to reality.

### Technical RPG Maker MZ Implementation Blueprint
This is the most complex implementation. The macro-map uses `VisuMZ_2_GridBattleSystem.js`. 

#### The Clash System Transition Script
Before battle initiates on the grid, run a Common Event triggered by the attacking actor's ID to change the global VisuStella Battle System setting via Plugin Commands:
```javascript
let attackerId = BattleManager._subject.actorId();

if (attackerId === 5) { // Maurice (Era 5)
    // Switch to Frontview, enable QTEs
    PluginManager.callCommand(this, 'VisuMZ_0_CoreEngine', 'Set Battle System', { system: 'dtb' });
} else if (attackerId === 8) { // Trickster (Era 8)
    // Switch to STB for Weakness Exploitation
    PluginManager.callCommand(this, 'VisuMZ_0_CoreEngine', 'Set Battle System', { system: 'stb' });
} else if (attackerId === 4) { // Tadpole (Era 4)
    // Switch to CTB
    PluginManager.callCommand(this, 'VisuMZ_0_CoreEngine', 'Set Battle System', { system: 'ctb' });
}
```

---

# Part II: Project "Ages" — Stage 2 Master Game Plan
### The Architecture of Anguish: Iterative Anguish, Purgatorial Descent & Psychological Horror

---

## Overview

Stage 2 is not a sequel. It is the truth Stage 1 was hiding. Every satirical element, comedic quest, and absurd character from the first half was a psychological defense mechanism — a fragile fiction the protagonist's mind constructed to avoid confronting a reality of unbearable weight. Stage 2 tears that fiction apart and forces the player to walk through the wreckage.

Where Stage 1 had ten colorful eras, Stage 2 has one world: a 35-floor descending labyrinth that functions as a physical map of the protagonist's fractured psyche. Where Stage 1 had RPG Maker MZ battle systems and plugin suites, Stage 2 has three verbs: **Swing**, **Push**, and **Speak**. The horror is not in the monsters. It is in the realization that every monster is someone the player used to laugh with.

---

## Part I: The Trigger Sequence

### 1.1 — The False Ending Popup

After the UDE Chairman's final health bar breaks in Era 11, the standard battle victory sequence is interrupted before the EXP screen loads. A plain dialogue box appears — no speaker portrait, no music, no transition:

```
  The simulation is complete.
  End the battle?

  ▶ YES
    NO
```

**If YES is selected:** The game fades to white. A save prompt appears. The file is overwritten with a new game start — the player is returned to the title screen with all progress erased. The Stage 1 game begins again from scratch. This is not a joke. It is a real, permanent reset.

**If NO is selected:** The dialogue box closes. The battle music does not resume. The battlefield is silent. A new wave of enemies does not appear. Instead, all ten protagonists from the Lobby of Ages materialize on the field — Less, Carla, Geoff, Krono, Ruca, Toad, Romza, Tadpole, Luna, Maurice, Shell-don, Commander Rick, Vera, The Judgmental Knight, Blaze, The Trickster, Suji, The Oathbreaker, Darkheart, The Captain, Maelle — fully armed, fully statted, and now hostile.

### 1.2 — The Protagonist Battle

The player inherits the full combined skill set and ability pool of all twenty protagonists simultaneously. Every skill, combo tech, parry system, dual tech, badge power, and persona from all ten eras is available in a single unified action menu — organized by era of origin.

The protagonists fight using their native era combat logic:
- Less and Carla use Rolling HP Odometer rules — they cannot be instantly killed; their HP drains gradually, giving them brief windows to be healed by other protagonists.
- Toad and Krono use ATB gauges — they attack on their own timing.
- Romza uses Grid position bonuses — he deals more damage if attacking from the player's flank.
- Commander Rick's death is permanent for this fight. If Rick falls, he stays down.
- The Trickster swaps elemental affinity every three turns, requiring the player to adapt.
- The Captain parries every third attack automatically.

There is no way to cheese this fight with Save States. The cheese menu is locked behind a message:

```
  ERROR: SIMULATION INTEGRITY COMPROMISED
  SAVE FUNCTION UNAVAILABLE
```

The fight is not mechanically impossible. It is mechanically demanding. The player has access to every system they spent the entire game learning. This is the exam.

### 1.3 — The Aftermath

When the last protagonist falls, their sprite does not display a death animation. They simply stop moving. The battlefield goes silent again. One by one, every sprite on the field begins to pixelate — dissolving upward like smoke. The loot screen never appears.

A single line of dialogue appears, unattributed:

```
  "... I knew you could do it."
  "I just didn't know if you'd want to."
```

The screen cuts to black. No fanfare. No credits. No save prompt.

### 1.4 — The Real World Transition

The black screen holds for eight full seconds. Then: the sound of a chair creaking. The sound of carpet. The sound of breathing.

The player's perspective is now first-person, rendered in a completely different art style — stark, monochromatic, hyper-realistic pixel work with no color. The player looks down at their own hands. The Neuro-Nostalgia VR headset is in their hands. They set it on the desk in front of them.

The room around them is visible for exactly four seconds before the screen dims. During those four seconds, if the player examines the room carefully, they will notice:

- A calendar on the wall showing a specific date (cross-referenced in Stage 2 lore as significant)
- A framed photograph face-down on the desk
- A notepad with a partially visible line of text
- A door ajar, with light coming through it — the only warm color in the entire frame

Then the screen goes completely dark. Not a fade. An immediate cut to black.

A voice, heard for the first and only time in the entire game, speaks:

```
  "You weren't supposed to go further."
```

Stage 2 begins.

---

## Part II: The Core Meta-Systems

### 2.1 — Return by Death Protocol (No Game Over)

Traditional Game Over screens and manual save points are completely eradicated in Stage 2. The **Return by Death Protocol** is the only progression system.

**The Anchor (Every 5 Floors):**
The labyrinth is divided into blocks of 5 floors. The player secures a new Checkpoint (Anchor) only by surviving Floors 1–4 of a Stratum consecutively. Floor 5 is the physical and narrative anchor room.

**The Loop:**
If the player is killed, falls into a trap, is executed by an NPC, or permanently soft-locks a puzzle on any floor between checkpoints, they are violently pulled back to the last valid Anchor. There is no choice. There is no fade. There is only the flash of red light and the sound of the scream.

**The Horror of the Anchor:**
The player has no control over when a checkpoint updates. It only updates when a perfect, specific sequence of puzzle-action execution is achieved across an entire Stratum. Every mistake resets the Stratum. Not the floor — the Stratum.

### 2.2 — Epistemological Progression (Meta-Knowledge)

Physical items, health, NPC dialogue states, and room geometry reset upon death. The protagonist's **memory** does not.

- **Precognition:** A trap that kills the player on Loop 1 unlocks a Meta-Knowledge variable. On Loop 2, the player can inspect the tile to reveal new options.
- **Paradoxical Progression:** The only way to open a door on Floor 3 may be to die on Floor 4, read the password hidden in the death screen, and return with it memorized.
- **NPC Dialogue Evolution:** NPCs forget the player died. The player remembers everything. New dialogue options unlock automatically. A traitor NPC on Loop 1 can be confronted on Loop 2 with full knowledge of what they're about to do.

### 2.3 — The Variable Architecture

Stage 2 uses a separate variable block from Stage 1 to prevent conflicts.

| Variable Range | Purpose | Reset on Death? |
|---|---|---|
| Vars 500–599 | Physical State (keys, blocks, NPC life states, room flags) | YES — wiped by RbD event |
| Vars 601–700 | Meta-Knowledge (trap locations, passwords, NPC dialogue states, loop context) | NEVER |
| Var 701 | DEATH_COUNT — canonical death counter | NEVER |
| Var 702 | Anchor Map ID | Updates on checkpoint |
| Var 703 | Anchor X coordinate | Updates on checkpoint |
| Var 704 | Anchor Y coordinate | Updates on checkpoint |
| Var 705 | Stratum Level (1–7) | NEVER |
| Var 706 | Mind/Will resource (0–100) | Resets to last checkpoint value |
| Var 707 | Guilt resource (0–100) | Partially persists across loops |
| Var 708 | Inaction Timer (Floor 33/35) | Resets per floor |

**Return by Death Master Common Event:**
```javascript
// Stage 2 RbD — Master Death Event
$gameScreen.startFlash([255, 0, 0, 170], 10);
AudioManager.playSe({name: 'glitch_scream', volume: 100, pitch: 80});

// Increment canonical death count
$gameVariables.setValue(701, $gameVariables.value(701) + 1);

// Reset all physical state variables (500–599)
for (let i = 500; i <= 599; i++) {
    $gameVariables.setValue(i, 0);
}

// Transfer to last Anchor
$gamePlayer.reserveTransfer(
    $gameVariables.value(702), // Anchor Map ID
    $gameVariables.value(703), // Anchor X
    $gameVariables.value(704), // Anchor Y
    2, 0 // Face Down, Black Fade
);

// Update Mind resource — each death costs 2 Mind permanently
let currentMind = $gameVariables.value(706);
$gameVariables.setValue(706, Math.max(0, currentMind - 2));
```

---

## Part III: The Three Verbs

The player possesses only three fundamental interactions in Stage 2.

**1. The Rusted Blade (Swing):**
The sword is rarely used for traditional combat. It cuts corrupted flesh blocking doorways, severs entity line-of-sight, tests walls for false architecture, parries projectiles, and sometimes simply destroys things that need to be destroyed. The sound it makes changes based on what it strikes — a wet sound means flesh, a metallic ring means a hidden mechanism, silence means a phantom.

**2. The Weight of Guilt (Push):**
The player pushes coagulated masses of repressed memory, petrified victims, and grotesque monoliths across the grid. Pushing slows the player completely, leaving them vulnerable to hazards during the action. The Push verb is almost always the correct solution, and almost never the fastest one.

**3. The Choice of Agency (Speak / Strike):**
Every NPC can be spoken to, yielding lore, hints, or requests. Pressing Swing while facing an NPC immediately abandons dialogue and initiates a Clash Puzzle on the grid. Defeating an NPC may yield a required key — but it permanently alters the floor's geometry and may lock the player out of the True solution, forcing a Return by Death to reset.

The player must learn — through death, through guilt, through loop after loop — that violence is always the fastest solution and almost never the right one.

---

## Part IV: The Purgatorial Room (Awakening Room Degradation)

The Awakening Room is the protagonist's real bedroom, rendered in Stage 2's stark monochromatic style. It serves as the anchor point for Checkpoints 1, 2, and 3 before eventually degrading beyond recognition.

The room changes as DEATH_COUNT increases. This is not cosmetic — each phase imposes new mechanical penalties.

| Death Count | Phase Name | Environmental State | Mechanical Consequence |
|---|---|---|---|
| 0 | **Denial** | Grayscale replica of protagonist's bedroom. Orderly. Silent. | Full health restore at bed. Normal movement speed. |
| 5–14 | **Intrusion** | Shadows detach and move independently. Stage 1 BGM plays backwards at 50% pitch. | Saving costs 5 Mind resource. The room is beginning to exact a toll. |
| 15–29 | **Fragmentation** | Room geometry fractures. Walls reveal starless void. Mirrors show monstrous silhouettes, not the protagonist. | Bed restores health to 80% maximum only. UI elements shake when player remains in room longer than 30 seconds. |
| 30–49 | **Atrophy** | Bloodstains. Discarded weapons from previous loops. Echoing death screams. Doors shift locations each visit. | Entering the room inflicts temporary Despair debuff (−30% movement speed). Saving requires spending 10 Guilt resource. |
| 50–99 | **The Voided State** | Floating platform in an absolute void. Towering eldritch eyes surround it. Bed has turned to ash. | Saving permanently sacrifices 10% maximum HP. No full health restore available — player must manage with whatever HP they arrive with. |
| 100+ | **Erasure** | No room. Only a coordinate in blank darkness. | The save point no longer exists. Return by Death is the only continuation. The protagonist has run out of self. |

**Room Degradation Implementation:**
Create six separate map variants of the Awakening Room (Map IDs 103–108). At every checkpoint entry, a parallel process reads Variable 701 (DEATH_COUNT) and transfers the player to the appropriate map variant. Each map variant has its own BGM, tint, event configuration, and bed behavior.

---

## Part V: The 35-Floor Labyrinth — Full Stratum Blueprint

### Stratum 1: The Shallow Graves (Floors 1–5)
**Aesthetic:** Grayscale, pixelated distortion of the Stage 1 overworld. Familiar layouts made wrong.

- **Floor 1 — The Re-Education:** Introduces Push. The Lost Guide NPC demonstrates the verb. Push a slab of compacted memory off a pressure plate. Striking the Guide transforms him into a minor horror — the game's first lesson that violence has consequences.
- **Floor 2 — The Phantom Strike:** Introduces Swing. Corrupted roots block the path. Slashing alerts a stationary, invincible Watcher. Player must time swings to move between cover.
- **Floor 3 — The Mandatory Sacrifice:** The floor collapses on entry — first death is mandatory and scripted. On Loop 2, the player pushes a petrified Stage 1 NPC (recognizable as a Onett citizen) onto the fragile tiles to test their weight, sacrificing a corrupted memory to cross.
- **Floor 4 — The Rhythm of Guilt:** Invisible arrow traps. The player must die repeatedly to map every trigger coordinate. The traps are arranged in the exact attack pattern of the Era 1 "Gigyas" final boss — the first hidden Stage 1 callback.
- **Floor 5 — Checkpoint 1 (The Awakening Room Phase 0):** The room is pristine. The Glitch Barista stands in the corner. She offers cryptic warnings about the next Stratum and sells nothing. She is the only NPC in Stage 2 who never becomes hostile.

---

### Stratum 2: The Hall of False Anchors (Floors 6–10)
**Aesthetic:** Claustrophobic stone corridors. Weeping statues. Narrow lighting cones.

- **Floor 6 — The Mimic:** A fake safe room. The bed devours. On Loop 2, swinging at the walls — if they bleed, the room is false, and a hidden staircase opens. The wall blood reveals a code (Meta-Knowledge Variable 601).
- **Floor 7 — Weaponized Trust:** The Smiling Traitor NPC offers to guide the player across a dark maze. Following leads to a spike pit. Loop 2: unlock dialogue interrupt *(Draw Sword)* "I know what you're going to do." The player can then push the traitor into the pit — the corpse becomes a bridge. This is the first moment the game forces the player to actively choose to harm someone they know is going to harm them.
- **Floor 8 — Weeping Angels:** Guilt Blocks slide toward the player when their back is turned. Player must backstep across the room, using Swing to temporarily stun the blocks. No facing away allowed.
- **Floor 9 — The Echo Chamber:** Stone statues mirror the player's movements on a 1-second delay. If a statue touches a spiked wall, the player dies. Player must route pushes and swings to safely deposit every statue into designated holding pens without ever being followed into a spike wall.
- **Floor 10 — Checkpoint 2 (Intrusion):** The Glitch Barista is gone, replaced by a puddle of black fluid. The fluid contains a reflection that moves independently.

---

### Stratum 3: The Moonscorched Menagerie (Floors 11–15)
**Aesthetic:** Rusted, surgical interpretation of Stage 1's lively towns. The people are still here. They are just different now.

Every enemy in this Stratum is a specific Stage 1 character physically transformed by psychological truth.

- **Floor 11 — The Taskmaster of the Void:**
  *(Originally: The Enthusiastic Quest Giver NPC)*
  A multi-limbed entity bound by glowing red strings, constantly rearranging debris into pointless patterns, weeping silently. Does not attack. Forces the player to complete a complex UI-based push puzzle within 10 seconds. The required pattern is written in blood on the death screen. The player **must** die to see the solution — a puzzle where the only way forward is to first fail completely.

- **Floor 12 — The Sentinel of Regret:**
  *(Originally: The Bumbling Town Guard)*
  A hulking, blind mass of fused shields and armor plating. Invincible to Swing. Immune to damage. Emits a passive Guilt aura — attacking it reflects the damage back as a permanent Guilt stat increase. Must be bypassed via stealth misdirection using Screaming Bell push-blocks, or by offering a sentimental item that allows one interaction: asking it to step aside. It will. Then it will seal the door behind you, trapping itself inside.

- **Floor 13 — The Devouring Ego:**
  *(Originally: The Overpowered Mentor Figure)*
  A withered core surrounded by a halo of shattered mirrors, projecting illusions of its past glory. Perfectly copies the player's verbs. Cannot be out-damaged. The player must refuse to swing — standing still, accepting hits, until the entity starves of attention and validation and ceases its attacks. Mirrors the Sovereign of Stasis encounter on a smaller scale, teaching the mechanic early.

- **Floor 14 — The Ledger of Agony:**
  *(Originally: The Cheerful Merchant)*
  Drains inventory items instead of HP. To cross, the player must willingly drop valuable items as distractions. The Stage 1 Merchant NPC is here — recognizable, begging. Striking him yields a massive gold coin that permanently distracts the Ledger, but inflicts maximum Guilt (movement halved for the rest of the Stratum). The morally pure solution involves talking — he will tell a player who has never struck him where the exit is. It has been there the whole time.

- **Floor 15 — Checkpoint 3 (Fragmentation):**
  Room geometry fractures. The Architect of Atrophy manifests here for the first time — not as a boss, but as a presence. A formless dark shape in the corner that does not move, does not attack, but visibly saps Variable 706 (Mind) by 1 per second while the player is in the room. The longer the player rests here, the more Mind they lose. Rest fast or rest never.

---

### Stratum 4: The Interface of Atrophy (Floors 16–20)
**Aesthetic:** The game's own code begins to rot. Floating hexadecimal grids and interface glitches replace stone and wood.

The Architect of Atrophy is the governing presence of this Stratum — it does not appear physically, but its influence degrades the player's relationship with the game's interface.

- **Floor 16 — Meta-Weight:**
  A massive door requires weight of 50 on a pressure plate. The room is empty. The player must open the meta-menu, select their Max HP bar, and use Push to literally drag the UI element off the menu and onto the map tile as a physical, pushable object. Doing so permanently reduces Max HP by 20%. The puzzle is solved. The cost is permanent.

- **Floor 17 — The Hostile Pause:**
  Pausing the game no longer stops entity movement. Menu navigation occurs in real-time while enemies hunt the player. The player must navigate menus blindly under pressure — the intended psychological state of an anxiety attack.

- **Floor 18 — The Brightness Slider:**
  A pitch-black room. A Blind Oracle NPC warns of a beast that hunts by sound. The player must locate a physical "Settings Slider" block and push it to a brightness node — literally pushing an in-game settings variable onto the map as geometry to increase the tint and see the exit. The beast is only able to hear the player when the screen is dark; turning on the light also increases the sound the player makes.

- **Floor 19 — Erasing the Save:**
  A wall of corrupted data blocks the path. The player must push a "Corrupted Save File" block into an Erase Terminal. This permanently removes the Save Menu option from the pause screen for the rest of Stage 2. Return by Death becomes the only progression tracking mechanism. The game does not warn the player before they push. They find out afterward.

- **Floor 20 — Checkpoint 4 / Architect of Atrophy Boss Encounter:**
  The Architect of Atrophy fully manifests. It does not have a health bar — it has a Mind bar. The Architect's Mind bar depletes as the player demonstrates willingness to sacrifice mechanical capability.
  
  **Architect Encounter Mechanics:**
  - Phase 1: The Architect drains Variable 706 (Mind) by 5 per second. The player must push three Mechanical Sacrifice blocks into terminals to freeze the drain. Each block sacrifices one mechanic: sprint, pause menu access, or the in-battle item menu.
  - Phase 2: The Architect shows the player illusions of sacrificing these mechanics while restoring them — offering them back. Accepting the restoration causes instant Return by Death. Refusing each restoration depletes the Architect's Mind bar by 25%.
  - Phase 3: The Architect's Mind bar reaches zero. It withdraws. The checkpoint bed appears. The player can rest — but the room carries Atrophy Phase penalty (bloodstains, movement debuff on entry).

---

### Stratum 5: The Court of the Forgotten (Floors 21–25)
**Aesthetic:** A twisted, decaying courtroom. NPCs represent the protagonist's repressed justifications and excuses.

- **Floor 21 — The Gatekeeper:** Password changes every Return by Death cycle, mathematically tied to the frame the player entered the floor. Essentially impossible without violence. Striking the Gatekeeper initiates a brutal 5-minute evasion puzzle. Winning yields the door. Losing yields knowledge of the pattern for next time.
- **Floor 22 — The Jester's Trial:** A Jester NPC actively undoes the player's block pushes in real-time. The player must kill the Jester on Loop 1 to learn the geometric puzzle solution peacefully. Then RbD back and solve the puzzle while the Jester disrupts them, using the knowledge of the solution to work faster than the disruption. Kill to learn. Return to apply.
- **Floor 23 — The Liar's Paradox:** Two identical NPCs. Two doors. Both lead to instant death on Loop 1. Killing one NPC causes the survivor — traumatized by witnessing the player murder their twin in a previous timeline — to reveal a hidden third door in sheer terror. The only way to find safety is to be witnessed committing an act of violence by someone who survives it.
- **Floor 24 — The Guillotine:** A scripted capture cutscene. The Executioner reads the player's crimes: exact DEATH_COUNT, NPCs killed by name, items destroyed, sacrifices made. Then executes the player. On Loop 2, the player uses a rusted sword from Floor 23 to jam the blade tracks. Freedom is available for anyone who has already died once and remembers they had the tool the whole time.
- **Floor 25 — Checkpoint 5 / Sovereign of Cognitive Dissonance:**
  The checkpoint bed is surrounded by the ghost apparitions of every NPC the player struck and killed — they whisper constantly.

  The Sovereign of Cognitive Dissonance manifests as the player attempts to rest. It rules over the remnants of Stage 1's satirical layer — its domain is everything the simulation used to be.

  **Sovereign Encounter Mechanics:**
  - The Sovereign does not fight in the traditional sense. It **contradicts**. Every menu action displays the wrong result. Swinging executes Push. Pushing executes Swing. The controls are not reversed — they are randomly shuffled per frame.
  - The only constant is Speak. The Speak verb always functions correctly.
  - The player must navigate dialogue trees with six NPCs who represent the six surviving Stage 1 comedic archetypes, persuading each one to reject their satirical persona and accept their Stage 2 truth. Each NPC convinced visibly weakens the Sovereign.
  - When all six are convinced, the Sovereign's contradictions collapse and it dissolves. The UI functions normally again.
  - The sacrifice: the player must have willingly and permanently surrendered the health bar UI display during this encounter. Combat from this point until the end of Stage 2 is played with no visible HP indicator.

---

### Stratum 6: The Meat Grinder (Floors 26–30)
**Aesthetic:** Rusted industrial slaughterhouse. All previous hazard types combined into dense real-time action puzzles.

- **Floor 26 — The Conveyor of Guilt:** A massive conveyor belt moving left. Guilt Blocks spawn continuously from the right. The player sprints against the belt dodging invisible arrow traps while periodically turning to face Guilt Blocks, freezing them before they crush the player against the wall.
- **Floor 27 — The Escort Mission From Hell:** Escort "The Suicidal Remnant" NPC across a spike-trap floor. The NPC actively seeks traps. The player must use Push to physically shove them out of harm's way while fighting minor horrors with Swing. If the Remnant dies, the door seals permanently. No RbD gets the Remnant back. The player must confront a sealed door — and find the alternate path that the Remnant would have shown them if they had survived.
- **Floor 28 — The Blood Lake:** A chasm of something dark. The player needs to cross. A neutral NPC sits on the shore. Two solutions: a 15-minute block-push puzzle that builds a bridge using debris, or striking the neutral NPC and using their floating body as a raft. The bridge route is slower but yields lore. The body route is faster but adds to the guilt counter with no mechanical benefit — only speed.
- **Floor 29 — Gauntlet of the Moonscorched:** Boss Rush. All four Moonscorched entities from Stratum 3 appear simultaneously. They cannot be killed individually — they must be manipulated into triggering each other. The Devouring Ego mirrors the Sentinel's attack, which triggers the Sentinel's shield to reflect back into the Taskmaster's strings, which bind the Ledger in place long enough for the player to push the final Guilt Block into the Ledger's hunger-gap. The sequence can only be discovered by dying repeatedly to observe each entity's behavior independently, then synthesizing the chain.
- **Floor 30 — Checkpoint 6 / Lords of the Void:**
  The Awakening Room is gone. Only a bed floating in void.

  Three Lords of the Void manifest simultaneously — minor deities representing emotional deficits, each missing a physical organ corresponding to their sin:
  - **The Heartless Lord** (missing a heart): Cannot register compassion. Attacks without hesitation. Immune to Speak. Must be destroyed with Swing.
  - **The Starving Lord** (missing a stomach): Constantly consuming the room's architecture. As time passes, the room shrinks. Must be bypassed immediately with Push before the floor vanishes.
  - **The Sightless Lord** (missing an eye): Cannot reason or perceive space. Stumbles blindly. Must be guided into a pre-arranged spike trap via auditory bait — the player makes noise in specific locations to steer it.

  The three Lords never directly coordinate — but their coexistence creates compounding hazards. Defeating all three in a single loop before the Starving Lord consumes the floor sets the Checkpoint 6 Anchor.

---

### Stratum 7: The Depths of Apathy (Floors 31–35)
**Aesthetic:** Total sensory deprivation. A black void with only the immediate 3×3 grid around the player illuminated. Music cuts entirely — only heartbeat and footsteps remain.

- **Floor 31 — The Blind Walk:** The entire 15×15 grid is invisible. Navigation via audio cues only. High-pitched tone = wall. Low rumble = pit. One wrong step = Return by Death to Floor 30.
- **Floor 32 — The Echo of the Strike:** Fight an invisible entity using only the Swing sound to locate it. Swoosh = miss. Wet thud = hit. Track it blindly. Push it into an invisible spike trap. The player cannot see anything. They must swing, listen, and push from memory.
- **Floor 33 — The Hall of Apathy:**
  The player must walk in a straight line for 3 consecutive real-time minutes.
  
  During this walk:
  - At 45 seconds: The game simulates a crash (black screen + error sound). It has not crashed. Pressing any button causes an actual Return by Death.
  - At 90 seconds: The game simulates a controller disconnect message. It has not disconnected. Pressing any button causes Return by Death.
  - At 135 seconds: The game reduces frame rate to 10 FPS and fills the screen with static. The directional input still works. The player cannot see themselves walking.
  - At 180 seconds: The screen clears. A door appears at the end of the corridor where there was none before.
  
  The door was always there. The player could not see it because they were not willing to walk toward nothing for three minutes.

- **Floor 34 — The Final Sacrifice:**
  A furnace. A physical block labeled "SWING." To open the exit door, the player must push the Swing block into the furnace and burn it. The player permanently loses the ability to use the Swing/Attack verb. They enter Floor 35 able only to move and push.

  This is not a trick. The Sovereign of Stasis cannot be defeated with the sword. Burning it is the prerequisite for the correct solution. The player who still has their sword when they reach Floor 35 has not yet understood what the game has been teaching them.

- **Floor 35 — The Sovereign of Stasis:**
  See Part VI: The Final Confrontation.

---

## Part VI: The Final Confrontation — The Sovereign of Stasis

The Sovereign occupies the center of a 15×15 grid. It has no health bar. The player has no sword.

### Phase 1 — The Bait
The Sovereign conjures hyper-realistic illusions of every Stage 1 character: Less, Carla, Geoff, Krono, Ruca, Toad, Romza, Tadpole, Luna, Maurice, Shell-don, Commander Rick, Vera, The Judgmental Knight, Blaze, The Trickster, Suji, The Oathbreaker, Darkheart, The Captain, and Maelle — all screaming, all descending toward spike ceilings, all begging to be saved.

The player has Push. Pushing any illusion causes it to explode — fatal damage, Return by Death to Floor 30. The player will die here dozens of times attempting to save them. There is no way to save them. They were never real. They were never there. They were Stage 1. Stage 1 is over.

### Phase 2 — The Truth
After enough Return by Death loops, the player will notice: the Sovereign is not moving. It has not attacked. It has never attacked. Every death in Phase 1 was the player attacking themselves — running toward the illusions, triggering their explosion, returning to Floor 30 through their own action.

The Sovereign feeds on the player's conditioned need to solve the encounter, to act, to push, to win. Every input the player makes is more sustenance.

### Phase 3 — The Hostage State
The Sovereign traps the player in the center of the room. The music — already absent — is replaced by a single low tone that does not change. The combat UI vanishes. The entity simply stares at the screen.

The game does not freeze. Ambient particle effects continue. The torch in the corner flickers. The player character's idle animation plays. Time passes.

The player is trapped in a room with the eldritch truth of their own trauma, with no tools, no weapons, no UI, and no enemies to fight. The only thing left is to wait. And then to let go.

### The Resolution
After 3 continuous real-world minutes of complete inaction:
- No directional input
- No button presses
- No menu access attempts

The Sovereign crumbles. Not violently — it simply falls apart, piece by piece, like it was always going to. Like it was waiting for permission.

**Implementation — The Inaction Timer:**
```javascript
// Parallel Process — Floor 35 Inaction Timer
// Runs every frame. Any input resets timer and triggers RbD.

if (Input.isTriggered('ok') || Input.isTriggered('cancel') || 
    Input.isTriggered('left') || Input.isTriggered('right') ||
    Input.isTriggered('up') || Input.isTriggered('down')) {
    
    $gameVariables.setValue(708, 0); // Reset inaction timer
    // Trigger Return by Death event
    $gameTemp.reserveCommonEvent(RbD_EVENT_ID);
    
} else {
    // Increment timer (runs at 60 frames per second)
    let timer = $gameVariables.value(708);
    $gameVariables.setValue(708, timer + 1);
    
    if (timer >= 10800) { // 180 seconds × 60 frames
        // Victory — trigger ending sequence
        $gameSwitches.setValue(200, true); // Switch 200: Stage 2 Complete
        $gameTemp.reserveCommonEvent(ENDING_EVENT_ID);
    }
}
```

---

## Part VII: The Ending Sequence

When the Sovereign crumbles, the screen does not flash white. It does not play a victory fanfare. The lighting simply... normalizes. The void becomes a room. A real room. The same room from the transition.

The player walks to the desk. The headset is still there. The framed photograph — the one that was face-down — is now upright. The player can approach it and examine it. The photograph shows the protagonist with another person. The other person's face is not obscured. The player will recognize them as the Stage 2 narrative's core trauma figure — referenced in environmental details throughout the descent.

The notepad on the desk is also legible now. It reads:

```
  "Still here.
   Remembered everything this time.
   Think I'm ready to go get some air."
```

The player walks to the door — the one with warm light coming through it. They open it. The screen holds on the open door, warm light spilling into the room, for ten seconds. Then it fades to white — not black. White.

The credits roll over absolute silence. No bardic lute. No BGM. The credits list every NPC the player encountered in Stage 2, every protagonist from Stage 1, and at the very end, a single credit:

```
  "To everyone who stayed in the room."
```

---

## Part VIII: Stage 2 Director Checklist

### Phase A — Stage 2 Bootstrap
- [ ] Confirm Stage 1 is fully complete and all ten era flags (Switches 10–19) are verified
- [ ] Install any Stage 2-specific plugins: `VisuMZ_1_EventsMoveCore`, `VisuMZ_PictureCommonEvents`
- [ ] Partition Variable ranges: lock Vars 500–599 (physical), 601–700 (meta-knowledge), 701–708 (system)
- [ ] Create RbD Master Common Event with correct variable wipe and anchor transfer logic
- [ ] Create six Awakening Room map variants (Map IDs 103–108) with degradation thresholds
- [ ] Create Degradation Router — parallel process reading Var 701 and transferring to correct room variant
- [ ] Create Checkpoint Anchor Writer — bed event that updates Vars 702–704
- [ ] Create DEATH_COUNT-based NPC Dialogue State Machine framework

### Phase B — The Trigger Sequence
- [ ] Create False Ending Popup event (interrupt after UDE Chairman defeat)
- [ ] Create YES branch: overwrite save, return to title, true hard reset
- [ ] Create NO branch: protagonist spawn event with full combined skill set
- [ ] Balance protagonist battle (test all 20 protagonists active, no Save State available)
- [ ] Create protagonist defeat sequence (pixelation dissolve animations)
- [ ] Create real-world room transition sequence (first-person, monochrome, 4-second observation)
- [ ] Create environmental detail events (calendar, photograph, notepad, door)
- [ ] Create Stage 2 opening voice line event and screen cut to black

### Phase C — Stratum 1–3 (Floors 1–15)
- [ ] Build all 15 floor maps (15×15 grid, unique puzzle layout per floor)
- [ ] Implement Mandatory Death event on Floor 3 (scripted, no player agency)
- [ ] Implement invisible arrow trap grid on Floor 4 with death-screen password reveal
- [ ] Create Glitch Barista NPC with all dialogue states (one per Stratum)
- [ ] Create all four Moonscorched enemy encounters (Floors 11–14) with Stage 1 character visual callbacks
- [ ] Create Architect of Atrophy presence event on Floor 15 (Mind drain passive, no boss fight yet)
- [ ] Verify Meta-Knowledge variables unlock correctly after each loop

### Phase D — Stratum 4–5 (Floors 16–25)
- [ ] Implement UI Meta-Push on Floor 16 (HP bar as physical pushable object)
- [ ] Implement real-time menu on Floor 17 (entities continue movement during pause)
- [ ] Implement Settings Slider as physical block on Floor 18
- [ ] Implement permanent Save Menu removal on Floor 19
- [ ] Build Architect of Atrophy boss encounter on Floor 20 (Mind drain, three-phase sacrifice)
- [ ] Build Sovereign of Cognitive Dissonance encounter on Floor 25 (control shuffle, NPC persuasion chain)
- [ ] Implement permanent HP bar display removal after Floor 25

### Phase E — Stratum 6–7 (Floors 26–35)
- [ ] Build all Stratum 6 floors with compound hazard combinations
- [ ] Implement Escort NPC behavior on Floor 27 (active self-harm seeking pathfinding)
- [ ] Build Blood Lake dual-solution on Floor 28 (bridge vs. body route)
- [ ] Build Floor 29 Boss Rush (four-entity chain manipulation sequence)
- [ ] Create three Lords of the Void encounters on Floor 30 (simultaneous, independent behavior)
- [ ] Build Floor 31 (audio-only navigation, all visual data hidden)
- [ ] Build Floor 32 (invisible entity, Swing-sound tracking)
- [ ] Build Floor 33 (3-minute walk, fake crash/disconnect simulation events)
- [ ] Build Floor 34 (Swing verb sacrifice, furnace push event)
- [ ] Build Floor 35 Sovereign of Stasis (inaction timer, illusion spawn, 3-minute solution)

### Phase F — Ending & Polish
- [ ] Build ending cutscene sequence (room normalization, photograph reveal)
- [ ] Create photograph lore object (Stage 2 trauma figure visible)
- [ ] Create notepad text event
- [ ] Create door-to-white ending fade (10-second hold)
- [ ] Write and implement full Stage 2 credit roll
- [ ] Test full Stage 2 run: verify RbD always returns to correct anchor, Meta-Knowledge variables never wipe, all degradation phases trigger at correct thresholds
- [ ] Test Sovereign of Stasis 3-minute timer against all possible input types
- [ ] Verify YES/NO false ending popup: YES resets to title, NO triggers protagonist battle
- [ ] Final audit: every Stage 2 NPC has dialogue for all death count thresholds, all Meta-Knowledge states, and all kill/peace resolution paths
- [ ] Commit: `feat: Stage 2 complete — The Architecture of Anguish`
- [ ] Tag: `stage-2-complete`
