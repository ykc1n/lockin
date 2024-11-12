import { HotkeySet } from "./classes";
import Hotkey from "./classes";


const Solar:Hotkey = new Hotkey(["z","x"], "Solar", true, false )
const Wind:Hotkey = new Hotkey(["z","c"],  "Wind Generator", true, false)
const AdvancedSolar:Hotkey = new Hotkey(["z","v"],  "Advanced Solar", true, false)
const Converter:Hotkey = new Hotkey(["z","a"],  "Energy Converter", true, false)


const LLT:Hotkey = new Hotkey(["x","z"], "LLT", true, false);
const DoubleLLT:Hotkey = new Hotkey(["x","x"],"Double LLT", true, false);
const Claw:Hotkey = new Hotkey(["x","c"],"Dragons Maw", true, false);
const AA:Hotkey = new Hotkey(["x","a"], "Anti Air Turret", true, false);

const test1:Hotkey = new Hotkey(["z","z"],"Test 1", true, false);
const test2:Hotkey = new Hotkey(["c","x","c"],"Test 2", true, false);
const test3:Hotkey = new Hotkey(["z","w","v","x"],"Test 3", true, true);

const testHotkeys = [test1,
    test2,
    test3]

const test:HotkeySet = new HotkeySet("Testing",testHotkeys, true)
const barT1EcoGridKeys:HotkeySet = new HotkeySet("BAR T1 Economy Hotkeys Default", [Solar, Wind, AdvancedSolar, Converter], true);
const barT1DefenseGridKeys:HotkeySet = new HotkeySet("BAR T1 Defense Hotkeys Default",[LLT, DoubleLLT, Claw, AA], true);

export const defaultPresets:[HotkeySet, HotkeySet, HotkeySet] = [barT1EcoGridKeys, barT1DefenseGridKeys, test];

