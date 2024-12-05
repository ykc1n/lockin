
import dynamic from "next/dynamic"

const NonSSRResults = dynamic(()=> import('./results'), {ssr:false})

export default function HomePage(){
    return (
    <main className="min-h-screen">
        <NonSSRResults/>
    </main>
    )
}