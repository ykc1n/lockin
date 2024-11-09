
import Link from "next/link";
import Navbar from "~/components/navbar";

export default function HomePage() {

  console.log("test")
  return (
    <main className="bg-gradient-to-t from-cyan-950 to-slate-900 min-h-screen">
      
      <div>

      

<div className="border border-white">
        <div className=" text-teal-300 ">  
        <button className="text-6xl text-center font-bold py-6 border border-white">
          <Link className=""
          href="/play"> Train Hotkeys</Link>
          
        </button>

        <p className="text-teal-500">Hotkey Settings</p>

        <Link href="new_hotkey"><p>Add new hotkeys</p></Link> 
      </div>
</div>


      </div>

    </main>
  );
}
