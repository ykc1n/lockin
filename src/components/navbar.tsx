import Link from "next/link"

export default function Navbar(){
return(
<nav className="text-teal-300  bg-slate-900 text-xl px-6">
<Link
        href="/"
        > <img src="/lockin_logo.png" className="w-72" ></img> </Link>
</nav>
)

}