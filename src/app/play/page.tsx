"use client"
import { clear } from "console";
import Link from "next/link";
import { arch } from "os";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Hotkey, { HotkeySet } from '../../lib/classes'
import Navbar from "~/components/navbar";
import { defaultPresets } from "~/lib/defaults";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";




// for(let i =0;i<defaultPresets[0].hotkeys.length;i++){
//   if(defaultPresets[0]===undefined){
//     throw new Error("something is wrong with the hotkeys...");
//   }
// }

 
//const hotkeys:Hotkey[] = tuple(defaultPresets[0].hotkeys);

//let curTime = Date.now;
function getRandomHotkeyIndex(hotkeys:Hotkey[]):number {
  const randomIndex:number = Math.floor( Math.random() * (hotkeys.length)) 
  return randomIndex;
}

function searchHotkeysByName(hotkeys:HotkeySet[], nameToSearch:string){
 for (const hotkeyset of hotkeys){
  if(hotkeyset.name == nameToSearch) return hotkeyset
 }
 return defaultPresets[0]
}
let keysPressed: string[] = [];


export default function HomePage() {
  
  const searchParams = useSearchParams();
  const curHotkeySetName = searchParams.get('hotkeySet')??" "
  const curHotkeySet = searchHotkeysByName(defaultPresets,curHotkeySetName)
  const hotkeys = curHotkeySet.hotkeys
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

        <h1 className="text-3xl text-center font-bold  py-6"> {curHotkeySet.name}</h1>

      <div className="flex justify-center">
          <div className=" text-center text-3xl py-12">
            <div className="bg-slate-950 rounded-xl bg-opacity-40 mb-5 pt-8 min-w-64">
              <div>{curHotkey.name}</div>
              <div className="py-6">{curHotkey.displayKeys()}</div>
              <div className="py-12">{keysPressedString}</div>
            </div>
            <div className=" bg-slate-950 rounded-xl bg-opacity-40 p-2">
              <div className="py-12">Score: {score}</div>
              <div className="py-6"> Completion Time {time / 1000}s</div>
            </div>

          </div>


          
      </div>
        




      </div>

    </main>
  );
}