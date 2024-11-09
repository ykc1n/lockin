"use client"
import { clear } from "console";
import Link from "next/link";
import { arch } from "os";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Hotkey, { HotkeySet } from '../../lib/classes'
import Navbar from "~/components/navbar";
import { defaultPresets } from "~/lib/defaults";
import { check } from "prettier";




// for(let i =0;i<defaultPresets[0].hotkeys.length;i++){
//   if(defaultPresets[0]===undefined){
//     throw new Error("something is wrong with the hotkeys...");
//   }
// }

const hotkeys = defaultPresets[0].hotkeys 
//const hotkeys:Hotkey[] = tuple(defaultPresets[0].hotkeys);
let keysPressed: string[] = [];
const test = hotkeys[1]
const keysToMatch: string[] = [];
//let curTime = Date.now;
function getRandomHotkeyIndex(hotkeys:Hotkey[]):number {
  const randomIndex:number = Math.floor( Math.random() * (hotkeys.length)) 
  return randomIndex;
}


export default function HomePage() {

  const [curHotkey, setCurHotkey] = useState<Hotkey>(getRandomHotkey())
  const [keysPressedString, setKeysPressed] = useState<string>("")
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const keyToMatchIndex = useRef<number>(0)
  const startTime = useRef<number>(Date.now());


  //TODO: Fix unsafe code
  function getRandomHotkey():Hotkey {
    //let test =  hotkeys[1]
    // let newHotkeys = hotkeys.filter((hotkey)=>{
    //   return hotkey.name != curHotkey.name;
    // })
    // console.log(newHotkeys);
    //let randomHotkey = newHotkeys[getRandomHotkeyIndex(newHotkeys)];
    const randomHotkey = hotkeys[getRandomHotkeyIndex(hotkeys)];
    return randomHotkey!
    // console.log("new hotkey: "+ randomHotkey?.name);
    // if(randomHotkey instanceof Hotkey){
    //   return randomHotkey!;
    // }
  }




  function setRandomHotkey(){
    const newHotkeys = hotkeys.filter((hotkey)=>{
      return hotkey.name != curHotkey.name;
    })
    console.log(newHotkeys);

    const randomHotkey = newHotkeys[getRandomHotkeyIndex(newHotkeys)];
    console.log("new hotkey: "+ randomHotkey?.name);
    if(randomHotkey instanceof Hotkey){
      setCurHotkey(randomHotkey);
      console.log(randomHotkey.name);
    }
  
  }

  function displayKeysPressed(){
    let returnString = ""
  
    for(let i = 0; i<keysPressed.length;i++){
      returnString += keysPressed[i] + (i==keysPressed.length-1 ? "" : " -> ");
    }
  
    setKeysPressed(returnString);
  }

  function checkHotkeySequential(keyPressed:string){
      const curHotkeys:string[] = curHotkey.keys;
      console.log(`checking at curhotkeys [${keyToMatchIndex.current}]`)
      if(keyPressed != curHotkeys[keyToMatchIndex.current]) return;

      keysPressed.push(keyPressed);
      keyToMatchIndex.current++

      checkKeysPressed();
    




  }

  function correctHotkey(){
    keyToMatchIndex.current = 0 
    keysPressed = [];
    setScore(score => score + 10);
    setRandomHotkey()
    setTime(Date.now() - startTime.current)
    startTime.current = Date.now();
  }


  function checkKeysPressed(){
    const curHotkeys:string[] = curHotkey.keys;

    if(keysPressed.length == curHotkeys.length) correctHotkey()

  }

   /*
    *how it works now?
    keydown: adds to keyspressed aray
    keyup: removes from keyspressed array

    how it should work:
    keyspressd array
    keystocheck array

    combinatory:
    just work on  array

    non-comibitory:
    work on keystocheck array 

    that array gets stuff pushed to it only when theres a match 
    */

    /*
    ! Notes about current system 
      * Combinatory hotkeys will still work even if there is an incorrect hotkey in the middle 
        * this seems to be true in other places where hotkeys exists however 

    */

    /*a few ways to match index: 
    
    */
  function handleKeyDown(event: KeyboardEvent){
    
    const keysToMatch:string = event.key; 
    const curHotkeys:string[] = curHotkey.keys;

   
    // *sequential hotkey
    if (curHotkey.sequential) checkHotkeySequential(event.key);

    event.preventDefault()
    console.log(keysPressed);
    console.log(curHotkey.name);
    currentState()
    displayKeysPressed()
  }

  function currentState(){
    console.log("current state: "+curHotkey.name);
  }
  
  function handleKeyUp(event: KeyboardEvent){
    console.log(event.key)

    if(!curHotkey.combinatory || !keysPressed.includes(event.key)) return;

    keysPressed = [];
    keyToMatchIndex.current = 0
    console.log(keysPressed);
    displayKeysPressed()
  
  
  }





  useEffect(() =>{
    window.addEventListener('keydown',handleKeyDown)
    window.addEventListener('keyup',handleKeyUp)
    return () =>{
      window.removeEventListener('keydown',handleKeyDown);
      window.removeEventListener('keyup',handleKeyUp);
    }
  })

  return (
    <main className="text-teal-300 min-h-screen">

      
      <div>

        <h1 className="text-6xl text-center font-bold  py-6"> Play</h1>

      <div className="flex justify-center">
        <div className=" text-center text-3xl py-12">
                <div>{curHotkey.name}</div>
                <div className="py-6">{curHotkey.displayKeys()}</div>
                <div className="py-12">{keysPressedString}</div>
                <div className="py-12">{score}</div>
                <div className="py-6">{time/1000}s</div>
          </div>


          
      </div>
        




      </div>

    </main>
  );
}