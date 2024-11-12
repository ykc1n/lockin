
'use client'
import Hotkey, { HotkeySet } from '../../lib/classes'
import { defaultPresets } from "~/lib/defaults";
import PlusIcon from '../../../public/plus.svg'
import { CSSProperties } from 'react';

function HotkeySetButton({text}: {text:string}){
    return (
        <button className='bg-cyan-950 rounded-md px-2 py-1 hover:bg-teal-200 hover:text-teal-800 transition-all'>
                       {text}
                    </button>
    )
}



function HotkeySetCard({hotkeyset}: {hotkeyset:HotkeySet}){
    const fixedScrollbar:CSSProperties = {
        scrollbarWidth: "thin",
        scrollbarColor: "#083344 #00000000"
    } 
    return(
        <div className=' bg-slate-950 bg-opacity-40 rounded-md w-64 h-32 text-cyan-300 p-2 relative m-5'>
            <p className='text-xl overflow-auto text-nowrap' style={fixedScrollbar}>  {hotkeyset.name}</p>
            <p className='text-m text-cyan-300'> {hotkeyset.hotkeys.length} Hotkeys </p>
            <div className='flex justify-center gap-2 absolute bottom-0 p-in text-teal-300' style={
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

    const hotkeysetCards = defaultPresets.map(
        hotkeySet =>
            <HotkeySetCard hotkeyset={hotkeySet} key={hotkeySet.name}/>
    )

    return(
        <main className="min-h-screen">
            <div className="m-5  text-l ">
                <button className='bg-cyan-950  rounded-md px-3 py-2 hover:bg-teal-200 hover:text-teal-800 text-cyan-300 transition-all float-end flex'>
                        Add Hotkey Set
            </button>
            
            </div>
        
            <div className="flex">
                {hotkeysetCards}
            </div>
                
        </main>
    )
}