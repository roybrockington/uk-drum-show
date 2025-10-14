import Image from "next/image";
import Link from "next/link";

const links = [
    {href: '/audix', label: 'Audix'},
    {href: '/dixon', label: 'Dixon'},
    {href: '/rogers', label: 'Rogers'},
    {href: '/masterwork', label: 'Masterwork'},
    {href: '/zoom', label: 'Zoom'},
];

const Nav = () => {
    return (
        <nav className="text-lg font-bold py-2 px-4">
            <ul className="list-none flex flex-col justify-around gap-2">
                {links.map(link =>
                    <li 
                        key={link.href} 
                        className="w-full bg-black px-8 py-4 border-black rounded"
                    >
                        <Link href={link.href}>
                            <Image src={`/${link.label}.jpg`} alt={link.label} width={200} height={20} className="invert-100" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav
