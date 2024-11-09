
'use client'
import Hotkey, { HotkeySet } from '../../lib/classes'
import { defaultPresets } from "~/lib/defaults";
import PlusIcon from '../../../public/plus.svg'

function HotkeySetButton({text}: {text:string}){
    return (
        <button className='border rounded-md px-2 py-1 hover:bg-teal-200 hover:text-teal-800'>
                       {text}
                    </button>
    )
}



function HotkeySetCard(){
    return(
        <div className='border border-teal-400 rounded-md w-64 h-32 text-cyan-300 p-2 relative m-5'>
            <p className='text-2xl'> Hotkey Set 1</p>
            <p className='text-m text-cyan-300'> N hotkeys  </p>
            <div className='flex justify-center gap-1 absolute bottom-0 p-in text-teal-300' style={
                {
                    padding: "inherit"
                }
            }>

                <HotkeySetButton text={'Edit'} />
                <HotkeySetButton text={'Show more'} />
                <HotkeySetButton text={'Delete'} />


            </div>
        </div>
    )
}

export default function HomePage(){
    return(
        <main className="min-h-screen">
            <div className="m-5  text-l ">
                <button className='border rounded-md px-3 py-2 hover:bg-teal-200 hover:text-teal-800 text-cyan-300 float-end flex'>
                        Add Hotkey Set
                        <img src="/plus.svg" color='#00000' alt="" />
            </button>
            
            </div>
        
            <div className="flex">
                <HotkeySetCard/>
                <HotkeySetCard/>
                <HotkeySetCard/>
            </div>
                
        </main>
    )
}