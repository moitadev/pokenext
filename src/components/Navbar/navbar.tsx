import '@/style/style.scss'
import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className="container">
            <Link href="/"><h1 className="logo">PokéNext</h1></Link>
        </nav>
    )
}