import { HotkeySet } from "./classes";
import Hotkey from "./classes";


let Solar:Hotkey = new Hotkey(["z","x"], "Solar", true, false )
let Wind:Hotkey = new Hotkey(["z","c"],  "Wind Generator", true, false)
let AdvancedSolar:Hotkey = new Hotkey(["z","v"],  "Advanced Solar", true, false)
let Converter:Hotkey = new Hotkey(["z","a"],  "Energy Converter", true, false)


let LLT:Hotkey = new Hotkey(["x","z"], "LLT", true, false);
let DoubleLLT:Hotkey = new Hotkey(["x","x"],"Double LLT", true, false);
let Claw:Hotkey = new Hotkey(["x","c"],"Dragons Maw", true, false);
let AA:Hotkey = new Hotkey(["x","a"], "Anti Air Turret", true, false);

let test1:Hotkey = new Hotkey(["z","z"],"Test 1", true, false);
let test2:Hotkey = new Hotkey(["c","x","c"],"Test 2", true, false);
let test3:Hotkey = new Hotkey(["z","w","v","x"],"Test 3", true, true);

let test:HotkeySet = new HotkeySet("Testing",[
    test1
    ,test2
    ,
    test3
    
])

let barT1EcoGridKeys:HotkeySet = new HotkeySet("BAR T1 Economy Hotkeys", [Solar, Wind, AdvancedSolar, Converter]);
let barT1DefenseGridKeys:HotkeySet = new HotkeySet("BAR T1 Defense Hotkeys",[LLT, DoubleLLT, Claw, AA]);

export const defaultPresets:[HotkeySet, HotkeySet, HotkeySet] = [barT1EcoGridKeys, barT1DefenseGridKeys, test];

