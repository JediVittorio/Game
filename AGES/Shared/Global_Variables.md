# Global Variable and Switch Registry — Project "Ages"

This file tracks all RPG Maker MZ variable and switch assignments to prevent collisions across the ten eras.

## Global Switches
| ID | Assignment | Era | Description |
|---|---|---|---|
| 1 | Era_1_True_Clear | Era 1 | Beaten without Save States (grants 1.5x multiplier for Finale). |
| 2 | Era_2_True_Clear | Era 2 | Beaten without Save States. |
| 3 | Era_3_True_Clear | Era 3 | Beaten without Save States. |
| 4 | Era_4_True_Clear | Era 4 | Beaten without Save States. |
| 5 | Era_5_True_Clear | Era 5 | Beaten without Save States. |
| 6 | Era_6_True_Clear | Era 6 | Beaten without Save States. |
| 7 | Era_7_True_Clear | Era 7 | Beaten without Save States. |
| 8 | Era_8_True_Clear | Era 8 | Beaten without Save States. |
| 9 | Era_9_True_Clear | Era 9 | Beaten without Save States. |
| 10 | Era_10_True_Clear | Era 10 | Beaten without Save States. |
| 41 | Focus Mode Active | Era 10 | (Glitched/Unused) Was for slow-time focus mode. |
| 60 | Mission Failure Trigger | Era 6 | Triggered when mission objectives are failed. |
| 80 | All-Out Attack Available | Era 8 | Enables the finishing move in Persona-style combat. |
| 98 | Phase 2 / NG+ Unlocked | Global | Triggered after the Era 11 cinematic. Readies the serious tone. |
| 98 | Phase 2 / NG+ Unlocked | Global | Triggered after the Era 11 cinematic. Readies the serious tone. |
| 99 | Cheats Active / Save State | Global | Unlocks the gray-market 1990s emulation menu. |
| 200 | Stage 2 Complete | Global | Triggered after 3 minutes of inaction at Floor 35. |

## Stage 2 Variables (The Architecture of Anguish)
| ID | Assignment | Reset on Death? | Purpose |
|---|---|---|---|
| 500–599 | Physical State | **YES** | Keys, block positions, room flags for the current loop. |
| 601–700 | Meta-Knowledge | **NEVER** | Passwords, trap locations, NPC dialogue advancement. |
| 701 | DEATH_COUNT | **NEVER** | The primary metric of psychological degradation. |
| 702 | Anchor Map ID | **NEVER** | Destination for the Return by Death transfer. |
| 703 | Anchor X | **NEVER** | Destination X. |
| 704 | Anchor Y | **NEVER** | Destination Y. |
| 705 | Stratum Level | **NEVER** | Progression tracker (1–7). |
| 706 | Mind / Will | **NEVER** | Resource (0-100). Drains in certain rooms. |
| 707 | Guilt | **NEVER** | Partially persists. Affects NPC reactions. |
| 708 | Inaction Timer | **YES** | Used for the Floor 33 walk and Floor 35 finale. |

