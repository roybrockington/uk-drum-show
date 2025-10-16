import Image from "next/image"

type NavProps = {
  tab: boolean;
  setTab: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({tab, setTab}: NavProps) => {

    return (
        <nav className="text-lg font-bold py-2 px-4">
            <ul className="list-none flex justify-around gap-3">
        <li 
            className={`${tab ? 'bg-black' : ''} border-black border rounded-xl px-3 py-1`}
            onClick={() => setTab(!tab)}
        >
            <Image src='/Audix.jpg' alt='Audix' width={110} height={20} className={tab ? "invert-100" : ""} />
        </li>
        <li 
            className={`${!tab ? 'bg-black' : ''} border-black border rounded-xl px-3 py-1`}
            onClick={() => setTab(!tab)}
        >
            <Image src='/Zoom.jpg' alt='Audix' width={110} height={20} className={!tab ? "invert-100" : ""} />
        </li>
            </ul>
        </nav>
    )
}

export default Nav
