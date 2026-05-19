# Global Variable and Switch Registry — Project "Ages"

This file tracks all RPG Maker MZ variable and switch assignments to prevent collisions across the ten eras.

## Global Switches
| ID | Assignment | Era | Description |
|---|---|---|---|
| 41 | Focus Mode Active | Era 10 | True when player is in slow-time focus mode. |
| 60 | Mission Failure Trigger | Era 6 | Triggered when mission objectives are failed. |
| 80 | All-Out Attack Available | Era 8 | Enables the finishing move in Persona-style combat. |
| 99 | TUTORIAL_SAFETY | Global | Prevents permanent death during tutorials/story. |
| 101 | TIME_RIPPLE_CHEST_1 | Era 2 | Tracks the state of the cross-era chest. |
| 102 | SECRET_DOOR | Era 2 | Set ON when the Cathedral organ puzzle is solved. |

## Global Variables
| ID | Assignment | Era | Description |
|---|---|---|---|
| 10 | CURRENT_ERA | Global | 1-10 tracking the active game era. |
| 11 | BATTLE_TYPE | Global | ID representing the current battle engine. |
| 12 | GLITCH_FRAGMENTS | Global | Global currency. |
| 13 | ACTIVE_STRATUM | Global | Stage 2 progression. |
| 14 | CHAOS_LEVEL | Era 1 | Tracks the level of suburban destabilization. |
| 15 | Era 5 Superguard State | Era 5 | Boolean result of a timed defense QTE. |
| 16 | Era 5 Action Command | Era 5 | Boolean result of a timed attack QTE. |
| 17 | ORGAN_PLAYED | Era 2 | Counter/State for the Cathedral organ puzzle. |
| 21 | JP_CURRENT_ACTOR | Era 3 | Tracks job points for the active tactical unit. |
| 25 | Audience Meter | Era 5 | Tracks the "Star Power" crowd sentiment. |
| 30 | d20 Roll Result | Era 9 | Stores the result of the last polyhedral roll. |
| 31 | Advantage Active Flag | Era 9 | 1 = Roll twice, take highest. |
| 40 | Era 10 Parry State | Era 10 | Boolean result of a perfect parry. |
| 41 | Focus Meter Value | Era 10 | 0-100 gauge for Focus Mode. |
| 42 | Parry Window Frames | Era 10 | Configurable frame window for the parry QTE. |
| 50 | Total Casualties | Era 6 | Tracker for permadeath count in the campaign. |
| 51 | Mission Turn Counter | Era 6 | Tracks the tactical turn limit. |
