# Global Variable and Switch Registry — Project "Ages"

This file tracks all RPG Maker MZ variable and switch assignments to prevent collisions across the ten eras.

## Global Switches
| ID | Assignment | Era | Description |
|---|---|---|---|
| 41 | Focus Mode Active | Era 10 | True when player is in slow-time focus mode. |
| 60 | Mission Failure Trigger | Era 6 | Triggered when mission objectives are failed. |
| 80 | All-Out Attack Available | Era 8 | Enables the finishing move in Persona-style combat. |
| 99 | Tutorial Safety Bypass | Global | Prevents permanent death during tutorials/story. |

## Global Variables
| ID | Assignment | Era | Description |
|---|---|---|---|
| 10 | Current Era Number | Global | 1-10 tracking the active game era. |
| 11 | Active Battle System Type | Global | String/ID representing the current battle engine. |
| 12 | Player Charisma Modifier | Era 9+ | Used for d20 social skill checks. |
| 13 | Proficiency Bonus | Era 9 | D&D style proficiency bonus based on level. |
| 15 | Era 5 Superguard State | Era 5 | Boolean result of a timed defense QTE. |
| 16 | Era 5 Action Command | Era 5 | Boolean result of a timed attack QTE. |
| 25 | Audience Meter | Era 5 | Tracks the "Star Power" crowd sentiment. |
| 30 | d20 Roll Result | Era 9 | Stores the result of the last polyhedral roll. |
| 31 | Advantage Active Flag | Era 9 | 1 = Roll twice, take highest. |
| 40 | Era 10 Parry State | Era 10 | Boolean result of a perfect parry. |
| 41 | Focus Meter Value | Era 10 | 0-100 gauge for Focus Mode. |
| 42 | Parry Window Frames | Era 10 | Configurable frame window for the parry QTE. |
| 50 | Total Casualties | Era 6 | Tracker for permadeath count in the campaign. |
| 51 | Mission Turn Counter | Era 6 | Tracks the tactical turn limit. |
