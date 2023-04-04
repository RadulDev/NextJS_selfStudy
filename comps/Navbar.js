import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a >About</a></Link>
            <Link href="/contact"><a >Contact</a></Link>
            <Link href="/testimonial"><a >Testimonial</a></Link>
            <Link href="/portfolio"><a >Portfolio</a></Link>
        </nav>
    );
    
}

export default Navbar;