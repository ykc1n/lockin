'use client'
import Link from "next/link";
import {  useState } from "react";
import type { ChangeEvent} from "react";
import { defaultPresets } from "~/lib/defaults";


export default function HomePage() {

const options = defaultPresets.map( hotkeySet =>{
 return <option key={hotkeySet.name} value={hotkeySet.name}>{hotkeySet.name}</option>
})

 const [selectedKeyset,setSelectedKeyset] = useState("")
 const [selectedTime, setSelectedTime] = useState("30")
  console.log("test")
  function handleSelect(event:ChangeEvent<HTMLSelectElement>){
    
    setSelectedKeyset(event.currentTarget.value)
    console.log(selectedKeyset);
  } 

 function handleTimeSelect(event:ChangeEvent<HTMLSelectElement>){
  setSelectedTime(event.currentTarget.value)
  }
  return (
    <main className="bg-gradient-to-t from-cyan-950 to-slate-900 min-h-screen">

      <div className="px-6 flex justify-center">



        <div className=" border-cyan-900 rounded-md bg-slate-950 bg-opacity-40 p-6 my-[10%] ">
          <div className=" text-teal-300 ">
            <button className="text-6xl text-center font-bold py-6  rounded-md  bg-cyan-950 p-3 hover:bg-teal-300 hover:text-teal-900 transition-all">
              <Link className=""
                href= {{
                  pathname:"/play",
                  query: {hotkeySet:selectedKeyset,
                          time:selectedTime
                  }                
                }}>
                   Train Hotkeys
                
                </Link>

            </button>

            {/* <p className="text-teal-500 text-center pt-16 pb-4">Hotkey Settings</p> */}

            <div className="flex justify-center my-1">
              
              <div>
                {/* <div className="flex justify-center">
                <button className=" bg-cyan-950 rounded hover:bg-teal-300 hover:text-slate-900 transition-all p-1">
                  <Link href="new_hotkey"><p>Edit hotkey sets</p></Link>
                </button>
                </div> */}
                <div className="py-3  ">
                  <p className="text-center">Choose Hotkey Set</p>
                  <select id="hotkeySetSelect" onChange={handleSelect} className="rounded-md bg-cyan-950 transition-all hover:bg-teal-300 hover:text-teal-900 p-2 text-center overflow-auto w-64">
                    {/* <option value="" selected disabled hidden>Choose Hotkey Set</option> */}
                    {options}
                  </select>
                </div>

                <div className="py-2 ">
                  <p className="text-center">Choose Time Limit</p>
                  <div className="flex justify-center text-center">
                  <select name="timeSelect" id="" onChange={handleTimeSelect} className="rounded-md bg-cyan-950 transition-all hover:bg-teal-300 hover:text-teal-900 p-2 text-center overflow-auto w-24">
                  <option value="15" className="text-center">15</option>
                  <option value="30">30</option>
                  </select>
                  </div>
                </div>


              </div>

            </div>


          </div>
        </div>


      </div>

    </main>
  );
}
