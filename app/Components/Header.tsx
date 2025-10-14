"use client"

import Image from "next/image"
import Nav from "./Nav"
import { useState } from "react"

const Header = () => {

    const [nav, setNav] = useState(false)
    return (
        <header className="w-full">
            <nav className="bg-black text-white flex justify-between items-center px-4 z-50 w-full">
                <Image src='/tukds.png' alt='The UK Drum Show 2025' width={150} height={10} />
                <button 
                    type="button" 
                    className={`z-50 border inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${nav ? 'text-black' : 'text-gray-500'} rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    onClick={() => setNav(!nav)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </nav>
            <div 
                className={`${nav ? 'fixed' : 'hidden'} absolute top-0 left-0 w-screen min-h-screen flex items-center justify-center bg-pink-700 z-10`}
                onClick={() => setNav(!nav)}
            >
                <Nav />
            </div>
        </header>
    )
}

export default Header
