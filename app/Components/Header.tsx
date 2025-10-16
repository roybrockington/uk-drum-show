import Image from "next/image"

const Header = () => {

    return (
        <header className="w-full flex justify-center bg-black mb-4">
                <Image src='/tukds.png' alt='The UK Drum Show 2025' width={150} height={10} />
        </header>
    )
}

export default Header
