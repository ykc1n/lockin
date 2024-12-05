import Link from "next/link"
export default function Navbar(){
return(
<nav className="text-teal-300  bg-cyan-950 bg-opacity-30 text-xl px-6 py-1">
        
<Link href="/"> 
{/* <Image src="/lockin_logo.png" width={500} height={500} alt="" />   */}
<p className="font-bold text-5xl">Hotkey Trainer</p>
</Link>
</nav>
)

}