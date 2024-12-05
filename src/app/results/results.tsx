"use client";
import Link from "next/link";
import { useState } from "react"

export default function Results(){

    //let score:string|null = ""
  
        //setScore(localStorage.getItem("score")??"0");
        const correctTmp = parseInt(localStorage.getItem("keysCorrect")??"0")
        const missedTmp = parseInt(localStorage.getItem("keysMissed")??"0")
        const pressedTmp = correctTmp+missedTmp
        const accuracyTmp = Math.round((correctTmp/pressedTmp) * 100 * 100) / 100
        // setAccuracy(accuracyTmp.toString())
        // setMissed(missedTmp.toString())
        // setPressed(pressedTmp.toString())
        // setCorrect(correctTmp.toString())

        const [score] = useState(localStorage.getItem("score")??"0")
        const [accuracy] = useState(accuracyTmp)
        const [missed] = useState(missedTmp)
        const [pressed] = useState(pressedTmp)
        const [correct] = useState(correctTmp)
  

    return(
        <main className="min-h-screen text-teal-300">
            <div className="px-6 flex justify-center">

                <div className="border-cyan-900 rounded-md bg-slate-950 bg-opacity-40 p-6 my-[10%]">
                    <p className="text-5xl font-bold">Results</p>
                    <p> Your score: {score} </p>
                    <p> Accuracy: {accuracy}% </p>
                    <p> Keys Correct: {correct}</p>
                    <p> Hotkeys missed: {missed}</p>
                    <p> Total Hotkeys pressed: {pressed} </p>

                    <div className="flex justify-center">   
                        <div className=" rounded-md font-bold bg-cyan-950 p-3 mt-4 hover:text-teal-900 hover:bg-teal-300 transition-all">
                        <Link className=""
                href= {{
                  pathname:"/play",               
                }}>
                   Play Again
                
                </Link>
                        </div>
                    </div>
                 

                </div>

               

            </div>
        </main>
    )
}