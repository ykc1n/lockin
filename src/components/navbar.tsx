import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
return(
<nav className="text-teal-300  bg-cyan-950 bg-opacity-30 text-xl px-6 py-1">
        
<Link href="/"> <Image src="/lockin_logo.png" width={500} height={500} alt="" />  </Link>
</nav>
)

}