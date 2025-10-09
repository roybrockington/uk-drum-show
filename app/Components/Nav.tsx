import Image from "next/image";
import Link from "next/link";

const links = [
    {href: '/audix', label: 'Audix'},
    {href: '/dixon', label: 'Dixon'},
    {href: '/rogers', label: 'Rogers'},
    {href: '/masterwork', label: 'Masterwork'},
    {href: '/zoom', label: 'Zoom'},
    {href: '/special', label: '(Special)'},
];

const Nav = (props : {}) => {
    return (
        <nav className="text-lg font-bold py-2 px-4">
            <ul className="list-none flex flex-col justify-around gap-2 overflow-scroll">
                {links.map(link =>
                    <li key={link.href} className="border-b-black">
                        <Link href={link.href}>
                            <Image src={`/${link.label}.jpg`} alt={link.label} width={200} height={20} />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav
